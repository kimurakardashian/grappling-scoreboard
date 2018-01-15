import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mode:true,
    rules: {
      ibjjf:true,
      adcc:false,
      ebi:false,
      currentRules: "ibjjf"
    },
    player1: {
      points: 0,
      advantages: 0,
      penalties: 0
    },
    player2: {
      points: 0,
      advantages: 0,
      penalties: 0
    },
    drillTimer: {
      chronometer: null,
      duration: 60,
      preDuration: 60,
      displayTime: "01:00",
      warnTime: 30,
      rounds: 3,
      rest:60,
      running:false,
      buttons: {
        start: "Start",
        stop: "Stop",
        reset: "Reset"
      }
    },
    timer: {
      chronometer: null,
      duration: 600,
      preDuration: 600,
      displayTime: "10:00",
      running: false,
      adccPointsTime: 300,
      adccPoints:false,
      buttons: {
        start: "Start",
        stop: "Stop",
        reset: "Reset"
      }
    }
  },
  getters: {
    mode: (state) => {
      return state.mode
    },
    rules: (state) => {
      return state.rules
    },
    modeComponent: (state) => {
      if(state.mode) {
        return "score"
      }
      else {
        return "timer"
      }
    },
    scorePlayer1: (state) => {
      return state.player1
    },
    scorePlayer2: (state) => {
      return state.player2
    },
    timer: (state) => {
      return state.timer
    },
    drillTimer: (state) => {
      return state.drillTimer
    }
  },
  mutations: {
    changeMode: (state) => {
      state.mode = !state.mode
    },
    changeRules: (state, payload) => {
      state.rules[payload.on] = true;
      state.rules[payload.off] = false;
      state.rules[payload.off2] = false;
      state.rules.currentRules = payload.on;
    },
    scoreMutation: (state, payload) => {
      if(state.timer.running) {
        if(state[payload.player][payload.type] + payload.value < 0) {
          state[payload.player][payload.type] = 0;
        }
        else {
          state[payload.player][payload.type] += payload.value;
        }
      }
    },
    adccTimeChange: (state, payload) => {
      console.log(state.timer.adccPointsTime + payload)
      if(state.timer.adccPointsTime + payload > 0 && state.timer.adccPointsTime + payload < state.timer.preDuration) {
          state.timer.adccPointsTime += payload;
      }
      console.log(state.timer.adccPointsTime)
    },
    modTimer: (state, payload) => {
      if(!state.timer.running) {
        if(payload == "add") {
          state.timer.preDuration += 60;
					state.timer.duration = state.timer.preDuration;
        }
        else {
          if(state.timer.preDuration-60 > 0) {
            state.timer.preDuration -= 60;
  					state.timer.duration = state.timer.preDuration;
            if(state.timer.preDuration <= state.timer.adccPointsTime && state.timer.preDuration) {
              state.timer.adccPointsTime = state.timer.preDuration - 60;
            }
            else if(state.timer.preDuration == 1) {
              state.timer.adccPointsTime == 0;
            }
          }
        }
        var minutes = state.timer.preDuration/60;
        if(minutes <= 9) {
          state.timer.displayTime = String("0" + minutes + ":00")
        } else {
          state.timer.displayTime = String(minutes + ":00")
        }
      }
    },
    stopTimer: (state) => {
					state.timer.running = false
					clearInterval(state.timer.chronometer);
					state.timer.duration = state.timer.preDuration;
        var minutes = state.timer.preDuration/60;
        if(minutes <= 9) {
          state.timer.displayTime = String("0" + minutes + ":00")
        } else {
          state.timer.displayTime = String(minutes + ":00")
        }
        state.timer.adccPoints = false;
        state.timer.buttons.start = "Start";
    },
    resetScore: (state) => {
      state.player1.points = 0
      state.player1.advantages = 0
      state.player1.penalties = 0
      state.player2.points = 0
      state.player2.advantages = 0
      state.player2.penalties = 0
      state.timer.adccPoints = false;
    }
  },
  actions: {
    callMutationChangeMode: (context) => {
      context.commit('changeMode');
      context.commit('stopTimer');
      context.commit('resetScore');
    },
    startTimer: (state) => {
      if(!state.getters.timer.running) {
        state.getters.timer.running = true;
        state.getters.timer.buttons.start = "Pause";
        var duration = state.getters.timer.duration
        var timer = duration, minutes, seconds;
        state.getters.timer.chronometer = setInterval(function () {
  				        minutes = parseInt(timer / 60, 10)
  				        seconds = parseInt(timer % 60, 10);

  				        minutes = minutes < 10 ? "0" + minutes : minutes;
  				        seconds = seconds < 10 ? "0" + seconds : seconds;

  				        state.getters.timer.displayTime = String(minutes + ":" + seconds);
  				        state.getters.timer.duration = timer;
  				        if (--timer < 0) {
                    var currentTime = state.getters.timer.preDuration;
                    timer = state.getters.timer.preDuration;
                    if(currentTime/60 <= 9) {
                      state.getters.timer.displayTime = String('0' + state.getters.timer.preDuration/60 + ':00');
                    }
                    else {
                      state.getters.timer.displayTime = String(state.getters.timer.preDuration/60 + ':00');
                    }
                    state.getters.timer.buttons.start = "Start";
                    state.getters.timer.running = false;
                    var audio = new Audio("../gameover.mp3");
                    audio.play();
                    state.getters.timer.duration = state.getters.timer.preDuration
                    state.getters.timer.adccPoints = false;
                    clearInterval(state.getters.timer.chronometer);
  				        }
                  if(state.getters.rules.currentRules == "adcc") {
                    if(state.getters.timer.adccPointsTime == state.getters.timer.duration) {
                      state.getters.timer.adccPoints = true;
                    }
                  }

  				    }, 1000);
      }
      else {
        state.getters.timer.buttons.start = "Start";
        state.getters.timer.running = false;
		    clearInterval(state.getters.timer.chronometer);
      }
    },
    startDrillTimer: (state) => {
      if(!state.getters.drillTimer.running) {
        state.getters.drillTimer.running = true;
        state.getters.drillTimer.buttons.start = "Pause";
        var duration = state.getters.drillTimer.duration
        var timer = duration, minutes, seconds;
        state.getters.drillTimer.chronometer = setInterval(function () {
  				        minutes = parseInt(timer / 60, 10)
  				        seconds = parseInt(timer % 60, 10);

  				        minutes = minutes < 10 ? "0" + minutes : minutes;
  				        seconds = seconds < 10 ? "0" + seconds : seconds;

  				        state.getters.drillTimer.displayTime = String(minutes + ":" + seconds);
  				        state.getters.drillTimer.duration = timer;
  				        if (--timer < 0) {
                    var currentTime = state.getters.drillTimer.preDuration;
                    timer = state.getters.drillTimer.preDuration;
                    if(currentTime/60 <= 9) {
                      state.getters.drillTimer.displayTime = String('0' + state.getters.drillTimer.preDuration/60 + ':00');
                    }
                    else {
                      state.getters.drillTimer.displayTime = String(state.getters.drillTimer.preDuration/60 + ':00');
                    }
                    state.getters.drillTimer.buttons.start = "Start";
                    state.getters.drillTimer.running = false;
                    var audio = new Audio("../gameover.mp3");
                    audio.play();
                    state.getters.drillTimer.duration = state.getters.drillTimer.preDuration
                    clearInterval(state.getters.drillTimer.chronometer);
  				        }
  				    }, 1000);
      }
      else {
        state.getters.drillTimer.buttons.start = "Start";
        state.getters.drillTimer.running = false;
		    clearInterval(state.getters.drillTimer.chronometer);
      }
    }
  }
});

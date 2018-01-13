import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
    timer: {
      chronometer: null,
      duration: 600,
      preDuration: 600,
      displayTime: "10:00",
      running: false,
      buttons: {
        start: "Start",
        stop: "Stop",
        reset: "Reset"
      }
    }
  },
  getters: {
    scorePlayer1: (state) => {
      return state.player1
    },
    scorePlayer2: (state) => {
      return state.player2
    },
    timer: (state) => {
      return state.timer
    }
  },
  mutations: {
    scoreMutation: (state, payload) => {
      if(state[payload.player][payload.type] + payload.value < 0) {
        state[payload.player][payload.type] = 0;
      }
      else {
        state[payload.player][payload.type] += payload.value;
      }
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
      if(state.timer.running) {
					state.timer.running = false
					clearInterval(state.timer.chronometer);
					state.timer.duration = state.timer.preDuration;
				}
				else {
					state.timer.running = false
					clearInterval(state.timer.chronometer);
					state.timer.duration = state.timer.preDuration;
				}
        var minutes = state.timer.preDuration/60;
        if(minutes <= 9) {
          state.timer.displayTime = String("0" + minutes + ":00")
        } else {
          state.timer.displayTime = String(minutes + ":00")
        }
        state.timer.buttons.start = "Start";
    },
    resetScore: (state) => {
      state.player1.points = 0
      state.player1.advantages = 0
      state.player1.penalties = 0
      state.player2.points = 0
      state.player2.advantages = 0
      state.player2.penalties = 0
    }
  },
  actions: {
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
                    var audio = new Audio("../gameover.mp3");
                    audio.play();
                    clearInterval(state.getters.timer.chronometer);
  				        }
  				    }, 1000);
      }
      else {
        state.getters.timer.buttons.start = "Start";
        state.getters.timer.running = false;
		    clearInterval(state.getters.timer.chronometer);
      }
    }
  }
});

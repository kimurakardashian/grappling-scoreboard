<template>
  <div class="controlWrapper">
    <div class="playerButtons" v-bind:class="{'non-active': !timer.adccPoints}">
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:+4})" class="button">+</div>
        <div class="buttonText">4</div>
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:-4})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:+3})" class="button">+</div>
        <div class="buttonText">3</div>
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:-3})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:+2})" class="button">+</div>
        <div class="buttonText">2</div>
        <div v-on:click="scoreMutation({type:'points', player:'player1', value:-2})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'advantages', player:'player1', value:+1})" class="button">+</div>
        <div class="buttonText">adcc</div>
        <div v-on:click="scoreMutation({type:'advantages', player:'player1', value:-1})" class="button">+</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'penalties', player:'player1', value:+1})" class="button">+</div>
        <div class="buttonText">pen</div>
        <div v-on:click="scoreMutation({type:'penalties', player:'player1', value:-1})" class="button">-</div>
      </div>
    </div>
    <div class="chrono">
      <div class="timerContainer">
        <div v-on:click="modTimer('sub')" class="chronoButton">-</div>
        <div class="displayTime">{{timer.displayTime}}</div>
        <div v-on:click="modTimer('add')" class="chronoButton">+</div>
      </div>
      <div class="chronometerButtonsContainer">
        <div v-on:click="resetScore">{{timer.buttons.reset}}</div>
        <div v-on:click="startTimer">{{timer.buttons.start}}</div>
        <div v-on:click="stopTimer">{{timer.buttons.stop}}</div>
      </div>
    </div>
    <div class="playerButtons" v-bind:class="{'non-active': !timer.adccPoints}">
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:+4})" class="button">+</div>
        <div v-on:click="modTimer('add')" class="buttonText">4</div>
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:-4})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:+3})" class="button">+</div>
        <div v-on:click="modTimer('sub')" class="buttonText">3</div>
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:-3})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:+2})" class="button">+</div>
        <div class="buttonText">2</div>
        <div v-on:click="scoreMutation({type:'points', player:'player2', value:-2})" class="button">-</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'advantages', player:'player2', value:+1})" class="button">+</div>
        <div class="buttonText">adv</div>
        <div v-on:click="scoreMutation({type:'advantages', player:'player2', value:-1})" class="button">+</div>
      </div>
      <div class="buttonWrapper">
        <div v-on:click="scoreMutation({type:'penalties', player:'player2', value:+1})" class="button">+</div>
        <div class="buttonText">pen</div>
        <div v-on:click="scoreMutation({type:'penalties', player:'player2', value:-1})" class="button">-</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['points1Mutation', 'adv1Mutation', 'pen1Mutation', 'points2Mutation', 'adv2Mutation', 'pen2Mutation', 'startTimer', 'modTimer', 'stopTimer', 'resetScore', 'scoreMutation']),
    ...mapActions(['startTimer'])
  },
  computed: {
    ...mapGetters(['timer'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text');
.controlWrapper {
  font-family: "Crimson Text";
  width:100%;
  height:30vh;
  background-color:green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.playerButtons {
  width:35%;
  height: 100%;
  background-color:black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chrono {
  width:30%;
  height:100%;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "digital-clock";
}
.buttonWrapper {
  width:20%;
  height:100%;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.button, .buttonText {
  width:100%;
  height:33.3333333%;
  background-color:rgba(33,33,33 ,1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Crimson Text";
  font-weight: 900;
  font-size:2em;
  border:1pt solid #333;
  color:rgba(245,245,245 ,1);
}
.button:hover {
  cursor:pointer;
  color:#333;
}
.button:nth-child(odd) {

}
.timerContainer {
  width:100%;
  height: 80%;
  background-color:orange;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chronoButton {
  width:5%;
  height:100%;
  background-color:black;
  color:rgba(238,238,238 ,1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:2em;
  font-weight: 900;
  font-family: "Crimson Text";
}
.chronoButton:hover {
  cursor:pointer;
  color:#333;
}
.displayTime {
  width:90%;
  height:100%;
  background-color:black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:8em;
  font-weight: 900;
  font-family: "Crimson Text";
  color:rgba(245,245,245 ,1);
}
.chronometerButtonsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:20%;
}
.chronometerButtonsContainer div {
  width:33.333333%;
  height:100%;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:1.5em;
  font-family: "Crimson Text";
  font-weight:900;
  text-transform: uppercase;
}
.chronometerButtonsContainer div:hover {
  cursor: pointer;
}
.non-active {
  pointer-events: none;
  cursor: default;
}
</style>

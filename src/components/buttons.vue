<template>
  <div class="controlWrapper">
    <div class="playerButtons">
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
        <div class="buttonText">adv</div>
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
    <div class="playerButtons">
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

<template>
  <div>
    <div class="scoreContainer">
      <div class="playerScore">
        <div class="points">
          <span>{{scorePlayer1.points}}</span>
        </div>
        <div class="extraScores">
          <div class="advantages">
            <span>{{scorePlayer1.advantages}}</span>
          </div>
          <div class="penalties">
            <span>{{scorePlayer1.penalties}}</span>
          </div>
        </div>
      </div>
      <div class="playerScore">
        <div class="points">
          <span>{{scorePlayer2.points}}</span>
        </div>
        <div class="extraScores">
          <div class="advantages">
            <span>{{scorePlayer2.advantages}}</span>
          </div>
          <div class="penalties">
            <span>{{scorePlayer2.penalties}}</span>
          </div>
        </div>
      </div>
    </div>
    <component v-bind:is="rules.currentRules"></component>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import buttons from './buttons.vue'
import adcc from './buttonsADCC.vue'

export default {
  components: {
    'ibjjf':buttons,
    'adcc': adcc
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['scorePlayer1', 'scorePlayer2', 'rules'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text');
.scoreContainer {
  font-family: "Crimson Text";
  font-weight: 900;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:70vh;
  background-color:red;
}
.playerScore {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;;
  width:50%;
  height:100%;
  background-color:rgba(21,101,192 ,1);
}
.playerScore:nth-child(2) {
  background-color:rgba(239,154,154 ,1);
}
.extraScores {
  width:100%;
  height:22%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.penalties, .advantages {
  width:20%;
  height:100%;
  font-size:6em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.points {
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:23.5em;
}
.penalties {
  color:rgba(255,23,68 ,1);
}
.advantages {
  color:rgba(0,200,83 ,1);
}
</style>

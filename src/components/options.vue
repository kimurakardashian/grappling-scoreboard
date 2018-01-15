<template>
  <div>
    <a href="#" @click="lightbox=!lightbox" class="opt">Opt</a>
    <div v-bind:class="{none: !lightbox}" class="lightbox">
      <div class="optionMenu">
        <h2>Options</h2>
        <label for="">Mode</label>
        <div class="suboptions">
          <a v-on:click="callMutationChangeMode" href="#" v-bind:class="{currentMode: mode}">Scoreboard</a>
          <a v-on:click="callMutationChangeMode" href="#" v-bind:class="{currentMode: !mode}">Timer</a>
        </div>
        <div class="scoreboardOptions" v-bind:class="{none: !mode}">
          <label for="">Rules</label>
          <div class="suboptions">
            <a @click="changeRules({on:'adcc', off:'ebi', off2:'ibjjf'})" href="#" v-bind:class="{currentRules: rules.adcc}">ADCC</a>
            <a @click="changeRules({on:'ebi', off:'adcc', off2:'ibjjf'})" href="#" v-bind:class="{currentRules: rules.ebi}">EBI</a>
            <a @click="changeRules({on:'ibjjf', off:'ebi', off2:'adcc'})" href="#" v-bind:class="{currentRules: rules.ibjjf}">IBJJF</a>
          </div>
          <label v-if="rules.adcc" for="">Time for points (ADCC RULES)</label>
          <div v-if="rules.adcc" class="pointsTime">
            <a @click="adccTimeChange(-60)" href="#">-</a>
            <span>{{timer.adccPointsTime / 60}}</span>
            <a @click="adccTimeChange(60)" href="#">+</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      lightbox: false
    }
  },
  computed: {
    ...mapGetters(['mode', 'rules', 'timer'])
  },
  methods: {
    ...mapMutations(['changeMode', 'changeRules', 'adccTimeChange']),
    ...mapActions(['callMutationChangeMode'])
  }
}
</script>

<style>
.suboptions a {
  text-decoration: none;
  color:red;
}
.lightbox {
  width: 100vw;
  height:100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,0.9);
}
.optionMenu {
  width:70vw;
  height:70vh;
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.scoreboardOptions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.scoreboardOptions label, .scoreboardOptions div {
  margin-bottom:7%;
}
.opt {
  position: absolute;
  top:0;
  left:0;
  z-index: 9000;
}
label {
  font-weight: 900;
}
.currentMode, .currentRules {
  color:purple !important;
}
.none {
  display:none;
}
</style>

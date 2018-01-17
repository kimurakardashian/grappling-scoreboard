<template>
  <div>
    <i href="#" class="opt material-icons" data-toggle="modal" data-target="#mymodal">settings</i>
    <!-- @click="lightbox=!lightbox" -->
    <div class="modal lightbox" id="mymodal"><!--v-bind:class="{none: !lightbox}" -->
      <div class="optionMenu container-fluid">
        <div class="row">
          <div class="col-lg-12" align="center">
            <h1>Options</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12" align="center">
            <h2>Mode</h2>
            <a class="btn btn-default" v-on:click="callMutationChangeMode" href="#" v-bind:class="{'btn-primary': mode}">Scoreboard</a>
            <a class="btn btn-default" v-on:click="callMutationChangeMode" href="#" v-bind:class="{'btn-primary': !mode}">Timer</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12" id="drillTimerOptions" v-if="!mode" align="center">
            <h2>Rounds</h2>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'rounds', value:-1})" href="#">-</a>
            <span>{{drillTimer.rounds}}</span>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'rounds', value:1})" href="#">+</a>
            <h2>Round time</h2>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'preDuration', value:-10})" href="#">-</a>
            <span>{{roundTimeDisplay}}</span>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'preDuration', value:10})" href="#">+</a>
            <h2>Warning Time</h2>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'warnTime', value:-5})" href="#">-</a>
            <span>{{warnTimeDisplay}}</span>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'warnTime', value:5})" href="#">+</a>
            <h2>Rest time</h2>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'breakTime', value:-5})" href="#">-</a>
            <span>{{breakTimeDisplay}}</span>
            <a class="btn btn-default btn-xs" @click="mutateDrillTimer({type:'breakTime', value:5})" href="#">+</a>
          </div>
          <div class="col-lg-12" id="scoreBoardOptions" v-if="mode" align="center">
            <h2>Rules</h2>
            <a class="btn btn-default" @click="changeRules({on:'adcc', off:'ebi', off2:'ibjjf'})" href="#" v-bind:class="{'btn-primary': rules.adcc}">ADCC</a>
            <a class="btn btn-default" @click="changeRules({on:'ebi', off:'adcc', off2:'ibjjf'})" href="#" v-bind:class="{'btn-primary': rules.ebi}">EBI</a>
            <a class="btn btn-default" @click="changeRules({on:'ibjjf', off:'ebi', off2:'adcc'})" href="#" v-bind:class="{'btn-primary': rules.ibjjf}">IBJJF</a>
            <h2>Time for points</h2>
            <a class="btn btn-default btn-xs" @click="adccTimeChange(-60)" href="#">-</a>
            <span>{{timer.adccPointsTime / 60}}</span>
            <a class="btn btn-default btn-xs" @click="adccTimeChange(60)" href="#">+</a>
          </div>
        </div>
      </div>
      <!--<label for="">Mode</label>-->
      <!--<div class="suboptions">
      </div>-->

        <!--<div class="drillTimerOptions" v-if="!mode">
          <label for="">Rounds</label>
          <div class="pointsTime">

          </div>
          <label for="">Round Time</label>
          <div class="pointsTime">
            <a @click="mutateDrillTimer({type:'preDuration', value:-10})" href="#">-</a>
            <span>{{roundTimeDisplay}}</span>
            <a @click="mutateDrillTimer({type:'preDuration', value:10})" href="#">+</a>
          </div>
          <label for="">Warning Time</label>
          <div class="pointsTime">
            <a @click="mutateDrillTimer({type:'warnTime', value:-5})" href="#">-</a>
            <span>{{warnTimeDisplay}}</span>
            <a @click="mutateDrillTimer({type:'warnTime', value:5})" href="#">+</a>
          </div>
          <label for="">Rest Time</label>
          <div class="pointsTime">
            <a @click="mutateDrillTimer({type:'breakTime', value:-5})" href="#">-</a>
            <span>{{breakTimeDisplay}}</span>
            <a @click="mutateDrillTimer({type:'breakTime', value:5})" href="#">+</a>
          </div>
        </div>-->
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
    ...mapGetters(['mode', 'rules', 'timer', 'drillTimer', 'roundTimeDisplay', 'breakTimeDisplay', 'warnTimeDisplay'])
  },
  methods: {
    ...mapMutations(['changeMode', 'changeRules', 'adccTimeChange', 'mutateDrillTimer']),
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
  z-index: 5000;
}
.opt-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.optionMenu {
  width:70vw;
  height:auto;
  padding:1%;
  background-color:white;
}
.scoreboardOptions, .drillTimerOptions {
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
  top:1%;
  left:0.4%;
  font-size:2.5em;
  cursor: pointer;
  z-index: 4000;
  color:white;
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

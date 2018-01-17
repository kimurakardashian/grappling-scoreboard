<template>
  <div style="background-color:black;" class="container-fluid" v-bind:class="{resting: drillTimer.resting}">
    <div class="row">
      <div class="col-lg-12 round-title">
        <h1 v-if="!drillTimer.resting" class="text-center rounds">Rounds: {{drillTimer.currentRound}} / {{drillTimer.rounds}}</h1>
        <h1 v-else="drillTimer.resting" class="text-center rounds">Rest</h1>
      </div>
    </div>
    <div class="row" align="center">
      <div class="col-lg-12 time">
        <span v-bind:class="{warning: drillTimer.warn}">{{drillTimerDisplay}}</span>
      </div>
    </div>
    <div class="row" align="center">
      <div class="col-lg-4 col-lg-offset-4 buttons">
        <a class="btn btn-primary btn-lg" href="#" @click.prevent="startDrillTimer" v-bind:class="{'btn-success': !drillTimer.running}">{{drillTimer.buttons.start}}</a>
      </div>
      <div class="col-lg-4 col-lg-offset-4 buttons">
        <a class="btn btn-danger btn-lg" href="#" @click.prevent="stopDrillTimer">Stop</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from  'vuex'
import {mapActions} from  'vuex'
import {mapMutations} from  'vuex'

export default {
  methods: {
    ...mapActions(['startDrillTimer']),
    ...mapMutations(['stopDrillTimer'])
  },
  computed: {
    ...mapGetters(['drillTimer', 'drillTimerDisplay'])
  }
}
</script>

<style scoped>
.buttons {
  height:7.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.buttons a {

  text-transform: uppercase;
}
.resting {
  background-color:pink !important;
}
.warning {
  color:red !important;
}
.buttons a {
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Large Devices, Wide Screens */
/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {
  .buttons a {
    font-size:1.4em;
  }
  .time {
    color:red;
    font-size:7em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:65vh;
  }
  .round-title {
    height:20vh;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  .round-title h1 {
    font-size:2.5 em;
  }
  .buttons {
    height:7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {
  .buttons a {
    font-size:1.4em;
  }
  .time {
    color:red;
    font-size:10em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:65vh;
  }
  .round-title {
    height:20vh;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  .round-title h1 {
    font-size:5em;
  }
  .buttons {
    height:7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
  .buttons a {
    font-size:1.4em;
  }
  .time {
    color:red;
    font-size:20em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:65vh;
  }
  .round-title {
    height:20vh;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  .round-title h1 {
    font-size:5em;
  }
  .buttons {
    height:7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}

/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
  .buttons a {
    font-size:1.4em;
  }
  .time {
    color:red;
    font-size:20em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:65vh;
  }
  .round-title {
    height:20vh;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  .round-title h1 {
    font-size:5em;
  }
  .buttons {
    height:7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
  .buttons a {
    font-size:1.4em;
  }
  .time {
    color:red;
    font-size:20em;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:65vh;
  }
  .round-title {
    height:20vh;
    color:white;
  }
  .buttons {
    height:7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}
</style>

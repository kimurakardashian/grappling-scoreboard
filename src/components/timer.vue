<template>
  <div class="wrapper">
    <div class="timer">

    </div>
    <div class="buttons">
      <div>{{drillTimer.displayTime}}</div>
      <div class="buttons">
        <a href="#">Stop</a>
        <a href="#" @click="startDrillTimer">{{drillTimer.buttons.start}}</a>
        <a href="#">Reset</a>
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
    ...mapActions(['startDrillTimer'])
  },
  computed: {
    ...mapGetters(['drillTimer'])
  }
}
</script>

<style scoped>
.wrapper {
  width:100%;
  height:100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

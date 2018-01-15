<template>
  <div>
    <options></options>
    <component v-bind:is="modeComponent"></component>
  </div>
</template>

<script>
import score from './components/scoreInfo.vue';
import buttons from './components/buttons.vue';
import options from './components/options.vue';
import timer from './components/timer.vue';
import {mapGetters} from 'vuex'

export default {
  components: {
    'score':score,
    'buttons':buttons,
    'options':options,
    'timer':timer
  },
  name: 'app',
  computed: {
    ...mapGetters(['modeComponent'])
  }
}
</script>

<style scoped>

</style>

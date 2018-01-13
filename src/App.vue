<template>
  <div>
    <score></score>
    <buttons></buttons>
  </div>
</template>

<script>
import score from './components/scoreInfo.vue';
import buttons from './components/buttons.vue';

export default {
  components: {
    score:score,
    buttons:buttons
  },
  name: 'app'
}
</script>

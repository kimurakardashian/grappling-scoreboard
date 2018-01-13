<template>
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
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  },
  computed: {
    ...mapGetters(['scorePlayer1', 'scorePlayer2'])
  }
}
</script>

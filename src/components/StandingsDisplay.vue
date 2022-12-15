<script lang="ts">
  import TeamDisplay from './TeamDisplay.vue';
  import Ranking from './Ranking.vue';
  export default{
    props: {
      standingsEntry: {
        type: Object,
        required: true
      }
    },
    computed: {
      // sortedRankings() {
      //   const type = this
      // }
    },
    emits: {
      
    },
    components: {
      TeamDisplay,
      Ranking
    }
  }
</script>
<template>
  <body>
  <div v-for="(value, key) in standingsEntry">
    <b-row>
      <b-col>
        <TeamDisplay v-if="key === 'team'" :teamData="value"></TeamDisplay>
      </b-col>
      <b-col>
        <Ranking v-if="key === 'conference'" :conferenceData="value"></Ranking>
      </b-col>
    </b-row>
  </div>
  </body>
</template>

<style scoped>
body{
  background-color: rgb(95, 176, 203);
}
</style>
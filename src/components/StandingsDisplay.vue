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
    data() {
      return{
        conferenceData: {
          name: String,
          rank: Number,
          win: Number,
          loss: Number,
          type: Object
        },
        teamData: {
          id: Number,
          name: String,
          nickname: String,
          code: String,
          logo: String,
          type: Object,
          required: true
        },
      }
    },
    computed: {
      // sortedRankings: function() {
      //   function compare(, b: Object){
      //     if a.conferenceData.rank
      //   }
      // }
    },
    components: {
      TeamDisplay,
      Ranking
    }
  }
</script>
<template>
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
</template>
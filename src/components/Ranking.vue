<script lang="ts">
 export default {
  name: "conferenceData",
  props: {
    conferenceData: {
      name: String,
      rank: Number,
      win: Number,
      loss: Number,
      type: Object,
      required: true
    }
  },
  // emits: [
  //   'ranking'
  // ],
  // methods: {
  //   passConferenceRank(rank, teamName){
  //     this.$emit('ranking', {
        
  //     })
  //   }
  // }

 }
</script>

<template>
  <div>
    <b-row>
      <b-col>
        Wins: {{conferenceData.win}}
      </b-col>
      <b-col>
        Losses: {{conferenceData.loss}}
      </b-col>
    </b-row>
  </div>
</template>
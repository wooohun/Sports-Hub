<script lang="ts">
  import DivisionTeams from './DivisionTeams.vue';
  export default {
    name: 'ConferenceTeams',
    props: {
      conference: String
    },
    components: {
      DivisionTeams
    }
  }
</script>
<template>
  <div>
    <b-row>
      <DivisionTeams :division="conference === 'East' ? 'Atlantic' : 'Pacific' "></DivisionTeams>
    </b-row>
    <b-row>
      <DivisionTeams :division="conference === 'East' ? 'Central' : 'Northwest'"></DivisionTeams>
    </b-row>
    <b-row>
      <DivisionTeams :division="conference === 'East' ? 'Southeast' : 'Southwest'"></DivisionTeams>
    </b-row>
  </div>
</template>
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
  <body>
    <b-container fluid>
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
    </b-container>
  </body>
</template>

<style scoped>
body{
  background-color: rgb(95, 176, 203);
}
@media (min-width: 1024px){
  body{
    width: 400px;
    background-color: rgb(95, 176, 203);
  }
}
</style>
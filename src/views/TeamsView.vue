<script lang="ts">
  import ConferenceTeams from '../components/ConferenceTeams.vue'
  export default {
    components: {
      ConferenceTeams
    }
  }
</script>
<template>
  <body>
    <b-container fluid>
      <b-row>
        <b-col>
          <h1 class="conference-title">East</h1>
        </b-col>
        <b-col>
          <h1 class="conference-title">West</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ConferenceTeams conference="East"></ConferenceTeams>
        </b-col>
        <b-col>
          <ConferenceTeams conference="West"></ConferenceTeams>
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>
<style scoped>
  body{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  @media (min-width: 1024px){
    body{
      display: flex;
      align-items: flex-start;
    }
  }
  .conference-title {
    text-align: center;
    margin-bottom: 25px;
  }
</style>
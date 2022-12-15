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
          <h2>East</h2>
        </b-col>
        <b-col>
          <h2>West</h2>
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
<style>
body{
  display: flex;
  justify-content: center;
}
@media (min-width: 1024px){
    body{
      display: flex;
      align-items: flex-start;
    }
}
</style>
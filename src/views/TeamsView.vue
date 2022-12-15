<script lang="ts">
  import ConferenceTeams from '../components/ConferenceTeams.vue'
  export default {
    components: {
      ConferenceTeams
    }
  }
</script>
<template>
  <b-container>
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
</template>
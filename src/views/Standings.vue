<script lang="ts">
  import axios from 'axios';
  import ConferenceStandings from '../components/ConferenceStandings.vue'
  export default {
    components: {
      ConferenceStandings
    },
  }
  // v-for="entry in standings" :standings-entry="entry" 
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <ConferenceStandings conference="east" ></ConferenceStandings>
      </b-col>
      <b-col>
        <ConferenceStandings conference="west"></ConferenceStandings>
      </b-col>
    </b-row>
  </b-container>
</template>

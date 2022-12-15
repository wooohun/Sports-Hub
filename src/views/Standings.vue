<script lang="ts">
  import ConferenceStandings from '../components/ConferenceStandings.vue'
  export default {
    components: {
      ConferenceStandings
    },
  }
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

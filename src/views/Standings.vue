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
        <ConferenceStandings conf="east" ></ConferenceStandings>
      </b-col>
      <b-col>
        <ConferenceStandings conf="west"></ConferenceStandings>
      </b-col>
    </b-row>
  </b-container>
</template>

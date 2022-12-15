<script lang="ts">
  import axios from 'axios';
  import standingsEntry from '../components/ConferenceStandings.vue'
  export default {
    data() {
      return {
        standings: [
        ]
      }
    },
    components: {
      standingsEntry
    },
    mounted() {
      this.fetchData()
    },
    methods: {
    // Method to fetch data from the API
      fetchData() {
        // Set the API key as a request header
        const headers = {
            'x-rapidapi-key': '594b36c2d9msh8c964d85d7298cep145d6fjsn814f844e1fe5',
        };
        const params = {
          "league": "standard",
          "season": "2022",
          "conference": "east"
        }
        // Send a GET request to the API endpoint using Axios
        axios.get('https:/api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022', { headers })
          .then((response) => {
            // Handle the response data
            this.standings = response.data.response;
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      }
    },
  }
</script>

<template>
  <standingsEntry v-for="entry in standings" :standings-entry="entry"></standingsEntry>
</template>

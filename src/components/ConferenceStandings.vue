<script lang="ts">
  import StandingsDisplay from './StandingsDisplay.vue'
  import axios from 'axios'
  export default {
    name: 'ConferenceStandings',
    props: {
      conference: String,
    },
    data() {
      return{
        standings: [
        ]
      }
    },
    components: {
      StandingsDisplay
    },
    mounted() {
      this.fetchData()
    },
    methods: {
    // Method to fetch data from the API
      fetchData() {
        // Set the API key as a request header
        const options = {
          headers: {
            'x-rapidapi-key': '594b36c2d9msh8c964d85d7298cep145d6fjsn814f844e1fe5'
          },
          params: {
            "league": "standard",
            "season": "2022",
            "conference": this.conference
          }
        }
        // Send a GET request to the API endpoint using Axios
        axios.get('https:/api-nba-v1.p.rapidapi.com/standings', options)
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

<style scoped>
@media (min-width: 1024px){
    body{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 400px;
    }
}
</style>

<template>
  <b-container fluid>
  <body>
    <div>
      <StandingsDisplay v-for="entry in standings" :standingsEntry="entry"></StandingsDisplay>
    </div>
  </body>
  </b-container>  
</template>
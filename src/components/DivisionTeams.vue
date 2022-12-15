<script lang="ts">
  import axios from 'axios';
  import TeamDisplay from './TeamDisplay.vue';
  export default {
    props: {
      division: String
    },
    data() {
      return {
        teams: [
        ]
      }
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
            'x-rapidapi-key': '594b36c2d9msh8c964d85d7298cep145d6fjsn814f844e1fe5',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          },
          params: {
            "division": this.division
          }
        }
        // Send a GET request to the API endpoint using Axios
        axios.get('https:/api-nba-v1.p.rapidapi.com/teams', options)
          .then((response) => {
            // Handle the response data
            this.teams = response.data.response;
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      }
    },
    components: {
      TeamDisplay
    }
  }
</script>
<template>
  <h3>{{division}}</h3>
  <div>
    <TeamDisplay v-for="team in teams" :teamData="team"></TeamDisplay>
  </div>
</template>
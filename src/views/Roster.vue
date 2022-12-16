<script lang="ts">
  import axios from "axios"
  export default {
    props: {
      id: String,
      teamName: String
    },
    data() {
      return {
        rosterData: []
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
            "team": this.id,
            "season": "2022"
          }
        }
        // Send a GET request to the API endpoint using Axios
        axios.get('https:/api-nba-v1.p.rapidapi.com/players', options)
          .then((response) => {
            // Handle the response data
            this.rosterData = response.data.response;
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
  <body>
      <div v-for="id in rosterData">
        <b>{{id.firstname}} {{id.lastname}}</b> <p>Jersey #{{id.leagues.standard.jersey}}<br>Position(s): {{id.leagues.standard.pos}}<br>{{id.height.feets}} Feet {{id.height.inches}} inches tall <br>{{id.weight.pounds}} pounds<br>College Attended: {{id.college}}</p>
      </div>
  </body>
</template>

<style scoped>
  body{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1000px;
  }
  p{
    margin-right: 30px;
    margin-bottom: 50px;
  }
</style>
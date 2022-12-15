<template>
    <h1>NBA Standings</h1>
    {{ results }}
    <body>
        <div class="box">
            <div class="conf">
                <h2>Western Conference</h2>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div class="conf">
                <h2>Eastern Conference</h2>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    </body>
</template>
  
<style scoped>


.box{
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    border: 5px solid green;
}

.conf{
    height: 950px;
    width: 330px;
    text-align: center;
}

h2{
    border-bottom: 3px solid green;
}

h1{
    font-weight: bold; 
    display: flex;
    justify-content: center;
}

li {
    margin-top: 25px;
    border-bottom: 3px solid grey;
    font-size: large;
}

</style>

<script lang="ts">
import axios from 'axios';

export default {
  // Define the data for the component
  data() {
    return {
      results: null,
    };
  },

  // Define the methods for the component
  methods: {
    // Method to fetch data from the API
    fetchData() {
        // Set the API key as a request header
        const headers = {
            'x-rapidapi-key': '594b36c2d9msh8c964d85d7298cep145d6fjsn814f844e1fe5',
      };
      // Send a GET request to the API endpoint using Axios
      axios.get('https:/api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022', { headers })
        .then((response) => {
          // Handle the response data
          this.results = response.data;
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    },
  },

  // Call the fetchData method when the component is created
  created() {
    this.fetchData();
  },
};
</script>
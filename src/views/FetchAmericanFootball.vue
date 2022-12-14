<script>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import AmericanFootball from './AmericanFootball.vue'
  export default {
    name: "AmericanFootballPosts",
    props: {},
    components: {
      AmericanFootball
    },
    setup() {
        const data = ref(null);
        const loading = ref(true);
        const error = ref(null);
        function fetchData() {
            loading.value = true;
            // api call format using axios, currently targeting leagues endpoint
            return axios({
                method: "get",
                url: "https://v2.nba.api-sports.io/standings",
                headers: {
                    "content-type": "application/json",
                    "x-rapidapi-key": "81bd2c8d6947ca532f69d8ad4028ea3a",
                    "x-rapidapi-host": "https://v2.nba.api-sports.io"
                },
                params: {
                    league: "standard",
                    season: "2022"
                }
            })
                .then(res => {
                // non-200 response code
                if (!res.ok) {
                    // create new Error object with HTTP status text
                    const error = new Error(res.statusText);
                    error.json = res.json();
                    throw error;
                }
                // else return result json
                return res.json();
            })
                .then(json => {
                data.value = json.data;
            })
                .catch(err => {
                error.value = err;
                // if custom json error was given
                if (err.json) {
                    return err.json.then(json => {
                        // set error message to json error
                        error.value.message = json.message;
                    });
                }
            })
                .then(() => {
                // no longer loading
                loading.value = false;
            });
        }
        onMounted(() => {
            fetchData();
        });
        return {
            data,
            loading,
            error
        };
    },
}
</script>
<template>
  <AmericanFootball />
</template>

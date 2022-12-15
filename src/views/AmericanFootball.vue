<script setup>
import { onMounted, ref } from 'vue';
import LeagueInfo from './LeagueInfo.vue'

const error = ref(null);
const props = defineProps ({
  items: {
    type: Array
  }
})
onMounted(() => {
  items = getLeagueData()
})

function getLeagueData() {
  return fetch("https://v2.nba.api-sports.io/standings", {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "https://v2.nba.api-sports.io",
		  "x-rapidapi-key": "81bd2c8d6947ca532f69d8ad4028ea3a"
	  },
    "params": {
      "current": "true"
    }
  })
  .then(res => {
    if (!res.ok) {
      const error = new Error(res.statusText)
      error.json = res.json()
      throw error
    }
    else {
      return res.json()
    }
  })
  .catch(err => {
    error.value = err;
    if (err.json) {
      return err.json.then(json => {
        error.value.message = json.message;
      })
    }
  });
  // .then(response => {
	//   response.json().then(
  //     (responseData) => {
  //       return responseData
  //     }
  //   )
  // })
  // .catch(err => {
	//   console.log(err);
  // });
}
</script>

<template>
  <div>
    <LeagueInfo v-for="(item, index) in items" :key="index" :item="item"/>
  </div>
</template>
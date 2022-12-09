<script setup>
const data = ref(null)
const error = ref(null)
const props = defineProps ({
  items: {
    type: Array
  }
})
const data = await fetch("https://v1.american-football.api-sports.io/leagues", {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "v1.american-football.api-sports.io",
		  "x-rapidapi-key": "81bd2c8d6947ca532f69d8ad4028ea3a"
	  },
    "params": {
      "current": "true"
    }
  })
  .then((res) => {
    if (!res.ok) {
      const error = new Error(res.statusText)
      error.json = res.json()
      throw error
    }
    else {
      res.json()
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
</script>
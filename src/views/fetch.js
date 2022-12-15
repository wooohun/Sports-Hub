// composable for fetching data from passed url
import {ref, isRef, unref, watchEffect} from 'vue'

export function useFetch(url, params) {
  const data = ref(null)
  const error = ref(null)
  const parameters = ref(null)

  function doFetch() {
    // reset state
    data.value = null
    error.value = null
    parameters.value = params

    fetch(unref(url), {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "https://v2.nba.api-sports.io",
		    "x-rapidapi-key": "81bd2c8d6947ca532f69d8ad4028ea3a"
      },
      "params" : parameters.value
      })
      .then((res) => res.json())
      .then((json) => data.value = json)
      .catch((err) => error.value = err)
  }

  if (isRef(url)) {
    watchEffect(doFetch)
  } else {
    doFetch()
  }

  return { data, error }
}
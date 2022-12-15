async function getData(endpoint: string) {
  const response = await fetch("https://v1.basketball.api-sports.io/leagues" + endpoint, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v1.american-football.api-sports.io",
        "x-rapidapi-key": "81bd2c8d6947ca532f69d8ad4028ea3a"
      }
  })
  const data = await response.json()
  return data.value
}

export default getData
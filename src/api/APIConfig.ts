export const APISettings = {
  token: '',
  headers: new Headers({
    "x-rapidapi-host": import.meta.env.API_HOST,
    "x-rapidapi-key": import.meta.env.API_KEY
  }),
  baseURL: "https://v1.american-football.api-sports.io/",

}
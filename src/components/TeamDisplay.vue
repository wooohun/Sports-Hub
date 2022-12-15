<script lang="ts">
  export default {
    name: "teamData",
    props: {
      teamData: {
        id: Number,
        name: String,
        nickname: String,
        code: String,
        logo: String,
        type: Object,
        required: true
      }
    }
  }
</script>
<template>
  <div>
    <img :src="teamData.logo"/>
    <h3>{{teamData.name}}</h3>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
</style>
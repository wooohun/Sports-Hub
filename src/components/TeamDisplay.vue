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
  <img :src="teamData.logo"/>
  <div>
    {{teamData.name}}
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 150px;
  }
</style>
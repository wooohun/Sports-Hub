<script lang="ts">
  export default {
    name: "playerData",
    props: {
      playerData: {
        feets: Number,
        inches: Number
      }
    }
  }
</script>
<template>
  <div>
    <p>{{playerData.feet}} feet {{playerData.inches}} inches tall</p>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
</style>
<script lang="ts">
  export default {
    name: "playerData",
    props: {
      playerData: {
        pounds: Number
      }
    }
  }
</script>
<template>
  <div>
    <p>{{playerData.pounds}} lbs.</p>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
</style>
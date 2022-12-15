<script lang="ts">
import heightDisplay from './HeightDisplay.vue';
import weightDisplay from './WeightDisplay.vue';
  export default {
    name: "playerData",
    props: {
      playerData: {
        id: Number,
        firstname: String,
        lastname: String,
        birth: Object,
        height: Object,
        weight: Object,
        required: true
      }
    }
  }
</script>
<template>
  <div>
    <h3>{{playerData.firstname}} {{playerData.lastname}}</h3>
    <b-row><heightDisplay v-if="key === 'feets'" :playerData="value"></heightDisplay></b-row>
    <b-row><weightDisplay v-if="key === 'pounds'" :playerData="value"></weightDisplay></b-row>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
</style>
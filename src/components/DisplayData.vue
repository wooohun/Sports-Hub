<script setup>
import { VueElement } from 'vue';

VueElement.component('display-data-component', {
data(){
  return {
    //need to fill data array with api call
    dataArray: [
      'tempdata1',
      'tempdata2',
      'tempdata3',
      'tempdata4',
      'tempdata5',
      'tempdata6',
      'tempdata7'
    ]
  }
},
methods:{
  
}
</script>

<template>
    <div class="datadisplay">
      <!--title of data to be displayed ie. "Teams in XXXX League", "XXXX League's Current Standings", etc.-->
      <h1>{{datatitle}}</h1>
      <!--Loops through datatArray to display data, 
        key prop needs to be unique key to identify elements looped through
      using i as key is just using index of str-->
      <p v-for="(str, i) in dataArray" :key="i">{{str}}</p>
    </div>
</template>
})

<style scoped>

</style>
<script setup>
import SeasonInfo from './SeasonInfo.vue'
defineProps ({
  item: {
    league: {
      id: Number,
      name: String,
      logo: Image
    },
    country: {
      name: String,
      code: String,
      flag: Image
    },
    seasons:{
      type: Array
    },
    required: true
  }
})
</script>

<template>
  <div>
    <h1>NBA League Information</h1>
    <div>
      <i>
        <slot> {{this.league.logo}} </slot>
      </i>
      <h2>League Name: {{league.name}}</h2>
      <div>
        <p>{{country.name}}</p>
        <i>
          <slot>{{country.flag}}</slot>
        </i>
      </div>
      <div>
        <SeasonInfo v-for="season in item.seasons" :key="season.year"/>
      </div>
    </div>
  </div>
</template>
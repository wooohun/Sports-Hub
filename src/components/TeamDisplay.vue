<script lang="ts">
  import Roster from '@/views/Roster.vue';
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
    },
    components: {
      Roster
    },
  }
</script>
<template>
  <div>
    <img :src="teamData.logo"/>
    <h3>{{teamData.name}}</h3>
    <RouterLink :to="{ name: 'team', params: {teamName: teamData.name, id: teamData.id}}" exact><u>Roster</u></RouterLink>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
</style>
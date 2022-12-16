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
  <div class="mx-md-n5">
    <b-row class="team-display-wrapper" align-v="center" align-h="center" no-gutters>
      <b-col>
        <img :src="teamData.logo"/>
      </b-col>
      <b-col class="team-name-col col-6">
        <h3>{{teamData.name}}</h3>
      </b-col>
      <b-col align-self="center" class="pl-sm-1">
        <RouterLink :to="{ name: 'team', params: {teamName: teamData.name, id: teamData.id}}" exact><u>Roster</u></RouterLink>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
  img {
    border-radius: 5px;
    width: 50px;
  }
  .team-display-wrapper{
    margin: 25
  }
  .options-col{
    text-align: center;
  }
  .team-name-col {
    padding-left: none;
  }
</style>
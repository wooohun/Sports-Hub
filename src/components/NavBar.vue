<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="navbar">
      <div @click="toggleNav" class="navbarbutton"><span>Sports Hub</span></div>
      <div v-if="navVis" class="nav-display" v-cloak>
        <div class="showleaguebuttons"><a href = 'leagues.html'><span>NFL League</span></a></div>
        <div class="showleaguebuttons"><a href = 'leagues.html'><span>NCAA League</span></a></div></div>
      <div v-else class="nav-display-none"></div>
    </div>
</template>

<style scoped>
.navbar{
    width: 10%;
    background: rgb(63, 63, 63);
    color: #ffffff;
    float: left;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
  }
  .nav-display{
        width: 90%;
        background: rgb(63, 63, 63);
        color: #ffffff;
        float: left;
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
      }
      .showleaguebuttons{
        width: 45%;
        background: rgb(63, 63, 63);
        color: #ffffff;
        float: left;
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
      }
      .showleaguebuttons a{
        color:rgb(255, 255, 255);
      }
      .nav-display-none{
        width: 90%;
        background: #e2e2e2;
      }
</style>
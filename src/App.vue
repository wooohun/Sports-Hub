<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FetchAmericanFootball from './components/FetchAmericanFootball.vue'
import home from './components/home.vue'
</script>

<template>
  <div class="navbar">
    <div @click="toggleNav" class="navbarbutton"><span>Sports Hub</span></div>
    <div v-if="navVis" class="nav-display" v-cloak>
      <div class="showleaguebuttons"><router-link to="/AmericanFootball">NFL</router-link></div>
      <div class="showleaguebuttons"><router-link to="/AmericanFootball">NCAA</router-link></div></div>
    <div v-else class="nav-display-none"></div>
  </div>
  <router-view/>

  <main>
    <home />
  </main>
</template>


<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
  <b-navbar>
      <b-nav-item><RouterLink to="/">Sports Hub </RouterLink></b-nav-item>

      <b-dropdown-item><RouterLink to="/NFLStandings">NFL: </RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NFLStandings">Standings</RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NFLTeams">Teams</RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NFLCurrentGames">Current Games</RouterLink></b-dropdown-item>

      <b-dropdown-item><RouterLink to="/NCAAStandings">NCAA: </RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NCAAStandings">Standings</RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NCAATeams">Teams</RouterLink></b-dropdown-item>
      <b-dropdown-item><RouterLink to="/NCAACurrentGames">Current Games</RouterLink></b-dropdown-item>
  </b-navbar>
</div>
</template>

<style scoped>
.navbar{
  line-height: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
  background: #031926;
  padding-inline-start: 0px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 15px;
  }

  b-dropdown-item{
      margin-left: 15px;
  }
</style>

<!--

<div class="navbar">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item><RouterLink to="/">Sports Hub</RouterLink></b-nav-item>

        <b-navbar-item-dropdown text="NFL" right>
          <b-dropdown-item><RouterLink to="/NFLStandings">Standings</RouterLink></b-dropdown-item>
          <b-dropdown-item><RouterLink to="/NFLTeams">Teams</RouterLink></b-dropdown-item>
          <b-dropdown-item><RouterLink to="/NFLCurrentGames">Current Games</RouterLink></b-dropdown-item>
        </b-navbar-item-dropdown>

        <b-navbar-item-dropdown text="NCAA" right>
          <b-dropdown-item><RouterLink to="/NCAAStandings">Standings</RouterLink></b-dropdown-item>
          <b-dropdown-item><RouterLink to="/NCAATeams">Teams</RouterLink></b-dropdown-item>
          <b-dropdown-item><RouterLink to="/NCAACurrentGames">Current Games</RouterLink></b-dropdown-item>
        </b-navbar-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>

-->
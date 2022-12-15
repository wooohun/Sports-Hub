<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand>
        <RouterLink to="/">Sports Hub </RouterLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown id="dropdown-1" class="nav-dropdown-button" right>
            <template #button-content><b>NFL</b></template>
            <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/standings">Standings</RouterLink></b-dropdown-item>
            <!-- <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/teams">Teams</RouterLink></b-dropdown-item> -->
            <!-- <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/games">Current Games</RouterLink></b-dropdown-item> -->
          </b-nav-item-dropdown>
          <b-nav-item-dropdown id="dropdown-2" text="NCAA" class="nav-dropdown-button" right>
            <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/standings">Standings</RouterLink></b-dropdown-item>
            <!-- <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/teams">Teams</RouterLink></b-dropdown-item> -->
            <!-- <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/games">Current Games</RouterLink></b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar{
  position: absolute;
  top: 0;
  width: 100%;
  background: rgb(202, 202, 202);
  color: #ffffff;
  font-size: 13px;
  float: left;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  }
.nav-dropdown-option {
  padding: 5px;
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
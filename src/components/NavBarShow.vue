<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand>
        <RouterLink to="/">Sports Hub </RouterLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown id="dropdown-1" class="nav-dropdown-button" right>
            <template #button-content><b>NBA</b></template>
            <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/standings">Standings</RouterLink></b-dropdown-item>
            <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/teams">Teams</RouterLink></b-dropdown-item>
            <!-- <b-dropdown-item class="nav-dropdown-option"><RouterLink to="/games">Current Games</RouterLink></b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </header>
</template>

<style scoped>
.navbar{
  line-height: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
  background: #031926;
  padding-inline-start: 0px;
  cursor: pointer;
  text-transform: uppercase;
}
.nav-dropdown-option {
  padding: 5px;
}

@media (min-width: 1024px){
    header{
      width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
}
.navbar{
  line-height: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
  background: #031926;
  padding-inline-start: 0px;
  cursor: pointer;
  text-transform: uppercase;
}
.nav-dropdown-option {
  padding: 5px;
}

@media (min-width: 1024px){
    header{


      position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
      left:0;           /* top left corner should start at leftmost spot */
      top:0;            /* top left corner should start at topmost spot */
      width:100vw;      /* take up the full browser width */
      z-index:200;  /* high z index so other content scrolls underneath */
      height:100px;


    }
    .navbar{
      display: center;
    }
}


@media(max-width: 1024px)
{
  header {
    position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
      left:0;           /* top left corner should start at leftmost spot */
      top:0;            /* top left corner should start at topmost spot */
      width:100vw;      /* take up the full browser width */
      z-index:200;  /* high z index so other content scrolls underneath */
      height:100px;
  }
}
</style>
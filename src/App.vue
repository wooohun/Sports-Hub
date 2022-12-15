<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideTitle from './components/SideTitle.vue'
import navbar from './components/NavBarShow.vue'
</script>

<template>
  <b-container fluid>
    <header>
      <div>
        <navbar />
      </div>
    </header>
      <body>
        <div>
          <SideTitle msg="Sports Hub" />
          <RouterView />
        </div>
      </body>
</b-container>
</template>

<style scoped>
header{
  margin-bottom: 70px;
}
</style>

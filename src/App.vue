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
          <RouterView />
        </div>
      </body>
</b-container>
</template>

<style scoped>
header{
  margin-bottom: 100px;
}
body{
  display: flex;
  justify-content: center;
  background-color: rgb(95, 176, 203);
}

</style>

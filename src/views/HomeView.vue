<script setup lang="ts">
  import TestPage from '@/components/TestPageToDisplayData.vue';
  import { RouterView } from 'vue-router';
</script>

<!--I'm guessing this should by default call the Standings page for a league? It is currently calling a test page-->
<template>
  <main>
    <TestPage />
  </main>
</template>

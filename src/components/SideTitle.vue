<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="logo"><img alt="Sports Hub Logo" class="logo" src="@/assets/football.jpg" width="125" height="125" /></div>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="green">
      Welcome to the Hub of Football! Where every stat is at your fingertips.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.logo {
  display: flex;
  margin: 0 auto .5rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  .logo {
    display: flex;
    margin: 0 auto .5rem;
  }
}
</style>

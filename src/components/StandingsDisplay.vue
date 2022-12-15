<script lang="ts">
  import TeamDisplay from './TeamDisplay.vue';
  export default{
    props: {
      standingsEntry: {
        type: Object,
        required: true
      }
    },
    components: {
      TeamDisplay
    }
  }
</script>
<template>
  <div v-for="(value, key) in standingsEntry">
    <TeamDisplay v-if="key === 'team'" :teamData="value"></TeamDisplay>
  </div>
</template>
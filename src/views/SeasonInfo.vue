<script setup>
defineProps({
  season: {
    year: Number,
    start: String,
    end: String,
    current: Boolean
  }
});
</script>

<template>
  <div>
    <table>
      <tr>
        <td>{{season.year}}</td>
        <td>{{season.start}}</td>
        <td>{{season.end}}</td>
      </tr>
    </table>
  </div>
</template>
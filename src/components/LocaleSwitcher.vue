<template>
  <select v-model="$i18n.locale" class="mt-1 p-2">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script>
  export default {
    name: "LocaleSwitcher",
    data() {
      return { locales: ["en", "nl", "fr", "de"] };
    },
  };
</script>

<style scoped>
  select {
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    cursor: pointer;
  }
  option {
    color: black;
  }
</style>

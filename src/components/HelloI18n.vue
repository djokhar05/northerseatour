<template>
  <p>{{ $t("title") }}</p>
  <p>{{ $t("description") }}</p>
  <LocaleSwitcher />
</template>

<script>
  import LocaleSwitcher from "./LocaleSwitcher.vue";

  export default {
    name: "HelloI18n",
    components: { LocaleSwitcher },
  };
</script>

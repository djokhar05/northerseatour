<template>
  <div class="card" :style="{ background: bgColor ? bgColor : '#9ddde9' }">
    <div class="row">
      <div class="col-12 mt-4 mb-4 p-4 d-flex justify-content-around">
        <span class="step">{{ number }}</span>
        <span><i :class="icon"></i></span>
      </div>
      <div class="col-12">
        <h6>{{ step }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["number", "icon", "step", "bgColor"],
  };
</script>

<style scoped>
  .card {
    box-shadow: 0px 0px 20px gray;
    transition: all 0.2s ease-in;
    cursor: pointer;
    padding: 10px 30px;
    margin-top: 25px;
  }

  .card:hover {
    box-shadow: 0 0 0;
  }

  .step {
    font-size: 2em;
  }
</style>

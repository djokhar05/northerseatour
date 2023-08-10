<template>
  <div class="col-12 col-md-7 col-xl-8 mt-4 pt-4">
    <img
      :src="require(`@/assets/${contentImage}`)"
      :alt="imageDescription"
      class="img-fluid justify-content"
    />
  </div>

  <div
    class="col-12 col-md-5 col-xl-4 d-flex pros-container flex-column justify-content-center"
  >
    <div class="pros text-start">
      <h3>{{ header1 }}</h3>
      <p>{{ content1 }}</p>
    </div>
    <div class="pros text-start">
      <h3>{{ header2 }}</h3>
      <p>{{ content2 }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "header1",
      "header2",
      "content1",
      "content2",
      "contentImage",
      "imageDescription",
    ],
  };
</script>

<style scoped>
  .pros {
    padding: 30px;
    transition: background 0.3s ease-out;
  }
  .pros:hover {
    background: #bbf0fa;
  }
  @media screen and (min-width: 1600px) {
    .pros-container {
      margin-left: -90px;
    }
  }
</style>

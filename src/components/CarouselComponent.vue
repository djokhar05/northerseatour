<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="require(`@/assets/${image1}`)"
          class="d-block w-100"
          :alt="alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarouselComponent",
    props: ["image1", "image2", "alt"],
  };
</script>

<style scoped>
  .darken-icon:hover {
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 5px;
  }
</style>

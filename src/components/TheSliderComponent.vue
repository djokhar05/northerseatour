<template>
  <div class="row">
    <div class="col-12 slider-parent-cont bg-image">
      <div class="overlay">
        <div
          class="col-12 d-flex flex-column justify-content-center align-items-center p-4"
        >
          <h1>{{ sliderHeader }}</h1>
          <br />
          <h6>{{ sliderText }}</h6>
          <br />
          <router-link to="/rates" class="btn btn-danger p-3">{{
            sliderButtonText
          }}</router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="reset-dom-stack bg-dark"></div>
</template>

<script>
  export default {
    props: ["sliderHeader", "sliderText", "sliderButtonText"],
  };
</script>

<style scoped>
  .slider-parent-cont {
    height: 90vh;
    position: absolute;
    top: -60px;
    background-image: url("@/assets/home-slider-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    color: white;
    padding-top: 100px;
  }

  .overlay > div {
    height: 80vh;
  }

  .overlay div h1 {
    font-size: 3em;
  }

  .overlay div h6 {
    font-size: 1.5em;
    font-style: italic;
  }

  .reset-dom-stack {
    margin-top: 76vh;
  }

  @media screen and (min-width: 411px) {
    .reset-dom-stack {
      margin-top: 77vh;
    }
  }

  @media screen and (min-width: 819px) {
    .reset-dom-stack {
      margin-top: 80vh;
    }
  }

  @media screen and (min-width: 828px) {
    .reset-dom-stack {
      margin-top: 78vh;
    }
  }
</style>

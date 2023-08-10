<template>
  <div
    class="row"
    style="padding-bottom: 10px; padding-top: 7px; background: #dbefff"
  >
    <div class="col-12 contact mb-3">
      <h4 class="text-center">CONTACT US</h4>

      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 col-xl-4 offset-xl-4">
          <p>
            <span><i class="fa-solid fa-envelope"></i></span>:
            <span>info@nothernseatours.com</span>
          </p>
          <p>
            <span><i class="fa-solid fa-phone"></i></span>:
            <span>+44 (745) 127 5857</span>
          </p>
          <p>
            <span><i class="fa-solid fa-location-dot"></i></span>:
            <span
              >Airport operations Tomline House The Dock Felixstowe, IP11 3SY
              United Kingdom</span
            >
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 bg-info mb-3">
      <h4 class="text-center">ABOUT US</h4>
    </div>
    <TheCenteringComponent>
      <div class="col-12 col-md-3 col-lg-3 col-xl-2">
        <img src="https://i.ibb.co/QYLVbGc/logo.png" />
        <div><LocaleSwitcher /></div>
        &nbsp;
      </div>

      <div class="col-12 col-md-4 col-lg-3 col-xl-2 p-0 p-md-2">
        <img
          src="https://i.ibb.co/X2KsQrR/about.png"
          class="img-fluid d-md-none"
        />
        <img
          src="https://i.ibb.co/vwcsbSX/about-flip.png"
          class="img-fluid d-none d-md-block"
        />
      </div>

      <div class="col-12 col-md-5 col-lg-6 col-xl-8">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h4>{{ $t("aboutHeader1") }}</h4>
          </div>
          <div class="col-12 col-lg-6">
            <p>{{ $t("aboutContent1") }}</p>
          </div>
          <div class="col-12 col-lg-6">
            <h6>{{ $t("aboutHeader2") }}</h6>
          </div>
          <div class="col-12 col-lg-6">
            <p>{{ $t("aboutContent2") }}</p>
          </div>
          <div class="col-12 col-lg-6">
            <h2>{{ $t("aboutHeader3") }}</h2>
          </div>
          <div class="col-12 col-lg-6">
            <p>{{ $t("aboutContent3") }}</p>
          </div>
        </div>
      </div>
    </TheCenteringComponent>

    <div class="col-12"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  p,
  h1,
  h3,
  h4,
  h5,
  h6 {
    text-align: justify;
  }

  .contact p {
    text-align: center;
  }
</style>

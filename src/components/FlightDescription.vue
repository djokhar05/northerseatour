<template>
  <div class="col-12 col-md-7 col-xl-7 pt-4 pt-md-0">
    <h5>{{ header }}</h5>
    <p>
      <i class="fa-solid fa-circle" color="text-success"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
      <i class="fa-solid fa-circle"></i>
    </p>
    <p class="fw-bold author">{{ numberOfPassengers }}</p>
    <div class="row">
      <div class="col-8 tour-descriptions">
        <p class="time">{{ durationOfFlight }}</p>
        <p>{{ tourDescription }}</p>
        <p class="cancel">
          <i class="fa-solid fa-xmark"></i> &nbsp;<span class="fw-bold">{{
            $t("cancellation")
          }}</span>
        </p>
        <p class="liked">
          <i class="fa-solid fa-thumbs-up"></i>&nbsp;<span class="fw-bold"
            >{{ $t("recommendation") }} {{ recommendationCount }}
            {{ $t("travellers") }}
          </span>
        </p>
      </div>
      <div class="col-4 price">
        <sup class="text-danger fw-bold">{{ $t("from") }}</sup>
        <h3>£{{ price }}</h3>
        <p>{{ $t("perAdult") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "header",
      "numberOfPassengers",
      "durationOfFlight",
      "tourDescription",
      "recommendationCount",
      "price",
    ],
  };
</script>

<style scoped>
  * {
    text-align: left;
  }
  .accordion-body ul {
    list-style-type: none;
    text-align: left;
    margin-left: -1.5em;
  }
  .fa-solid,
  .fa-xmark {
    margin-right: 2px;
  }

  .fa-solid {
    color: green;
  }
  .fa-xmark {
    color: red;
  }

  .author,
  .cacnel,
  .liked {
    margin-top: -17px;
  }

  sup {
    font-size: 0.8em;
  }

  .tour-descriptions p {
    line-height: 20px;
  }
</style>

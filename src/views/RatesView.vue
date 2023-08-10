<template>
  <section>
    <TheSliderComponent
      :sliderHeader="$t('aboutPageSliderHeaderMain')"
      :sliderText="$t('aboutPageSliderSmallerText')"
      :sliderButtonText="$t('aboutPageSliderButton')"
    />

    <TheCenteringComponent>
      <div class="col-12 col-md-12 col-xl-3 mt-4">
        <div class="accordion mt-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5>{{ $t("ratesListHeader") }}</h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>{{ $t("ratesList1") }}</li>
                  <li>{{ $t("ratesList2") }}</li>
                  <li>{{ $t("ratesList3") }}</li>
                  <li>{{ $t("ratesList4") }}</li>
                  <li>{{ $t("ratesList5") }}</li>
                  <li>{{ $t("ratesList6") }}</li>
                  <li>{{ $t("ratesList7") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-12 col-xl-9 mt-4">
        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="felixtour1.jpg"
              image2="felixtour2.jpg"
              alt="Felix Tour 1"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort1Header')"
            :numberOfPassengers="$t('singlePassenger')"
            :durationOfFlight="$t('ratesPort1FlightDuration')"
            :tourDescription="$t('ratesPort1FlightDescription')"
            recommendationCount="95%"
            price="1500"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="rotterdam1.jpg"
              image2="felixtour2.jpg"
              alt="rotterdam"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort2Header')"
            :numberOfPassengers="$t('singlePassenger')"
            :durationOfFlight="$t('ratesPort2FlightDuration')"
            :tourDescription="$t('ratesPort2FlightDescription')"
            recommendationCount="90%"
            price="1800"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="bruges.jpg"
              image2="felixtour2.jpg"
              alt="bruges"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort3Header')"
            :numberOfPassengers="$t('numberOfPassengersAntwerp')"
            :durationOfFlight="$t('ratesPort3FlightDuration')"
            :tourDescription="$t('ratesPort3FlightDescription')"
            recommendationCount="92%"
            price="1790"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="hamburg.jpg"
              image2="felixtour2.jpg"
              alt="hamburg"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort4Header')"
            :numberOfPassengers="$t('numberOfPassengersHamburg')"
            :durationOfFlight="$t('ratesPort4FlightDuration')"
            :tourDescription="$t('ratesPort4FlightDescription')"
            recommendationCount="84%"
            price="1960"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="medvac.jpg"
              image2="felixtour2.jpg"
              alt="medvac"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort5Header')"
            :numberOfPassengers="$t('numberOfPassengersMarseille')"
            :durationOfFlight="$t('ratesPort6FlightDuration')"
            :tourDescription="$t('ratesPort5FlightDescription')"
            recommendationCount="99%"
            price="2500"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="agleciras.jpg"
              image2="felixtour2.jpg"
              alt="agleciras.jpg"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort6Header')"
            :numberOfPassengers="$t('numberOfPassengersHamburg')"
            :durationOfFlight="$t('ratesPort6FlightDuration')"
            :tourDescription="$t('ratesPort6FlightDescription')"
            recommendationCount="99%"
            price="3000"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="cargo.jpeg"
              image2="felixtour2.jpg"
              alt="cargo"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort7Header')"
            :numberOfPassengers="$t('numberOfPassengersCargo')"
            :durationOfFlight="$t('ratesPort7FlightDuration')"
            :tourDescription="$t('ratesPort7FlightDescription')"
            recommendationCount="90%"
            price="5000"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="lille.jpeg"
              image2="felixtour2.jpg"
              alt="lille.jpeg"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort8Header')"
            :numberOfPassengers="$t('numberOfPassengersLille')"
            :durationOfFlight="$t('ratesPort8FlightDuration')"
            :tourDescription="$t('ratesPort8FlightDescription')"
            recommendationCount="87%"
            price="2000"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="helsinki.jpeg"
              image2="felixtour2.jpg"
              alt="helsinki"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort9Header')"
            :numberOfPassengers="$t('numberOfPassengersHelsinki')"
            :durationOfFlight="$t('ratesPort9FlightDuration')"
            :tourDescription="$t('ratesPort9FlightDescription')"
            recommendationCount="89%"
            price="3831"
          />
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-5 col-xl-5">
            <CarouselComponent
              image1="gothenburg.jpeg"
              image2="felixtour2.jpg"
              alt="gothenburg"
            />
          </div>
          <FlightDescription
            :header="$t('ratesPort10Header')"
            :numberOfPassengers="$t('numberOfPassengersGothenBurg')"
            :durationOfFlight="$t('ratesPort10FlightDuration')"
            :tourDescription="$t('ratesPort10FlightDescription')"
            recommendationCount="79%"
            price="3009"
          />
        </div>
      </div>
    </TheCenteringComponent>

    <br /><br /><br />
    <TheFooterComponent />
  </section>
</template>

<script>
  import CarouselComponent from "../components/CarouselComponent.vue";
  import FlightDescription from "../components/FlightDescription.vue";
  // @ is an alias to /src

  export default {
    name: "PricesView",
    components: {
      CarouselComponent,
      FlightDescription,
    },
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
  li {
    margin-top: 10px;
    color: #0b7c55;
  }
</style>

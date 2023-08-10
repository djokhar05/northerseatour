<template>
  <section>
    <TheSliderComponent
      :sliderHeader="$t('homePageSliderHeaderMain')"
      :sliderText="$t('homePageSliderSmallerText')"
      :sliderButtonText="$t('homePageSliderButton')"
    />

    <div class="row">
      <div class="col-12 col-xl-8 offset-xl-2 mt-4 pt-md-4 pt-xl-0 mb-4 pb-4">
        <h3 class="text-center text-info pt-md-4 pt-xl-0">
          {{ $t("homeViewHeader") }}
        </h3>
        <br />
        <h5>{{ $t("homeViewDescription") }}</h5>
      </div>

      <TheCenteringComponent>
        <div class="col-12 col-md-4">
          <TheCardComponent
            number="1"
            icon="fa-3x fa-solid fa-person-walking"
            :step="$t('homeViewCard1')"
          />
        </div>

        <div class="col-12 col-md-4">
          <TheCardComponent
            number="2"
            icon="fa-3x fas fa-helicopter"
            :step="$t('homeViewCard2')"
          />
        </div>

        <div class="col-12 col-md-4">
          <TheCardComponent
            number="3"
            icon="fa-3x fa-solid fa-thumbs-up"
            :step="$t('homeViewCard3')"
          />
        </div>

        <TheImageTextComponent
          :header1="$t('ImageTextHeader1')"
          :header2="$t('ImageTextHeader2')"
          :content1="$t('ImageTextContent1')"
          :content2="$t('ImageTextContent2')"
          contentImage="travellingWoman.gif"
          imageDescription="Travelling Woman"
        />
      </TheCenteringComponent>

      <section class="medical-info">
        <TheCenteringComponent>
          <h2>{{ $t("medicalInfoHeader") }}</h2>

          <p>{{ $t("medicalInfoParagraph1") }}</p>

          <p>{{ $t("medicalInfoParagraph2") }}</p>

          <p>{{ $t("medicalInfoParagraph3") }}</p>
        </TheCenteringComponent>
      </section>

      <TheCenteringComponent>
        <TheImageTextComponent
          :header1="$t('ImageTextHeader1_2')"
          :header2="$t('ImageTextHeader2_2')"
          :content1="$t('ImageTextContent1_2')"
          :content2="$t('ImageTextContent2_2')"
          contentImage="helicopterMan.gif"
          imageDescription="Man standing by an helicopter"
        />

        <section classs="mt-4" style="position: relative; top: 20px">
          <TheCenteringComponent>
            <TheAccordionComponent />
          </TheCenteringComponent>
        </section>
      </TheCenteringComponent>
    </div>

    <TheFooterComponent />
  </section>
</template>

<script>
  export default {
    name: "HomeView",
  };
</script>

<style scoped>
  .medical-info {
    background-color: #d0eaee;
    margin-top: 50px;
    padding: 2.5em;
    justify-content: justify;
    display: flex;
  }

  .medical-info h2 {
    margin-bottom: 30px;
  }

  .medical-info p {
    text-align: justify;
  }
</style>

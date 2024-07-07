<script setup lang="ts">

</script>

<template>
  <v-row class="contact-card--container">
    <v-card class="contact-card">
      <v-container class="h-100">
        <v-row class="h-100 ma-0">
          <v-col
              cols="6"
              class="data-column"
          >
            <v-row class="data-column--container">
              <div>
                <div class="d-flex w-100">
                  <v-icon
                      class="contact-icon"
                      :icon="'mdi-phone'"
                  />

                  <v-card-title class="contact-title">
                    {{'Kontakt'}}
                  </v-card-title>
                </div>

                <div class="w-100">
                  <v-label class="data-info">
                    {{'Tel.: +48 601 335 026'}}
                  </v-label>
                </div>
              </div>

              <div>
                <div class="d-flex w-100">
                  <v-icon
                      class="contact-icon"
                      :icon="'mdi-home'"
                  />

                  <v-card-title class="contact-title">
                    {{'Adres'}}
                  </v-card-title>
                </div>

                <div class="w-100">
                  <p>
                    <v-label class="data-info">
                      {{'Budowlanych 80, 44-217 Rybnik'}}
                    </v-label>
                  </p>

                  <p>
                    <v-label class="data-info">
                      {{'Przed stacją paliw'}}
                    </v-label>
                  </p>
                </div>
              </div>

            </v-row>
          </v-col>

          <v-col
              cols="6"
              class="description-column"
          >
            <div class="contact-description">
              <p>{{'Zapraszam do kontaktu.'}}</p>
              <p>{{'Zadzwoń i umów się na spotkanie.'}}</p>
            </div>

            <div class="temporary-img-container">
              <p style="font-size: 80px">Miejsce na zdjęcie</p>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-row>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.contact-card {
  width: 100%;
  border-radius: 20px;

  &--container {
    height: 500px;
  }
}

.data-column {
  background-color: $primaryColor;
  height: 100%;
  padding: 50px;
  border-radius: 20px;

  &--container {
    flex-direction: column;
    row-gap: 30px;
  }
}

.description-column {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.contact-icon {
  font-size: 80px;
  color: $defaultColor;
}

.contact-title {
  color: $defaultColor;
  font-size: 50px;
}

.data-info {
  color: $defaultColor;
  font-size: 30px;
  margin-left: 40px;
}

.contact-description {
  font-size: 30px;
  text-align: justify;
}

.temporary-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style>
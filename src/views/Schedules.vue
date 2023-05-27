<template>
  <!-- <div class="content"> -->
  <div class="container-fluid mx-3">
    <div class="row align-items-stretch">
      <div class="col-full">
        <label class="mx-3 form-label" for="date">Seleccione Fecha</label>
        <input
          type="date"
          class="mb-3 px-3 form-control form-label date-picker"
        />
      </div>
      <div class="col-9">
        <div class="card h-100">
          <VCalendar
            :attributes="attrs"
            class="custom-calendar"
            title-position="left"
            transparent
            borderless
            expanded
          />
        </div>
      </div>
      <div class="col-3">
        <div class="card h-100">
          <span class="tittle">Rutas Disponibles</span>
          <div>
            <ul class="custom-routes mt-5">
              <li
                :class="{ item: true, selected: selectedRoute === 'Ruta 1' }"
                @click="selectRoute('Ruta 1')"
              >
                Ruta 1
              </li>
              <li
                :class="{ item: true, selected: selectedRoute === 'Ruta 2' }"
                @click="selectRoute('Ruta 2')"
              >
                Ruta 2
              </li>
              <li
                :class="{ item: true, selected: selectedRoute === 'Ruta 3' }"
                @click="selectRoute('Ruta 3')"
              >
                Ruta 3
              </li>
              <li
                :class="{ item: true, selected: selectedRoute === 'Ruta 4' }"
                @click="selectRoute('Ruta 4')"
              >
                Ruta 4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
import { ref } from "vue";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const selectedRoute = ref("Ruta 1");

const selectRoute = (route) => {
  selectedRoute.value = route;
};

const attrs = ref([
  {
    key: "today",
    highlight: true,
    dates: new Date(),
  },
  {
    key: "green",
    // content: 'white',
    highlight: {
      color: "green",
    },
    dates: new Date(year, month, 11),
  },
  {
    key: "orange",
    content: "black",
    highlight: {
      color: "orange",
    },
    dates: new Date(year, month, 5),
  },
  {
    key: "gray",
    content: "black",
    highlight: {
      color: "gray",
    },
    dates: new Date(year, month, 10),
  },
  {
    key: "red",
    highlight: {
      color: "red",
    },
    dates: new Date(year, month, 17),
  },
]);
</script>

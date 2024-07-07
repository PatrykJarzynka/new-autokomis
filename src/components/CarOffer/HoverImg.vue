<script setup lang="ts">
  interface Props {
    src: string;
    fileId: string;
    mainImg?: boolean
  }

defineProps<Props>()
  const emit = defineEmits<{
    (e: 'delete', id: string): void
  }>()
</script>

<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <div
          v-bind="props"
          :class="mainImg ? 'main-img' : ''"
          class="hover-img-container"
      >
        <div
            v-if="isHovering"
            class="overlay"
        >
            <v-btn
                size="50"
                class="rounded-circle"
                @click="emit('delete', fileId)"
            >
              <v-icon
                  class="icon-delete"
                  icon="mdi-delete"
              />
            </v-btn>
        </div>

        <v-img
            class="hover-img"
            :src="src"
            cover
        />
      </div>
    </template>


  </v-hover>



</template>

<style scoped lang="scss">
@import '../../utils/colors';

.main-img {
  grid-column: 1/3;
  grid-row:1/3;
}

.main-img::after {
  content:"Zdjęcie główne";
  width: fit-content;
  height: 20px;
  background-color: $accentColor;
  color: $defaultColor;
  position: absolute;
  bottom: 0;
  padding-inline: 5px;
  border-radius: 5px;
}

  .hover-img-container {
    position: relative;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hover-img {
    border: 2px solid $primaryColor;
    border-radius: 10px;
  }

  .icon-delete {
    color: $secondaryColor;
  }

</style>
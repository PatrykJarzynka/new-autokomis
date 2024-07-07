<script setup lang="ts">
  import {ref} from "vue";

  interface Props {
    opacity: number;
    fullscreen?: boolean;
    title?: string;
    hideActions?: boolean
  }

  defineProps<Props>()

  const isOpen = ref<boolean>(false);

  function openDialog(): void {
    isOpen.value = true;
  }

  function closeDialog(): void {
    isOpen.value = false;
  }

  defineExpose( {
    openDialog,
    closeDialog
  })

</script>

<template>
  <v-dialog
      v-model="isOpen"
      :fullscreen="fullscreen"
      :opacity="opacity"
      :class="fullscreen ? 'w-100' : 'w-75'"
  >

    <template #default>
      <v-card :style="{backgroundColor: fullscreen ? 'black' : 'white'}" class="elevation-24">
        <v-card-title v-if="title">{{title}}</v-card-title>

        <div class="dialog-container overflow-y-auto">
          <slot name="content"/>
        </div>

        <v-card-actions v-if="!hideActions">
          <div class="dialog-actions">
            <v-btn
                class="action-btn"
                @click="closeDialog"
            >
              <span class="action-btn--content">{{'ZAMKNIJ'}}</span>
            </v-btn>

            <v-btn
                class="action-btn"
                @click="closeDialog"
            >
              <span class="action-btn--content">{{'ZAPISZ'}}</span>
            </v-btn>

          </div>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
@import '../utils/colors';

.dialog-container {
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 0;
}

.dialog-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}

.action-btn {
  font-size: 20px;
  color: $primaryColor;

  &--content {
    font-weight: 600;
  }
}

</style>
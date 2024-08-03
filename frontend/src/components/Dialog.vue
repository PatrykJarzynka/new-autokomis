<script setup lang="ts">
  import {ref} from "vue";
  import type {DialogActions} from "@/types/DialogActions";

  interface Props {
    title: string;
    actions?: DialogActions;
    contentOnly?: boolean;
    fullscreen?: boolean;
    backgroundColor?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    contentOnly: false,
    fullscreen: false,
    backgroundColor: 'white'
  })

  const isOpen = ref<boolean>(false);

  function handleConfirmAction(): void {
    if (props.actions) {
      props.actions.confirm.action();
    }
  }

  function openDialog(): void {
    isOpen.value = true;
  }

  function closeDialog(): void {
    isOpen.value = false;
  }

  defineExpose( {
    openDialog,
    closeDialog,
  })

</script>

<template>
  <v-dialog
      v-model="isOpen"
      :fullscreen="fullscreen"
      :class="fullscreen ? 'w-100' : 'w-75'"
  >

    <template #default>
      <v-card :style="{backgroundColor: backgroundColor}">
        <v-card-title v-if="!contentOnly">{{title}}</v-card-title>

        <div class="dialog-container overflow-y-auto">
          <v-card-text>
            <slot name="content"/>
          </v-card-text>
        </div>

        <v-card-actions v-if="!contentOnly && actions">
          <div class="dialog-actions">
            <v-btn
                class="action-btn"
                @click="closeDialog"
            >
              <span class="action-btn--content">{{actions.close.label}}</span>
            </v-btn>

            <v-btn
                class="action-btn"
                @click="handleConfirmAction"
            >
              <span class="action-btn--content">{{actions.confirm.label}}</span>
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
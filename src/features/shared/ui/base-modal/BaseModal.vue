<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const mouseDownOnBackdrop = ref(false)

function onMouseDown(e: MouseEvent) {
  mouseDownOnBackdrop.value = e.target === e.currentTarget
}

function onMouseUp(e: MouseEvent) {
  const mouseUpOnBackdrop = e.target === e.currentTarget

  if (mouseDownOnBackdrop.value && mouseUpOnBackdrop) {
    emit('close')
  }

  mouseDownOnBackdrop.value = false
}
</script>

<template>
  <div v-if="open" class="backdrop" @mousedown="onMouseDown" @mouseup="onMouseUp">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
}

.modal {
  background: #fff;
  padding: 1rem;
  min-width: 360px;
  width: 100%;
  max-width: 600px;
  border-radius: 0.5rem;
}
</style>

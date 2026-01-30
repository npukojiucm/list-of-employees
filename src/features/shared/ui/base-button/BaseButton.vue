<script setup lang="ts">
type Props = {
  label: string
  backgroundColor?: string
  textColor?: string
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  backgroundColor: '#f5f5f5',
  textColor: '#000',
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    :type="type"
    class="base-btn"
    :style="{
      '--btn-bg': backgroundColor,
      '--btn-color': textColor,
    }"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.base-btn {
  padding: 1rem;
  margin-bottom: 1rem;

  border: 1px solid transparent;
  border-radius: 0.5rem;

  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  cursor: pointer;

  background-color: var(--btn-bg, #f5f5f5);
  color: var(--btn-color, #000);

  transition:
    box-shadow 0.15s ease,
    transform 0.1s ease,
    filter 0.15s ease;
}

.base-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  filter: brightness(0.95);
}

.base-btn:active {
  transform: scale(0.97);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  filter: brightness(0.9);
}
</style>

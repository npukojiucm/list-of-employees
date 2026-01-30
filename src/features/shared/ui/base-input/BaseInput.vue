<script setup lang="ts">
import type { InputAutoCompleteAttribute } from 'vue'

type Props = {
  id: string
  name: string
  label: string
  modelValue: string | number
  autoComplete?: InputAutoCompleteAttribute
  required?: boolean
  error?: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="container">
    <label class="label" :for="id"
      >{{ label }}<span class="required" v-if="required">*</span></label
    >

    <input
      class="input"
      :class="{ error: error }"
      :id="id"
      :name="name"
      :autocomplete="autoComplete"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :required="required"
    />

    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.3rem;
}

.label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.required {
  color: #e53935;
}

.input {
  width: 100%;
  padding: 1rem;
  border: 1px solid black;
}

.input.error {
  border-color: #e53935;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 1px black;
}

.input.error:focus {
  box-shadow: 0 0 0 1px #e53935;
}

.error-text {
  margin: 0;
  color: #e53935;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>

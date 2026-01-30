<script setup lang="ts">
import { reactive, watch } from 'vue'
import BaseInput from '@/features/shared/ui/base-input/BaseInput.vue'
import type { Employee } from '@/features/employee/model/employee.model'
import BaseButton from '@/features/shared/ui/base-button/BaseButton.vue'
import { validateEmployeeForm } from '@/features/employee/lib/validateEmployeeForm'
import type { EmployeeForm, FormErrors } from '@/features/employee/model/employee-form.types'
import { mapEmployeeFormToEmployee } from '@/features/employee/lib/mapEmployeeFormToEmployee'

type Props = {
  employee?: Employee
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'submit', value: Employee): void
  (e: 'cancel'): void
}>()
const errors = reactive<FormErrors>({})

const form = reactive<EmployeeForm>({
  firstName: props.employee?.firstName ?? '',
  lastName: props.employee?.lastName ?? '',
  experience: props.employee ? String(props.employee.experience) : '',
  age: props.employee ? String(props.employee.age) : '',
  address: props.employee?.address ?? '',
})

watch(
  () => props.employee,
  (employee) => {
    form.firstName = employee?.firstName ?? ''
    form.lastName = employee?.lastName ?? ''
    form.experience = employee ? String(employee.experience) : ''
    form.age = employee ? String(employee.age) : ''
    form.address = employee?.address ?? ''

    Object.keys(errors).forEach((key) => {
      delete errors[key as keyof FormErrors]
    })
  },
  { immediate: true },
)

function handleSubmit() {
  Object.keys(errors).forEach((key) => {
    delete errors[key as keyof FormErrors]
  })

  const validationErrors = validateEmployeeForm(form)
  Object.assign(errors, validationErrors)

  if (Object.keys(validationErrors).length > 0) {
    return
  }

  emit('submit', mapEmployeeFormToEmployee(form))
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <BaseInput
      id="firstName"
      name="firstName"
      label="Имя"
      v-model="form.firstName"
      autoComplete="given-name"
      required
      :error="errors.firstName"
    />

    <BaseInput
      id="lastName"
      name="lastName"
      label="Фамилия"
      v-model="form.lastName"
      autoComplete="family-name"
      required
      :error="errors.lastName"
    />

    <BaseInput
      id="age"
      name="age"
      label="Возраст"
      v-model="form.age"
      required
      :error="errors.age"
    />

    <BaseInput
      id="experience"
      name="experience"
      label="Стаж"
      v-model="form.experience"
      required
      :error="errors.experience"
    />

    <BaseInput
      id="address"
      name="address"
      label="Адрес"
      v-model="form.address"
      autoComplete="street-address"
    />

    <div class="btn-container">
      <BaseButton label="Отмена" @click="emit('cancel')" />
      <BaseButton label="Сохранить" backgroundColor="#4caf50" textColor="#fff" type="submit" />
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;

  padding: 1rem;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
</style>

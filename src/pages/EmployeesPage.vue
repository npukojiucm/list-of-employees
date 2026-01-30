<script setup lang="ts">
import { ref } from 'vue'
import { useEmployees } from '@/features/employee/composables/useEmployees.ts'
import type { Employee } from '@/features/employee/model/employee.model.ts'
import EmployeeTable from '@/features/employee/ui/EmployeeTable.vue'
import BaseModal from '@/features/shared/ui/base-modal/BaseModal.vue'
import EmployeeForm from '@/features/employee/ui/EmployeeForm.vue'
import BaseButton from '@/features/shared/ui/base-button/BaseButton.vue'

const { employees, addEmployee, updateEmployee } = useEmployees()

const isModalOpen = ref(false)
const selectedEmployee = ref<Employee | null>(null)

function handleSelect(employee: Employee) {
  selectedEmployee.value = employee
  isModalOpen.value = true
}

function handleAdd() {
  selectedEmployee.value = null
  isModalOpen.value = true
}

function handleClose() {
  isModalOpen.value = false
}

function handleSubmit(employee: Employee) {
  if (selectedEmployee.value) {
    updateEmployee(employee)
  } else {
    addEmployee(employee)
  }

  isModalOpen.value = false
}
</script>

<template>
  <section>
    <h1>Employees</h1>

    <BaseButton label="Добавить сотрудника" @click="handleAdd" />

    <EmployeeTable :employees="employees" @select="handleSelect" />

    <BaseModal :open="isModalOpen" @close="handleClose">
      <EmployeeForm
        :key="selectedEmployee?.firstName ?? 'new'"
        :employee="selectedEmployee ?? undefined"
        @cancel="handleClose"
        @submit="handleSubmit"
      />
    </BaseModal>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
}
</style>

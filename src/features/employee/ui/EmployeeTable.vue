<script setup lang="ts">
import type { Employee } from '@/features/employee/model/employee.model'

defineProps<{
  employees: Employee[]
}>()

const emit = defineEmits<{
  (e: 'select', employee: Employee): void
}>()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Возраст</th>
        <th>Стаж</th>
        <th>Адрес</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="employee in employees"
        :key="employee.firstName + employee.lastName"
        class="row"
        @click="emit('select', employee)"
      >
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.experience }}</td>
        <td>{{ employee.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  text-align: left;
}

.table th {
  background-color: #f5f5f5;
  font-weight: 600;
}

.row {
  cursor: pointer;
}

.row:hover {
  background-color: #f5f5f5;
}
</style>

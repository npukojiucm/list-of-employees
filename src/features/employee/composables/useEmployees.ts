import { ref } from 'vue'
import type { Employee } from '@/features/employee/model/employee.model'

export function useEmployees() {
  const employees = ref<Employee[]>([
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      experience: 5,
      age: 30,
      address: 'Москва',
    },
    {
      firstName: 'Анна',
      lastName: 'Петрова',
      experience: 3,
      age: 26,
      address: 'Санкт-Петербург',
    },
  ])

  function addEmployee(employee: Employee) {
    employees.value.push(employee)
  }

  function updateEmployee(employee: Employee) {
    const index = employees.value.findIndex(
      (e) => e.firstName === employee.firstName && employee.lastName === employee.lastName,
    )
    if (index !== -1) {
      employees.value[index] = employee
    }
  }

  return {
    employees,
    addEmployee,
    updateEmployee,
  }
}

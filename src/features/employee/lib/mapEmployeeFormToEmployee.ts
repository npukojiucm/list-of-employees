import type { Employee } from '../model/employee.model'
import type { EmployeeForm } from '../model/employee-form.types'

export function mapEmployeeFormToEmployee(form: EmployeeForm): Employee {
  return {
    firstName: form.firstName,
    lastName: form.lastName,
    experience: Number(form.experience),
    age: Number(form.age),
    address: form.address,
  }
}

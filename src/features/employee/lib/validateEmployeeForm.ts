import type { EmployeeForm, FormErrors } from '../model/employee-form.types'

export function validateEmployeeForm(form: EmployeeForm): FormErrors {
  const errors: FormErrors = {}

  if (!form.age.trim()) {
    errors.age = 'Значение обязательно'
  } else if (Number.isNaN(Number(form.age))) {
    errors.age = 'Значение должно быть числом'
  } else if (Number(form.age) <= 0) {
    errors.age = 'Значение должно быть положительным числом'
  }

  if (!form.experience.trim()) {
    errors.experience = 'Значение обязательно'
  } else if (Number.isNaN(Number(form.experience))) {
    errors.experience = 'Значение должно быть числом'
  } else if (Number(form.experience) < 0) {
    errors.experience = 'Значение не может быть отрицательным'
  }

  return errors
}

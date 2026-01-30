export type EmployeeForm = {
  firstName: string
  lastName: string
  experience: string
  age: string
  address: string
}

export type FormErrors = Partial<Record<keyof EmployeeForm, string>>

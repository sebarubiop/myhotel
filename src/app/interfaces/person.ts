export interface Person {
  id: number
  creation_date: string
  rut: string
  name: string
  color: Color[]
  age: number
  address: string
}

export interface Color {
  value: string
  name: string
}

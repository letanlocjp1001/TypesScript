// const person: {
//   name: string
//   age: number
// } = {

const person: {
  name: string
  age: 30
  hobbies: string[]
  role: [number, string]
} = {
  name: 'kaneki',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'kanekinsns'],
}

person.role.push('admin')
person.role[1] = 'sadoro'

let favoriteActivities: string[]

favoriteActivities = ['Sports']
console.log(person.name)
console.log(person.role)

for (const hobbies of person.hobbies) {
  console.log(hobbies.toUpperCase())
}

export type User = {
  name: string,
  age: number,
  occupation: string
}

export const users: User[] = [
  {
    name: 'Max Musermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Muller',
    age: 23,
    occupation: 'Astronaut'
  }
]

export function logPerson(user: User) {
  console.log(`- ${user.name}, ${user.age}`)
}

console.log("Users")
users.forEach(logPerson)
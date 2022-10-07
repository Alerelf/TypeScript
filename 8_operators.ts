interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name'
let key: PersonKeys = 'name'
key = 'age' // только значения из Person

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

type UserKeyNoMeta = Exclude<keyof User, '-id' | 'createAt'> // что исключено
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // с чем работать

let u1: UserKeyNoMeta = 'name'
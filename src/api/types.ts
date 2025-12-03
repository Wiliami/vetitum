interface Person {
    name: string
    age: number
}

const person: Person = {
    name: 'Wiliamis',
    age: 28 
}


const personPartial: Partial<Person> = {}
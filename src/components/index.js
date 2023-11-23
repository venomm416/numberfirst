const users = [
    {
        id: 1,
        name: 'Chuck Norris',
    },
    {
        id: 2,
        name: 'John Doe',
    },
]

const hello = (name) => `Hello ${name}`
const message = hello('John Doe')

const user = users.find((user) => {
    return user.id === 1
})

console.log('finished')
import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/login', () => ({ name: 'John Doe', age: 22 }))
  .onError(({ code }) => {
    return code === 'NOT_FOUND' && 'Route not found'
  })
  .listen(3000)

console.log(
  `Server is running at ${app.server?.hostname}:${app.server?.port}`
)

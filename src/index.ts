import { Elysia } from 'elysia'
import { userController } from './controllers/user.controller'
import swagger from '@elysiajs/swagger'

new Elysia({ prefix: '/api' })
  .use(swagger())
  .use(userController)
  .get('/', { state: 'OK' })
  .listen(3000, ({ port }) => {
    console.log(`Server listening on port ${port}`)
  })

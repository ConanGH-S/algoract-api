import { Elysia, t } from 'elysia'
import { jwt } from '@elysiajs/jwt'

export const userController = new Elysia()
  .use(
    jwt({ name: 'jwt', secret: 'john doe' })
  )
  .post('/login',
    async ({ jwt, body: { username, password }, cookie: { auth } }) => {
      auth.set({
        value: await jwt.sign({ username, password }),
        httpOnly: true,
        maxAge: 7 * 86400,
        path: '/',
        sameSite: 'lax'
      })
    }, {
      body: t.Object({
        username: t.String({ minLength: 3 }),
        password: t.String({ minLength: 8, pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$' })
      })
    })

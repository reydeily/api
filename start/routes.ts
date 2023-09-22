import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'yoyoyo' }
})

Route.post("/register", "AuthController.register")
Route.post("/login", "AthController.login")
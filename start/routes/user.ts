
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.group(() => {
    Route.post('registers', 'AuthController.registers')
    Route.post('login','AuthController.login')
  }).prefix('api/v1')

})
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('login', 'AuthController.login')
}).prefix('api/v1')

// Route to get cotisations by activity
Route.get('/cotisation/:activityId', 'CotisationsController.getAllByActivity')

// Route to get cotisations by member
Route.get('/cotisation/:memberId', 'CotisationsController.getAllByMember')

// Route to get Members by activity
Route.get('/member/:activityId', 'MembersController.getAllByActivity')

// Route to create a new user
Route.post('api/v1/registers', 'AuthController.registers')

Route.resource('member', 'MembersController')
Route.resource('activity', 'ActivitiesController')
Route.resource('cotisation', 'CotisationsController')
Route.resource('beneficiary', 'beneficiariesController')

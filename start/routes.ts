import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'Bonsoir' }
})

Route.group(() => {

  Route.post('login', 'AuthController.login')
}).prefix('api/v1')

// Route to get cotisations by activity
Route.get('/cotisation/:activityId', 'CotisationsController.getAllByActivity')

// Route to get cotisations by member
Route.get('/cotisationByMember/:memberId', 'CotisationsController.getAllByMember')

// Route to get Members by activity
Route.get('/member/:activityId', 'MembersController.getAllByActivity')

// Route to get one activity 

Route.get('/activity/:activityId', 'ActivitiesController.getOneById')

//Route to update Member's status
Route.patch('/member/:id','MembersController.updateMemberStatus').prefix('api/v1')

Route.resource('member', 'MembersController')
Route.resource('activity', 'ActivitiesController')
Route.resource('cotisation', 'CotisationsController')
Route.post('api/v1/registers', 'AuthController.registers')
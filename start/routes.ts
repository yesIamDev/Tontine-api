
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(()=>{
  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
}).prefix("api/v1")

Route.resource("members","MembersController");
Route.resource("activity","ActivitiesController");
Route.resource("cotisation","CotisationsController");
Route.resource("beneficiary","beneficiariesController");

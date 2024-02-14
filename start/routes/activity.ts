import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('activity', 'ActivitiesController.index')
  Route.post('activity', 'ActivitiesController.store')
  Route.get('activity/:activityId', 'ActivitiesController.getOneById')
})
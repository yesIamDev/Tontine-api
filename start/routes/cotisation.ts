import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('cotisation/', 'CotisationsController.store')
  Route.get('cotisation', 'CotisationsController.index')
  Route.get('cotisation/:activityId', 'CotisationsController.getAllByActivity')
  Route.get('cotisationByMember/:memberId', 'CotisationsController.getAllByMember')
})
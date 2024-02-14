import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('member','MembersController.index')
  Route.post('member','MembersController.store')
  Route.get('/member/:activityId', 'MembersController.getAllByActivity')
  Route.patch('/member/:id','MembersController.updateMemberStatus')
})
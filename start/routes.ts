import Route from '@ioc:Adonis/Core/Route'

import './routes/activity'
import './routes/cotisation'
import './routes/member'
import './routes/user'

Route.get('/', async () => {
  return { hello: 'Tontine-api' }
})

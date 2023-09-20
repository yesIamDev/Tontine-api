import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {


  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })
    console.log('login succes')
    return { token: token.toJSON(), email: email, password: password }
  }


  public async registers({ request,  response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const username = request.input('username')

    try {
      const newUser = new User()
      newUser.email = email
      newUser.password = password
      newUser.username = username
      await newUser.save()

      return response.json("done");
    } catch (error) {
      return response.json({ erreur: error })
    }
  }
}

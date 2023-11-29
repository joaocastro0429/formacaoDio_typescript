import { Request, Response, response } from 'express'
import UserService from '../services/UserService'

export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body
        if (!user.name) {

            return response.status(400).json({ message: "usuário invalido!" })
        }

        userService.createservice(user.name, user.email)

        response.status(201).json({ message: "criado com sucesso!" })


    }

}

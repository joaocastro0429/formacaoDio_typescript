import express, { Request, Response } from "express";



import { UserController} from './controllers/UserController'

const server = express()
server.use(express.json())

const userController=new UserController()


server.get("/", (request: Request, response: Response) => {
    
    return response.json("bem vindo")
    
})

server.post("/user",userController.createUser)


server.listen(4000, () => {
    console.log("server running ")
})
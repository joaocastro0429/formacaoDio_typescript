const db = [
    {
        name: "joaocastro",
        email: "joaocastro@gmail.com"
    }

]
class UserService {
    createservice = (name: string, email: string) => {
        const user
            = {
            name,
            email

        }



        db.push(user)

        console.log("atualizando o usuário", db)

        // return response.status(201).json("cadastrado com sucesso")

    }
}

export default UserService
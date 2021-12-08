import {Request, Response} from "express";
import {createUser} from "../service/user.service"
import {getUsers} from "../service/user.service"
import logger from '../utils/logger'
import {CreateUserInput} from "../schema/user.schema"

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try{
      const user = await createUser(req.body)
      return res.status(200).send(user)
    }catch(e:any){
        return res.status(409).send(e.message);
    }
}

export async function getUsersHandler(req: Request, res: Response) {
    try{
      const users = await getUsers()
      return res.status(200).send(users)
    }catch(e:any){
        return res.status(409).send(e.message);
    }
}
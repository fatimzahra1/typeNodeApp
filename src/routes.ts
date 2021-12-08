import {Express, Request, response, Response} from 'express'
import { createUserHandler } from './controller/user.controller'
import { getUsersHandler } from './controller/user.controller'
import validateResource from './middleware/validateResource'
import { createUserSchema } from './schema/user.schema'

const routes= (app:Express)=>{
  

  app.post('/api/users',validateResource(createUserSchema), createUserHandler)
  app.get('/api/users', getUsersHandler)
}
export default routes
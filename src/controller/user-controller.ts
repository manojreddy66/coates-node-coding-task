import {Request,Response} from "express"
import { createUser } from "../service/user.service"
import { CreateUserInput } from "../schema/user-schema";

export async function createUserHandler(req: Request<{},{},CreateUserInput["body"]>,
res: Response){
try{
    const body = req.body;
const user=await createUser(req.body);
return res.send(user)
}catch(e:any){
  console.log(e)
  res.status(409).send(e.message)
}
}
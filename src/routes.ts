import {Express} from 'express'
import { createUserHandler } from './controller/user-controller'
import validateResource from './middlewares/validateResource'
import { createUserSchema } from './schema/user-schema'
import UserModel from './models/user-model'

function routes(app:Express){
    
    app.post('/users',validateResource(createUserSchema),createUserHandler);

    app.get('/users/:id',async (req,res)=>{

        const {id}=req.params;
        const user=await UserModel.findOne({
            _id:id
        });
        res.send(user)
    });

    app.delete('/users/:id',async (req,res)=>{
        const {id}=req.params;
        const user = await UserModel.findOne({
            _id: id
        });

        await UserModel.remove({
            _id: id
        });

        res.json({
            message: 'user deleted sucessfully!'
        });
       
    });
    
            
        
    
}

export default routes;
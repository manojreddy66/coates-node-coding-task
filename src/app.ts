import express from "express";
import config from 'config';
import connect from "./utils/connect"
import routes from './routes'

const app=express();

const port=config.get<number>('port')

app.use(express.json())

app.listen(port,async()=>{
    console.log("app s listning on port 8000")
   await connect();
   routes(app)
})
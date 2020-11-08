import express from "express";
import * as bodyParser from "body-parser";
import {MongoClient} from "mongodb";
import {MongoDB} from './MangoDB'

export class Server {

    public static mongoDB: MongoDB;
    public expressServer: express.Application;
    constructor() {
        this.expressServer = express();
        this.expressServer.use(bodyParser.json());
    }

    public launchServer(port: number) {
        this.expressServer.listen(port, () => {



            console.log(`Server running at port ${port}`);
        });
    }
}

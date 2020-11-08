import * as mongo from 'mongodb';
import {Db, MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017/todb';

export class MongoDB {
    public client!: mongo.MongoClient;

    constructor() {
        console.log('connecting to mongo')
        MongoClient.connect(url, {useNewUrlParser: true})
            .then(client => {
                console.log('setting client');
                this.client = client;
            })
            .catch(error => {
                console.log('error during connecting to mongo: ');
                console.error(error);
            });
    }

    public getDb(): Db {

         // if (this.client) {
            return this.client.db('todb');
        //}
    }

    public dbDisconect() {
        this.client.close(true, (err, result) => {

        })
    }
}

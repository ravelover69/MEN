import {ListDAO} from "./ListDAO";
import {MongoDB} from "./MangoDB";
import {Db} from "mongodb";
import {List} from "./schema";

export class MongoDAO implements ListDAO {

    public mongoDB: MongoDB;
    constructor() {
        this.mongoDB = new MongoDB();
    }

    public getAllList(req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").find({}).toArray((err, result) => {
            res.status(200).send(result);
        });
    }

    public getAList(query: { _id: number; }, req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").find(query).toArray((err, result) => {
            res.status(200).send(result);
        });
    };

    public getItemInList(listQuery: { _id: number; }, itemQuery: { "items._id": number; }, req:any, res:any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").find({"$and": [listQuery, itemQuery]}).toArray(function (err, result) {
            if (err) return res.status(500).send({error: err});
            res.status(200).send(result);
        //
        // In case we need to filter out JUST the item, we do something like this
        //     const r: List[] = result;
        //     for (let i = 0; i < r[0].items.length; i++)
        //         if (r[0].items[i]._id === parseInt(req.params.iid)) {
        //             res.status(200).send(r[0].items[i]);
        //         }
                   });
    };

    getAllItemsInList(query: { _id: number }, req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").find( query).project({"_id":0, "name": 0}).toArray(function (err, result) {
        if (err) return res.status(500).send({error: err})
            res.send(result)
        });
    }

    createNewList(req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        const newList: List = req.body;
        db.collection("lists").insertOne(newList, (err, resp) => {
            console.log("Data Inserted");
        })
    }

    updateListName(query: { _id: number }, req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").updateOne(query
            , {$set: {"name": req.body.name}}, function (err, result) {
            });
    }

    deleteList(query: { _id: number }, req: any, res: any): void {
        const db: Db = this.mongoDB.getDb();
        db.collection("lists").deleteOne(query, (err, result) => {
            if (err) return res.status(500).send({error: err});
            res.status(200);
        });
    }

}

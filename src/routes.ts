import * as express from "express";
import {ListService} from "./ListService";
import {MongoDB} from "./MangoDB";

export function configureRoutes(app: express.Application, listService: ListService){

    //Get all the lists
    app.get('/list/', (req, res) => {
       console.log('Get all');
       listService.getAllList(req, res);
    });

    // Get a list
    app.get('/list/:id', (req, res, next) => {
        const query = {_id:parseInt(req.params.id)};
        listService.getAList(query, req, res)
    });

    // Get all items in a list
    app.get('/list/:id/items', (req, res, next) => {
        const query = {_id:parseInt(req.params.id)};
         listService.getAllItemsInList(query, req, res);
    });

    // Get an item in a list -- need to $and operator
    app.get('/list/:lid/items/:iid', async (req, res, next) => {
        const lquery = {"_id": parseInt(req.params.lid)};
        const iquery = {"items._id": parseInt(req.params.iid)};
        listService.getItemInList(lquery, iquery, req, res);
    });

    // Create new List
    app.post('/list', (req, res) => {
       listService.createNewList(req, res);
    });

    // Update List name
    app.put('/list:/id', (req, res) => {
        const query = {_id: parseInt(req.params.id)};
        listService.updateListName(query, req, res);
    });

    // Delete List
    app.delete('/list/:lid', (req, res) => {
        const query = {"_id": parseInt(req.params.lid)};
        listService.deleteList(query, req, res);
    });

    // app.post('/', (req, res) => {
    //     console.log('Get all');
    // });
    //
    //
    //     //
    //     // db.collection("lists").updateOne({ "$and": [{"_id":2}, {"items._id": 1}] }
    //     //     , { $rename: { "description" : "it SUCKS" } }, function(err, result) {
    //     //
    //     //     });
    //     //
    //
    // });
}

import {MongoDB} from "./MangoDB";

export interface ListDAO {

    getAllList(req:any, resp:any): void;
    getAList(params: { _id: number; }, req: any, res: any): void;
    getItemInList(listQuery: { _id: number; }, itemQuery: { "items._id": number; }, req:any, res:any): void;
    getAllItemsInList(params: { _id: number; }, req: any, res: any): void;
    createNewList(req: any, res: any): void;
    updateListName(query: { _id: number }, req: any, res: any): void;
    deleteList(query: { _id: number }, req: any, res: any): void;
}

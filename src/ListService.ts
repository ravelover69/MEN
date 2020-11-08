import {ListDAO} from "./ListDAO";
import {MongoDAO} from "./MongoDAO";

export class ListService {

    private readonly listDAO!: ListDAO;
    private dbType: String = 'MONGO'

    constructor() {
        if (this.dbType === 'MONGO') {
            this.listDAO = new MongoDAO();
        }
        else if (this.dbType === 'POSTGRESS') {
            //POSTgress
        }
    }

    public getAllList(req: any, res: any) {
        this.listDAO.getAllList(req, res)
    }

    public getAList(query: { _id: number; }, req: any, res: any) {
        this.listDAO.getAList(query, req, res)
    }

    public getItemInList(listQuery: { _id: number; }, itemQuery: { "items._id": number; }, req: any, res: any) {
        this.listDAO.getItemInList(listQuery, itemQuery, req, res)
    }

    getAllItemsInList(params: { _id: number; }, req: any, res: any): void {
        this.listDAO.getAllItemsInList(params, req, res);
    }

    createNewList(req: any, res: any): void {
        this.listDAO.createNewList(req, res);
    }
    updateListName(query: { _id: number }, req: any, res: any): void {
        this.listDAO.updateListName(query, req, res);
    }

    deleteList(query: { _id: number }, req: any, res: any): void {
        this.listDAO.deleteList(query, req, res);
    }
}

import {Server} from "./server";
import {configureRoutes} from './routes'
import {ListService} from "./ListService";

const PORT = 8000;

export class Main {

    public static initialize() {

        const server = new Server();
        server.launchServer(PORT);

        const listService: ListService = new ListService()
        configureRoutes(server.expressServer, listService);



    }
}

Main.initialize();




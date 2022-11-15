import Http from "./Http";
import express from "express";

export default class ExpressAdapter implements Http {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(function (req: any, res: any, next: any) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
            next();
        });
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: any, res: any) {
            const output = await callback(req.params, req.body);
            res.json(output);
        })
    }

    listen(port: number): void {
        this.app.listen(port);
    }

}
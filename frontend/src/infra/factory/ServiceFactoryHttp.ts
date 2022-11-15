import HttpClient from "../http/HttpClient";
import ItemServiceHttp from "../services/http/ItemServiceHttp";
import OrderServiceHttp from "../services/http/OrderServiceHttp";
import ServiceFactory from "./ServiceFactory";

export default class ServiceFactoryHttp implements ServiceFactory {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) { }

    createItemService() {
        return new ItemServiceHttp(this.httpClient, this.baseUrl);
    }

    createOrderService() {
        return new OrderServiceHttp(this.httpClient, this.baseUrl);
    }
}
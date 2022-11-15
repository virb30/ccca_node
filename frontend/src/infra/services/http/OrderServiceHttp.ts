import Order from "../../../entities/Order";
import HttpClient from "../../../infra/http/HttpClient";
import OrderService from "../../../services/OrderService";

export default class OrderServiceHttp implements OrderService {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {

    }

    async save(order: Order) {
        const newOrder = await this.httpClient.post(`${this.baseUrl}/orders`, order);
        return newOrder;
    }
}
import Order from "../../../entities/Order";
import OrderService from "../../../services/OrderService";

export default class OrderServiceMemory implements OrderService {
    orders: Order[];

    constructor() {
        this.orders = []
    }

    async save(order: Order) {
        this.orders.push(order);
        return { code: "123" }
    }
}
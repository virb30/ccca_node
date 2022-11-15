import Order from "../entities/Order";

export default interface OrderService {
    save(order: Order): Promise<any>;
}
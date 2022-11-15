import RepositoryFactory from "../domain/factory/RepositoryFactory";
import OrderRepository from "../domain/repository/OrderRepository";

export default class GetOrders {
    orderRepository: OrderRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.orderRepository = repositoryFactory.createOrderRepository();

    }

    async execute(): Promise<Output[]> {
        const output: Output[] = [];
        const orders = await this.orderRepository.list();
        for (const order of orders) {
            output.push({ code: order.code.value, total: order.getTotal() });
        }
        return output;
    }
}

type Output = {
    code: string,
    total: number
}
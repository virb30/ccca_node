import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    orderItems: OrderItem[];
    total: number;
    code: string;

    constructor(readonly cpf: string) {
        this.orderItems = [];
        this.total = 0;
        this.code = "";
    }

    addItem(item: Item) {
        const existingOrderItem = this.orderItems.find((orderItem: OrderItem) => orderItem.idItem === item.idItem)
        if (existingOrderItem) {
            existingOrderItem.quantity++;
        } else {
            this.orderItems.push({ idItem: item.idItem, price: item.price, quantity: 1 });
        }
        this.total += item.price;
    }

    deleteOrderItem(orderItem: OrderItem) {
        if (orderItem.quantity > 1) {
            orderItem.quantity--;
        } else {
            this.orderItems.splice(this.orderItems.indexOf(orderItem), 1);
        }
        this.total -= orderItem.price;
    }
}
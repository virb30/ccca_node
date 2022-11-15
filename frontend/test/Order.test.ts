import { test, expect } from "vitest";
import Item from "../src/entities/Item";
import Order from "../src/entities/Order";

test("Deve criar um pedido", function () {
    const order = new Order("935.411.347-80");
    expect(order.total).toBe(0);
});

test("Deve adicionar itens no pedido", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000));
    expect(order.total).toBe(1000);
});

test("Deve adicionar vários itens iguais no pedido", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000));
    order.addItem(new Item(1, "Guitarra", 1000));
    order.addItem(new Item(1, "Guitarra", 1000));
    expect(order.total).toBe(3000);
    expect(order.orderItems).toHaveLength(1);
});

test("Deve remover itens do pedido", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000));
    order.addItem(new Item(1, "Guitarra", 1000));
    order.deleteOrderItem(order.orderItems[0])
    expect(order.total).toBe(1000);
    expect(order.orderItems).toHaveLength(1);
    order.deleteOrderItem(order.orderItems[0]);
    expect(order.total).toBe(0);
    expect(order.orderItems).toHaveLength(0);
});
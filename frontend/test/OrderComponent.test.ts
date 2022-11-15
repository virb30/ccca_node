import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import OrderComponent from "../src/components/OrderComponent.vue";
import Order from "../src/entities/Order";
import Item from "../src/entities/Item";


test("Deve criar o componente OrderComponent", async function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000));
    order.addItem(new Item(1, "Guitarra", 1000));
    order.addItem(new Item(1, "Guitarra", 1000));
    const wrapper = mount(OrderComponent, {
        props: {
            order
        }
    });
    expect(wrapper.get("#order-total").text()).toBe("3000");
    await wrapper.get(".delete-order-item").trigger("click");
    expect(wrapper.get("#order-total").text()).toBe("2000");
    await wrapper.get(".delete-order-item").trigger("click");
    expect(wrapper.get("#order-total").text()).toBe("1000");
    await wrapper.get("#save-order").trigger("click");
    expect(wrapper.emitted().saveOrder[0]).toEqual([order]);
});
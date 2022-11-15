import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import PlaceOrderView from "../src/views/PlaceOrderView.vue";
import ServiceFactoryMemory from "../src/infra/factory/ServiceFactoryMemory";

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

test("Deve criar o componente PlaceOrderView", async function () {
    const serviceFactory = new ServiceFactoryMemory();
    const wrapper = mount(PlaceOrderView, {
        global: {
            provide: {
                serviceFactory
            }
        }
    });
    await sleep(200);
    await wrapper.vm.$forceUpdate();
    expect(wrapper.get(".item").text()).toContain("Bateria");
    await wrapper.get(".add-item").trigger("click");
    await wrapper.get(".add-item").trigger("click");
    expect(wrapper.get("#order-total").text()).toBe("14000");
    await wrapper.get("#save-order").trigger("click");
    expect(wrapper.get("#new-order").text()).toBe("123");
    await wrapper.get(".delete-order-item").trigger("click");
    expect(wrapper.get("#order-total").text()).toBe("7000");
});
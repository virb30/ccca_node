import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ItemComponent from "../src/components/ItemComponent.vue";
import Item from "../src/entities/Item";

test("Deve criar o componente ItemComponent", async function () {
    const item = new Item(1, "Guitarra", 1000);
    const wrapper = mount(ItemComponent, {
        props: {
            item
        }
    });
    expect(wrapper.get(".id-item").text()).toBe("1");
    expect(wrapper.get(".item-description").text()).toBe("Guitarra");
    expect(wrapper.get(".item-price").text()).toContain("1.000,00");
    await wrapper.get(".add-item").trigger("click");
    expect(wrapper.emitted().addItem[0]).toEqual([item]);
});
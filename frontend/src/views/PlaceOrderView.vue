<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import Order from '../entities/Order';
import ServiceFactory from "../infra/factory/ServiceFactoryHttp";
import ItemComponent from "../components/ItemComponent.vue";
import Item from "../entities/Item";
import OrderComponent from "../components/OrderComponent.vue";

let state = reactive<{ items: Item[], order: Order }>({ items: [], order: new Order("935.411.347-80") });

const serviceFactory = inject("serviceFactory") as ServiceFactory;
const itemService = serviceFactory.createItemService();
const orderService = serviceFactory.createOrderService();

const addItem = function (item: Item) {
    state.order.addItem(item);
}

const saveOrder = async function (order: Order) {
    const newOrder = await orderService.save(order);
    state.order.code = newOrder.code;
}

onMounted(async () => {
    state.items = await itemService.list();
});
</script>

<template>
    <div class="main">
        <div class="items">
            <h3>Items</h3>
            <hr />
            <div class="item" v-for="item in state.items">
                <ItemComponent :item="item" @add-item="addItem"></ItemComponent>
            </div>
        </div>
        <div class="order">
            <OrderComponent :order="state.order" @save-order="saveOrder"></OrderComponent>
        </div>
    </div>
</template>

<style>
.main {
    display: flex;
    flex-direction: row;
}

.items {
    width: 70%;
}

.order {
    width: 30%;
}
</style>
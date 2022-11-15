<script setup lang="ts">
defineProps(["order"]);
defineEmits(["saveOrder"]);
</script>
<template>
    <h3>Order - Total: <span id="order-total">{{ order.total }}</span></h3>
    <hr />
    <div v-for="orderItem in order.orderItems">
        {{ orderItem.idItem }} {{ orderItem.quantity }}
        <button class="delete-order-item" @click="order.deleteOrderItem(orderItem)">
            Delete Item
        </button>
    </div>
    <br />
    <button id="save-order" @click="$emit('saveOrder', order)">Save Order</button>
    <span id="new-order">{{ order.code }}</span>
</template>
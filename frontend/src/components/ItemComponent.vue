<script setup lang="ts">
defineProps(["item"]);
defineEmits(["addItem"]);
</script>

<template>
    <span class="id-item">{{ item.idItem}}</span>
    <span class="item-description">{{ item.description}}</span>
    <span class="item-price">{{ item.formattedPrice }}</span>
    <button class="add-item" @click="$emit('addItem', item)">Add Item</button>
</template>
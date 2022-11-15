import ItemService from "../../services/ItemService";
import OrderService from "../../services/OrderService";

export default interface ServiceFactory {
    createItemService(): ItemService;
    createOrderService(): OrderService;
}
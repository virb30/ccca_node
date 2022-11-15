import ItemService from "../../services/ItemService";
import OrderService from "../../services/OrderService";
import ItemServiceMemory from "../services/memory/ItemServiceMemory";
import OrderServiceMemory from "../services/memory/OrderServiceMemory";
import ServiceFactory from "./ServiceFactory";

export default class ServiceFactoryMemory implements ServiceFactory {

    createItemService(): ItemService {
        return new ItemServiceMemory();
    }
    createOrderService(): OrderService {
        return new OrderServiceMemory();
    }
}
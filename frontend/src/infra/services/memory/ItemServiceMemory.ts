import Item from "../../../entities/Item";
import ItemService from "../../../services/ItemService";

export default class ItemServiceMemory implements ItemService {

    async list() {
        const items: Item[] = [];
        items.push(new Item(4, "Bateria", 7000));
        items.push(new Item(5, "Violão", 200));
        items.push(new Item(6, "Banjo", 1000));
        return items;
    }
}
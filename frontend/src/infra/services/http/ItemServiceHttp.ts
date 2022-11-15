import Item from "../../../entities/Item";
import ItemService from "../../../services/ItemService";
import HttpClient from "../../http/HttpClient";

export default class ItemServiceHttp implements ItemService {
    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {
    }

    async list() {
        const itemsData = await this.httpClient.get(`${this.baseUrl}/items`);
        const items: Item[] = [];
        for (const itemData of itemsData) {
            items.push(new Item(itemData.idItem, itemData.description, itemData.price));
        }
        return items;
    }
}
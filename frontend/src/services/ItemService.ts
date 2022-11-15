import Item from "../entities/Item";

export default interface ItemService {
    list(): Promise<Item[]>;
}
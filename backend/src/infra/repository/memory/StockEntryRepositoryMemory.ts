import StockEntry from "../../../domain/entity/StockEntry";
import StockEntryRepository from "../../../domain/repository/StockEntryRepository";

export default class StockEntryRepositoryMemory implements StockEntryRepository {

    save(stockEntry: StockEntry): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getStockEntries(idItem: number): Promise<StockEntry[]> {
        throw new Error("Method not implemented.");
    }
    clear(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
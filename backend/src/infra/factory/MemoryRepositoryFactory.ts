import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import StockEntryRepository from "../../domain/repository/StockEntryRepository";
import CouponRepositoryMemory from "../repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../repository/memory/OrderRepositoryMemory";
import StockEntryRepositoryMemory from "../repository/memory/StockEntryRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }
    createCouponRepository(): CouponRepository {
        return new CouponRepositoryMemory();
    }
    createStockEntryRepository(): StockEntryRepository {
        return new StockEntryRepositoryMemory();
    }

}
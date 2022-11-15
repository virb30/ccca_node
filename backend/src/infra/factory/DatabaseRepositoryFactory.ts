import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import Connection from "../database/Connection";
import OrderRepositoryDatabase from "../repository/database/OrderRepositoryDatabase";
import ItemRepositoryDatabase from "../repository/database/ItemRepositoryDatabase";
import CouponRepositoryDatabase from "../repository/database/CouponRepositoryDatabase";
import StockEntryRepository from "../../domain/repository/StockEntryRepository";
import StockEntryRepositoryDatabase from "../repository/database/StockEntryRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {

    constructor(readonly connection: Connection) { }

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryDatabase(this.connection);
    }

    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }

    createCouponRepository(): CouponRepository {
        return new CouponRepositoryDatabase(this.connection);
    }

    createStockEntryRepository(): StockEntryRepository {
        return new StockEntryRepositoryDatabase(this.connection);
    }

}
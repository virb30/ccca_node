import ExpressAdapter from "./infra/http/ExpressAdapter";
import ItemRepositoryDatabase from "./infra/repository/database/ItemRepositoryDatabase";
import PgPromiseConnectionAdapter from "./infra/database/PgPromiseConnectionAdapter";
import ItemController from "./infra/controller/ItemController";
import OrderController from "./infra/controller/OrderController";
import OrderRepositoryDatabase from "./infra/repository/database/OrderRepositoryDatabase";
import MemoryQueueAdapter from "./infra/queue/MemoryQueueAdapter";
import StockController from "./infra/controller/StockController";
import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";

const http = new ExpressAdapter();

const queue = new MemoryQueueAdapter();
const connection = new PgPromiseConnectionAdapter()
const repositoryFactory = new DatabaseRepositoryFactory(connection);
const itemRepository = repositoryFactory.createItemRepository();
const orderRepository = repositoryFactory.createOrderRepository();
new ItemController(http, itemRepository);
new OrderController(http, repositoryFactory, queue);
new StockController(queue, repositoryFactory)

http.listen(3000);
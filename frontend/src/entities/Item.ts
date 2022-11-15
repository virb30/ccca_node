export default class Item {
    formattedPrice: string;

    constructor(readonly idItem: number, readonly description: string, readonly price: number) {
        this.formattedPrice = new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(price);
    }

}
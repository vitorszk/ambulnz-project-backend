export type getOrderInputDTO = {
    id: string
}

export class Order {
    constructor(
        private id: string,
        private items: string[]
    ) {}

    public getId() {
        return this.id
    }

    public getItems() {
        return this.items
    }
} 
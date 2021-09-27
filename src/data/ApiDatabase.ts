import { getOrderInputDTO, Order } from "../model/Order";
import { PizzaInputDTO } from "../model/Pizza";
import { BaseDatabase } from "./BaseDatabase";


export class ApiDatabase extends BaseDatabase {

    private static PIZZA_TABLE_NAME = "pizza_ambulnz"
    private static ORDERS_TABLE_NAME = "order_ambulnz"
    private static ORDER_ITEMS_TABLE_NAME = "order_item_ambulnz"

    async createPizza(input: PizzaInputDTO) {
        await this.getConnection()
        .insert(input)
        .into(ApiDatabase.PIZZA_TABLE_NAME)
    }

    async getMenu() {
        return await this.getConnection()
            .select('*')
            .from(ApiDatabase.PIZZA_TABLE_NAME)
    }

    async getOrders() {
        return await this.getConnection()
            .select('*')
            .from(ApiDatabase.ORDERS_TABLE_NAME)
    }

    async getOrderById(id: string) {
        try {
            const result: any = await this.getConnection()
                .select('*')
                .from(ApiDatabase.ORDER_ITEMS_TABLE_NAME)
                .where({ id })

            return (result[0])
        } catch (error) {
            let errorMessage = "Error getting order by it's Id";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
        }
    }
}
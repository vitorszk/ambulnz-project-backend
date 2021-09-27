import { ApiDatabase } from "../data/ApiDatabase";
import { getOrderInputDTO, Order } from "../model/Order";
import { PizzaInputDTO } from "../model/Pizza";
import { GenerateId } from "../services/generateId";

export class ApiBusiness {
    async createPizza(input: PizzaInputDTO) {
        if (!input.name ||
            !input.price ||
            !input.ingredients
        ) {
            throw new Error("Alguma informação está faltando!")
        }

        const generateId = new GenerateId()
        const id: string = generateId.generate()
        const newPizza = {id, ...input}
        const apiDatabase = new ApiDatabase()

        await apiDatabase.createPizza(newPizza)
    }

    async getMenu(): Promise<any> {
        const apiDatabase = new ApiDatabase()
        const menu = await apiDatabase.getMenu()

        return menu
    }

    async getOrders(): Promise<any> {
        const apiDatabase = new ApiDatabase()
        const orders = await apiDatabase.getOrders()

        return orders
    }

    async getOrderById(input: getOrderInputDTO) {
        try {
            const order: Order = await new ApiDatabase().getOrderById(input.id)

            if (!order) {
                throw new Error("Order not found!")
            }

            return order

        } catch (error) {
            let errorMessage = "Error getting order by it's Id";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
        }
    }

}
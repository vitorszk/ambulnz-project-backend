import { Request, Response } from "express"
import { ApiBusiness } from "../business/ApiBusiness"
import { getOrderInputDTO } from "../model/Order"
import { PizzaInputDTO } from "../model/Pizza"

export class ApiController {
    async createPizza(req: Request, res: Response) {
        try {
            const input: PizzaInputDTO = {
                name: req.body.name,
                price: req.body.price,
                ingredients: req.body.ingredients
            }

            const apiBusiness = new ApiBusiness();
            const result = await apiBusiness.createPizza(input)

            res.status(200).send({message: "Novo sabor de pizza adicionado!", result, input})
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }

    async getMenu(req: Request, res: Response) {
        try {
            const apiBusiness = new ApiBusiness()
            const result = await apiBusiness.getMenu()

            res.status(200).send(result)
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }

    async getOrders(req: Request, res: Response) {
        try {
            const apiBusiness = new ApiBusiness()
            const result = await apiBusiness.getOrders()

            res.status(200).send(result)
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }

    async getOrderById(req: Request, res: Response) {
        try {
            const input: getOrderInputDTO = { id: req.params.id}

            const order = await new ApiBusiness().getOrderById(input)
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }
}
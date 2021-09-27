import express from "express"
import { ApiController } from "../controller/ApiController"


export const apiRouter = express.Router()
const apiController = new ApiController()


apiRouter.get("/pizzas", apiController.getMenu)
apiRouter.get("/orders", apiController.getOrders)
apiRouter.get("/orders/:id", apiController.getOrderById)
apiRouter.post("/new-pizza", apiController.createPizza)
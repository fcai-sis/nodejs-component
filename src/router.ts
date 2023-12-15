import { Router } from "express";
import exampleRoutes from "./features/example/example.routes.js";

const router: Router = Router();

export default (): Router => {
  exampleRoutes(router);

  return router;
};

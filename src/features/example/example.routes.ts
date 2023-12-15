import { Router } from "express";

import asyncHandler from "../../core/asyncHandler.js";
import exampleHandler from "./logic/handlers/example.handler.js";
import validateExampleMessageMiddleware from "./logic/middlewares/validateExampleMessage.middleware.js";

export default (router: Router) => {
  router.post(
    "/example/:message",

    // Validate example message
    validateExampleMessageMiddleware,

    // Handle example request
    asyncHandler(exampleHandler)
  );
};

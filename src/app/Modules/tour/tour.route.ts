import express from "express";

import { Role } from "../user/user.interface";

import {
    createTourTypeZodSchema,
    createTourZodSchema,
    updateTourZodSchema,
} from "./tour.validation";
import { TourController } from "./tour.controller";
import { checkAuth } from "../../Middlewares/CheckAuth";
import { validateRequest } from "../../Middlewares/validateRequest";

export const Tourrouter = express.Router();

/* ------------------ TOUR TYPE ROUTES -------------------- */
Tourrouter.get("/tour-types", TourController.getAllTourTypes);

Tourrouter.post(
    "/create-tour-type",
    checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    validateRequest(createTourTypeZodSchema),
    TourController.createTourType
);

Tourrouter.patch(
    "/tour-types/:id",
    checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    validateRequest(createTourTypeZodSchema),
    TourController.updateTourType
);

Tourrouter.delete("/tour-types/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), TourController.deleteTourType);

/* --------------------- TOUR ROUTES ---------------------- */
Tourrouter.get("/", TourController.getAllTours);

Tourrouter.post(
    "/create",
    checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    validateRequest(createTourZodSchema),
    TourController.createTour
);

Tourrouter.patch(
    "/:id",
    checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    validateRequest(updateTourZodSchema),
    TourController.updateTour
);

Tourrouter.delete("/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), TourController.deleteTour);



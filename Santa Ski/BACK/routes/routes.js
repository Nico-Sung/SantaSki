import express from "express";
import ScoreController from "../controllers/ScoreControllers.js";
import {
    createDonation,
    getTotalDonations,
} from "../controllers/DonationControllers.js";
import { getLastDonation } from "../controllers/DonationControllers.js";

const router = express.Router();

router.post("/scores", ScoreController.create);
router.get("/scores", ScoreController.getAll);
router.put("/scores/:id", ScoreController.update);
router.delete("/scores/:id", ScoreController.delete);

router.post("/donations", createDonation);
router.get("/donations/total", getTotalDonations);
router.get("/donations/last", getLastDonation);

export default router;

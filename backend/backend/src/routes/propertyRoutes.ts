/*
// backend/routes/propertyRoutes.ts
import express from "express";
import path from "path";

const router = express.Router();

// Route pour servir le fichier JSON
router.get("/properties", (req, res) => {
  const filePath = path.join(__dirname, "../data/properties.json");
  res.sendFile(filePath);
});

export default router;
*/

import express, { Request, Response } from "express";
import { getAllProperties } from "../services/propertyService";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const properties = getAllProperties();
  res.json(properties);
});

export default router;

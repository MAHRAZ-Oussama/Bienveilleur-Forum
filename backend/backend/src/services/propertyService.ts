/*import fs from "fs";
import path from "path";

// Charger et retourner les données des propriétés
export const getProperties = () => {
  const filePath = path.join(__dirname, "../data/properties.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};*/
interface Property {
  id: number;
  image: string;
  price: string;
  location: string;
  type: string;
  surface: string;
  cashFlow: string;
  grossYield: string;
  netYield: string;
}

export const getAllProperties = (): Property[] => [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    price: "398 000 €",
    location: "Spicheren (57350)",
    type: "Immeuble",
    surface: "184 m²",
    cashFlow: "-1 346 €",
    grossYield: "3,7 %",
    netYield: "3,4 %",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    price: "358 931 €",
    location: "Paris (75000)",
    type: "Appartement",
    surface: "64 m²",
    cashFlow: "-927 €",
    grossYield: "4,5 %",
    netYield: "4,0 %",
  },
];

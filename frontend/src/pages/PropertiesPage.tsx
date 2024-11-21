import React, { useState, useEffect } from "react";
import PropertyList from "../components/PropertyList";
import apiService from "../services/apiService";
import "./../styles/PropertiesPage.css";

// Définir l'interface pour les propriétés (TypeScript)
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

const PropertiesPage: React.FC = () => {
  // Définir l'état pour stocker les propriétés avec un type spécifique
  const [properties, setProperties] = useState<Property[]>([]);

  // Appeler l'API au montage du composant
  useEffect(() => {
    apiService
      .getProperties()
      .then((data: Property[]) => setProperties(data)) // Mettre à jour l'état avec les données reçues
      .catch((error) =>
        console.error("Erreur lors de la récupération des propriétés :", error)
      ); // Gestion des erreurs
  }, []);

  return (
    <div className="properties-page">
      {/* En-tête de la page */}
      <div className="search-header">
        <h1> Bienveilleur</h1>
        <p>Immobilier à forte rentabilité</p>
      </div>

      {/* Composant PropertyList */}
      <PropertyList properties={properties} />
    </div>
  );
};

export default PropertiesPage;

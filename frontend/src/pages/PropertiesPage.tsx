import React, { useState, useEffect } from "react";
import PropertyList from "../components/PropertyList";
import apiService from "../services/apiService";
import "./../styles/PropertiesPage.css";

// Interface pour les propriétés
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
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<{
    location?: string;
    price?: string;
    surface?: string;
    type?: string;
  }>({});

  // Charger les propriétés avec les filtres
  useEffect(() => {
    apiService
      .getFilteredProperties(filters)
      .then((data: Property[]) => setProperties(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des propriétés :", error)
      );
  }, [filters]);

  // Gestion des filtres
  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="properties-page">
      {/* En-tête de recherche */}
      <div className="search-header">
        <h1> Bienveilleur</h1>
        <p>Immobilier à forte rentabilité</p>
      </div>

      {/* Formulaire pour les filtres */}
      <div className="filters">
        <input
          type="text"
          name="location"
          placeholder="Localisation"
          value={filters.location || ""}
          onChange={handleFiltersChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Prix maximum (€)"
          value={filters.price || ""}
          onChange={handleFiltersChange}
        />
        <input
          type="number"
          name="surface"
          placeholder="Surface minimum (m²)"
          value={filters.surface || ""}
          onChange={handleFiltersChange}
        />
        <select name="type" value={filters.type || ""} onChange={handleFiltersChange}>
          <option value="">Type</option>
          <option value="Appartement">Appartement</option>
          <option value="Maison">Maison</option>
          <option value="Studio">Studio</option>
          <option value="Immeuble">Immeuble</option>
        </select>
        {/* Bouton de filtrage */}
        <button onClick={() => setFilters(filters)} className="filter-button">
          Filtrer
        </button>
      </div>

      {/* Liste des propriétés */}
      <PropertyList properties={properties} />
    </div>
  );
};

export default PropertiesPage;

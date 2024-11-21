import React from "react";
import "./../styles/PropertyList.css";

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

// Props pour le composant PropertyList
interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-item">
          <img src={property.image} alt="Property" className="property-image" />
          <div className="property-details">
            <h3>{property.price}</h3>
            <p>{property.location}</p>
            <p>{property.type}</p>
            <p>Surface : {property.surface}</p>
            <p>Cash flow : {property.cashFlow}</p>
            <p>Rendement brut : {property.grossYield}</p>
            <p>Rendement net : {property.netYield}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

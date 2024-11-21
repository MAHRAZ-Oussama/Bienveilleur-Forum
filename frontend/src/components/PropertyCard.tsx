import React from "react";
import "./../styles/PropertyCard.css";

interface PropertyCardProps {
  image: string;
  price: string;
  location: string;
  type: string;
  surface: string;
  cashFlow: string;
  grossYield: string;
  netYield: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  location,
  type,
  surface,
  cashFlow,
  grossYield,
  netYield,
}) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={type} />
        <span className="property-tag">Nouveau</span>
      </div>
      <div className="property-details">
        <h2 className="property-price">{price}</h2>
        <p className="property-location">{location}</p>
        <p className="property-type">{type} - {surface}</p>
        <div className="property-metrics">
          <div>
            <span>Cash flow/mois</span>
            <p className="negative">{cashFlow}</p>
          </div>
          <div>
            <span>Rendement brut</span>
            <p>{grossYield}</p>
          </div>
          <div>
            <span>Rendement net</span>
            <p>{netYield}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

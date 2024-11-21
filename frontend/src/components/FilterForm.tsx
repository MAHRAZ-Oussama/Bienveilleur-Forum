import React, { useState } from "react";

interface FilterProps {
    onFilter: (filters: any) => void;
}

const FilterForm: React.FC<FilterProps> = ({ onFilter }) => {
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [surface, setSurface] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilter({ location, price, surface, type });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Localisation</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label>Prix maximum</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
            </div>
            <div>
                <label>Surface minimum</label>
                <input value={surface} onChange={(e) => setSurface(e.target.value)} type="number" />
            </div>
            <div>
                <label>Type</label>
                <input value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <button type="submit">Appliquer les filtres</button>
        </form>
    );
};

export default FilterForm;

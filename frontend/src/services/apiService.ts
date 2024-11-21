const apiService = {
  // Récupération de toutes les propriétés
  getProperties: async () => {
    return [
      {
        id: 1,
        image: "https://cdn.pap.fr/photos/pap/95/c8/95c8940a26cb58add46fa3b1a0fdf5f2/9-p3.jpg",
        price: "105,000 €",
        location: "Melun (77000)",
        type: "Appartement",
        surface: "30 m²",
        cashFlow: "-500 €",
        grossYield: "6.0%",
        netYield: "5.5%",
      },
      {
        id: 2,
        image: "https://cdn.pap.fr/photos/pap/df/ae/dfae921e569cf434b633684f0e5fdff8/d-p3.jpg",
        price: "555,000 €",
        location: "La Garenne-Colombes (92250)",
        type: "Appartement",
        surface: "80 m²",
        cashFlow: "-800 €",
        grossYield: "4.0%",
        netYield: "3.8%",
      },
      {
        id: 3,
        image: "https://cdn.pap.fr/photos/pap/e3/c3/e3c3166140eccb0bf5517da0c5b8b74a/e-p3.jpg",
        price: "260,000 €",
        location: "Paris 18E (75018)",
        type: "Studio",
        surface: "29 m²",
        cashFlow: "-300 €",
        grossYield: "5.5%",
        netYield: "5.2%",
      },
      {
        id: 4,
        image: "https://cdn.pap.fr/photos/pap/71/fd/71fddef9610d4abbe1420fe13b989b32/7-p3.jpg",
        price: "310,000 €",
        location: "La Garenne-Colombes (92250)",
        type: "Appartement",
        surface: "74 m²",
        cashFlow: "-600 €",
        grossYield: "4.8%",
        netYield: "4.5%",
      },
      {
        id: 5,
        image: "https://via.placeholder.com/400x200",
        price: "398,000 €",
        location: "Spicheren (57350)",
        type: "Immeuble",
        surface: "184 m²",
        cashFlow: "-1,346 €",
        grossYield: "3.7%",
        netYield: "3.4%",
      },
      {
        id: 6,
        image: "https://cdn.pap.fr/photos/pap/95/c8/95c8940a26cb58add46fa3b1a0fdf5f2/9-p3.jpg",
        price: "105,000 €",
        location: "Melun (77000)",
        type: "Appartement",
        surface: "30 m²",
        cashFlow: "-500 €",
        grossYield: "6.0%",
        netYield: "5.5%",
      },
      {
        id: 7,
        image: "https://cdn.pap.fr/photos/pap/df/ae/dfae921e569cf434b633684f0e5fdff8/d-p3.jpg",
        price: "555,000 €",
        location: "La Garenne-Colombes (92250)",
        type: "Appartement",
        surface: "80 m²",
        cashFlow: "-800 €",
        grossYield: "4.0%",
        netYield: "3.8%",
      },
      {
        id: 8,
        image: "https://cdn.pap.fr/photos/pap/e3/c3/e3c3166140eccb0bf5517da0c5b8b74a/e-p3.jpg",
        price: "260,000 €",
        location: "Paris 18E (75018)",
        type: "Studio",
        surface: "29 m²",
        cashFlow: "-300 €",
        grossYield: "5.5%",
        netYield: "5.2%",
      },
      {
        id: 9,
        image: "https://cdn.pap.fr/photos/pap/71/fd/71fddef9610d4abbe1420fe13b989b32/7-p3.jpg",
        price: "310,000 €",
        location: "La Garenne-Colombes (92250)",
        type: "Appartement",
        surface: "74 m²",
        cashFlow: "-600 €",
        grossYield: "4.8%",
        netYield: "4.5%",
      },
      {
        id: 10,
        image: "https://via.placeholder.com/400x200",
        price: "398,000 €",
        location: "Spicheren (57350)",
        type: "Immeuble",
        surface: "184 m²",
        cashFlow: "-1,346 €",
        grossYield: "3.7%",
        netYield: "3.4%",
      },
      {
        id: 11,
        image: "https://via.placeholder.com/400x200",
        price: "358,931 €",
        location: "Paris (75000)",
        type: "Appartement",
        surface: "64 m² - 3 pièces",
        cashFlow: "-927 €",
        grossYield: "4.5%",
        netYield: "4.2%",
      },
      {
        id: 12,
        image: "https://via.placeholder.com/300",
        price: "949,000 €",
        location: "Bagnolet (93170)",
        type: "Maison",
        surface: "210 m²",
        cashFlow: "-2,000 €",
        grossYield: "4.0%",
        netYield: "3.8%",
      },
      {
        id: 13,
        image: "https://cdn.pap.fr/photos/pap/1e/b2/1eb25bc2a0f10d5dcf868487e3654477/1-p3.jpg",
        price: "680.000 €",
        location: "Montreuil (93100)",
        type: "Appartement",
        surface: "85 m²",
        cashFlow: "-2,000 €", // Exemple de cash flow à ajouter
        grossYield: "4.0%",   // Exemple de rendement brut
        netYield: "3.8%",     // Exemple de rendement net
      },
      {
        id: 14,
        image: "https://cdn.pap.fr/photos/pap/4c/c7/4cc70984641e5b91e6e361f86dfe2b51/4-p3.jpg",
        price: "420.000 €",
        location: "Marolles-En-Hurepoix (91630)",
        type: "Maison",
        surface: "141 m²",
        cashFlow: "-1,500 €", // Exemple de cash flow à ajouter
        grossYield: "3.5%",   // Exemple de rendement brut
        netYield: "3.2%",     // Exemple de rendement net
      },
      {
        id: 15,
        image: "https://cdn.pap.fr/photos/pap/c8/0f/c80f648572814d939b5424e81cbf13ac/c-p3.jpg",
        price: "699.000 €",
        location: "Châtillon (92320)",
        type: "Appartement",
        surface: "103 m²",
        cashFlow: "-1,800 €", // Exemple de cash flow à ajouter
        grossYield: "4.5%",   // Exemple de rendement brut
        netYield: "4.2%",     // Exemple de rendement net
      },
      {
        id: 16,
        image: "https://cdn.pap.fr/photos/pap/53/6d/536d165f152fc9d15d5defea7591f0bb/5-p3.jpg",
        price: "355.000 €",
        location: "Bazainville (78550)",
        type: "Maison",
        surface: "130 m²",
        cashFlow: "-1,200 €", // Exemple de cash flow à ajouter
        grossYield: "3.8%",   // Exemple de rendement brut
        netYield: "3.5%",     // Exemple de rendement net
      }
      
      
    ];
  },

  // Filtrage des propriétés avec des paramètres
  getFilteredProperties: async (
    filters: string | { location?: string; price?: string; surface?: string; type?: string }
  ) => {
    const allProperties = await apiService.getProperties();

    // Convertir les filtres si c'est une chaîne
    let parsedFilters: { [key: string]: string } = {};
    if (typeof filters === "string") {
      parsedFilters = Object.fromEntries(new URLSearchParams(filters).entries());
    } else {
      parsedFilters = filters;
    }

    // Appliquer les filtres
    const filteredProperties = allProperties.filter((property) => {
      const matchesLocation =
        !parsedFilters.location || property.location.includes(parsedFilters.location);
      const matchesPrice =
        !parsedFilters.price ||
        parseInt(property.price.replace(/[^0-9]/g, "")) <= parseInt(parsedFilters.price);
      const matchesSurface =
        !parsedFilters.surface ||
        parseInt(property.surface.replace(/[^0-9]/g, "")) >= parseInt(parsedFilters.surface);
      const matchesType =
        !parsedFilters.type || property.type.toLowerCase() === parsedFilters.type.toLowerCase();

      return matchesLocation && matchesPrice && matchesSurface && matchesType;
    });

    return filteredProperties;
  },
};

export default apiService;

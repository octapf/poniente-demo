export type GoogleReviewMock = {
  authorName: string;
  rating: 5 | 4;
  relativeTimeDescription: string;
  text: string;
};

export type MenuItemMock = {
  name: string;
  description: string;
  priceLabel: string;
};

export type SiteMock = {
  brand: {
    name: string;
    subtitle: string;
    tagline: string;
    city: string;
  };
  links: {
    instagram: string;
    whatsapp: string;
    whatsappDisplay: string;
  };
  hours: {
    label: string;
    days: string;
    open: string;
    close: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  menuPreview: MenuItemMock[];
  googleReviews: GoogleReviewMock[];
  gallery: {
    hero: string;
    items: string[];
    note: string;
  };
};

export const siteMock: SiteMock = {
  brand: {
    name: "PONIENTE, Bar de Playa.",
    subtitle: "Demo para propuesta",
    tagline: "Bar de playa · Coctelería · Atardeceres",
    city: "Mar del Plata, Buenos Aires",
  },
  links: {
    instagram:
      "https://www.instagram.com/poniente.bardeplaya?igsh=cGUybDV5ajlscDg0",
    whatsapp: "https://wa.me/5491139131406",
    whatsappDisplay: "+54 9 11 3913-1406",
  },
  hours: {
    label: "Horarios",
    days: "Lunes a domingo",
    open: "09:00",
    close: "00:00",
  },
  // Mock: coordenadas tomadas del link de Google Maps provisto.
  location: {
    lat: -38.1151281,
    lng: -57.5874867,
  },
  menuPreview: [
    { name: "Spritz Poniente", description: "Cítrico, burbujeante y fresco", priceLabel: "$" },
    { name: "Gin Tonic de autor", description: "Botánicos + tónica premium", priceLabel: "$" },
    { name: "Tabla de mar", description: "Bocados para compartir", priceLabel: "$" },
    { name: "Tacos de pesca", description: "Salsa cítrica y toque picante", priceLabel: "$" },
    { name: "Hamburguesa smash", description: "Doble medallón + papas", priceLabel: "$" },
    { name: "Postre del día", description: "Simple y elegante", priceLabel: "$" },
  ],
  googleReviews: [
    {
      authorName: "Camila R.",
      rating: 5,
      relativeTimeDescription: "Hace 2 semanas",
      text: "Atardecer increíble, música perfecta y atención excelente. Volvería sin dudar.",
    },
    {
      authorName: "Nico P.",
      rating: 5,
      relativeTimeDescription: "Hace 1 mes",
      text: "Coctelería muy buena y ambiente relajado. Ideal para ir con amigos.",
    },
    {
      authorName: "Sofía M.",
      rating: 5,
      relativeTimeDescription: "Hace 3 meses",
      text: "Excelente lugar frente al mar. Todo muy prolijo, rica comida y buena onda.",
    },
    {
      authorName: "Juan L.",
      rating: 5,
      relativeTimeDescription: "Hace 5 meses",
      text: "Muy lindo para cerrar el día. Recomendado para ver el sol bajar con un trago.",
    },
  ],
  gallery: {
    // Portada real (colocar la foto en public/images/poniente-hero-source.jpg y correr `npm run process:hero`)
    hero: "/images/poniente-hero.webp",
    items: [
      "/images/poniente-1.svg",
      "/images/poniente-2.svg",
      "/images/poniente-3.svg",
      "/images/poniente-4.svg",
      "/images/poniente-5.svg",
      "/images/poniente-6.svg",
    ],
    note:
      "Portada: foto provista por el bar (demo). Galería: ilustraciones generadas para la demo.",
  },
};

export function buildGoogleMapsUrls(lat: number, lng: number) {
  const query = `${lat},${lng}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
  return { mapsLink, mapsEmbed };
}

export function renderStars(rating: number) {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  return "★★★★★".slice(0, clamped) + "☆☆☆☆☆".slice(0, 5 - clamped);
}

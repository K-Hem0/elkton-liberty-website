export const business = {
  name: "Liberty Gas & Deli",
  shortName: "Liberty Gas",
  tagline:
    "Fuel up, grab hot breakfast, order lunch, and get back on the road fast.",
  heroBadge: "LOCAL FUEL • HOT DELI • ELKTON, VA",
  heroHeadline: "Fuel, Food & Essentials in Elkton",
  heroSubheadline:
    "Stop by Liberty Gas & Deli for gas, hot deli food, snacks, and quick service on 7th Street.",
  address: {
    street: "607 7th St",
    city: "Elkton",
    state: "VA",
    zip: "22827",
    full: "607 7th St, Elkton, VA 22827",
  },
  phone: "(540) 298-1234",
  email: "info@libertygaselkton.com",
  hours: {
    fuel: "Open 24 hours",
    deliWeekdays: "Monday–Friday: 5 AM–10 PM",
    deliWeekend: "Saturday–Sunday: 6 AM–10 PM",
    weekly: [
      { day: "Monday", hours: "5 AM–10 PM" },
      { day: "Tuesday", hours: "5 AM–10 PM" },
      { day: "Wednesday", hours: "5 AM–10 PM" },
      { day: "Thursday", hours: "5 AM–10 PM" },
      { day: "Friday", hours: "5 AM–10 PM" },
      { day: "Saturday", hours: "6 AM–10 PM" },
      { day: "Sunday", hours: "6 AM–10 PM" },
    ],
  },
  links: {
    doordash:
      "https://www.doordash.com/store/340-market-deli-elkton-35595473/77111746/?event_type=autocomplete&pickup=false",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=607%207th%20St%2C%20Elkton%2C%20VA%2022827",
    mapsEmbed:
      "https://www.google.com/maps?q=607%207th%20St%2C%20Elkton%2C%20VA%2022827&output=embed",
  },
  holtzman: {
    heroFuelBadge: "Holtzman-supplied fuel",
    supplierLine: "Fuel supplied by Holtzman",
    patrioticTitle: "Proudly Serving Elkton Drivers",
    patrioticText:
      "Stop in for reliable fuel supplied by Holtzman, hot deli food, snacks, and everyday essentials right here in Elkton.",
    logoPath: "/images/holtzman-logo.png",
    logoAlt: "Holtzman fuel supplier",
    fallbackBadge: "Holtzman Fuel Supplier",
  },
  infoStrip: [
    {
      label: "Fuel",
      text: "Holtzman-supplied fuel for everyday drivers, commuters, and travelers.",
      badge: "Holtzman supplied",
    },
    {
      label: "Deli",
      text: "Hot breakfast, lunch plates, fried chicken, pizza, and quick counter favorites.",
      badge: "Breakfast & lunch",
    },
    {
      label: "Hours",
      text: "Monday–Friday: 5 AM–10 PM. Saturday–Sunday: 6 AM–10 PM.",
      badge: "Open daily",
    },
    {
      label: "Location",
      text: "Find us at 607 7th St in Elkton, Virginia, right off your daily route.",
      badge: "Get directions",
      badgeHref: "directions" as const,
    },
  ],
  parking: "Easy in-and-out access right on 7th Street.",
} as const;

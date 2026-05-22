export type MenuSectionItem = {
  name: string;
  price: string;
  size?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  description: string;
  items: MenuSectionItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Hot breakfast sandwiches, biscuits, and morning favorites.",
    items: [
      { name: "Baloney Egg & Cheese", price: "$4.99" },
      { name: "Tenderloin Egg & Cheese", price: "$4.49" },
      { name: "Bacon Egg & Cheese", price: "$4.49" },
      { name: "Sausage Egg & Cheese", price: "$4.49" },
      { name: "Sausage Gravy Biscuit", size: "Small", price: "$3.99" },
      { name: "Sausage Gravy Biscuit", size: "Large", price: "$5.99" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Sandwiches, plates, sides, and hot deli options.",
    items: [
      { name: "Pulled Pork BBQ/Vinegar Sandwich", price: "$5.79" },
      { name: "Cheeseburger", price: "$5.79" },
      { name: "Spaghetti", size: "8 oz", price: "$3.49" },
      { name: "Spaghetti", size: "16 oz", price: "$5.99" },
      { name: "Fried Rice", size: "8 oz", price: "$3.49" },
      { name: "Fried Rice", size: "16 oz", price: "$5.99" },
      { name: "Rice or Bread with Chili Chicken", price: "$10.99" },
      { name: "Rice or Bread with Chili Beans & Beef", price: "$11.99" },
      {
        name: "Combo: Cheeseburger + Wedges + 8 oz Soft Drink",
        price: "$7.99",
      },
      { name: "Hot Dog", price: "$1.99" },
      { name: "Potato Wedges", size: "6–8 pc", price: "$2.99" },
    ],
  },
  {
    id: "fried-chicken",
    title: "Fried Chicken",
    description: "Hot fried chicken by the piece or wings.",
    items: [
      { name: "Fried Chicken Breast", size: "1 pc", price: "$3.79" },
      { name: "Fried Chicken Thigh", size: "1 pc", price: "$2.19" },
      { name: "Fried Chicken Leg", size: "1 pc", price: "$1.79" },
      { name: "Fried Chicken Wings", size: "5 pc", price: "$4.99" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    description: "Hot pizza slices — grab one fresh from the deli case.",
    items: [{ name: "Pizza Slice", price: "$3.19" }],
  },
];

/** Homepage popular picks — edit names and prices here to match menuSections. */
export const popularPreviewItems: MenuSectionItem[] = [
  { name: "Bacon Egg & Cheese", price: "$4.49" },
  { name: "Sausage Gravy Biscuit", size: "Small", price: "$3.99" },
  { name: "Pulled Pork BBQ/Vinegar Sandwich", price: "$5.79" },
  {
    name: "Cheeseburger Combo",
    price: "$7.99",
  },
  { name: "Fried Chicken Wings", size: "5 pc", price: "$4.99" },
  { name: "Pizza Slice", price: "$3.19" },
];

export const highlights = [
  {
    title: "Breakfast",
    description:
      "Egg & cheese sandwiches, tenderloin, baloney, and sausage gravy biscuits made hot every morning.",
    image: "/images/breakfast.svg",
    imageAlt: "Breakfast sandwich and biscuit",
    href: "/menu#breakfast",
  },
  {
    title: "Lunch",
    description:
      "BBQ pulled pork, cheeseburgers, spaghetti, fried rice, chili plates, hot dogs, wedges, and combos.",
    image: "/images/burger.svg",
    imageAlt: "Burger and sandwich",
    href: "/menu#lunch",
  },
  {
    title: "Fried Chicken",
    description:
      "Crispy fried chicken by the piece — breast, thigh, leg, and wings ready when you are.",
    image: "/images/snacks.svg",
    imageAlt: "Fried chicken",
    href: "/menu#fried-chicken",
  },
  {
    title: "Pizza",
    description:
      "Hot pizza slices — perfect for a quick lunch or afternoon bite.",
    image: "/images/pizza.svg",
    imageAlt: "Pizza slice",
    href: "/menu#pizza",
  },
] as const;

export function formatMenuItemLabel(item: MenuSectionItem): string {
  return item.size ? `${item.name} (${item.size})` : item.name;
}

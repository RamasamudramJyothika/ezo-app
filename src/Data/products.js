import GreenTea from "../assets/images/GreenTea.png";
import BlackTea from "../assets/images/BlackTea.png";
import LemonTea from "../assets/images/LemonTea.png";
import MasalaTea from "../assets/images/MasalaTea.png";
import cappuccino from "../assets/images/cappuccino.png";
import cappuccinoespresso from "../assets/images/cappuccinoespresso.png";
const products = [
  {
    id: 1,
    name: "Green Tea",
    categoryId: 1,
    price: 30,
    description: "Healthy green tea",
    image: GreenTea,
  },
  {
    id: 2,
    name: "Black Tea",
    categoryId: 1,
    price: 30,
    description: "Healthy black tea",
    image: BlackTea,
  },
  {
    id: 3,
    name: "Lemon Tea",
    categoryId: 1,
    price: 30,
    description: "Healthy lemon tea",
    image: LemonTea,
  },
  {
    id: 4,
    name: "Masala Tea",
    categoryId: 1,
    price: 20,
    description: "Indian masalaTea",
    image: MasalaTea,
  },
  {
    id: 5,
    name: "cappuccino",
    categoryId: 2,
    price: 130,
    description: "Indian masalaTea",
    image: cappuccino,
  },
  {
    id: 6,
    name: "cappuccino espresso",
    categoryId: 2,
    price: 150,
    description: "Indian masalaTea",
    image: cappuccinoespresso,
  }
];

export default products;


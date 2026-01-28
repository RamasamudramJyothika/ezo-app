import BlackTea from "../assets/Black Tea.png";
import GreenTea from "../assets/Green Tea.png";

import Espressocoffee from "../assets/Espressocoffee.png";
import Coldcoffee from "../assets/Coldcoffee.png";

import Cookies from "../assets/Cookies.png";
import Kitkat from "../assets/Kitkat.png";
import Oreo from "../assets/Oreo.png";
import LaysBlue from "../assets/LaysBlue.png";
import LaysGreen from "../assets/LaysGreen.png";
import LaysRed from "../assets/LaysRed.png";
import Laysyellow from "../assets/Laysyellow.png";

import Cocacola from "../assets/Cocacola.png";
import pepsi from "../assets/pepsi.png";
import Orangejuice from "../assets/Orangejuice.png";

import Milk from "../assets/Milk.png";
import Butter from "../assets/Butter.png";
import CheeseSlices from "../assets/CheeseSlices.png";
import Paneer from "../assets/Paneer.png";

import BrownBread from "../assets/BrownBread.png";
import Croissant from "../assets/Croissant.png";
import Donut from "../assets/Donut.png";
import Muffin from "../assets/Muffin.png";

import Apples from "../assets/Apples.png";
import Grapes from "../assets/Grapes.png";
import BlueBerry from "../assets/BlueBerry.png";
import Kiwi from "../assets/Kiwi.png";
import Strawberry from "../assets/Strawberry.png";
import Lichi from "../assets/Lichi.png";

const products = [
  //TEA (categoryId: 1)
  { id: 1, name: "Black Tea", categoryId: 1, price: 20, image: BlackTea },
  { id: 2, name: "Green Tea", categoryId: 1, price: 25, image: GreenTea },

  //COFFEE (categoryId: 2)
  { id: 3, name: "Espresso Coffee", categoryId: 2, price: 50, image: Espressocoffee },
  { id: 4, name: "Cold Coffee", categoryId: 2, price: 40, image: Coldcoffee },

  //SNACKS (categoryId: 3)
  { id: 5, name: "Cookies", categoryId: 3, price: 15, image: Cookies },
  { id: 6, name: "KitKat", categoryId: 3, price: 30, image: Kitkat },
  { id: 7, name: "Oreo", categoryId: 3, price: 35, image: Oreo },
  { id: 8, name: "Lays Blue", categoryId: 3, price: 20, image: LaysBlue },
  { id: 9, name: "Lays Green", categoryId: 3, price: 20, image: LaysGreen },
  { id: 10, name: "Lays Red", categoryId: 3, price: 20, image: LaysRed },
  { id: 11, name: "Lays Yellow", categoryId: 3, price: 20, image: Laysyellow },

  //BEVERAGES (categoryId: 4)
  { id: 12, name: "Coca-Cola", categoryId: 4, price: 25, image: Cocacola },
  { id: 13, name: "Pepsi", categoryId: 4, price: 25, image: pepsi },
  { id: 14, name: "Orange Juice", categoryId: 4, price: 35, image: Orangejuice },

  //DAIRY (categoryId: 5)
  { id: 15, name: "Milk", categoryId: 5, price: 30, image: Milk },
  { id: 16, name: "Butter", categoryId: 5, price: 50, image: Butter },
  { id: 17, name: "Cheese Slices", categoryId: 5, price: 90, image: CheeseSlices },
  { id: 18, name: "Paneer", categoryId: 5, price: 100, image: Paneer },

  //BAKERY (categoryId: 6)
  { id: 19, name: "Brown Bread", categoryId: 6, price: 40, image: BrownBread },
  { id: 20, name: "Croissant", categoryId: 6, price: 30, image: Croissant },
  { id: 21, name: "Donut", categoryId: 6, price: 25, image: Donut },
  { id: 22, name: "Muffin", categoryId: 6, price: 35, image: Muffin },

  //VEGETABLES / FRUITS (categoryId: 7)
  { id: 23, name: "Apples", categoryId: 7, price: 120, image: Apples },
  { id: 24, name: "Grapes", categoryId: 7, price: 90, image: Grapes },
  { id: 25, name: "Blue Berry", categoryId: 7, price: 150, image: BlueBerry },
  { id: 26, name: "Kiwi", categoryId: 7, price: 80, image: Kiwi },
  { id: 27, name: "Strawberry", categoryId: 7, price: 140, image: Strawberry },
  { id: 28, name: "Lichi", categoryId: 7, price: 100, image: Lichi },
];
export default products;

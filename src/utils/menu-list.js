import iceCreamImg from "../assets/21.png";
import cupCakeImg from "../assets/22.png";
import macaronsImg from "../assets/23.png";

export const menuList = [
  {
    id: 1,
    title: "Ice Cream",
    image: iceCreamImg,
    variant: [
      {
        name: "Strawbery",
        price: 5000,
      },
      {
        name: "Chocolate",
        price: 5000,
      },
      {
        name: "Green Tea",
        price: 5000,
      },
    ],
  },
  {
    id: 2,
    title: "Cup Cake",
    image: cupCakeImg,
    variant: [
      {
        name: "Rainbow",
        price: 5000,
      },
      {
        name: "Vanilla",
        price: 5000,
      },
      {
        name: "Tiramisu",
        price: 5000,
      },
    ],
  },
  {
    id: 3,
    title: "Macarons",
    image: macaronsImg,
    variant: [
      {
        name: "Chocolate",
        price: 5000,
      },
      {
        name: "Red Velvet",
        price: 5000,
      },
      {
        name: "Coffe",
        price: 5000,
      },
    ],
  },
];

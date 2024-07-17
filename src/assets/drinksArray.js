const drinksArray = [
  {
    name: "Jasmine Tea",
    type: "plainTea",
    hasToppings: false,
    image: "jasmine-tea",
    smPrice: "5.000",
    lgPrice: "7.000",
    desc: "A delicate green tea scented with jasmine flowers, served over ice.",
  },
  {
    name: "Earl Grey Tea",
    type: "plainTea",
    hasToppings: false,
    image: "earl-grey-tea",
    smPrice: "5.000",
    lgPrice: "7.000",
    desc: "A refreshing black tea flavored with bergamot citrus, served over ice.",
  },
  {
    name: "Lemon Jasmine Tea",
    type: "fruitTea",
    hasToppings: false,
    image: "lemon-jasmine-tea",
    smPrice: "8.000",
    lgPrice: "10.000",
    desc: "A floral jasmine tea enhanced with lemon flavor, served cold.",
  },
  {
    name: "Lemon Earl Grey Tea",
    type: "fruitTea",
    hasToppings: false,
    image: "lemon-earl-grey-tea",
    smPrice: "8.000",
    lgPrice: "10.000",
    desc: "A zesty blend of Earl Grey tea with a hint of lemon.",
  },
  {
    name: "Lemonade",
    type: "juice",
    hasToppings: false,
    image: "lemonade",
    smPrice: "10.000",
    lgPrice: "12.000",
    desc: "A classic beverage made from lemon juice, water, and sugar.",
  },
]
const sizeObj = {}
for (let drink of drinksArray) {
  sizeObj[drink.image] = "small";
}
export const itemSize = sizeObj

export default drinksArray;

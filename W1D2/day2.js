
//restaurant
class Dish {
    constructor(name, price, ingredients) {
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
    }
  
    cost() {
      return this.ingredients.reduce((acc, ingredient) => acc + ingredient.cost, 0) + this.price;
    }
  
    profit() {
      return this.price - this.cost();
    }
  }
  
  
  const pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
  console.log(pizza.cost()); // => 25
  console.log(pizza.profit()); // => 10
  }
  class Ingredient {
    constructor(name,price) {
      this.name = name;
      this.price = price
    }
  }
  const cheese = new Ingredient('Cheese', 5);
  const pepperoni = new Ingredient('pepperoni', 5);
  const dough = new Ingredient('dough', 5);
  const lettuce = new Ingredient('lettuce', 5);
  const tomato = new Ingredient('tomato', 5);


const pizza = new Dish('Pizza', [cheese, pepperoni, dough]);
const salad = new Dish('Salad', [lettuce, cheese, tomato]);
  class Restaurant {
    constructor(orders) {
      this.orders = [];
    }
  
    orderDish(dish) {
      this.orders.push(dish);
    }
  
    printOrders() {
      this.orders.forEach((dish, index) => {
        console.log(`Dish #${index}: ${dish.name}`);
      });
    }
  }
  
  const pizzahut = new Restaurant();
  
  pizzahut.orderDish(pizza);
  pizzahut.orderDish(salad);
  pizzahut.printOrders();
costFunction(pizza)

  



//functional JS
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const inventorsIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(inventorsIn1500s)

const inventorsNames = inventorsIn1500s.map(inventor => inventor.first + ' ' +  inventor.last)
console.log(inventorsNames)

const youngToOld = inventors.sort((a, b) => {
    if (a.year < b.year) return -1; // in sort -1 means a should be abow b
    if (a.year > b.year) return 1; // in sort 1 means a should be below b
    else return 0;                 // in sort 0 means a & b position doesn't matter
  });
  
  console.log(youngToOld);
//
const totalYears = inventors.map(inventor => inventor.passed - inventor.year);
console.log(totalYears);
//
const totalYearsSorted = totalYears.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    else return 0;
  });
  
  console.log(totalYearsSorted);
//
const lastNamesSorted = inventors.sort((a, b) => {
    if (a.last < b.last) return -1;
    if (a.last > b.last) return 1;
    else return 0;
  });
  console.log(lastNamesSorted)
  
// obj. keys
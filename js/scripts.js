function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 0;
  console.log("1. this.price is " + this.price);
  if (this.size === "Small") {
    this.price += 16;
  } else if (this.size === "Medium") {
    this.price += 22;
  } else {
    this.price += 26;
  }

  console.log("2. this.price is " + this.price);
    let toppingPrice = 0;
    console.log("1. topping price is " + toppingPrice);

    this.toppings.forEach(function(topping) {

    switch (topping) {
      case ("Pepperoni"):
        toppingPrice += 1;
        console.log("2. topping price is " + toppingPrice);
      default:
        break;
    }
  });

  return this.price += toppingPrice;
}



// this.toppings.forEach(function(topping) {
//   switch (topping) {
//       case ("Pepperoni"):
//           this.price += 1;
//       case ("Anchovies"):
//           this.price += 1;
//       case ("Garlic"):
//           this.price += 2;
//       case ("Onions"):
//           this.price += 1;
//       case ("Mushrooms"):
//           this.price += 2;
//       case ("Artichoke Hearts"):
//           this.price += 3;
//       default:
//           return this.price;
//           break;
//   }
// });
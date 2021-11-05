function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 0;
  if (this.size === "Small") {
    this.price += 16;
  } else if (this.size === "Medium") {
    this.price += 22;
  } else {
    this.price += 26;
  }

  console.log("Pre loop: this.price is " + this.price);
    let toppingPrice = 0;

    this.toppings.forEach(function(topping) {

    switch (topping) {
      case ("Pepperoni"):
        toppingPrice += 1;
        console.log("Pepp: Topping price is " + toppingPrice);
        break;
      case ("Anchovies"):
        toppingPrice += 1;
        console.log("Anch: Topping price is " + toppingPrice);
        break;
      case ("Garlic"):
        toppingPrice += 2;
        console.log("Garlic: Topping price is " + toppingPrice);
        break;
      case ("Onions"):
        toppingPrice += 1;
        console.log("Onions: Topping price is " + toppingPrice);
        break;
      case ("Mushrooms"):
        toppingPrice += 2;
        console.log("Mush: Topping price is " + toppingPrice);
        break;
      case ("Artichoke Hearts"):
        toppingPrice += 3;
        console.log("ArtHearts: Topping price is " + toppingPrice);
        break;
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
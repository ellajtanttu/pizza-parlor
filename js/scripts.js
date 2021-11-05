function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 0;

  if (this.size === "Small") {
    this.price += 16;
  }

  return this.price;
}
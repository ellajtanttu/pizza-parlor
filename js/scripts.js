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

  return this.price;
}

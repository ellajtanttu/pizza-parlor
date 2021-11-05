function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() {
  this.price = 0;

  return this.price;
}
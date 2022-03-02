// Business Logic:

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function () {
  this.price = 0;
  if (this.size === "Small Pie") {
    this.price += 16;
  } else if (this.size === "Medium Pie") {
    this.price += 22;
  } else {
    this.price += 26;
  }

  let toppingPrice = 0;

  this.toppings.forEach(function (topping) {
    if (topping === "Pepperoni") {
      toppingPrice += 1;
    } else if (topping === "Anchovies") {
      toppingPrice += 1;
    } else if (topping === "Garlic") {
      toppingPrice += 2;
    } else if (topping === "Onions") {
      toppingPrice += 1;
    } else if (topping === "Mushrooms") {
      toppingPrice += 2;
    } else {
      toppingPrice += 3;
    }
  });

  return (this.price += toppingPrice);
};

// User Interface Logic:

$(document).ready(function () {
  $("#orderForm").submit(function (event) {
    event.preventDefault();
    const inputPieSize = $(
      "input:radio[name=inlineRadioOptions]:checked"
    ).val();
    let inputToppings = [];
    let userPizza = new Pizza(inputPieSize, inputToppings, 0);
    if (inputPieSize !== undefined) {
      $("#oops").hide();
      $("#receiptContainer").show();
      $.each($("input[name='toppingName']:checked"), function () {
        inputToppings.push($(this).val());
      });

      $("#recTotalPrice").html(userPizza.pizzaPrice());
      $("#recSize").html(inputPieSize);
      if (inputPieSize === "Small Pie") {
        $("#recSizeCost").html(16);
      } else if (inputPieSize === "Medium Pie") {
        $("#recSizeCost").html(22);
      } else {
        $("#recSizeCost").html(26);
      }
      inputToppings.forEach(function (element) {
        if (element === "Pepperoni") {
          $("#addPeppRec").show();
        } else if (element === "Anchovies") {
          $("#addAnchRec").show();
        } else if (element === "Garlic") {
          $("#addGarRec").show();
        } else if (element === "Onions") {
          $("#addOnionRec").show();
        } else if (element === "Mushrooms") {
          $("#addMushRec").show();
        } else {
          $("#addArtRec").show();
        }
      });
      $("#clearOrder").click(function (event) {
        event.preventDefault();
        $("#receiptContainer").hide();
        document.getElementById("orderForm").reset();
      });
    } else {
      $("#oops").show();
    }
  });
});

# Pizza Parlor

#### Friday Project: A simple pizza price calculator, where the price is determined by user selections.
---
#### By _**Ella Tanttu**_

## Technologies Used

- CSS3
- HTML5
- JAVAscript

## Description

_TO BE ADDED UPON COMPLETION_

## View Live Application on GH-Pages
_PLACE LINK TO LIVE SITE HERE_

## Setup & Installation Instructions

1. Navigate to https://github.com/pizza-parlor in your browser
2. Clone this repository to your desktop
3. Navigate to the top level of the directory
4. Connect to your github repository
5. open pizza-parlor/index.html in your browser
6. Open files in VS Code to edit

## Known Bugs

No known issues

## License

_MIT Copyright (c) 2021 Ella Tanttu_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_

---


# Whiteboarding

## Prompt
> Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.\
    - Allow the user to choose toppings and size for the pizza they'd like to order.\
    - Create a pizza object constructor with properties for toppings and size.\
    - Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.\
> Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

## Analysis & Brainstorm

I will need: 
- UI - form for user to input choices for their pizza
- UI - Results div that will tell user final cost
- BL - pizza object constructor
    - toppings - array(?) - checkboxes - will need a loop
    - size - string - radio/dropdown
- BL - prototype method
     - switch statement for the checkboxes/toppings values
     - switch/branch for the size

Original price - determined by size first

Size Options:
- Small - 16
- Medium - 22
- Large - 26

Toppings Options:
- Pepperoni +1
- Anchovies +1
- Garlic +2
- Onions +1
- Mushrooms +2
- Artichoke Hearts +2

*maybe after initial logic is in place, set the formula to allow three toppings without additional cost???

Order of events:
1. page loads, user chooses pizza size and toppings and submits form.
2. upon submission, a new pizza object is created, userPizza()
3. userPizza has a string property for it's size, and an array with all of it's toppings in it.
4. UI will run the pizzaPrice() method on the pizza object and calculate the total cost.
5. UI will print the final cost (along with a summary of the pizza) on the DOM for the user to see.

## Pseudocode
      function Pizza(size, toppings) {
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

        this.toppings.forEach(function(topping) {
            switch (topping) {
                case ("Pepperoni"):
                    this.price += 1;
                case ("Anchovies"):
                    this.price += 1;
                case ("Garlic"):
                    this.price += 2;
                case ("Onions"):
                    this.price += 1;
                case ("Mushrooms"):
                    this.price += 2;
                case ("Artichoke Hearts"):
                    this.price += 3;
                default:
                    return this.price;
                    break;
            }
        });
        return this.price;
    }

---
# TDD

### **_Describe: Pizza(size, toppings)_**
---
  _Test:_ "It should return a pizza object when a new pizza variable is created."\
  _Code:_

      let testPizza = new Pizza();
      testPizza;

  _Expected Result:_

      < Pizza {size: undefined, toppings: undefined}
---
  _Test:_ "It should return a pizza object with defined properties if variable is declared with properties"\
  _Code:_

      let testPizza = new Pizza("Small", ["Pepperoni", "Anchovies", "Mushrooms"]);
      testPizza;

  _Expected Result:_

      < Pizza {size: "Small", toppings:  ["Pepperoni", "Anchovies", "Mushrooms"]}
---
  _Test:_ "It should return a pizza object with a price property when a new object is created"\
  _Code:_

      let testPizza = new Pizza();
      testPizza;

  _Expected Result:_

      < Pizza {size: undefined, toppings: undefined, price: undefined}

---
### **_Describe: Pizza.prototype.pizzaPrice()_**
---
  _Test:_ "It should return Pizza.price of 0 when pizzaPrice() is run on a Pizza object."\
  _Code:_

      let testPizza = new Pizza();
      testPizza.pizzaPrice();
      testPizza.price;

  _Expected Result:_

      < 0
---
  _Test:_ "It should return Pizza.price of 16 when pizzaPrice() is run on a Pizza object with size === 'Small'."\
  _Code:_

      let testPizza = new Pizza();
      testPizza.size = "Small";
      testPizza.pizzaPrice();
      testPizza.price;

  _Expected Result:_

      < 16
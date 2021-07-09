{
    carList =[ /* Again, I changed "carList": to carList= */
       {
          "id":11,
          "make":"Ford",
          "model":"Escort",
          "color":"red",
          "price":5400.32
       },
       {
          "id":12,
          "make":"Chevrolet",
          "model":"Malibu",
          "color":"blue",
          "price":32400.10
       },
       {
          "id":13,
          "make":"Chevrolet",
          "model": "Corvette",
          "color":"Yellow",
          "price":95400.22
       },
 
    {
          "id":15,
          "make":"Toyota",
          "model": "Camry",
          "color":"Silver",
          "price":10700.99
       }
    ]
} 

/*I made several functions for each function, which selects a similar property from all objects, eg all makes. Soon after, providing a message like "Look at the console!".
But unfortunately I couldn't bring it to the html and leave it with a simpler purpose D: */

function make(){
   for (let carsmake of carList){
      console.log("For cars make, we have: " + carsmake.make)
      document.getElementById("result-message").innerHTML = "Please, check the console for more information!"
   }
}

function model(){
   for (let carsmodel of carList){
      console.log("For cars model, we have: " + carsmodel.model)
      document.getElementById("result-message").innerHTML = "Please, check the console for more information!"
   }
}

function color(){
   for (let carscolor of carList){
      console.log("For cars colors, we have: " + carscolor.color)
      document.getElementById("result-message").innerHTML = "Please, check the console for more information!"
   }
}

function price(){
   for (let carsprice of carList){  
      console.log("We have the following prices: " + "$"+ ' ' +carsprice.price)
      document.getElementById("result-message").innerHTML = "Please, check the console for more information!"
   }
}
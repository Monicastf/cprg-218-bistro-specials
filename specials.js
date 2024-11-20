const currentDate = new Date();
console.log(currentDate);
//new Date works by pulling the CURRENT date
//const = constant
//let currentDay = 6;
//^"hard coding" for testing
let currentDay = currentDate.getDay();
console.log(currentDay); /*counts from 0-6, sunday is 0, saturday 6 */

    if(currentDay == 0) {
        //sunday
        //document.getElementById("special_name").innerHTML = "Sunday - $9 Deluxe Burger & Fries"
        special_name.innerHTML = "Sunday - $9 Deluxe Burger & Fries";
        //treats it as a variable
        //== is asking a question is it ___? if yes then do this
        special_image.src = "images/sunday.jpg";
        special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
}

if (currentDay == 1) {
    //monday
    special_name.innerHTML = "Monday - $12 Chicken Penne Alfredo";
    special_image.src = "images/monday.jpg";
    special_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included.";
}

if (currentDay == 2) {
    //tuesday
    special_name.innerHTML = "Tuesday - $10 Any Small Pizza";
    special_image.src = "images/tuesday.jpg";
    special_description.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}

if (currentDay == 3) {
    //wednesday
    special_name.innerHTML = "Wednesday - 35¢ Chicken Wings";
    special_image.src = "images/wednesday.jpg";
    special_description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.";
}

if (currentDay == 4) {
    //thursday
    special_name.innerHTML = "Thursday - $9 Fish and Chips";
    special_image.src = "images/thursday.jpg";
    special_description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}

if (currentDay == 5) {
    //friday
    special_name.innerHTML = "Friday - Half Price Cocktails All Day";
    special_image.src = "images/friday.jpg";
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}

if (currentDay == 6) {
    //saturday
    special_name.innerHTML = "Saturday - $10 Jumbo Greek Salad";
    special_image.src = "images/saturday.jpg";
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}

//else if after the first true one, stop looking for the rest for possible matches
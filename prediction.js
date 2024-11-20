shake.addEventListener ("click", function (){
    console.log("shake it off");
let response = Math.random();
//always a # between 0-1
console.log(response);
response = Math.floor(Math.random() * 11); //0-10
//floor -> round the # down
console.log(response);
//response = Math.floor(Math.random() *9) +1 -> to generate 1-10

}
)
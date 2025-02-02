const searchMeal = document.getElementById("input");
const nomeal = document.querySelector(".nomeal");



function fetchMeal(){

    if(searchMeal.value){
        let URL = `https:/themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`;
        fetch(URL)
        .then((res) => res.json())
        .then((meals) => showMeal(meals.meals));
        document.querySelector(".nomeal").style.display = "none";

    }else{
        alert("search for a food first");
        document.querySelector(".nomeal").style.display = "block";


    }

   
}

function showMeal(meals){
    for (let meal of meals){
       document.querySelector(".container-main").innerHTML  += `
        <div class="content text-white  ">
        <img src=${meal.strMealThumb} alt=${meal.strmeal}>
        <h3 class=" text-xl text-center">${meal.strMeal}</h3>
        <p class="text-gray-300 text-center">${meal.strInstructions.slice(0, 120)}... </p>
        <button class="bg-slate-400 p-0.5 text-sm"> <a href=${meal.strYoutube} target="_blank">watch Now</a> </button>
        <button  class="bg-slate-400 p-0.5 text-sm" onclick="loadDetailes('${meal.idMeal}')" >View more</button>
        
    </div>
       `

    }



}

function loadDetailes(id){
    console.log("lookup" , id);
    let URL = `https:/themealdb.com/api/json/v1/1/lookup.php?i=52772=${id}`;
    fetch(URL)
    .then((res) => res.json())
    .then((meals) => showMealDetails(meals.meals));

}










function showMealDetails(meal){
    console.log(meal);
    // const details = document.getElementById("details");
    details.classList.add("visible");
    details.classList.remove("invisible");

    document.querySelector("#details").innerHTML =`
      <div class="bg-white rounded-2xl shadow-lg p-6 w-[70%] min-h-[400px]">
          <h2 class="text-xl font-bold text-gray-800 mb-4">${meal.strMeal}</h2>
          <p class="text-gray-600 mb-6">
           ${meal.strInstructions}
          </p>
          <div class="flex justify-end">
            <a " href=${meal.strYoutube}

              id="close-popup"
              class="px-4 py-2 bg-blue-500 text-white gap-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              watch
            </a>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none" onclick="closeBtn()"> close</button>

          </div>
        </div>
    `;  
}

   function closeBtn(){
    details.classList.add("invisible");
    details.classList.remove("visible");
   }



const search = document.getElementById("search");
search.addEventListener("click", () =>{
    fetchMeal();
    // nomeal.style.display="none";
    


})

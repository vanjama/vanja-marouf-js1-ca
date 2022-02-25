const resultsContainer = document.querySelector(".results");

const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacter() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const user = json.results;

        user.forEach(function(user) { 
            resultsContainer.innerHTML += `<a href="details.html?id=${user.id}" class="card">
            <h1 class="name">${user.name}</h1> 
            <h2 class="name">${user.gender}</h2>
            <h3 class="name">${user.species}</h3>                                                                                                                                                                                                                                                                                                           

        </a>`;
    });
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error");
    }
    
}

fetchCharacter();

















































/*function fetchData(){
   console.log(fetch("https://rickandmortyapi.com/api/character").then(response => {
   console.log(response);
   if (!response.ok){
       return Error("Error")
   }
   return response.json();
     
   }).then(data =>{
       console.log (data.results);
       const html = data.results
       .map(element => {
           return ` 
           <div class="data">
           <p>Name:${element.name}</p>
           <p>Species:${element.species}</p>
           <p>Gender${element.gender}</p>
           </div>
           `;
          
       }).join("");
   console.log(html);
           document.querySelector("#name").innerHTML = (html)
   
   }).catch(error => {
       console.log(error)
   }));
}


           
fetchData();

*/

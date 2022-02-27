const resultsContainer = document.querySelector(".users");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);


const url = "https://rickandmortyapi.com/api/character";//+id?KEY

async function fetchUser() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        resultsContainer.innerHTML = "";

        const users = json.results;{
            users.slice(Math.max(users.length = 3 ))
        }

        users.forEach(function(user) {
            resultsContainer.innerHTML += `<a 
                                               
                                                <div class="details">
                                                    <h4 class="name">${user.name}</h4>    
                                                    <h5 class="name">${user.gender}</h5> 
                                                    <h6 class="name">${user.species}</h6>                                                                                                                                                     
                                                </div>
                                            </a>`;
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = ("error", error);
    }
    
}

fetchUser();
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       




























































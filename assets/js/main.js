
console.log("sucesso!!!!!")

//novo arquivo poke-api.js nao precisou mais dessas variaveis
//const offset =0;
//const limit = 10;
//const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//const pokemonList = document.getElementById('listadePokemons')
const listapokems = document.getElementById("listadePokemons")
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 14 //151
const limit = 5
let offset = 0;

function converterHtml(pokem)
{
    /* original
    <li class="pokemon">
      <span class="number"> #001 </span>
      <span class="name">${pokem.name}</span>
      <div class="detail">
         <ol class="types">
             <li class="type">grass</li>
             <li class="type">poison</li>
         </ol>
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokem.name}">
      </div>
    </li>
    */
    return `
    <li class="pokemon ${pokem.type}">
    <span class="number">#${pokem.number}</span>
    <span class="name">${pokem.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokem.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokem.photo}"
             alt="${pokem.name}">
    </div>
    </li>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(converterHtml).join('')
        listapokems.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


//<ol id="listadePokemons" class="pokemons"></ol>


//listapokems.innerHTML += '<li>teste</li>'

// agora nao usamos, pois a api separada em outro arquivo poke-api.js
//fetch(url)
//.then((response) => response.json())
//.then((jsonBody) => jsonBody.results)


/*
tudo em uma linha somente de programacao  
pokeApi.getPokemons().then((listapok = []) => { 
    listapokems.innerHTML = listapok.map(converterHtml).join(''))
})
*/

/*
pokeApi.getPokemons().then((listapok = []) => {
   
     const novaLista= listapok.map((valor) => {
      
         return converterHtml(valor)
        //console.log(valor)
        //console.log(index)
        //console.log(array)
        //console.log(pegapokem)
        //listapokems.innerHTML += `<li>${pegapokem.name}</li>`
        //listapokems.innerHTML += converterHtml(pegapokem)
     })
   
     const novoHtml = novaLista.join('')//novos recursos com uso de map
   
     listapokems.innerHTML = novoHtml


    ///for(let i=0; i<listapok.length; i++)
    ///{
     ///   const pegapokem = listapok[i]
        //console.log(converterHtml(pegapokem))
        //listapokems.innerHTML += `<li>${pegapokem.name}</li>`
    ///    listapokems.innerHTML += converterHtml(pegapokem)
      
      listapokems.innerHTML += `
      <li class="pokemon">
      <span class="number"> #001 </span>
      <span class="name">${pegapokem.name}</span>
      <div class="detail">
         <ol class="types">
             <li class="type">grass</li>
             <li class="type">poison</li>
         </ol>
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pegapokem.name}">
      </div>
      </li>
        `
       
    ///}//for
})

.catch((error) =>  console.error(error))
.finally(() => console.log("Fetch concluído!"))


/*
fetch(url)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.error('Error:', error);
})
.finally(function(){
    console.log("Fetch concluído!");
})


const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }

}*/



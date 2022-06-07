
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = response.json()
  return data
}

// ---- Deafault Pokemon ----//


async function init2() {
  const dayBirth = document.getElementById('selectDayBirthday');
  const monthBirth = document.getElementById('selectMonthBirthday');

  const dayValue = parseInt(dayBirth.value);
  const monthValue = parseInt(monthBirth.value);

  console.log(dayValue)
  console.log(monthValue)

  const dateCalculated = calculateDay(monthValue, dayValue);
  //console.log(dateCalculated + "This is the result")

  const pokemon = await getPokemon(dateCalculated);
  //console.log(pokemon)
  secondUpdatePokemon(pokemon)
}

//init2();

async function init() {
  const loadAscendent = loadPokemonAscendent();
  //const randomPokemon = Math.floor(Math.random() * 151);
  const pokemon = await getPokemon(loadAscendent);
  updatePokemon(pokemon)
}

//init();

async function init3() {
  const loadDescendent = loadPokemonDescendent();

  const pokemon = await getPokemon(loadDescendent);
  thirdUpdatePokemon(pokemon)
}

//init3();


//---- Info Pkemon ----//

function updatePokemon(pokemon){
  console.log(pokemon);
  window.image.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  window.pokemon.textContent = pokemon.name;
  window.weight.textContent = pokemon.weight/10;
  window.height.textContent = pokemon.height/10;
  window.types1.textContent = pokemon.types[0].type.name;
  window.types2.textContent = pokemon.types[1].type.name;
}

function secondUpdatePokemon(pokemon){
  window.secondImage.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  window.secondPokemon.textContent = pokemon.name;
  window.secondWeight.textContent = pokemon.weight/10;
  window.secondHeight.textContent = pokemon.height/10;
  window.secondTypes1.textContent = pokemon.types[0].type.name;
  window.secondTypes2.textContent = pokemon.types[1].type.name;
}

function thirdUpdatePokemon(pokemon){
  window.thirdImage.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
  window.thirdPokemon.textContent = pokemon.name;
  window.thirdWeight.textContent = pokemon.weight/10;
  window.thirdHeight.textContent = pokemon.height/10;
  window.thirdTypes1.textContent = pokemon.types[0].type.name;
  window.thirdTypes2.textContent = pokemon.types[1].type.name;
}


function calculateDay(monthBirthday, dayBirthday) {
  switch(monthBirthday){
    case 1: // January
      const numPokemon = (dayBirthday * 12.5)/31;
      return Math.floor(numPokemon);
    break;

    case 2: // February
      const numPokemon1 = ((dayBirthday + 29) * (12.5/29));
      const helpNumber = numPokemon1;
      return Math.floor(helpNumber);
    break;

    case 3: // March
      const numPokemon2 = (dayBirthday + 30) * (12.5/31);
      const helpNumber1 = numPokemon2;
      return Math.floor(helpNumber1);
    break;    

    case 4: // April
      const numPokemon3 = Math.floor((dayBirthday + 90) * (12.5/30));
      return numPokemon3;
    break; 

    case 5: // May
      const numPokemon4 = Math.floor((dayBirthday + 121) * (12.5/31));
      return numPokemon4;
    break; 

    case 6: // June
      const numPokemon5 = Math.floor((dayBirthday + 151) * (12.5/30));
      return numPokemon5;
    break; 

    case 7: // July
      const numPokemon6 = Math.floor((dayBirthday + 182) * (12.5/31));
      return numPokemon6;
    break; 

    case 8: // August
      const numPokemon7 = Math.floor((dayBirthday + 213) * (12.5/31));
      return numPokemon7;
    break; 

    case 9: // September
      const numPokemon8 = Math.floor((dayBirthday + 243) * (12.5/30));
      return numPokemon8;
    break; 

    case 10: // October
      const numPokemon10 = Math.floor((dayBirthday + 274) * (12.5/31));
      return numPokemon10;
    break; 

    case 11: // November
      const numPokemon11 = Math.floor((dayBirthday + 304) * (12.5/30));
      return numPokemon11;
    break; 

    case 12: // December
    const numPokemon12 = Math.floor((dayBirthday + 336) * (12.5/31));
    return numPokemon12;
    break; 
  } 
}

function loadPokemonAscendent(){
  const dayBirth = document.getElementById('selectDayBirthday');
  const monthBirth = document.getElementById('selectMonthBirthday');

  const dayValue = parseInt(dayBirth.value);
  const monthValue = parseInt(monthBirth.value);

  //console.log(dayValue)
  //console.log(monthValue)

  const dateCalculated = calculateDay(monthValue, dayValue);
  console.log(dateCalculated)

  if(dateCalculated <= 50){
    return dateCalculated + 50;
  }
    else if(dateCalculated > 50 && dateCalculated <= 100){
      return dateCalculated + 50;
    }
      else {
        return dateCalculated - 100;
      }
}

function loadPokemonDescendent(){
  const dayBirth = document.getElementById('selectDayBirthday');
  const monthBirth = document.getElementById('selectMonthBirthday');

  const dayValue = parseInt(dayBirth.value);
  const monthValue = parseInt(monthBirth.value);

  console.log(dayValue)
  console.log(monthValue)

  const dateCalculated = calculateDay(monthValue, dayValue);
  console.log(dateCalculated)

  if(dateCalculated <= 50){
    return  151 - dateCalculated;
  }
    else if(dateCalculated > 50 && dateCalculated <= 100){
      return dateCalculated - 50;
    }
      else {
        return dateCalculated - 50;
      }
}

// ----- Listener ------ //

//let windowSearchValue = window.search.value;
//console.log(windowSearchValue);
/*
addEventListener('change', async() => {
  //const pokemon = await getPokemon(window.search.value);
  const pokemon = await getPokemon(sumaTotal.value);
  console.log(pokemon);
  updatePokemon(pokemon); 
})

addEventListener('change', async() => {
  //let getPokemonVar = window.search.value;
  let getPokemonVar = sumaTotal.value;
  let getParse = parseInt(getPokemonVar, 10);
  let secondGetPokemon = getParse + 1;
  const pokemon = await getPokemon(secondGetPokemon);
  secondUpdatePokemon(pokemon);  
  //console.log(pokemon);
})

addEventListener('change', async() => {
  //let getPokemonVar = window.search.value;
  let getPokemonVar = sumaTotal.value;
  let getParse = parseInt(getPokemonVar, 10);
  let secondGetPokemon = getParse + 2;
  const pokemon = await getPokemon(secondGetPokemon);
  thirdUpdatePokemon(pokemon);  
  //console.log(pokemon);
})

//--- Calculos de fecha para obtener el pokemon ---//
//--- Sólo suma los tres numeros y obtiene uno de los primeros 150 Pokemon---//

addEventListener('change', () => {
  let getDay = birthdayInfo.day.value;
  let getMonth = birthdayInfo.month.value;
  let getYear = birthdayInfo.year.value;
  let getParseDay = parseInt(getDay, 10);
  let getParseMonth = parseInt(getMonth, 10);
  let getParseYear = parseInt(getYear, 10);
  let sumaTotal = getParseDay + getParseMonth + getParseYear;
  console.log(sumaTotal);
}) 
*/
//DESARROLLA AQUI TUS SOLUCIONES
//Ej 1
async function getRandomPokemon () {
  try{
    randomNum = Math.floor(Math.random()* 1025) + 1;
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    let data = await res.json();
    return data
} catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

//Ej 2
async function getImageAndName (pokemon){
 try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
}catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

//Ej 3
async function printImageAndName () {
   try{
    let data = await getRandomPokemon();
    // let res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    // let data = await res.json();
    let section =`<section>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h1>${data.name}</h1>
                </section>`
     document.body.innerHTML += section
    return section;
 } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
printImageAndName().then(data => console.log(data));

//Ej 4
async function getRandomDogImage () {
  try {
    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await res.json();
    return data.message;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

//Ej 5
async function getRandomPokemonImage () {
  try{
    let data = await getRandomPokemon();
    return data.sprites.front_default;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

//Ej 6
async function printPugVsPikachu () {
  try{
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    let pikachuData = await res.json();
    let res2 = await fetch('https://dog.ceo/api/breed/pug/images')
    let pugData = await res2.json();

    let section =`<section>
                <img src="${pikachuData.sprites.front_default}"><h1>'VS'</h1><img src="${pugData.message[0]}">
                </section>`
    document.body.innerHTML += section
    return section;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
printPugVsPikachu().then(data => console.log(data));

//Ej 7
async function getRandomCharacter () {
  try {
    randomNum = Math.floor(Math.random()* 826) + 1;
    let res = await fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
    let data = await res.json();
    return data;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

//Ej 8 & 9
async function getRandomCharacterInfo () {
  try{
    let data = await getRandomCharacter();
    let res = await fetch(data.episode[0]);
    let episodeData = await res.json();
    
    // let res = await fetch('https://rickandmortyapi.com/api/character/1')
    // let data = await res.json();

    let characterInfo = {
      img: data.image,
      name: data.name,
      episodes: data.episode,
      firstEpisode: episodeData.name,
      dateEpisode: episodeData.air_date
    }
    
    let section = `<section>
                <img src="${characterInfo.img}" alt="${characterInfo.name}">
                <h1>${characterInfo.name}</h1>
                <h3>First Episode: ${characterInfo.firstEpisode}</h3>
                <h3>Air Date: ${characterInfo.dateEpisode}</h3> 
                <p>${characterInfo.episodes}</p>
                </section>`

    document.body.innerHTML += section
    return characterInfo;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
getRandomCharacterInfo().then(data=> console.log(data));

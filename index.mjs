import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/';
const OUTPUT_FOLDER = './images';
const TOTAL_POKEMON = 150;

const downloadImagesPokemon = async () => {
    console.log(`🪄 Getting the images for the first [${TOTAL_POKEMON}] Pokemons!`);
    console.time('🕒 Time getting pokemons!');

    for  (let pokeNumber = 1; pokeNumber <= TOTAL_POKEMON; pokeNumber++) {
        console.log(` Getting Pokemon ${pokeNumber}`);
        
        const url = `${BASE_URL}${pokeNumber}.svg`;
        const destPath = `${OUTPUT_FOLDER}/pokemon-${pokeNumber}.svg`;

        const data = await fetch(url);
        // Gets the stream and output in the content in dest 
        await data.body.pipe(fs.createWriteStream(destPath))
    }

    console.timeEnd('🕒 Time getting pokemons!');
}

// Start magic 🪄
downloadImagesPokemon();
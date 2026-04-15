export function getImg(pokeNum) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNum).then(
    async (response) => {
      const pokeRespuesta = await response.json();
      const pokeImg =
        pokeRespuesta.sprites.other["official-artwork"].front_default;
      return await pokeImg;
    }
  );
}

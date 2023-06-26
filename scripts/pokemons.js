let wrapper = document.querySelector(".main__wrapper")


let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50'

  async function getPokemons() {
      const getData = async() => {
          try {
              const res = await fetch(apiUrl)
              const data = await res.json();
              return data.results;
          } catch (e) {
              console.error(e);
              return [];
          }
          
      }
      let allPokemon = await getData()
      return allPokemon.forEach(el => {
          drawCard(el)
          console.log(el)
          
      });
  }
getPokemons()

drawCard = (el) => {
    let title = document.createElement("p")
    title.classList = "main__title"
    wrapper.appendChild(title)
    title.innerText = el.name

    title.addEventListener("click", (e) => {
        
    })
}

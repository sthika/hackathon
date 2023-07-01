let wrapper = document.querySelector(".main__wrapper")

let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=21'

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
      });
  }
getPokemons()

async function getAllPokemons(el) {
    const getUrl = async() => {
    try {
        const res = await fetch(el.url)
        const data = await res.json();
        return data
    } catch (e) {
        console.error(e);
        return [];
    }
}
const pokemons = await getUrl()
return pokemons
}

const drawModal = async (el) => {
    // modal.remove()
    const res = await getAllPokemons(el)
    console.log(res)

   let modal = document.createElement('div')
    wrapper.appendChild(modal)
    modal.className = 'modal'

    let imageWrap = document.createElement('div')
    modal.appendChild(imageWrap)
    imageWrap.className = 'modal__img'

    let image = res.sprites
    let img = document.createElement('img')
    imageWrap.appendChild(img)
    img.src = image.back_default
    

   let title = document.createElement('p')
    modal.appendChild(title)
    title.className = 'desc'
    title.innerText = el.name

    let height = document.createElement('p')
    modal.appendChild(height)
    height.className = 'desc'
    height.innerText = `Height: ${res.height}`

    let weight = document.createElement('p')
    modal.appendChild(weight)
    weight.className = 'desc'
    weight.innerText = `Weight: ${res.weight}`

    let abilities = document.createElement('p')
    modal.appendChild(abilities)
    abilities.className = 'desc'
    const abilitiesName = res.abilities
    let arr =[]
    abilitiesName.forEach((el) => {
        arr = [...arr, el.ability.name]
    })
    abilities.innerText = `Abilities: ${arr.join(", ")}`

    let addIcon =() => {
        let iconWrap = document.createElement('div')
        modal.appendChild(iconWrap)
    
        let icon = document.createElement('img')
        icon.src = './images/xmark-solid.svg'
        iconWrap.appendChild(icon)
        iconWrap.className = "modal__icon"
        icon.addEventListener("click", (e) => {
            modal.remove()
        })
    }
    addIcon()

}

const drawCard = async (el) => {
    const res = await getAllPokemons(el)

    let card = document.createElement("div")
    card.classList = "main__card"
    wrapper.appendChild(card)

    let imageWrap = document.createElement('div')
    card.appendChild(imageWrap)
    imageWrap.className = 'modal__img'

    let image = res.sprites
    let img = document.createElement('img')
    imageWrap.appendChild(img)
    img.src = image.back_default

    let title = document.createElement("p")
    title.classList = "main__title"
    card.appendChild(title)
    title.innerText = el.name

    card.addEventListener("click", async (e) => {
        await drawModal(el)
    })
    
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
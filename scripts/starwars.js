let wrapper = document.querySelector(".main__wrapper")
let container = document.querySelector(".container")
let links = Array.from(document.querySelectorAll('.header__link'))
let activeLink

links.forEach((el) => {
    el.addEventListener("click", (e) => {
        activeLink = el.innerHTML

        wrapper.remove()

        wrapper = document.createElement("div")
        wrapper.classList = "main__wrapper"
        container.appendChild(wrapper)

        async function getDatas() {
        const getData = async() => {
            let link = el.innerHTML
        try {
            const res = await fetch(`https://swapi.dev/api/${link}`)
            const data = await res.json();
            return data.results;
        } catch (e) {
            console.error(e);
            return [];
        }
    }
        let result = await getData()
        return result.forEach(el => {
            drawCard(el)
    });
        }   
    getDatas();

    })
    })

const drawCard= (el) => {
    let card = document.createElement("div")
    card.classList = "main__card"
    wrapper.appendChild(card)

    let name = document.createElement("p")
    name.classList = "main__name"
    card.appendChild(name)
    name.innerText = el.name ? el.name : el.title

    card.addEventListener("click", (e) => {
        linkMethodsMap[activeLink](el)
    })
}

const drowModalPeople = async (el) => {
    const modal = document.createElement("div")
    modal.classList = "modal"
    wrapper.appendChild(modal)

    let name = document.createElement("p")
    name.classList = "desc"
    modal.appendChild(name)
    name.innerText = `Name: ${el.name}`

    let iconWrap = document.createElement('div')
    modal.appendChild(iconWrap)

    let icon = document.createElement('img')
    icon.src = './images/xmark-solid-white.svg'
    iconWrap.appendChild(icon)
    iconWrap.className = "modal__icon"
    icon.addEventListener("click", (e) => {
        modal.remove()
    })

    let height = document.createElement("p")
    height.classList = "desc"
    modal.appendChild(height)
    height.innerText = `Height: ${el.height}`

    let mass = document.createElement("p")
    mass.classList = "desc"
    modal.appendChild(mass)
    mass.innerText = `Mass: ${el.mass}`
    
    let hair = document.createElement("p")
    hair.classList = "desc"
    modal.appendChild(hair)
    hair.innerText = `Hair color: ${el.hair_color}`

    let eye = document.createElement("p")
    eye.classList = "desc"
    modal.appendChild(eye)
    eye.innerText = `Eye color: ${el.eye_color}`

    let birthYear = document.createElement("p")
    birthYear.classList = "desc"
    modal.appendChild(birthYear)
    birthYear.innerText = `Birdth year: ${el.birth_year}`

    let gender = document.createElement("p")
    gender.classList = "desc"
    modal.appendChild(gender)
    gender.innerText = `Gender: ${el.gender}`

    async function getAllhomeworld(el) {
        const getUrl = async() => {
        try {
            const res = await fetch(el.homeworld)
            const data = await res.json();
            return data
        } catch (e) {
            console.error(e);
            return [];
        }
    }
    const result = await getUrl()
    return result
    }
    const home = await getAllhomeworld(el)

    let homeworld = document.createElement("p")
    homeworld.classList = "desc"
    modal.appendChild(homeworld)
    homeworld.innerText = `Homeworld: ${home.name}`

    let films = document.createElement("p")
    films.classList = "desc"
    modal.appendChild(films)

    let filmsLink = el.films 

    async function getFilms(link) {
        const getUrl = async() => {
        try {
            const res = await fetch(link)
            const data = await res.json();
            return data
        } catch (e) {
            console.error(e);
            return [];
        }
    }
    const film = await getUrl()
    return film
    }
    const fnArray = el.films.map((a) => getFilms(a));
    const filmsArray = await Promise.all(fnArray)
let arr = []
    filmsArray.forEach((el) => {
        arr.push(el.title)        
    })
    let ab = arr.join(", ")
    films.innerText = `Films: ${ab}`  


}
const drowModalStarships = async (el) => {
    const modal = document.createElement("div")
    modal.classList = "modal"
    wrapper.appendChild(modal)

    let name = document.createElement("p")
    name.classList = "desc"
    modal.appendChild(name)
    name.innerText = `Name: ${el.name}`
    let iconWrap = document.createElement('div')
    modal.appendChild(iconWrap)

    let icon = document.createElement('img')
    icon.src = './images/xmark-solid-white.svg'
    iconWrap.appendChild(icon)
    iconWrap.className = "modal__icon"
    icon.addEventListener("click", (e) => {
        modal.remove()
    })

    let manufacturer = document.createElement("p")
    manufacturer.classList = "desc"
    modal.appendChild(manufacturer)
    manufacturer.innerText = `manufacturer: ${el.manufacturer}`

    let length = document.createElement("p")
    length.classList = "desc"
    modal.appendChild(length)
    length.innerText = `length: ${el.length}`
    
    let speed = document.createElement("p")
    speed.classList = "desc"
    modal.appendChild(speed)
    speed.innerText = `speed: ${el.max_atmosphering_speed}`

    let passengers = document.createElement("p")
    passengers.classList = "desc"
    modal.appendChild(passengers)
    passengers.innerText = `passengers: ${el.passengers}`

    let consumables = document.createElement("p")
    consumables.classList = "desc"
    modal.appendChild(consumables)
    consumables.innerText = `consumables: ${el.consumables}`

    let MGLT = document.createElement("p")
    MGLT.classList = "desc"
    modal.appendChild(MGLT)
    MGLT.innerText = `MGLT: ${el.MGLT}`

    let films = document.createElement("p")
    films.classList = "desc"
    modal.appendChild(films)

    let filmsLink = el.films 

    async function getFilms(link) {
        const getUrl = async() => {
        try {
            const res = await fetch(link)
            const data = await res.json();
            return data
        } catch (e) {
            console.error(e);
            return [];
        }
    }
    const film = await getUrl()
    return film
    }
    const fnArray = el.films.map((a) => getFilms(a));
    const filmsArray = await Promise.all(fnArray)
let arr = []
    filmsArray.forEach((el) => {
        arr.push(el.title)        
    })
    let ab = arr.join(", ")
    films.innerText = `Films: ${ab}`
    
}
const drowModalPlanets = async (el) => {
    const modal = document.createElement("div")
    modal.classList = "modal"
    wrapper.appendChild(modal)

    let name = document.createElement("p")
    name.classList = "desc"
    modal.appendChild(name)
    name.innerText = `Name: ${el.name}`

    let iconWrap = document.createElement('div')
    modal.appendChild(iconWrap)

    let icon = document.createElement('img')
    icon.src = './images/xmark-solid-white.svg'
    iconWrap.appendChild(icon)
    iconWrap.className = "modal__icon"
    icon.addEventListener("click", (e) => {
        modal.remove()
    })

    let rotationperiod = document.createElement("p")
    rotationperiod.classList = "desc"
    modal.appendChild(rotationperiod)
    rotationperiod.innerText = `rotation period: ${el.rotation_period}`

    let orbital_period = document.createElement("p")
    orbital_period.classList = "desc"
    modal.appendChild(orbital_period)
    orbital_period.innerText = `orbital period: ${el.orbital_period}`

    let diameter = document.createElement("p")
    diameter.classList = "desc"
    modal.appendChild(diameter)
    diameter.innerText = `diameter: ${el.diameter}`

    let climate = document.createElement("p")
    climate.classList = "desc"
    modal.appendChild(climate)
    climate.innerText = `climate: ${el.climate}`

    let gravity = document.createElement("p")
    gravity.classList = "desc"
    modal.appendChild(gravity)
    gravity.innerText = `gravity: ${el.gravity}`

    let terrain = document.createElement("p")
    terrain.classList = "desc"
    modal.appendChild(terrain)
    terrain.innerText = `terrain: ${el.terrain}`

    let population = document.createElement("p")
    population.classList = "desc"
    modal.appendChild(population)
    population.innerText = `population: ${el.population}`

    let films = document.createElement("p")
    films.classList = "desc"
    modal.appendChild(films)

    let filmsLink = el.films 

    async function getFilms(link) {
        const getUrl = async() => {
        try {
            const res = await fetch(link)
            const data = await res.json();
            return data
        } catch (e) {
            console.error(e);
            return [];
        }
    }
    const film = await getUrl()
    return film
    }
    const fnArray = el.films.map((a) => getFilms(a));
    const filmsArray = await Promise.all(fnArray)
let arr = []
    filmsArray.forEach((el) => {
        arr.push(el.title)        
    })
    let ab = arr.join(", ")
    films.innerText = `Films: ${ab}`

}
const drowModalFilms = async (el) => {
    const modal = document.createElement("div")
    modal.classList = "modal"
    wrapper.appendChild(modal)

    let title = document.createElement("p")
    title.classList = "desc"
    modal.appendChild(title)
    title.innerText = `Name: ${el.title}`


    let iconWrap = document.createElement('div')
    modal.appendChild(iconWrap)

    let icon = document.createElement('img')
    icon.src = './images/xmark-solid-white.svg'
    iconWrap.appendChild(icon)
    iconWrap.className = "modal__icon"
    icon.addEventListener("click", (e) => {
        modal.remove()
    })

    let opening_crawl = document.createElement("p")
    opening_crawl.classList = "desc"
    modal.appendChild(opening_crawl)
    opening_crawl.innerText = `Opening crawl: ${el.opening_crawl}`

    let director = document.createElement("p")
    director.classList = "desc"
    modal.appendChild(director)
    director.innerText = `Director: ${el.director}`

    let producer = document.createElement("p")
    producer.classList = "desc"
    modal.appendChild(producer)
    producer.innerText = `producer: ${el.producer}`

    let release_date = document.createElement("p")
    release_date.classList = "desc"
    modal.appendChild(release_date)
    release_date.innerText = `release_date: ${el.release_date}`

 

    let films = document.createElement("p")
    films.classList = "desc"
    modal.appendChild(films)

    let charactersLink = el.characters 

    async function getCharacters(link) {
        const getUrl = async() => {
        try {
            const res = await fetch(link)
            const data = await res.json();
            return data
        } catch (e) {
            console.error(e);
            return [];
        }
    }
    const characters = await getUrl()
    return characters
    }
    const fnArray = el.characters.map((a) => getCharacters(a));
    const filmsArray = await Promise.all(fnArray)
let arr = []
    filmsArray.forEach((el) => {
        arr.push(el.name)        
    })
    let ab = arr.join(", ")
    films.innerText = `characters: ${ab}`


}

let modal = document.querySelector('.modal')

const linkMethodsMap = {
    people: drowModalPeople,
    starships: drowModalStarships,
    planets: drowModalPlanets,
    films: drowModalFilms
}

let wrapper = document.querySelector(".main__wrapper")
let container = document.querySelector(".container")
let links = Array.from(document.querySelectorAll('.header__link'))

links.forEach((el) => {
    el.addEventListener("click", (e) => {
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
            console.log(el)
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
        const modal = document.createElement("div")
        modal.classList = "modal"
        wrapper.appendChild(modal)

        let name = document.createElement("p")
        name.classList = "main__name"
        modal.appendChild(name)
        name.innerText = el.name ? el.name : el.title

        let second = document.createElement("p")
        second.classList = "main__desc"
        modal.appendChild(second)
        second.innerText = `Height: ${el.height}` || `manufacturer: ${el.manufacturer}` || `Diameter: ${el.diameter}` || `Director: ${el.director}`
    })
}


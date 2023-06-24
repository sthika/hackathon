    let swiperWrapper = document.querySelector(".swiper-wrapper")
    let container = document.querySelector(".container")            
    let modal = document.createElement('div')

    let apiUrl = 'https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3'

async function getFilms() {
    const getData = async() => {
        try {
            let res = await fetch(apiUrl)
            let data = await res.json();
            return data.results;
        } catch (e) {
            console.error(e);
            return [];
        }
        
    }
    let films = await getData()
    return films.forEach(el => {
        drawCard(el)
        
    });
}
getFilms()

let drawModal = () => {
    modal.remove()
    modal = document.createElement('div')
    container.appendChild(modal)
    modal.className = 'slide__modal'
}
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

drawCard = (el) => {
    let card = document.createElement("div")
    card.classList = "swiper-slide"
    swiperWrapper.appendChild(card)

    let imageWrap = document.createElement("div")
    imageWrap.classList = "swiper__img"
    card.appendChild(imageWrap)
    
    let img = document.createElement("img")
    imageWrap.appendChild(img)
    img.src = `https://image.tmdb.org/t/p/w500${el["poster_path"]}` 

    let title = document.createElement("p")
    title.classList = "swiper__title"
    card.appendChild(title)
    title.innerText = el.title

    card.addEventListener("click", (e) => {
        drawModal()
        addIcon()
    })
}

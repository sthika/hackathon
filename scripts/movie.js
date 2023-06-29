    let swiperWrapper = document.querySelector(".swiper-wrapper")
    let container = document.querySelector(".container")            
    let modal = document.createElement('div')

    let apiUrl = 'https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3'

async function getFilms() {
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
    let films = await getData()
    return films.forEach(el => {
        drawCard(el)
        console.log(el)
    });
}
getFilms();

let drawModal = async (el) => {

    modal.remove()
    modal = document.createElement('div')
    container.appendChild(modal)
    modal.className = 'modal'

    let modalImage = document.createElement("div")
    modalImage.classList = "modal__image"
    modal.appendChild(modalImage)

    let modalImg = document.createElement("img")
    modalImage.appendChild(modalImg)
    modalImg.src = `https://image.tmdb.org/t/p/w500${el["poster_path"]}`

    let modalDesc = document.createElement("div")
    modalDesc.classList = "modal__desc"
    modal.appendChild(modalDesc)

    let modaTitle = document.createElement("p")
    modaTitle.classList = "modal__title"
    modalDesc.appendChild(modaTitle)
    modaTitle.innerText = el.title

    let modalSubtitle = document.createElement("p")
    modalSubtitle.classList = "modal__subtitle"
    modalDesc.appendChild(modalSubtitle)
    modalSubtitle.innerText = el.overview

    let releaseDate = document.createElement("p")
    modalDesc.appendChild(releaseDate)
    releaseDate.innerText = `Дата выхода: ${el.release_date}`

    let genres = document.createElement("p")
    modalDesc.appendChild(genres)
    const genress = await getGenre(el);
    console.log(genres, el.genre_ids)

    genres.innerText = `Жанр: ${genress}`

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

    card.addEventListener("click", async (e) => {
        await drawModal(el)
        addIcon()
    })
}

let genreApi = 'https://api.themoviedb.org/3/genre/movie/list?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3'

async function getGenre(el) {
    const genreIds = el.genre_ids;
    const getDatas = async() => {
        try {
            const res = await fetch(genreApi)
            const data = await res.json();
            return data.genres.reduce((acc, item) => {
                acc[item.id] = item.name;
                return acc;
            }, {});
        } catch (e) {
            console.error(e);
            return [];
        }
        
    }

    let allGenres = await getDatas();
    console.log(allGenres)
    const result = genreIds.map(i => allGenres[i]);

    return result.join(', ');
        
}
let swiperWrapper = document.querySelector(".swiper-wrapper")

// create cards with "swiper-slide" class
    
const options = {method: 'GET', headers: {accept: 'application/json'}};
let card = document.createElement("div")
let imageWrap = document.createElement("div")
let img = document.createElement("img")
fetch('https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3', options)
    .then(response => response.json())
     .then((response) => {
        console.log(response)
        return response["results"].forEach(el => {
            const drawCard = () => {
                card.classList = "swiper-slide"
                swiperWrapper.appendChild(card)
        
                imageWrap.classList = "swiper__img"
                card.appendChild(imageWrap)
                
                imageWrap.appendChild(img)
                img.src = `https://image.tmdb.org/t/p/w500${el["poster_path"]}` 

                let title = document.createElement("p")
                title.classList = "swiper__title"
                card.appendChild(title)
                title.innerText = el.title


            }
        drawCard()
        })
     })
    .catch(err => console.error(err));

let cardModal = 
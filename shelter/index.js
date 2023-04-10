alert ('Добрый день! Дайте мне пожалуйста еще один денечек, чтобы доделать пагинацию и немного переделать слайдер. Не хватило сил и времени сделать это сейчас. Большое спасибо зарание! ♥');
const headerMenu = document.querySelector('.header_navigation');
const burgerButton = document.querySelector('.header_burger');
const burgerMenuList = document.querySelector('header_navigation_list');
const burgerMenuButtons = document.querySelectorAll('.header_navigation li')
const body = document.querySelector('body')


// CLICK ON A BUTTON
burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('open')
    body.classList.toggle('menu') // OVERFLOW 
})


//CLICK ON THE LINKS

burgerMenuButtons.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.closest('.open')) {
            headerMenu.classList.remove('open')
            body.classList.remove('menu')
        }
    })
})

// CLICK OVER NAV

window.addEventListener('click', (e) => {
    if(headerMenu.classList.contains('open')) {
        if(!e.target.closest('.open')) {
            headerMenu.classList.remove('open')
            body.classList.remove('menu')
        }
    } 
})


// PETS - CARDS 

const petsArray = [
    {
        "name": "Jennifer",
        "img": "assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "assets/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "assets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

// FILLING CARDS and POPUP
const slider = document.querySelector('.section_pets_cards');
const sliderLine = document.querySelector('.section_pets_cards_container');

const sectionPets = document.querySelector('.section_pets')

const bodyWrapper = document.querySelector('.body_wrapper')

function createCard() {
    Array.prototype.rand = function() {
        return this.sort(function() { return 0.5 - Math.random(); });
    }
    petsArray.rand()
    petsArray.forEach(pet => {
        let card = document.createElement('div');
        card.classList.add('section_pets_card');
    
        let cardImage = document.createElement('div');
        cardImage.classList.add('section_pets_card_image');
        let image = document.createElement('img');
        cardImage.append(image)
    
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('section_pets_card_title')
    
        let cardButton = document.createElement('button');
        cardButton.classList.add('section_pets_card_button')
        cardButton.innerText = 'Learn more'
    
        card.append(cardImage)
        card.append(cardTitle)
        card.append(cardButton)




        sliderLine.append(card);
        cardTitle.innerText = pet.name
        image.src = pet.img;
        image.alt = pet.name


        // POPup

        console.log(pet.name)
        card.addEventListener('click', (e) => {
            sectionPets.classList.add('popup');
            body.classList.add('popup');

            //CARD

            let popupCard = document.createElement('div')
            popupCard.classList.add('popup_card');

            // IMG 

            let imageCard = document.createElement('img')
            imageCard.src = pet.img

            popupCard.append(imageCard)

            // TEXT CONTAINER

            let infoCard = document.createElement('div');
            infoCard.classList.add('popup_card_info');

                // TITLE BLOCK

                let infoMain = document.createElement('div');
                infoMain.classList.add('popup_card_info_main')

                    //NAME

                    let infoTitle = document.createElement('h2');
                    infoTitle.classList.add('popup_card_title')
                    infoTitle.textContent = pet.name;
                    

                    // SUBTITLE 

                    let infoSubtitle = document.createElement('p');
                    infoSubtitle.classList.add('popup_card_subtitle');
                    infoSubtitle.textContent = `${pet.type} - ${pet.breed}`

                    infoMain.append(infoTitle)
                    infoMain.append(infoSubtitle)

                // DESCRIPTION

                let infoDescription = document.createElement('p')
                infoDescription.classList.add('popup_card_description')
                infoDescription.textContent = pet.description

                // REST DATA

                let restInfo = document.createElement('ul')
                restInfo.classList.add('popup_card_rest')


                    let restAge = document.createElement('li');
                    restAge.textContent = pet.age
                    let spanAge = document.createElement('span');
                    spanAge.textContent = 'Age: '
                    restAge.prepend(spanAge)
                    restInfo.append(restAge);

                    let restInoculations = document.createElement('li');
                    restInoculations.textContent = pet.inoculations
                    let spanInoculations = document.createElement('span');
                    spanInoculations.textContent = 'Inoculations: '
                    restInoculations.prepend(spanInoculations)
                    restInfo.append(restInoculations);

                    let restDiseases = document.createElement('li');
                    restDiseases.textContent = pet.diseases
                    let spanDiseases = document.createElement('span');
                    spanDiseases.textContent = 'Diseases: '
                    restDiseases.prepend(spanDiseases)
                    restInfo.append(restDiseases);

                    let restParasites = document.createElement('li');
                    restParasites.textContent = pet.parasites
                    let spanParasites = document.createElement('span');
                    spanParasites.textContent = 'Parasites: '
                    restParasites.prepend(spanParasites)
                    restInfo.append(restParasites);




                infoCard.append(infoMain)
                infoCard.append(infoDescription)
                infoCard.append(restInfo)
            

            let popupCloseButton = document.createElement('div')
            popupCloseButton.classList.add('popup_close-button')
            popupCloseButton.textContent = '+'
            popupCard.append(popupCloseButton)

            popupCard.append(infoCard)
            bodyWrapper.append(popupCard)

            popupCloseButton.addEventListener('click', () => {
                sectionPets.classList.remove('popup');
                body.classList.remove('popup');
                popupCard.remove()
            })

            bodyWrapper.addEventListener('click', (e) => {
                if (e.target.closest('.popup_card') || e.target.closest('.section_pets_card')) {
                    
                } else {
                    sectionPets.classList.remove('popup');
                    body.classList.remove('popup');
                    popupCard.remove()
                }
            })

        })

    })
}
createCard();

// sectionPets.addEventListener('')
// const popupCloseButton = document.querySelector('.popup_close-button');

// function closePopup() {
//     console.log('yes')
//     sectionPets.classList.remove('popup')
// }



// NEXT AND PREV BUTTONS

const nextButton = document.querySelector('.section_pets_selection_arrow.right.normal');
const prevButton = document.querySelector('.section_pets_selection_arrow.left.normal');
const nextButtonAdaptive = document.querySelector('.section_pets_selection_arrows_adaptive .right');
const prevButtonAdaptive = document.querySelector('.section_pets_selection_arrows_adaptive .left')
const sliderCard = document.querySelector('.section_pets_card')



let visibleSliderContainerWidth,
    cardsCount,
    gapBetweenCards,
    cardWidth ,
    fullSliderContainerWidth,
    maxSlides;

function findProperties() {
    visibleSliderContainerWidth = parseInt(getComputedStyle(slider,true).width);
    console.log( 'VISIBLE WIDTH is ' + visibleSliderContainerWidth)
    cardsCount = petsArray.length;
    gapBetweenCards = parseInt(getComputedStyle(sliderLine, true).gap)
    console.log('GAP IS ' + gapBetweenCards)
    cardWidth = parseInt(getComputedStyle(sliderCard, true).minWidth) // flex basis
    console.log( 'CARDS WIDTH IS ' + cardWidth)

    fullSliderContainerWidth = cardsCount * cardWidth + ((cardsCount - 1) * gapBetweenCards)
    console.log('FULL WIDTH is ' + fullSliderContainerWidth)
    console.log(fullSliderContainerWidth / visibleSliderContainerWidth)
    maxSlides = Math.round(fullSliderContainerWidth / visibleSliderContainerWidth);
}


findProperties()
console.log(maxSlides)

let currentSlide = 1;

function nextSlide () {
    currentSlide += 1;
    
    //We should to find current marginLeft

    if (currentSlide <= maxSlides) {
        // sliderLine.style.marginLeft = `calc(${parseInt(getComputedStyle(sliderLine, true).marginLeft)}px - ${parseInt(getComputedStyle(slider, true).width) + parseInt(getComputedStyle(sliderLine, true).gap)}px`
        sliderLine.style.marginLeft = `-${(visibleSliderContainerWidth + gapBetweenCards) * (currentSlide - 1)}px`
        // console.log(visibleSliderContainerWidth)
    }  else {
        currentSlide = 1;
        sliderLine.style.marginLeft = `0px`
    }
    console.log(`${currentSlide - 1} --- ${currentSlide})`)
}

function prevSlide() {
    currentSlide -= 1;
    if (currentSlide >= 1) {
        sliderLine.style.marginLeft = `-${(visibleSliderContainerWidth + gapBetweenCards) * (currentSlide - 1)}px`
    } else if (currentSlide < 1) {
        currentSlide = maxSlides;
        sliderLine.style.marginLeft = `-${(visibleSliderContainerWidth + gapBetweenCards) * (currentSlide - 1)}px`
    }
    console.log(`${currentSlide + 1} --- ${currentSlide})`)
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
nextButtonAdaptive.addEventListener('click', nextSlide);
prevButtonAdaptive.addEventListener('click', prevSlide);

window.addEventListener('resize', findProperties)
window.addEventListener('resize', nextSlide)
window.addEventListener('resize', prevSlide)

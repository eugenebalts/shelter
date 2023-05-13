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
        // console.log(e.target)
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
const slider = document.querySelector('.main_cards');
const sliderLine = document.querySelector('.main_cards_list');
const main = document.querySelector('main')
const bodyWrapper = document.querySelector('.body_wrapper')
const firstButton = document.querySelector('.main_switcher_item.start')
const prevButton = document.querySelector('.main_switcher_item.previous')
const nextButton = document.querySelector('.main_switcher_item.next')
const lastButton = document.querySelector('.main_switcher_item.last')

const currentButton = document.querySelector('.main_switcher_item.current')

const cards = document.querySelectorAll('.main_cards_item')
Array.prototype.rand = function() {
    return this.sort(function() { return 0.5 - Math.random(); });
}
// --------------------------------------------- ARRAY ------------------------------------------------------/

// randPets = petsArray.rand()
randomPets = petsArray.rand();

let resultArray = [];
for (let i = 0; i < 6; i++) {
    let firstArray = [...petsArray.slice(0, 3)].rand();
    let secondArray = [...petsArray.slice(3, 6)].rand();
    let thirdArray = [...petsArray.slice(6, 8)].rand();

    resultArray.push(...firstArray)
    resultArray.push(...secondArray)
    resultArray.push(...thirdArray)
}

// ------------------------------------------------ LOGIC ------------------------------------------------------------/

let cardsOnThePage;
let start;
let end;
let currentPage;
let maxPages;

function cardsForWidth () {
    if (document.documentElement.clientWidth > 1279) {
        cardsOnThePage = 8
    } else if (document.documentElement.clientWidth > 767) {
        cardsOnThePage = 6
    } else {
        cardsOnThePage = 3
    }
    // console.log(cardsOnThePage)
}
cardsForWidth ()
start = 0;
end = start + cardsOnThePage;
currentPage = 1;


function startProperties () {
    firstButton.classList.remove('disabled')
    prevButton.classList.remove('disabled')
    nextButton.classList.remove('disabled')
    lastButton.classList.remove('disabled')

    maxPages = Math.ceil(resultArray.length / cardsOnThePage);
}
startProperties()

function checkActivity () {
    if (currentPage === 1 && currentPage === maxPages) {
        // console.log(1)
        firstButton.classList.add('disabled')
        prevButton.classList.add('disabled')
        nextButton.classList.add('disabled')
        lastButton.classList.add('disabled')
    } else if (currentPage === 1) {
        firstButton.classList.add('disabled')
        prevButton.classList.add('disabled')
    } else if (currentPage === maxPages) {
        nextButton.classList.add('disabled')
        lastButton.classList.add('disabled')
    }
}
    checkActivity()


    function reloadPage() {
        cardsForWidth()
        startProperties()
        if (end % cardsOnThePage === 0) {
            currentPage = end / cardsOnThePage
            start = end - cardsOnThePage
            // return true
        } else {
            if (end < currentPage * cardsOnThePage) {
                for (i = 0; end !== currentPage * cardsOnThePage; i++) {
                    end += 1;
                    reloadPage()
                }
                currentPage = end / cardsOnThePage
                start = end - cardsOnThePage
            } else if (end > currentPage * cardsOnThePage) {
                for (i = 0; end !== currentPage * cardsOnThePage; i++) {
                    end -= 1;
                    reloadPage()
                }
            }
        }
        currentButton.textContent = currentPage
        checkActivity()
        createCard()
    }

    window.addEventListener('resize', reloadPage);

    function nextSlide (e) {


        if (e.target.classList.contains('disabled')) {
            return false
        } else {
            main.style.background = "rgba(0,0,0, 0.1)"
            sliderLine.style.opacity = "0.8"
            currentPage += 1;
            currentButton.textContent = currentPage;
            start = end;
            // console.log(start)
            if ((start + cardsOnThePage) >= resultArray.length) {
                end = resultArray.length
            } else {
                end = start + cardsOnThePage;
            }
            // console.log(end)
            firstButton.classList.remove('disabled')
            prevButton.classList.remove('disabled')
            createCard()
            checkActivity()
        }
    }
    function prevSlide(e) {
        if (e.target.classList.contains('disabled')) {
            return false
        } else {
            main.style.background = "rgba(0,0,0, 0.1)"
            sliderLine.style.opacity = "0.8"
            currentPage -= 1;
            currentButton.textContent = currentPage;
            end = start;
            start = end - cardsOnThePage;
            nextButton.classList.remove('disabled')
            lastButton.classList.remove('disabled')
            createCard()
            checkActivity()
        }
    }
    function lastSlide (e) {
        if (e.target.classList.contains('disabled')) {
            return false
        } else {
            main.style.background = "rgba(0,0,0, 0.1)"
            sliderLine.style.opacity = "0.8"
            currentPage = maxPages;
            currentButton.textContent = currentPage;
            start = (maxPages - 1) * cardsOnThePage;
            // console.log(start)
            end = resultArray.length
            // console.log(end)
            firstButton.classList.remove('disabled')
            prevButton.classList.remove('disabled')
            createCard()
            checkActivity()
        }
    }
    function firstSlide (e) {
        if (e.target.classList.contains('disabled')) {
            return false
        } else {
            main.style.background = "rgba(0,0,0, 0.1)"
            sliderLine.style.opacity = "0.8"
            currentPage = 1;
            currentButton.textContent = currentPage;
            start = 0;
            console.log(start)
            end = cardsOnThePage;
            // console.log(end)
            nextButton.classList.remove('disabled')
            lastButton.classList.remove('disabled')
            createCard()
            checkActivity()
        }
    }


    nextButton.addEventListener('click', nextSlide)
    prevButton.addEventListener('click', prevSlide)
    lastButton.addEventListener('click', lastSlide)
    firstButton.addEventListener('click', firstSlide)


function createCard() {
    // cardsForWidth ()
    sliderLine.innerHTML = '';
    resultArray.slice(start, end).forEach(pet => {
        let card = document.createElement('div');
        card.classList.add('main_cards_item');
    
        let cardImage = document.createElement('div');
        cardImage.classList.add('main_cards__item_image');
        let image = document.createElement('img');
        cardImage.append(image)
    
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('main_cards_item_title')
    
        let cardButton = document.createElement('button');
        cardButton.classList.add('main_cards_item_button')
        cardButton.innerText = 'Learn more'
    
        card.append(cardImage)
        card.append(cardTitle)
        card.append(cardButton)

        sliderLine.append(card);
        cardTitle.innerText = pet.name
        image.src = pet.img;
        image.alt = pet.name

        setTimeout(() => {
            main.style.background = "#F6F6F6"
            sliderLine.style.opacity = "1"
        }, "300");

        // POPup
        card.addEventListener('click', (e) => {
            main.classList.add('popup');
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
                main.classList.remove('popup');
                body.classList.remove('popup');
                popupCard.remove()
            })

            bodyWrapper.addEventListener('click', (e) => {
                if (e.target.closest('.popup_card') || e.target.closest('.main_cards_item')) {
                    
                } else {
                    main.classList.remove('popup');
                    body.classList.remove('popup');
                    popupCard.remove()
                }
            })

        })

    })
}
createCard(); 
    

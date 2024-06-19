// inserire dinamicamente le immagini da js all'html
    // inserire le immagini in un array
    const images = [ 
        { 
            image: 'img/01.webp', 
            title: 'Marvel\'s Spiderman Miles Morale', 
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
        }, 
        { 
            image: 'img/02.webp', 
            title: 'Ratchet & Clank: Rift Apart', 
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 

        }, 
        { 
            image: 'img/03.webp', 
            title: 'Fortnite', 
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
        }, 
        { 
            image: 'img/04.webp', 
            title: 'Stray', 
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
        }, 
        {
            image: 'img/05.webp', 
            title: "Marvel's Avengers", 
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
        } 
    ];

    const itemContainer = document.querySelector(".col-1");
    const thumbContainer = document.querySelector(".col-2");
    // creo un ciclo nel quale ottengo gli elementi
    images.forEach((immagine) => {
        let imageElement = 
                    `<div class="image-container">
                        <img src="${immagine.image}" alt="">
                    </div>
                    <div class="txt-gioco">
                        <div class="titolo">${immagine.title}</div>
                        <div>${immagine.text}</div>
                    </div>`
        let imageThumb = 
                            `<div class="thumbnail">
                                <img src="${immagine.image}" alt="">
                            </div>`
        itemContainer.innerHTML += imageElement;
        thumbContainer.innerHTML += imageThumb;
    });
    // seleziono gli image-container nell'html
    const imageContainer = document.getElementsByClassName("image-container");
    const txtContainer = document.getElementsByClassName("txt-gioco");

    let activeImage = 0;
    let activeTxt = 0;

    // la prima immagine dorvà avere la classe active 
    imageContainer[activeImage].classList.add("active");
    txtContainer[activeTxt].classList.add("active");
    console.log(imageContainer[0]);

    // seleziono i bottoni
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    // far si che al click dei due bottoni la classe active si sposti tra i vari elementi

    // click next 
    next.addEventListener ("click",
        function() {
            if (activeImage < images.length - 1) {
                // rimuovo la classe al vecchio valore
                imageContainer[activeImage].classList.remove("active");
                txtContainer[activeTxt].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage++;
                activeTxt++;

                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");
                txtContainer[activeTxt].classList.add("active");

                console.log(activeImage);
            }   else {
                imageContainer[activeImage].classList.remove("active");
                txtContainer[activeTxt].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage = 0;
                activeTxt = 0;

                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");
                txtContainer[activeTxt].classList.add("active");
            }
        } 
    );
    
    // click prev
    prev.addEventListener ("click",
        function() {

            if (activeImage > 0) {

                // rimuovo la classe al vecchio valore
                imageContainer[activeImage].classList.remove("active");
                txtContainer[activeTxt].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage--;
                activeTxt--;

                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");
                txtContainer[activeTxt].classList.add("active");

                console.log(activeImage);
            } else {
                imageContainer[activeImage].classList.remove("active");
                txtContainer[activeTxt].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage = images.length - 1;
                activeTxt = images.length -1 ;
                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");
                txtContainer[activeTxt].classList.add("active");
            }
            
        }
    );
    
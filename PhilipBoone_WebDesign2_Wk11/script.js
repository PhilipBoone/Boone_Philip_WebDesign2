
let carouselImages = ["https://cdn.shoplightspeed.com/shops/629006/files/17609348/headline-2.jpg", "https://i1.wp.com/stringsmagazine.com/wp-content/uploads/2016/02/cellogirl_xlarge1.jpg?resize=600%2C500&ssl=1", "https://www.californiakeyboards.com/wp-content/uploads/2017/07/French_horn.png"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");

let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementBtId("categorySelect");
let instrumentOptions = ['strings', 'woodwinds', 'brass'];
let musicPeriodOptions = ['Baroque era', 'Classical era', 'Romantic era'];
let composerOptions = ['Bach', 'Mozart', 'Tchaikovsky'];

let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        //currentIndex = 1;
    }

    else if(currentIndex === 1){
        carouselIMG.src = carouselImages[2];
        //currentIndex = 2;
    }

    else {
        carouselIMG.src = carouselImages[0];
        //currentIndex = 0;
    }
}

window.addEventListener("load", function(){
    setInterval(changeSlide, 3000);
});

groupSelect.addEventListener("change", updateCategory);
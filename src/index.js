console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
  fetchDogimages();
  fetchDogBreeds();
});

function fetchDogimages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(data => {
   console.log(typeof(data))
    let images = data.message
    //console.log(images)
    // iterating through each array
    images.forEach(image => {
      //console.log(image)
      loadImagesToDom(image)
    });
  }
  
  ); // this the js object
}

function loadImagesToDom(image){
  let dogsCont = document.getElementById('dog-image-container')
// createElement create html elements
  let OurImgs = document.createElement('img')
  OurImgs.src = image
  dogsCont.appendChild(OurImgs)

}

function fetchDogBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  // when jsonifying put () at end of .json();
  .then(data2 => {
    console.log(data2)
    let breedImg = data2.message
    //console.log(breedImg)
    for(const imgs in breedImg){
      loadImagesToUl(imgs)
      console.log(imgs)
    }
  });
};

function loadImagesToUl(imgs){
  let breedImgs = document.getElementById("dog-breeds")
  // creatElement li element
  console.log(breedImgs)
  let dogBreedLi = document.createElement('li')
  console.log(dogBreedLi)
  dogBreedLi.src = imgs
  breedImgs.appendChild(dogBreedLi)
};

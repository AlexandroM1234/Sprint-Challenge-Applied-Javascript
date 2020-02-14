// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function cardCreator(objInfo){
    //elements
    const mainContainer = document.createElement('div');
    const headlineContainer = document.createElement('div');

    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //classes
    mainContainer.classList.add('card');
    headlineContainer.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //p/c
    mainContainer.appendChild(headlineContainer)
    mainContainer.appendChild(authorContainer);

    authorContainer.appendChild(imgContainer)

    imgContainer.appendChild(img)
    imgContainer.appendChild(authorName)

    // what everything is
 
    headlineContainer.textContent =objInfo["headline"];
    img.src = objInfo.authorPhoto;
    authorName.textContent = objInfo.authorName;

    // console.log(headlineContainer)
    // console.log(objInfo)
    return mainContainer
}

const placeCards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response=>{
    const jsArray=response.data.articles.javascript;
    const boostrap=response.data.articles.bootstrap;
    const tech =response.data.articles.technology;
    const jquery =response.data.articles.jquery;
    const node = response.data.articles.node

    jsArray.forEach(element=>{
        const makeCard = cardCreator(element)
        placeCards.appendChild(makeCard)
    });
    boostrap.forEach(element=>{
        const makeCard = cardCreator(element)
        placeCards.appendChild(makeCard)
    });
    tech.forEach(element=>{
        const makeCard = cardCreator(element)
        placeCards.appendChild(makeCard)
    });
    jquery.forEach(element=>{
        const makeCard = cardCreator(element)
        placeCards.appendChild(makeCard)
    });
    node.forEach(element=>{
        const makeCard = cardCreator(element)
        placeCards.appendChild(makeCard)
    });
});

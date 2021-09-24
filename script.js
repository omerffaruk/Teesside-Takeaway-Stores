const takeAwayShopsArr = takeAwayStores();  // this stores all the takeaways stores in Teesside 
const middlesbroughStoresArr = takeAwayShopsArr.filter((store) => store.city === 'Middlesbrough');
const stocktonStoresArr = takeAwayShopsArr.filter((store) => store.city === 'Stockton');
const middlesbroughStoresDiv = document.getElementById("middlesbroughStores");
const stocktonStoresDiv = document.getElementById("stocktonStores");
const wrapper = document.getElementById("storesWrapper");
const navbar = document.getElementById("navbar");
const cityLinksUl = document.getElementById("cityLinks")

// store middlesbrough stores in a variable, store stockton stores as well
// create a function to put to create cards, the function should take an array, you will give each array as an argument later on
// create a setup function where you will call all the functions when the page is loaded


function createStoreCardsAndLinkAtNavbar (arr) {
    const citySection = document.createElement("section");
    const cityHeader = document.createElement("h2");
    const cityWrapper = document.createElement("div");
    const city = arr[0].city;
    cityHeader.innerText = city;
    citySection.setAttribute("class", city);
    citySection.setAttribute("id", city);
    citySection.appendChild(cityHeader);
    cityWrapper.setAttribute("class", `stores ${city}`);

    addCityLinkAtNavbar(city);
    
    let storeCard = "";

        arr.forEach((store) => {
          storeCard += `
          <a href="${store.websiteUrl}" target="_blank"><div>
            <h3 class="storeName">${store.name}</h3>
            <p class="storeAddress">Address: ${store.address}</p>
            <p class="phoneNumber">Phone: ${store.telNumber}</li>
          </div></a>`;
    })
    
    cityWrapper.innerHTML = storeCard;
    citySection.appendChild(cityWrapper)
    wrapper.appendChild(citySection);
    
}

function addCityLinkAtNavbar (city) {
    let cityLink = `<li><a href="#${city}">${city}</a></li>`
    cityLinksUl.innerHTML += cityLink;
    navbar.appendChild(cityLinksUl);
}


function setup () {
    createStoreCardsAndLinkAtNavbar(middlesbroughStoresArr);
    createStoreCardsAndLinkAtNavbar(stocktonStoresArr);
}

window.onload = setup;
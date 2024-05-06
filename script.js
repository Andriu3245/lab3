let posts = [
    {
        id: 1,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2004",

    },
    {
        id: 2,
        title: "event on matfak",
        desccription: "description here",
        image: "media\\1.png",
        category: "event",
        years: "2014"
    },
    {
        id: 3,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2015"
    },
    {
        id: 4,
        title: "matfak event",
        desccription: "<p>djadfsfsbfjagfuk</p>",
        image: "media\\1.png",
        category: "event",
        years: "2004"
    },
    {
        id: 5,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2016"
    },
    {
        id: 6,
        title: "my sifrt post",
        desccription: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo.і dfkgidddddd ddfksn haietoiuhahif uywehsa fieya tilytdashkirhgl ksgivreh; bwavouybioag vighamong olaryohvgo shboh ksgivreh; bwavouybioag vighamong olaryohvgo shboh",
        image: "media\\1.png",
        category: "info",
        years: "2023"
    },
    {
        id: 7,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2004"
    },
    {
        id: 8,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2004",

    },
    {
        id: 9,
        title: "event on matfak",
        desccription: "description here",
        image: "media\\1.png",
        category: "event",
        years: "2014"
    },
    {
        id: 10,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2015"
    },
    {
        id: 11,
        title: "matfak event",
        desccription: "<p>djadfsfsbfjagfuk</p>",
        image: "media\\1.png",
        category: "event",
        years: "2004"
    },
    {
        id: 12,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2016"
    },
    {
        id: 13,
        title: "my sifrt post",
        desccription: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo.і dfkgidddddd ddfksn haietoiuhahif uywehsa fieya tilytdashkirhgl ksgivreh; bwavouybioag vighamong olaryohvgo shboh ksgivreh; bwavouybioag vighamong olaryohvgo shboh",
        image: "media\\1.png",
        category: "info",
        years: "2023"
    },
    {
        id: 14,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info",
        years: "2004"
    },
]

let selectedItems = [];

let isSubscribed = false;
let i = 0;
function loadPosts1() {
    let values = document.getElementById("myRange").value;

    let container = document.getElementById("container");
    let postsHtml = "";
    let postsFiltered = [];
    if (values) {
        postsFiltered = posts.filter(elem => elem.years == values);
    } else {
        postsFiltered = posts;
    }
    postsFiltered.forEach(elem => {
        i++;
        let postHtml = `<div class="card"><p class="card-years">${elem.years} <button id="${elem.id}" class="dd" onclick="Selected(${elem.id})"><img src="media/2.png"  class="df"></button></p><h3 class="card-title">${elem.title}</h3><p><image src="${elem.image}"/>${elem.desccription}</p></div>`;
        postsHtml += postHtml;
    })
    container.innerHTML = postsHtml;
    console.log(values);

}

function loadPosts(category) {
    let container = document.getElementById("container");
    let postsHtml = "";
    let postsFiltered = [];
    let i = 0;
    if (category) {
        postsFiltered = posts.filter(elem => elem.category === category);
    } else {
        postsFiltered = posts;
    }
    postsFiltered.forEach(elem => {
        let postHtml = `<div class="card" ><p class="card-years">${elem.years} <button id="${elem.id}" class="dd" onclick="Selected(${elem.id})"><img src="media/2.png"  class="df"></button></p><h3 class="card-title">${elem.title}</h3><p><image src="${elem.image}"/>${elem.desccription}</p></div>`;
        postsHtml += postHtml;
    })
    container.innerHTML = postsHtml;
}
function Selected(id) {
    var buttonID = id;
    let containerBasket = document.getElementById("containerBasket");
    let postsHtml = "";
    let postsFiltered = [];
    let i = 0;
    let buton = document.getElementById(id);
    buton.style.display = "none";
    selectedItems.push(posts.find(p => p.id == buttonID));

    selectedItems.forEach(elem => {
        let postHtml = `<div class="card" id="cart-${elem.id }"><p class="card-years">${elem.years} <button id="${elem.id}" class="ds" onclick="remove_card(${elem.id})"><img src="media/3.png"  class="df"></button></p><h3 class="card-title">${elem.title}</h3><p><image src="${elem.image}"/>${elem.desccription}</p></div>`;
        postsHtml += postHtml;
    })
    containerBasket.innerHTML = postsHtml;
}


loadPosts();

let subscribeElement = document.getElementById("subscribe-modal");

function Close(id) {
    let buton = document.getElementById(id);
    buton.style.display = "none";
}

function showDisplay() {
    subscribeElement.style.display = "block";
}

setInterval(() => {
    if (!isSubscribed) {
        showDisplay();
        i += 1;
    }
},
    3000 * (i * i));

setInterval(() => {
    if (!isSubscribed) {
        // showCloseButton();
        i += 1;
    }
},
    3000 * (i * i));

function subscribe() {
    isSubscribed = true;
    subscribeElement.style.display = "none";
}
function closeModal() {
    subscribeElement.style.display = "none";
}
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function () {

    output.innerHTML = this.value;
}
let basketElement = document.getElementById("basket-modal");

function remove_card(id){
    let buton = document.getElementById(id);
    buton.style.display = "block";
    selectedItems = selectedItems.filter(x => x.id !== id);
    var parent = document.getElementById("containerBasket");
    var child = document.getElementById("cart-" + id);
    parent.removeChild(child);
    drawChart();
}
function basketDisplay() {
    drawChart();
    basketElement.style.display = "block";

}


function closeModalBasket() {

    basketElement.style.display = "none";
}

function drawChart() {
    const ctx = document.getElementById('myChart');
    let chartStatus = Chart.getChart("myChart"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    let years = selectedItems.map(x => x.years);
    let yearsUnique = [...new Set(years)];
    let data = yearsUnique.map(year =>
    ({
        'count': years.filter(y => y == year).length,
        'year': year
    }));

    let dataLables = {
        datasets: [{
            data: data.map(d => d.count)
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: data.map(d => d.year)
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: dataLables
    });
}

window.onscroll = function() {
    let percentageScroll = (window.scrollY / window.innerHeight) * 100;
    if(percentageScroll > 10){
        let buttonScroll = document.getElementById("scroll-up-button");
        buttonScroll.style.display = "block";
    } else{
        let buttonScroll = document.getElementById("scroll-up-button");
        buttonScroll.style.display = "none";
    }
};

function scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
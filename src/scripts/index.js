import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

console.log(data);
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event => {
    console.log("open menu");
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', event => {
    console.log("open hero");
    drawer.classList.remove('open');
});

main.addEventListener('click', event => {
    console.log("open main");
    drawer.classList.remove('open');
});

    let html = "";
    data.restaurants.forEach((resto) => {
        html += `
        <article class="post-item">
            <img class="post-item__thumbnail"
                src="${resto.pictureId}"
                alt="Gambar suasana restoran yang berada di ${resto.city}" 
            />
            <div class="post-city post-item__content">
                <span>${resto.city}</span>
            </div>
            <div class="post-item__content">
                <p class="post-item__date">
                    Rating <a href="#" class="post-item__date__author">${resto.rating}</a>
                </p>
                <h1 class="post-item__title"><a href="#" class="tombol">${resto.name}</a></h1>
                <p class="post-item__description">${resto.description}</p>
            </div>
        </article>
        
        `;
        document.getElementById("restaurant-posting").innerHTML = html;
    });

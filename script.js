'use strict';

const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');
//carregar imagens
const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}
//localizaçao doq deve ser carregado
loadImages( images, containerItems );

// transiçao de images //
let items = document.querySelectorAll('.item'); //pegando as imagens

//mudança de images
const previous = () => {
    containerItems.appendChild(items[0]); // pegue o primeiro item e add o final
    items = document.querySelectorAll('.item'); //atualizar lista 
}

//pegando o ultmo item e coloca antes do primero e le noavmente a lista
const next = () => {
    const lastItem = items[items.length - 1]; 
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous); //chamndo a funçao clicar 
document.querySelector('#next').addEventListener('click', next); //botoa de proximo
'use strict'
let cart = [];
class Item {
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.count = 1;
    }
}
let butAddCart = document.querySelectorAll('.card .btn-primary');
butAddCart.forEach(item => item.addEventListener('click', toAddCart));
function toAddCart(event){
    let parent = event.target.closest('.card');
    let name = parent.querySelector('.card-title').innerText;
    let price = parseInt(parent.querySelector('.price').innerText.split(' ').join(''));
    let img = parent.querySelector('img').getAttribute('src');
    let elem = cart.find(item => item.name == name);
    // console.dir(elem);
    if(elem){
        elem.count++;
    }else{
        cart.push(new Item(name, price, img))
    }
}
let cartOpen = document.querySelector('.cart-open');
cartOpen.addEventListener('click', toRender);
let su = 0;
let summ = 0;
let i = [];
function toRender(){
    let cartTable = document.querySelector('.cart-table');
    let tBody = cartTable.querySelector('tbody');
    tBody.innerHTML = '';
    cart.forEach((item, index) =>{
        tBody.insertAdjacentHTML('beforeend', `
            <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td><img src=${item.img}></td>
            <td>${item.price}</td>
            <td>${item.count}</td>
            <td class="forCount">${item.count * item.price}</td>
            <td></td>
            </tr>
        `)
        su = `${item.count * item.price}`;
        su = +su;
        i.push(su);
    })
    i.forEach(item => summ=item+summ);
    let cartsumm = document.querySelector(".cart-sum");
    cartsumm.innerText="";
    cartsumm.innerText=`${summ}`;
    
    i =[];
    summ=0;
}

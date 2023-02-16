'use strict';

class AdvItem {
    constructor (src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.classes = classes;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.transfer = 2.5;
        this.parent = document.querySelector(parentSelector);
        this.changeToBYN();
    }

    changeToBYN() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div'); // Change if you need another block 
        if (this.classes.length === 0) {
            this.classes = 'adv__item'; // Change if you need another class 
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        // If you need another structure change innerHTML
        element.innerHTML = ` 
                    <img src=${this.src} alt="${this.alt}">
                    <div class="adv__item-subtitle">${this.title}</div>
                    <div class="adv__item-descr">
                        ${this.descr}
                    </div>
                    <div class="adv__item-price">
                        <div class="adv__item-cost">Price:</div>
                        <div class="adv__item-total"><span>${this.price} </span>BYN / day</div>
                    </div>
                `;
                this.parent.append(element);
    }
    
}

const getResource = async (url) => {
    const res = await fetch(url);
    
    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

getResource('urlDatabase') // Change param
.then(data => {
    data.forEach(({img, alt, title, descr, price}) => {
        new AdvItem(img, alt, title, descr, price, 'parentSelector').render(); // Change parentSelector
    });
});
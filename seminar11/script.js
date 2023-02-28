const products =  {
                "id1": {
                "photo_product": "./img/product1.png", 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00" },

                "id2": {
                "photo_product": './img/product2.png', 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00"},

                "id3": {
                "photo_product": "./img/product3.png", 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00" },
    
                "id4": {
                "photo_product": './img/product4.png', 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00"},
    
                "id5": {
                "photo_product": "./img/product5.png", 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00" },
        
                "id6": {
                "photo_product": './img/product6.png', 
                "title_product": "ELLERY X M 'O CAPSULE", 
                "descr_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price_product": "$52.00"}
                }

document.body.onload = () => {    
    const cntFeaturedItems = document.querySelector('div.containerFeaturedItems');
    let array = new Array();
    for (let i in products) {
        array.push([i, products[i]]);
    }
    createFieldCardProduct(array, cntFeaturedItems);
}

function createFieldCardProduct(prod, cntFeaturedItems) {
    for (let i = 0; i < prod.length; i++) {
        containerCard = document.createElement('div');
        containerCard.classList.add('cntCardProduct');
        cntFeaturedItems.appendChild(containerCard);

            containerPhoto = document.createElement('div');
            containerPhoto.classList.add('cntPhoto');
            containerCard.appendChild(containerPhoto);
            
                photoProduct = document.createElement('img');
                photoProduct.src = prod[i][1].photo_product;
                containerPhoto.appendChild(photoProduct);
            
            containerDescription = document.createElement('div');
            containerDescription.classList.add('cntDescription');
            containerCard.appendChild(containerDescription);

                titleProduct = document.createElement('div');
                titleProduct.classList.add('titleProduct');
                titleProduct.textContent = prod[i][1].title_product;
                containerDescription.appendChild(titleProduct);

                descProduct = document.createElement('span');
                descProduct.classList.add('descrProduct');
                descProduct.textContent = prod[i][1].descr_product;
                containerDescription.appendChild(descProduct);

                priceProduct = document.createElement('div');
                priceProduct.classList.add('priceProduct');
                priceProduct.textContent = prod[i][1].price_product;
                containerDescription.appendChild(priceProduct);
}
    
}
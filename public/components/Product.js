const Product = {
    // productEl: '',
    renderProduct: function(title,currentPrice,lastPrice,unit,imgUrl,) {
        let productCont = document.createElement('div');
        productCont.classList.add('products-cont');

        let productImgCont = document.createElement('div');
        productImgCont.classList.add('products-cont__img-cont');

        let productImg = document.createElement('img');
        productImg.classList.add('products-cont__img-cont__img');
        productImg.setAttribute('src',imgUrl);
        
        let productTitle = document.createElement('h2');
        productTitle.classList.add('products-cont__title');
        productTitle.appendChild(document.createTextNode(title));
        
        let productUnit = document.createElement('span');
        productUnit.classList.add('products-cont__unit');
        productUnit.appendChild(document.createTextNode(`Unit: (${unit})`));

        let productPriceCont = document.createElement('div');
        productPriceCont.classList.add('products-cont__price-cont');
        let productCurrentPrice = document.createElement('span');
        productCurrentPrice.appendChild(document.createTextNode(`Price: ${currentPrice}`));

        // if(lastPrice !== null) {
            let productLastPrice = document.createElement('span');
            productLastPrice.appendChild(document.createTextNode(`Old price: ${lastPrice}`));
            productPriceCont.appendChild(productLastPrice);
        // }

        let salesNumber = document.createElement('span');
        salesNumber.classList.add('products-cont__sales');
        salesNumber.appendChild(document.createTextNode(`Total sale: ${Math.floor(Math.random()*(50-5+1)+5)}`));

        productPriceCont.appendChild(productCurrentPrice);
        
        productImgCont.appendChild(productImg);
        productCont.appendChild(productImgCont);
        productCont.appendChild(productTitle);
        productCont.appendChild(productUnit);
        productCont.appendChild(productPriceCont);
        productCont.appendChild(productUnit);
        return productCont;
    },
    render: function(title,currentPrice,lastPrice,unit,imgUrl) {
        return Product.renderProduct(title,currentPrice,lastPrice,unit,imgUrl);
    }
}
const Profile = {
    renderLogoutBtn: function() {
        Header.headerEl.innerHTML = '';
        Header.renderLogo();
        let btn = document.createElement('button');
        btn.classList.add('logout');
        btn.innerHTML = 'Logout';
        btn.setAttribute('id','logout');
        Header.headerEl.appendChild(btn);
        Events.logout(btn);
    },
    renderProductAddForm: function() {
        let form = document.createElement('div');
        form.classList.add('register-form', 'form');
        form.setAttribute('id','registerForm');

        let heading = document.createElement('h2');
        heading.classList.add('register-heading');        
        heading.innerHTML = 'Person Registration';
        heading.innerHTML = 'Add Product';
        form.appendChild(heading);

        let name = document.createElement('input');
        name.setAttribute('type','text');
        name.setAttribute('name','name');
        name.setAttribute('placeholder','Name');
        name.setAttribute('id','productName');

        let img = document.createElement('input');
        img.setAttribute('type','text');
        img.setAttribute('name','productImg');
        img.setAttribute('placeholder','Img Url');
        img.setAttribute('id','productImg');

        let currentPrice = document.createElement('input');
        currentPrice.setAttribute('type','text');
        currentPrice.setAttribute('name','currentPrice');
        currentPrice.setAttribute('placeholder','Current Price');
        currentPrice.setAttribute('id','currentPrice');

        let lastPrice = document.createElement('input');
        lastPrice.setAttribute('type','text');
        lastPrice.setAttribute('name','lastPrice');
        lastPrice.setAttribute('placeholder','Last Price');
        lastPrice.setAttribute('id','lastPrice');

        let sales = document.createElement('input');
        sales.setAttribute('type','text');
        sales.setAttribute('name','sales');
        sales.setAttribute('placeholder','Sales');
        sales.setAttribute('id','sales');

        let unit = document.createElement('input');
        unit.setAttribute('type','text');
        unit.setAttribute('name','unit');
        unit.setAttribute('placeholder','Unit');
        unit.setAttribute('id','unit');

        let button = document.createElement('button');
        button.innerHTML = 'Insert';
        button.setAttribute('id','insertBtn');

        form.appendChild(name);
        form.appendChild(img);
        form.appendChild(currentPrice);
        form.appendChild(lastPrice);    
        form.appendChild(sales);
        form.appendChild(unit);
        form.appendChild(button);

        let cont = document.getElementById('products');
        cont.innerHTML = '';
        cont.appendChild(form);
        let insertBtn = document.querySelector('#insertBtn');        
        insertBtn.addEventListener('click',function(){
            if(General.validateInputs(form,'warning')) {
                Events.registerNewProduct(form);
            }
        });
    },
    render: function() {
        Profile.renderLogoutBtn();
        Profile.renderProductAddForm();
    }
}
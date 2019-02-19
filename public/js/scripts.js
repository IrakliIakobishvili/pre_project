const Events = {
    registerNewUser(formEl,userType) {
        let person = '';
        let company = '';
        if(userType == 'company') {
            company = {
                firstName:    document.getElementById('registerFirstName').value, 
                lastName:     document.getElementById('registerLastName').value,
                phone:        document.getElementById('registerPhone').value,
                email:        document.getElementById('registerEmail').value,
                companyName:  document.getElementById('registerCompanyName').value,
                companyID:    document.getElementById('registerCompanyID').value,
                password:     document.getElementById('registerPassword').value,
                password2:    document.getElementById('registerPassword2').value
           }
        }else {
            person = {
                firstName:  document.getElementById('registerFirstName').value, 
                lastName:   document.getElementById('registerLastName').value,
                phone:      document.getElementById('registerPhone').value,
                email:      document.getElementById('registerEmail').value,
                password:   document.getElementById('registerPassword').value,
                password2:  document.getElementById('registerPassword2').value
           }
        }
       let inputs = '';
       (userType == 'company') ? inputs = company : inputs = person;
        fetch(`${location.href}api/user`, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userDetails:inputs})
        })
        .then(res => {
            if(res.status == 201) {
                General.clearInputs(formEl);
                document.getElementById('registerBtn').innerHTML = 'Done';
                setTimeout(() => {
                    document.getElementById('registerBtn').innerHTML = 'Register';
                }, 2000);
            }
            return res.json();
        })
        .then(userApiResult => {
            console.log(userApiResult);
        })
        .catch(err => {
            console.error(err);
        })
    },
    registerNewProduct(formEl) {
        fetch(`${location.href}api/product`, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productDetails:{
                    name:         document.getElementById('productName').value, 
                    img:          document.getElementById('productImg').value,
                    currentPrice: document.getElementById('currentPrice').value,
                    lastPrice:    document.getElementById('lastPrice').value,
                    sales:        document.getElementById('sales').value,
                    unit:         document.getElementById('unit').value
                }
            })
        })
        .then(res => {
            if(res.status == 201) {
                General.clearInputs(formEl);
                document.getElementById('insertBtn').innerHTML = 'Done';
                setTimeout(() => {
                    document.getElementById('insertBtn').innerHTML = 'Register';
                }, 2000);
            }
            return res.json();
        })
        .then(userApiResult => {
            console.log(userApiResult);
        })
        .catch(err => {
            console.error(err);
        })
    },
    loadProducts() {
        fetch(`${location.href}api/product`)
        .then(res => res.json())
        .then(products => {
            products.forEach(product => {
               let prod = Product.render(product.name,product.currentPrice,product.lastPrice,product.unit,product.img);
               document.getElementById('products').appendChild(prod);             
            });
        })
        .catch(err => {
            console.error(err);
        })
    },
    loginUser: function() {
        fetch(`${location.href}api/user/login`, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email:  document.getElementById('loginEmail').value,
                password:   document.getElementById('loginPassword').value
            })
        })
        .then(res => {            
            if(res.status == 200) {
                Profile.render();
            }
            return res.json();
        })
        .then(response => {
            localStorage.setItem('token',response.token); 
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        })
    },
    logout: function(el) {
        el.addEventListener('click',function(){
            localStorage.removeItem('token');
            location.reload(true);
        });
    },
    render: function() {
        Events.loadProducts();
    }
}
Events.render();
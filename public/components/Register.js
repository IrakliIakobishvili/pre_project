const Register = {
    renderRegisterUser: function(userType) {
        let form = document.createElement('div');
        form.classList.add('register-form', 'form');
        form.setAttribute('id','registerForm');

        let heading = document.createElement('h2');
        heading.classList.add('register-heading');        
        heading.innerHTML = 'Person Registration';
        if(userType == 'company') {
            heading.innerHTML = 'Company Registration';
        }else {
            heading.innerHTML = 'Person Registration';
        }
        form.appendChild(heading);

        let firstName = document.createElement('input');
        firstName.setAttribute('type','text');
        firstName.setAttribute('name','firstName');
        firstName.setAttribute('placeholder','First Name');
        firstName.setAttribute('id','registerFirstName');

        let lastName = document.createElement('input');
        lastName.setAttribute('type','text');
        firstName.setAttribute('name','lastName');
        lastName.setAttribute('placeholder','Last Name');
        lastName.setAttribute('id','registerLastName');

        let phone = document.createElement('input');
        phone.setAttribute('type','text');
        firstName.setAttribute('name','phone');
        phone.setAttribute('placeholder','Phone');
        phone.setAttribute('id','registerPhone');

        let email = document.createElement('input');
        email.setAttribute('type','text');
        firstName.setAttribute('name','email');
        email.setAttribute('placeholder','Email');
        email.setAttribute('id','registerEmail');
  
        let compName = document.createElement('input');
        compName.setAttribute('type','text');
        firstName.setAttribute('name','companyName');
        compName.setAttribute('placeholder','Company Name');
        compName.setAttribute('id','registerCompanyName');

        let compID = document.createElement('input');
        compID.setAttribute('type','text');
        firstName.setAttribute('name','companyID');
        compID.setAttribute('placeholder','Company ID');
        compID.setAttribute('id','registerCompanyID');

        let password = document.createElement('input');
        password.setAttribute('type','password');
        firstName.setAttribute('name','password');
        password.setAttribute('placeholder','Password');
        password.setAttribute('id','registerPassword');

        let password2 = document.createElement('input');
        password2.setAttribute('type','password');
        firstName.setAttribute('name','password2');
        password2.setAttribute('placeholder','Confirm Password');
        password2.setAttribute('id','registerPassword2');

        let button = document.createElement('button');
        button.innerHTML = 'Register';
        button.setAttribute('id','registerBtn');

        form.appendChild(firstName);
        form.appendChild(lastName);
        form.appendChild(phone);
        form.appendChild(email);
        if(userType == 'company') {
            form.appendChild(compName);
            form.appendChild(compID);
        }
        form.appendChild(password);
        form.appendChild(password2);
        form.appendChild(button);

        let cont = document.getElementById('products');
        cont.innerHTML = '';
        cont.appendChild(form);
        let registerBtn = document.querySelector('#registerBtn');
        
        registerBtn.addEventListener('click',function(){
            let form = document.getElementById('registerForm');
            let email = document.getElementById('registerEmail');
            if(General.validateInputs(form,'warning')) {
                if(!General.validateEmail(email.value)) {
                    email.classList.add('warning');
                }else {
                    email.classList.remove('warning');
                    if(registerPassword.value !== registerPassword2.value) {
                        registerPassword.classList.add('warning');  
                        registerPassword2.classList.add('warning');   
                    }else {
                        Events.registerNewUser(form,userType);
                    }
                }                
            }
        });
    },
    renderSwitch: function() {
        let switchForm = `
            <div class='switchForm'>
                <button data-form='user' id='showUserRegisterForm'>Person</button>
                <button data-form='company' id='showCompanyRegisterForm'>Company</button>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = switchForm;
        let showRegisterUserFormBtn = document.querySelector('#showUserRegisterForm');
        let showRegisterCompanyFormBtn = document.querySelector('#showCompanyRegisterForm');
        [showRegisterUserFormBtn,showRegisterCompanyFormBtn].forEach(function(btn) {
            btn.addEventListener('click',function(){
                let targetForm = this.getAttribute('data-form');
                Register.renderRegisterUser(targetForm);
            });
        });
    },
    render: function() {
        // Register.renderRegister();
    }
}
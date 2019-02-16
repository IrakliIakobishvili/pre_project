const Register = {
    renderRegisterUser: function(user) {
        let form = `
            <div id='registerForm' class='register-form form'>
                <h2 class='register-heading'>Person Registration</h2>
                <input type='text' name='firstName' placeholder='First Name' id='registerFirstName'>
                <input type='text' name='lastName' placeholder='Last Name' id='registerLastName'>
                <input type='text' name='phone' placeholder='Phone' id='registerPhone'>
                <input type='text' name='email' placeholder='Email' id='registerEmail'>
                <input type='password' name='password' placeholder='Password' id='registerPassword'>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' id='registerPassword2'>
                <input type='submit' value='Register' id='registerBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
        let registerBtn = document.querySelector('#registerBtn');
        registerBtn.addEventListener('click',Events.registerUserBtnClick);
    },
    renderRegisterCompany: function(user) {
        let form = `
            <div id='registerForm' class='register-form form'>
                <h2 class='register-heading'>Company Registration</h2>
                <input type='text' name='firstName' placeholder='First Name'>
                <input type='text' name='lastName' placeholder='Last Name'>
                <input type='text' name='phone' placeholder='Phone'>
                <input type='text' name='email' placeholder='Email'>
                <input type='text' name='companyName' placeholder='Company Name'>
                <input type='text' name='identification' placeholder='ID'>
                <input type='password' name='password' placeholder='Password'>
                <input type='password' name='confirmPassword' placeholder='Confirm Password'>
                <input type='submit' value='Register' id='registerBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
    },
    renderSwitch: function() {
        let switchForm = `
            <div class='switchForm'>
                <button id='showUserRegisterForm'>Person</button>
                <button id='showCompanyRegisterForm'>Company</button>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = switchForm;
        let showRegisterUserFormBtn = document.querySelector('#showUserRegisterForm');
        let showRegisterCompanyFormBtn = document.querySelector('#showCompanyRegisterForm');
        showRegisterUserFormBtn.addEventListener('click',function(){
            Register.renderRegisterUser();
        });
        showRegisterCompanyFormBtn.addEventListener('click',function(){
            Register.renderRegisterCompany();
        });
    },
    render: function() {
        // Register.renderRegister();
    }
}
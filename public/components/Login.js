const Login = {
    renderLogin: function() {
        let form = `
            <div id='loginForm' class='login-form form'>
                <h2 class='register-heading'>Login</h2>
                <input type='text' name='email' placeholder='Email' id='loginEmail'>
                <input type='password' name='password' placeholder='Password' id='loginPassword'>
                <input type='submit' value='Login' id='loginBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
        let loginBtn = document.querySelector('#loginBtn');
        loginBtn.addEventListener('click',function(){
            fetch(`${location.href}api/user/login`, {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userDetails:{ 
                    firstName:  document.getElementById('loginEmail').value, 
                    lastName:   document.getElementById('loginPassword').value
                }})
            })
            .then(res => res.json())
            .then(userApiResult => {
                console.log(userApiResult);
            })
            .catch(err => {
                console.error(err);
            })
        });
    },
    render: function() {
        Login.renderLogin();
    }
}
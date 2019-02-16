const Login = {
    renderLogin: function() {
        let form = `
            <div id='loginForm' class='login-form form'>
                <h2 class='register-heading'>Login</h2>
                <input type='text' name='email' placeholder='Email'>
                <input type='password' name='password' placeholder='Password'>
                <input type='submit' value='Login' id='loginBtn'>
            </div>
        `;
        let cont = document.getElementById('products');
        cont.innerHTML = form;
    },
    render: function() {
        Login.renderLogin();
    }
}
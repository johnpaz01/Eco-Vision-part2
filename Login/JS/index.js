document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    var loginCorreto = 'usuarioExemplo';
    var senhaCorreta = '1';

    if (login === loginCorreto && senha === senhaCorreta) {
        window.location.href = 'https://www.example.com';
    } else {
        alert('Login ou senha incorretos'); 
    }
});

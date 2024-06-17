document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores de login e senha
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Faz a requisição ao arquivo JSON
    fetch('https://johnpaz01.github.io/SITE-PCE-CSS/Login/Users.json') // Substitua pelo caminho correto para o arquivo JSON
        .then(response => response.json())
        .then(data => {
            // Verifica se o usuário existe
            var user = data.users.find(user => user.login === login && user.senha === senha);

            if (user) {
                window.location.href = 'https://www.example.com'; // Redireciona se os dados estiverem corretos
            } else {
                alert('Login ou senha incorretos'); // Mostra um alerta se os dados estiverem incorretos
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
            alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementoNome = document.querySelector('#nome');
    const elementoUsuario = document.querySelector('#usuario');
    const elementoAvatar = document.querySelector('#avatar');
    const elementoRepositorios = document.querySelector('#repositorios');
    const elementoSeguidores = document.querySelector('#seguidores');
    const elementoSeguindo = document.querySelector('#seguindo');
    const elementoLink = document.querySelector('#link');

    try {
        fetch('https://api.github.com/users/vitordrs')
            .then(function (resposta) {
                if (!resposta.ok) {
                    throw new Error(`Erro na requisição: ${resposta.status}`);
                }
                return resposta.json();
            })
            .then(function (dados) {
                elementoNome.textContent = dados.name;
                elementoUsuario.textContent = dados.login;
                elementoAvatar.src = dados.avatar_url;
                elementoRepositorios.textContent = dados.public_repos;
                elementoSeguidores.textContent = dados.followers;
                elementoSeguindo.textContent = dados.following;
                elementoLink.href = dados.html_url;
            });
    } catch (erro) {
        console.error('Erro capturado fora do fetch:', erro);
        elementoNome.textContent = 'Erro ao carregar dados do GitHub.';
    }
});
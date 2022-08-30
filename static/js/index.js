// import das diferentes views do "container" que será preenchido
import home from "./views/home.js";
import link_2 from "./views/link_2.js";
import link_3 from "./views/link_3.js";

// essa função faz com que o preenchimento do html no "container" também aconteça quando
// navegamos via "popstate" que é o ato de voltar ou avançar no histórico de páginas do browser
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// constrói o caminho a ser navegado
// é async para a gerar uma promise e essa promise ser trabalhada usando await no momento do innerHTML
const router = async() => {
    const routes = [
        // joga o html das views nessa var "view" que será a view atual da visualização
        {path: "/", view: home},
        {path: "/link_2", view: link_2},
        {path: "/link_3", view: link_3},
    ];

    // testa se os caminhos do url digitado são iguais os existentes
    const potentialMatches = routes.map(route => {
        return {
            // aqui é equivalente ao "this" para pegar o path definido acima com o "routes"
            route: route,
            // aqui ele retorna um boolean se o url digitado é igual ao caminho esperado no "routes"
            isMatch: location.pathname == route.path
        };
    });

    // aqui é a rota em si que está sendo carregada na var "match"
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // Faz com que qualquer url diferente das existentes carregue a primeira (padrão)
    // que é a home = "/"
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    };

    // Recebe o html recebido em match em forma de texto
    const view = new match.route.view();

    // Faz o carregamento do container com o conteúdo em string da var "view"
    document.querySelector("#app").innerHTML = await view.getHtml();

};

// adiciona o evento de navegar através do history do browser
window.addEventListener("popstate", router);

// Cria o evento de carregar o container ao clicar no link
document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            // Evita que aconteça a ação padrão de clicar em um link
            // que é o de recarregar a página com uma target na "src" do link
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });

    router();
});

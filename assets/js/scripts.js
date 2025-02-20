// Função para calcular a média de uma coluna
function calcularMedia(coluna) {
    const celulas = document.querySelectorAll(`tbody td:nth-child(${coluna})`);
    let soma = 0;

    celulas.forEach(celula => {
        // Remove "R$" e converte para número
        const valor = parseFloat(celula.textContent.replace("R$", "").replace(".", "").replace(",", "."));
        soma += valor;
    });

    const media = soma / celulas.length;
    return media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Exibe as médias no <tfoot>
document.getElementById('media-junior').textContent = calcularMedia(2); // Coluna Júnior
document.getElementById('media-pleno').textContent = calcularMedia(3);  // Coluna Pleno
document.getElementById('media-senior').textContent = calcularMedia(4); // Coluna Sênior

// Realiza o click no menu indo para o local da pagina
document.addEventListener("DOMContentLoaded", function () {
    const closeMenuJS = document.getElementById("close-menu-js");
    const closeMenu = document.getElementById("close-menu");

    if (closeMenuJS && closeMenu) {
        closeMenuJS.addEventListener("click", function () {
            closeMenu.checked = false;
        });
    }
});

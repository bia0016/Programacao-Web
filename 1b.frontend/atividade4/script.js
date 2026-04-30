const precos = {
    gasolina: 6.69,
    etanol: 4.30,
    diesel: 6.03,
};
const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
const calcularAbastecimento = (precoCombustivel, litros) => {
    const resultado = document.getElementById("resultado");
    if (litros === "" || litros === null || litros === undefined) {
        resultado.textContent = "Por favor, insira a quantidade de litros.";
        resultado.className = "aviso";
        return;
    }
    const litrosNum = parseFloat(litros);
    if (isNaN(litrosNum)) {
        resultado.textContent = "Valor inválido. Digite apenas números.";
        resultado.className = "erro";
        return;
    }
    if (litrosNum < 0) {
        resultado.textContent = "A quantidade não pode ser negativa.";
        resultado.className = "erro";
        return;
    }
    if (litrosNum === 0) {
        resultado.textContent = "A quantidade deve ser maior que zero.";
        resultado.className = "aviso";
        return;
    }
    const valorTotal = precoCombustivel * litrosNum;
    resultado.textContent = `Total: ${formatarMoeda(valorTotal)}`;
    resultado.className = "ok";
};
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = document.getElementById("litros").value;
    const resultado = document.getElementById("resultado");
    const precoPorLitro = precos[tipo];
    if (!precoPorLitro) {
        resultado.textContent = "Escolha um tipo de combustível.";
        resultado.className = "aviso";
        return;
    }
    calcularAbastecimento(precoPorLitro, litros);
};
document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("litros").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});
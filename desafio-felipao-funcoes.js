function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  const faixas = [
    { limite: 10, nivel: "Ferro" },
    { limite: 20, nivel: "Bronze" },
    { limite: 50, nivel: "Prata" },
    { limite: 80, nivel: "Ouro" },
    { limite: 90, nivel: "Diamante" },
    { limite: 100, nivel: "Lendário" },
  ];

  let nivel = "Imortal";

  for (const faixa of faixas) {
    if (vitorias <= faixa.limite) {
      nivel = faixa.nivel;
      break;
    }
  }

  return { saldoVitorias, nivel };
}

const resultado = calcularNivel(120, 10);
console.log(
  `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);

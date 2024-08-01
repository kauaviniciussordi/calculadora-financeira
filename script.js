let botao = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function Calcularvalores() {
  const valor = Number(document.getElementById("valor").value);
  let taxa = Number(document.getElementById("taxa").value);
  taxa /= 100.0;
  let parcelas = Number(document.getElementById("parcelas").value);
  let saldo = valor;
  resultado.innerHTML = '';
  const amortizacao = valor / parcelas;
  for (let i = 1; i <= parcelas; i++) {
    let juro = saldo * taxa;
    let parcela = juro + amortizacao;
    saldo -= amortizacao
    console.log(amortizacao)
    resultado.innerHTML += `
    <tr>
        <th scope="row">${i}</th>
        <td>${parcela.toFixed(2)}</td>
        <td>${juro.toFixed(2)}</td>
        <td>${amortizacao.toFixed(2)}</td>
        <td>${saldo.toFixed(2)}</td>
      </tr>
    
    `;
  }

}

botao.addEventListener('click', Calcularvalores);
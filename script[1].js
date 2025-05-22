
const form = document.getElementById('calc-form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const idade = parseFloat(document.getElementById('idade').value);
  const atividade = parseFloat(document.getElementById('atividade').value);
  const objetivo = parseInt(document.getElementById('objetivo').value);

  if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
    resultado.innerHTML = '<p>Preencha todos os campos corretamente.</p>';
    return;
  }

  if ((objetivo === 4 && peso < 70) || (objetivo === 5 && peso < 90)) {
    resultado.innerHTML = '<p>Para escolher esse objetivo, seu peso deve ser no mínimo 70kg (para 4kg) ou 90kg (para 5kg).</p>';
    return;
  }

  const tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
  const gastoTotal = tmb * atividade;

  const deficits = {2: 513, 3: 770, 4: 900, 5: 1283};
  const deficit = deficits[objetivo];

  const caloriasFinais = gastoTotal - deficit;

  resultado.innerHTML = `
    <h3>Resultado:</h3>
    <p>Seu gasto calórico total estimado é: <strong>${gastoTotal.toFixed(0)} kcal</strong></p>
    <p>Para atingir seu objetivo de perder até <strong>${objetivo}kg</strong> em 30 dias, sua meta diária é:</p>
    <p><strong>${caloriasFinais.toFixed(0)} kcal/dia</strong></p>
    <p>Agora acesse seu material de apoio e monte suas refeições com base nesse valor.</p>
  `;
});

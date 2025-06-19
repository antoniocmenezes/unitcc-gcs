console.log("===== Início do Teste de Login =====");

// Simulação de dados de entrada
const testes = [
  { user: "admin", pass: "1234", esperado: "Login bem-sucedido!" },
  { user: "admin", pass: "0000", esperado: "Credenciais inválidas." },
  { user: "user", pass: "1234", esperado: "Credenciais inválidas." },
];

// Função simulada (não chama API real)
function simularLogin(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login bem-sucedido!";
  } else {
    return "Credenciais inválidas.";
  }
}

// Executa os testes
testes.forEach((teste, i) => {
  const resultado = simularLogin(teste.user, teste.pass);
  const sucesso = resultado === teste.esperado;
  console.log(`Teste ${i + 1}: ${sucesso ? "✅ Passou" : "❌ Falhou"} (${resultado})`);
});

console.log("===== Fim dos Testes =====");

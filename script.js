// Código de acesso (só você sabe)
const accessCode = '12345'; // Altere para um código seguro

// Lógica de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const enteredCode = document.getElementById('code').value;

  if (enteredCode === accessCode) {
    // Se o código estiver correto, redireciona para o painel de controle
    window.location.href = 'dashboard.html';
  } else {
    // Caso contrário, exibe uma mensagem de erro
    document.getElementById('errorMessage').style.display = 'block';
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const navegacao = document.querySelector('.navegacao');
const formulario = document.querySelector('#form-contato');
const retornoForm = document.querySelector('#retorno-form');

menuToggle.addEventListener('click', () => {
  navegacao.classList.toggle('ativa');
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    retornoForm.textContent = 'Por favor, preencha todos os campos.';
    retornoForm.style.color = '#b91c1c';
    return;
  }

  retornoForm.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
  retornoForm.style.color = '#047857';
  formulario.reset();
});

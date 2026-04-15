const menuToggle = document.querySelector('.menu-toggle');
const navegacao = document.querySelector('.navegacao');
const formulario = document.querySelector('#form-contato');
const retornoForm = document.querySelector('#retorno-form');
const root = document.documentElement;

menuToggle.addEventListener('click', () => {
  navegacao.classList.toggle('ativa');
});

document.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  root.style.setProperty('--cursor-x', `${x}%`);
  root.style.setProperty('--cursor-y', `${y}%`);
});

const interactiveElements = document.querySelectorAll('.botao, .botao-whatsapp, .navegacao a, .card, .card-servico, input, textarea');
interactiveElements.forEach((element) => {
  element.addEventListener('pointerenter', () => {
    element.classList.add('interactive-focus');
  });
  element.addEventListener('pointerleave', () => {
    element.classList.remove('interactive-focus');
  });
  element.addEventListener('touchstart', () => {
    element.classList.add('interactive-focus');
  });
  element.addEventListener('touchend', () => {
    element.classList.remove('interactive-focus');
  });
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    retornoForm.textContent = 'Por favor, preencha todos os campos.';
    retornoForm.style.color = '#f87171';
    return;
  }

  retornoForm.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
  retornoForm.style.color = '#7ee4b9';
  formulario.reset();
});

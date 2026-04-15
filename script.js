const menuToggle = document.querySelector('.menu-toggle');
const navegacao = document.querySelector('.navegacao');
const formulario = document.querySelector('#form-contato');
const retornoForm = document.querySelector('#retorno-form');
const root = document.documentElement;

menuToggle.addEventListener('click', () => {
  navegacao.classList.toggle('ativa');
});

document.querySelectorAll('.navegacao a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navegacao.classList.contains('ativa')) {
      navegacao.classList.remove('ativa');
    }
  });
});

document.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  root.style.setProperty('--cursor-x', `${x}%`);
  root.style.setProperty('--cursor-y', `${y}%`);
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px',
});

const autoRevealTargets = document.querySelectorAll('.destaque, .titulo-secao, .card, .card-servico, .imagem-destaque, .form-contato, .rodape');
autoRevealTargets.forEach((target) => target.classList.add('reveal'));

const revealTargets = document.querySelectorAll('.reveal');
revealTargets.forEach((target) => revealObserver.observe(target));

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

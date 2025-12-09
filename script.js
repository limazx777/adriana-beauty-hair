function toggleMenu() {
    const menu = document.getElementById('menu-links');
    const html = document.documentElement;
    const body = document.body;
    const btn = document.querySelector('.menu-mobile-icon button');

    menu.classList.toggle('active');
    html.classList.toggle('no-scroll'); // Adiciona/remove a classe para bloquear o scroll
    body.classList.toggle('no-scroll'); 
    btn.classList.toggle('active'); // Adiciona classe ao botão para estilização

    // Troca o ícone do botão e a acessibilidade
    if (menu.classList.contains('active')) {
        btn.innerHTML = '&times;'; // Ícone 'X'
        btn.setAttribute('aria-label', 'Fechar menu');
    } else {
        btn.innerHTML = '&#9776;'; // Ícone Hambúrguer
        btn.setAttribute('aria-label', 'Abrir menu');
    }
}

// --- MELHORIA: Fechar o menu ao clicar em um link ---
document.querySelectorAll('#menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu-links');
        if (menu.classList.contains('active')) { toggleMenu(); }
    });
});

// --- MELHORIA: Lógica para animação de scroll ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
});

// Seleciona todos os elementos com a classe .animar e os observa
const elementosParaAnimar = document.querySelectorAll('.animar');
elementosParaAnimar.forEach(el => {
    observer.observe(el);
});
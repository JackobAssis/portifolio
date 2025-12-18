/**
 * PORTFÓLIO - WHYBSON JACKSON DE ASSIS
 * JavaScript Vanilla - Sem dependências externas
 * 
 * Funcionalidades:
 * - Animação fade-in ao scroll (IntersectionObserver)
 * - Smooth scroll para navegação
 * - Efeitos de hover e interatividade
 */

// ========================================
// ANIMAÇÃO FADE-IN AO SCROLL
// ========================================

/**
 * Observa elementos com classe .fade-in e adiciona .visible quando entram no viewport
 */
function initScrollAnimations() {
    // Seleciona todos os elementos com classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Configuração do observer
    const observerOptions = {
        threshold: 0.1, // Trigger quando 10% do elemento estiver visível
        rootMargin: '0px 0px -50px 0px' // Pequeno offset inferior
    };
    
    // Callback quando elemento entra/sai do viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona classe visible com delay progressivo
                entry.target.classList.add('visible');
                // Para de observar este elemento (animação única)
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observa cada elemento
    fadeElements.forEach((element, index) => {
        // Adiciona delay progressivo baseado no índice
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

// ========================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ========================================

/**
 * Adiciona comportamento de scroll suave para links internos
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignora links vazios (#)
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Scroll suave até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Atualiza URL sem recarregar
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ========================================
// DESTAQUE DE NAVEGAÇÃO ATIVA
// ========================================

/**
 * Destaca o link de navegação correspondente à seção visível
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active de todos os links
                navLinks.forEach(link => {
                    link.style.color = '';
                    link.style.backgroundColor = '';
                });
                
                // Adiciona active ao link correspondente
                const activeLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.style.color = 'var(--accent-green)';
                    activeLink.style.backgroundColor = 'rgba(0, 255, 136, 0.1)';
                }
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// EFEITO DE DIGITAÇÃO NO HERO (OPCIONAL)
// ========================================

/**
 * Efeito de digitação sutil no subtítulo (desabilitado por padrão)
 */
function initTypingEffect() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (!subtitle) return;
    
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < originalText.length) {
            subtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 50);
        }
    }
    
    // Inicia após 500ms
    // setTimeout(typeChar, 500);
}

// ========================================
// CONTADOR DE PROJETOS (ANIMAÇÃO)
// ========================================

/**
 * Anima contadores quando visíveis (pode ser expandido)
 */
function initCounters() {
    const projectCards = document.querySelectorAll('.project-card');
    const totalProjects = projectCards.length;
    
    // Pode ser usado para adicionar badge de "X projetos" no header
    console.log(`Total de projetos: ${totalProjects}`);
}

// ========================================
// LOADER SIMPLES (OPCIONAL)
// ========================================

/**
 * Remove loader quando página carregar completamente
 */
function removeLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
}

// ========================================
// DETECÇÃO DE SCROLL PARA NAVBAR
// ========================================

/**
 * Adiciona sombra na navbar ao rolar
 */
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
        }
    });
}

// ========================================
// BOTÃO VOLTAR AO TOPO (OPCIONAL)
// ========================================

/**
 * Cria e controla botão de voltar ao topo
 */
function initBackToTop() {
    // Cria o botão
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--accent-green);
        color: var(--bg-primary);
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Mostra/esconde baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Ação do clique
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efeito hover
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
        backToTopBtn.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
        backToTopBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    });
}

// ========================================
// ANALYTICS DE CLIQUES (PREPARAÇÃO)
// ========================================

/**
 * Rastreia cliques em links importantes (pode ser expandido com GA)
 */
function initClickTracking() {
    const projectLinks = document.querySelectorAll('.project-links a');
    const contactLinks = document.querySelectorAll('.contact-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const projectName = this.closest('.project-card').querySelector('.project-title').textContent;
            const linkType = this.classList.contains('btn-demo') ? 'Demo' : 'GitHub';
            
            console.log(`Clique: ${projectName} - ${linkType}`);
            // Aqui pode adicionar Google Analytics ou similar
            // gtag('event', 'click', { project: projectName, type: linkType });
        });
    });
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const contactType = this.querySelector('span:last-child').textContent;
            console.log(`Contato: ${contactType}`);
            // gtag('event', 'contact_click', { type: contactType });
        });
    });
}

// ========================================
// MODO DE DESENVOLVIMENTO
// ========================================

/**
 * Funções úteis para desenvolvimento
 */
const DevMode = {
    // Log de informações do portfólio
    info: function() {
        console.log('%c🚀 Portfólio Whybson Jackson', 'color: #00ff88; font-size: 20px; font-weight: bold;');
        console.log('%cVersão: 1.0.0', 'color: #a8b8b0;');
        console.log('%cTecnologias: HTML5, CSS3, JavaScript Vanilla', 'color: #a8b8b0;');
        console.log('%c---', 'color: #2a3832;');
        console.log('Projetos carregados:', document.querySelectorAll('.project-card').length);
        console.log('Seções:', document.querySelectorAll('.section').length);
    },
    
    // Testa todas as animações
    testAnimations: function() {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
        });
    }
};

// ========================================
// INICIALIZAÇÃO
// ========================================

/**
 * Executa todas as inicializações quando DOM estiver pronto
 */
function init() {
    // Animações e efeitos principais
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavigation();
    initNavbarScroll();
    initBackToTop();
    
    // Tracking e analytics
    initClickTracking();
    
    // Contadores
    initCounters();
    
    // Remove loader se existir
    removeLoader();
    
    // Log de desenvolvimento
    DevMode.info();
    
    console.log('✅ Portfólio inicializado com sucesso!');
}

// Aguarda DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EXPORTA FUNÇÕES PARA DEBUG (OPCIONAL)
// ========================================

// Disponibiliza DevMode no console para debug
window.DevMode = DevMode;

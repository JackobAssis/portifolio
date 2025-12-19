/**
 * PORTFÓLIO - WHYBSON ASSIS
 * JavaScript Vanilla - Sem dependências externas
 * 
 * Funcionalidades:
 * - Animação fade-in ao scroll (IntersectionObserver)
 * - Smooth scroll para navegação
 * - Modais de estudo de caso (PSR - Problema, Solução, Resultado)
 * - Efeitos de hover e interatividade
 */

// ========================================
// DADOS DOS ESTUDOS DE CASO (PSR)
// ========================================

const caseStudies = {
    'virada-sorte': {
        title: '🎮 Virada da Sorte',
        problema: 'Necessidade de criar uma aplicação simples e divertida que pudesse demonstrar lógica de programação, aleatoriedade e feedback visual ao usuário.',
        solucao: 'Desenvolvi um jogo web interativo que utiliza JavaScript puro para gerar resultados aleatórios, com interface responsiva e feedback visual imediato. O sistema implementa lógica de probabilidade e animações CSS para melhorar a experiência do usuário.',
        meuPapel: 'Atuei como desenvolvedor único, responsável por toda a arquitetura, lógica de jogo, interface e experiência do usuário.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Estrutura e design responsivo da interface' },
            { nome: 'JavaScript Vanilla', uso: 'Lógica de aleatoriedade e interatividade' }
        ],
        status: '🟢 Sistema funcional, em produção e disponível online',
        impacto: 'Demonstra capacidade de criar experiências interativas e validar conceitos de UX.',
        demo: 'https://viradadasorte.vercel.app/',
        github: 'https://github.com/JackobAssis'
    },
    'joburguers': {
        title: '🍔 Sistema de Pontuação & Cardápio - JoBurguers',
        problema: 'Pequenos comércios precisam de sistemas acessíveis para controlar programas de fidelidade e exibir cardápios digitais, mas soluções comerciais são caras e complexas.',
        solucao: 'Criei um sistema completo que integra cardápio digital com controle de pontuação de clientes. O sistema usa Firebase para autenticação e persistência de dados em tempo real, permitindo que o estabelecimento gerencie clientes, adicione pontos e visualize histórico de forma simples.',
        meuPapel: 'Desenvolvedor responsável por toda a aplicação: arquitetura, backend (Firebase), interface, lógica de negócio e deploy.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Interface responsiva e acessível' },
            { nome: 'JavaScript', uso: 'Lógica de negócio e manipulação de dados' },
            { nome: 'Firebase', uso: 'Autenticação e banco de dados em tempo real' }
        ],
        status: '🟢 Sistema funcional, em produção e utilizado por comércio real',
        impacto: 'Sistema em uso real, facilitando controle de fidelidade e apresentação de produtos.',
        demo: 'https://joburguers.vercel.app/',
        github: 'https://github.com/JackobAssis/Joburguers'
    },
    'gerenciador-comercio': {
        title: '🏪 Sistema de Gerenciamento de Comércio',
        problema: 'Microempreendedores precisam organizar operações básicas (produtos, vendas, clientes) mas não têm acesso a sistemas robustos ou não possuem recursos para soluções comerciais.',
        solucao: 'Desenvolvi uma aplicação web completa focada em simplicidade e praticidade, permitindo cadastro de produtos, controle de estoque básico e organização de informações do negócio. O sistema prioriza usabilidade e funcionalidade direta.',
        meuPapel: 'Responsável por toda a criação: levantamento de necessidades, arquitetura, desenvolvimento frontend e backend, testes e deploy.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Interface limpa e focada em usabilidade' },
            { nome: 'JavaScript', uso: 'Lógica de gerenciamento e validações' },
            { nome: 'Firebase', uso: 'Persistência de dados e autenticação' }
        ],
        status: '🟢 Sistema funcional e público, disponível para uso',
        impacto: 'Validação prática de sistema utilitário para pequenos negócios.',
        demo: 'https://gerenciandocomercio.vercel.app/',
        github: 'https://github.com/JackobAssis/gerenciandocomercio'
    },
    'cycleroute': {
        title: '🚴 App de Rotas para Ciclismo',
        problema: 'Ciclistas precisam de ferramentas para planejar, visualizar e organizar rotas, mas muitas soluções são complexas ou não atendem necessidades específicas do público brasileiro.',
        solucao: 'Criei uma aplicação focada na experiência do ciclista, permitindo visualizar rotas, adicionar pontos de interesse e organizar trajetos. O projeto une minha paixão por tecnologia e ciclismo.',
        meuPapel: 'Desenvolvedor único: conceito, arquitetura, implementação e testes.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Interface responsiva e visual agradável' },
            { nome: 'JavaScript', uso: 'Lógica de manipulação de rotas' },
            { nome: 'Maps API', uso: 'Integração com mapas e geolocalização' }
        ],
        status: '🟢 Sistema funcional e disponível publicamente',
        impacto: 'Projeto pessoal funcional que reflete aplicação prática de tecnologia em hobby pessoal.',
        demo: 'https://cycleroute.vercel.app/',
        github: 'https://github.com/JackobAssis/cyclerroute1'
    },
    'gerenciador-faturas': {
        title: '💳 Sistema de Gerenciamento de Faturas',
        problema: 'Controlar faturas de cartões e despesas manualmente é trabalhoso e desorganizado. Planilhas tradicionais não oferecem experiência adequada.',
        solucao: 'Desenvolvi um sistema web para controle manual de faturas, despesas e cartões. A aplicação permite adicionar gastos, categorizar despesas e visualizar histórico de forma clara e organizada.',
        meuPapel: 'Desenvolvedor responsável por toda a aplicação: conceito, estrutura, lógica e interface.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Interface limpa e focada em organização' },
            { nome: 'JavaScript', uso: 'Cálculos, validações e manipulação de dados' },
            { nome: 'Firebase', uso: 'Persistência de dados do usuário' }
        ],
        status: '🟢 Sistema funcional, público e disponível',
        impacto: 'Uso real pessoal, validação de conceito de controle financeiro simplificado.',
        demo: 'https://gerenciadordefaturas.vercel.app/',
        github: 'https://github.com/JackobAssis/gerenciadordefaturas'
    },
    'page-afiliado': {
        title: '💼 Página de Afiliados',
        problema: 'Afiliados precisam de páginas de conversão simples e eficientes para divulgar produtos, mas nem sempre têm conhecimento técnico para criar.',
        solucao: 'Criei uma landing page focada em conversão, com estrutura clara, call-to-actions eficientes e design responsivo. O objetivo é maximizar cliques e conversões.',
        meuPapel: 'Desenvolvedor responsável: estrutura, design, copywriting técnico e otimizações.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Estrutura semântica e design focado em conversão' },
            { nome: 'JavaScript', uso: 'Interatividade e tracking de cliques' }
        ],
        status: '🟢 Sistema funcional e disponível publicamente',
        impacto: 'Demonstra habilidade de criar páginas de conversão e foco em resultados.',
        demo: 'https://pagefiliado.vercel.app/',
        github: 'https://github.com/JackobAssis/pagefiliado'
    }
};

// ========================================
// FUNÇÕES DOS MODAIS DE ESTUDO DE CASO
// ========================================

/**
 * Abre o modal com o estudo de caso do projeto
 * @param {string} projectId - ID do projeto
 */
function openCaseStudy(projectId) {
    const caseStudy = caseStudies[projectId];
    if (!caseStudy) return;
    
    const modal = document.getElementById('caseStudyModal');
    const content = document.getElementById('caseStudyContent');
    
    // Monta o HTML do estudo de caso
    const html = `
        <div class="case-study">
            <h2>${caseStudy.title}</h2>
            
            <div class="case-study-section">
                <h3>1️⃣ Problema</h3>
                <p>${caseStudy.problema}</p>
            </div>
            
            <div class="case-study-section">
                <h3>2️⃣ Solução</h3>
                <p>${caseStudy.solucao}</p>
            </div>
            
            <div class="case-study-section">
                <h3>3️⃣ Meu Papel</h3>
                <p>${caseStudy.meuPapel}</p>
            </div>
            
            <div class="case-study-section">
                <h3>4️⃣ Tecnologias & Uso</h3>
                <ul>
                    ${caseStudy.tecnologias.map(tech => `
                        <li><strong>${tech.nome}:</strong> ${tech.uso}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="case-study-section">
                <h3>5️⃣ Status & Impacto</h3>
                <p><strong>${caseStudy.status}</strong></p>
                <p>${caseStudy.impacto}</p>
            </div>
            
            <div class="case-study-links">
                <a href="${caseStudy.demo}" target="_blank" rel="noopener" class="btn btn-demo">🔗 Acessar Site</a>
                <a href="${caseStudy.github}" target="_blank" rel="noopener" class="btn btn-github">💻 Ver no GitHub</a>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll do body
}

/**
 * Fecha o modal de estudo de caso
 */
function closeCaseStudy() {
    const modal = document.getElementById('caseStudyModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll do body
}

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('caseStudyModal');
    if (event.target === modal) {
        closeCaseStudy();
    }
});

// Fecha o modal com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCaseStudy();
    }
});

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

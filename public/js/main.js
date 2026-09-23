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
    'agendaestetica': {
        title: '💈 AgendaEstética — SaaS de Agenda Online',
        problema: 'Profissionais de estética perdem agendamentos no WhatsApp, sofrem overbooking e não têm histórico de clientes. Ferramentas genéricas são caras e não resolvem a dor específica do setor.',
        solucao: 'Criei uma plataforma SaaS com agenda visual (mensal/semanal/diário), slots exclusivos que impedem conflitos, CRM básico e histórico. Stack: JS ESM, Firebase Auth/Firestore/Functions, PWA, Cypress E2E. Documentação com 30+ arquivos e testes de fluxo completo.',
        meuPapel: 'Product & Full-Stack solo: requisitos, arquitetura, Firestore rules, Functions, PWA, testes Cypress/E2E e docs. Projeto âncora para demonstrar entrega SaaS completa.',
        tecnologias: [
            { nome: 'JavaScript (ESM) + PWA', uso: 'SPA modular, offline-first, installable' },
            { nome: 'Firebase Auth/Firestore/Functions', uso: 'Autenticação, regras de segurança e automações serverless' },
            { nome: 'Cypress + testes E2E', uso: 'Fluxos críticos testados (30+ casos)' },
            { nome: 'Vercel + Firebase Hosting', uso: 'Deploy e hosting' }
        ],
        status: '🟢 Documentado, testado e pronto para monetização — case SaaS sênior-level',
        impacto: 'Valida capacidade de criar SaaS real do zero — arquitetura, regras de negócio e qualidade. Melhor case para vaga Backend Júnior.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/projetos/agendaestetica',
        github: 'https://github.com/JackobAssis/JackobLab'
    },
    'jackoblab-os': {
        title: '🧠 JackobLab-OS — Painel Web Full-Stack',
        problema: 'Gerenciar o JackobLab (projetos, IA, infra) exigia SSH, múltiplos terminais e falta de visão unificada — impossível operar pelo celular ou remoto.',
        solucao: 'Construí um OS web: backend Express + Socket.io + SQLite + wrapper OpenCode (DeepSeek), file browser, terminal, Git, aprovações human-in-the-loop, monitor (CPU/RAM/disco/Docker/Ollama/logs). Frontend React 19 + Vite + Tailwind (18 módulos). Réplica edge Hono+D1 para leitura. Docker compose.',
        meuPapel: 'Arquiteto e implementador full-stack: API, WebSocket streaming, orquestração multi-agente, UI e infra.',
        tecnologias: [
            { nome: 'Node.js + Express + Socket.io + SQLite', uso: 'API, realtime e persistência' },
            { nome: 'React 19 + Vite + Tailwind', uso: 'SPA com 18 módulos de UI' },
            { nome: 'Hono + D1 (Cloudflare edge)', uso: 'Réplica de leitura em produção' },
            { nome: 'Docker + Cloudflare Tunnel', uso: 'Containers e exposição segura' }
        ],
        status: '🟢 Sistema em produção local — arquitetura cliente-servidor real',
        impacto: 'Maior prova de Backend/Infra: WebSocket, monitoramento, multi-agente e DevOps.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/projetos/JackobLab-OS',
        github: 'https://github.com/JackobAssis/JackobLab'
    },
    'soc-lab': {
        title: '🔒 Laboratório SOC — Wireshark & Análise de Logs',
        problema: 'Sem visibilidade de tráfego e logs, equipes não detectam brute-force, varreduras ou anomalias — gap crítico para SOC.',
        solucao: 'Montei labs em Kali Linux: captura e análise com Wireshark (TCP/IP, DNS, HTTP), testes éticos controlados (Hydra, Aircrack-ng) e parser de logs em Node.js que detecta brute-force e gera alertas — base para o projeto SOC Log Analyzer.',
        meuPapel: 'Pesquisador e builder: ambiente Kali, cenários de ataque/defesa, parser e documentação no CyberZone.',
        tecnologias: [
            { nome: 'Kali Linux + Wireshark', uso: 'Captura e análise de tráfego' },
            { nome: 'TCP/IP, DNS, HTTP + CIA', uso: 'Fundamentos para triagem SOC' },
            { nome: 'Hydra / Aircrack-ng (lab isolado)', uso: 'Simulação ética de ataques' },
            { nome: 'Node.js (parser)', uso: 'Detecção de padrões nos logs' }
        ],
        status: '🟢 Labs documentados — CyberZone ativo',
        impacto: 'Case direto para vaga SOC/Cybersecurity Júnior — demonstra fundamentos e prática defensiva.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/CyberZone',
        github: 'https://github.com/JackobAssis/JackobLab'
    },
    'gerenciador-financas': {
        title: '💰 Gerenciador de Finanças',
        problema: 'Controlar finanças pessoais de forma eficiente é um desafio. É difícil saber exatamente quanto dinheiro sobrará no mês considerando faturas de cartões de crédito com diferentes datas de fechamento, vencimento e compras parceladas.',
        solucao: 'Desenvolvi um sistema completo para controle de rendas, despesas e cartões de crédito. O sistema inclui dashboard mensal e lógica inteligente para cálculo de faturas e parcelas, considerando datas de fechamento e vencimento dos cartões — refletindo corretamente o impacto real no salário mensal.',
        meuPapel: 'Desenvolvedor responsável por toda a aplicação: arquitetura, design de interface, lógica de negócios, integração com Firebase e deploy.',
        tecnologias: [
            { nome: 'HTML & CSS', uso: 'Interface responsiva e focada em usabilidade' },
            { nome: 'JavaScript', uso: 'Lógica de cálculo de faturas, parcelas e dashboard' },
            { nome: 'Firebase', uso: 'Persistência de dados e autenticação de usuários' }
        ],
        status: '🟢 Sistema funcional, em produção e disponível online',
        impacto: 'Sistema em uso real, ajudando a planejar melhor as finanças pessoais e entender o impacto real das despesas no orçamento mensal.',
        demo: 'https://gerenciadorpessoal.vercel.app/',
        github: 'https://github.com/JackobAssis/gerenciadorpessoal'
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
    'mobile-cast': {
        title: '📱 Mobile Cast — Android Screen + Audio (WebRTC P2P)',
        problema: 'Transmitir tela e áudio do Android para PC sem nuvem, sem lag e com gravação local é complexo — soluções comerciais cobram e exigem internet.',
        solucao: 'Implementei fluxo P2P via WebRTC: MediaProjection + AudioPlaybackCapture no Android, signaling mínimo (SDP/ICE) em Node, vídeo em <video> + MediaRecorder no PC (.webm). LAN-first, processamento no PC, servidor não transporta vídeo.',
        meuPapel: 'Arquiteto do fluxo P2P: app Android, signaling, receptor web e docs Fase 0–7.',
        tecnologias: [
            { nome: 'Android MediaProjection', uso: 'Captura de tela e áudio' },
            { nome: 'WebRTC P2P', uso: 'Transporte direto de mídia' },
            { nome: 'Node (signaling)', uso: 'Troca SDP/ICE apenas' }
        ],
        status: '🟢 MVP Fase 0–7 completo — docs e arquitetura',
        impacto: 'Demonstra redes, mídia e P2P — diferencial técnico forte em entrevistas.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/projetos/Android%20Screen',
        github: 'https://github.com/JackobAssis/JackobLab'
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
    },
    'api-rest-node': {
        title: '🔌 API REST Profissional — Node.js + JWT',
        problema: 'Portfólio mostrava só front + Firebase. Vagas Backend exigem Express, JWT, validações, testes e OpenAPI — sem case real, candidatura é filtrada.',
        solucao: 'Implementei API completa: Express + JWT/bcrypt + Zod + Helmet/CORS/Morgan, CRUD /tasks com paginação (page/limit/status/search), fallback SQLite→memória portável, e OpenAPI. 3 testes Jest+Supertest passando.',
        meuPapel: 'Backend solo: design REST, middlewares auth/rate-limit, validações Zod, testes e docs OpenAPI.',
        tecnologias: [
            { nome: 'Express + JWT + bcryptjs', uso: 'Auth e proteção de rotas' },
            { nome: 'Zod', uso: 'Validação de entrada' },
            { nome: 'SQLite (better-sqlite3) com fallback memória', uso: 'Persistência portável sem nativo obrigatório' },
            { nome: 'Jest + Supertest', uso: 'Testes de health e fluxo completo' },
            { nome: 'OpenAPI 3.0', uso: 'Documentação da API' }
        ],
        status: '🟢 Testes OK (3/3) — pronto para deploy Render/Cloudflare',
        impacto: 'Evidência Backend Júnior: cobre exatamente o gap que recrutadores apontam. Repositório em projetos/api-rest-node.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/projetos/api-rest-node',
        github: 'https://github.com/JackobAssis/JackobLab'
    },
    'soc-analyzer': {
        title: '🛡️ SOC Log Analyzer — Brute-Force Detector',
        problema: 'Sem parser, triagem de auth.log é manual. SOC precisa detectar padrões (5 falhas/IP em 5min) e gerar alertas.',
        solucao: 'Criei serviço Node: parser syslog → detector brute-force (janela deslizante) → API POST /api/analyze e GET /api/alerts + dashboard HTML. CLI --analyze e 3 testes. Sample com 6 falhas de 203.0.113.10 → 1 alerta.',
        meuPapel: 'Builder SOC: parser regex, detector, API Express e dashboard — integrado ao CyberZone (Wireshark/Hydra).',
        tecnologias: [
            { nome: 'Node.js + Express', uso: 'API e dashboard' },
            { nome: 'Parser syslog', uso: 'Extrai ip/user/result de auth.log' },
            { nome: 'Detector brute-force', uso: 'Janela 5min/5 falhas por IP' },
            { nome: 'Jest', uso: 'Testes de parser e detecção' }
        ],
        status: '🟢 Testes OK (3/3) — dashboard em dashboard/public/index.html',
        impacto: 'Case SOC defensivo: transforma logs em alertas acionáveis — diferencial para vaga SOC Júnior.',
        demo: 'https://github.com/JackobAssis/JackobLab/tree/main/projetos/soc-log-analyzer',
        github: 'https://github.com/JackobAssis/JackobLab'
    },
    'job-hunter': {
        title: '🎯 Job Hunter — Sistema de Busca e Triagem de Vagas (Backend/Automação)',
        problema: 'Buscar vagas em 5+ portais, avaliar compatibilidade e organizar candidaturas manualmente consome horas e gera candidaturas desalinhadas. Gupy/LinkedIn sem API pública e Adzuna/Greenhouse com limites exigem arquitetura resiliente e scoring honesto.',
        solucao: 'Construí plataforma modular Node.js (JackobLab): coleta multi-fonte (Arbeitnow, RemoteOK, Adzuna BR, Greenhouse Stone) com HttpClient timeout/retry/rateLimit, normalização job.schema.json, dedup antes da IA (hash), histórico persistente, IA qwen2.5:1.5b (Ollama) + scoring determinístico 0.30/threshold 70, dashboard read-only 127.0.0.1:8788 + Vercel serverless público, e relatórios de auditoria. Fases 5.1→15 com baselines congelados.',
        meuPapel: 'Arquiteto e builder solo: contrato de fontes, collectors, normalizers, history, scoring, IA desacoplada, dashboard e deploy Vercel — human-in-the-loop, sem candidatura automática.',
        tecnologias: [
            { nome: 'Node.js + ESM + HttpClient', uso: 'Coleta resiliente com timeout 15s, retry 2, rateLimit 2s' },
            { nome: 'Qwen2.5:1.5b (Ollama) + mock fallback', uso: 'Análise auditável, scoring determinístico' },
            { nome: 'Dashboard Triagem Inteligente v15', uso: '127.0.0.1:8788 + api/job-hunter-omega-three.vercel.app' },
            { nome: 'Histórico + Deduplicação', uso: 'nova/conhecida/atualizada/encerrada, idempotente 66→66' }
        ],
        status: '🟢 Fase15 — 66 vagas ativas (4 fontes), 3 fixtures ≥70, deploy público, 30+ testes',
        impacto: 'Evidência Backend/Automação: sistema real com múltiplas APIs, regras de negócio e monitoramento — diferencial para vaga Backend Júnior e automação para PMEs.',
        demo: 'https://job-hunter-omega-three.vercel.app',
        github: 'https://github.com/JackobAssis/JackobLab/tree/main/Whybson%20Jackson%20de%20Assis/carreira/job-hunter'
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
// ANIMAÇÃO FADE-IN AO SCROLL (otimizado)
// ========================================

/**
 * Observa elementos com classe .fade-in e adiciona .visible quando entram no viewport
 * Quick-win: reduz delay, usa threshold maior e content-visibility no CSS
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (!fadeElements.length) return;
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    fadeElements.forEach((element, index) => {
        // delay capado em 0.3s e só para os 12 primeiros (evita fila de 4s)
        const d = Math.min(index, 12) * 0.03;
        element.style.transitionDelay = `${d}s`;
        observer.observe(element);
    });
}

// util throttle via rAF
function throttleRaf(fn) {
    let ticking = false;
    return function(...args) {
        if (!ticking) {
            requestAnimationFrame(() => { fn.apply(this, args); ticking = false; });
            ticking = true;
        }
    };
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
 * Adiciona sombra na navbar ao rolar (throttled)
 */
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = throttleRaf(() => {
        nav.style.boxShadow = window.scrollY > 100 ? '0 4px 20px rgba(0, 0, 0, 0.5)' : '0 4px 16px rgba(0, 0, 0, 0.4)';
    });
    window.addEventListener('scroll', onScroll, { passive: true });
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
    
    // Mostra/esconde baseado no scroll (throttled)
    const toggleBackToTop = throttleRaf(() => {
        const show = window.scrollY > 500;
        backToTopBtn.style.opacity = show ? '1' : '0';
        backToTopBtn.style.visibility = show ? 'visible' : 'hidden';
    });
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    
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

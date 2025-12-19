# Instruções Copilot - Portfólio Whybson Assis

## Visão Geral do Projeto
Site de portfólio pessoal construído com **HTML, CSS e JavaScript puros** (zero dependências). Hospedado na Vercel, apresentando projetos funcionais com metodologia PSR (Problema-Solução-Resultado).

## Princípios Fundamentais da Arquitetura

### Filosofia Zero Dependências
- **Sem frameworks ou bibliotecas** - toda funcionalidade é JavaScript puro
- **Sem processo de build** - deploy direto dos arquivos fonte
- **Apenas fontes do sistema** - sem carregamento de fontes externas
- Mantenha simples, rápido e sem dependências

### Estrutura de Arquivos
```
public/
  ├── index.html          # Aplicação de página única (387 linhas)
  ├── css/style.css       # Estilização completa (~971 linhas)
  ├── js/main.js          # Todas as interações (~555 linhas)
  └── assets/             # Futuras imagens/ícones
```

## Fluxo de Desenvolvimento

### Desenvolvimento Local
```bash
# Iniciar servidor local (Python necessário)
python -m http.server 8000
# Acessar: http://localhost:8000/public
```

### Deploy
- **Plataforma:** Vercel (configurado via `vercel.json`)
- **Servir estático:** Todos os arquivos sob o diretório `public/`
- **Auto-deploy:** Push na branch main dispara o deploy
- Nenhum passo de build necessário

## Padrões e Convenções Principais

### Estrutura de Dados dos Projetos
Projetos são definidos como objetos JavaScript em [main.js](public/js/main.js#L14-L111) usando metodologia PSR:
```javascript
const caseStudies = {
    'project-id': {
        title: '🎮 Nome do Projeto',
        problema: 'Declaração clara do problema',
        solucao: 'Descrição da solução técnica',
        meuPapel: 'Seu papel específico',
        tecnologias: [{ nome: 'Tech', uso: 'Uso prático' }],
        status: '🟢 Sistema funcional...',
        impacto: 'Impacto no mundo real',
        demo: 'https://...',
        github: 'https://github.com/...'
    }
}
```

**Ao adicionar projetos:**
1. Adicione objeto ao `caseStudies` em [main.js](public/js/main.js)
2. Adicione card HTML na seção de projetos em [index.html](public/index.html)
3. Use prefixo emoji no título (🎮🍔🏪🚴💳💼)
4. Inclua `onclick="openCaseStudy('project-id')"` no botão de estudo de caso

### Sistema de Animação
Usa **IntersectionObserver API** para animações fade-in acionadas por scroll:
- Elementos com classe `.fade-in` são observados
- Classe `.visible` adicionada quando no viewport (threshold de 10%)
- Delay progressivo: `index * 0.1s` por elemento
- Ver [main.js](public/js/main.js#L199-L228)

### Sistema de Modal
Modais são gerados dinamicamente a partir dos dados de `caseStudies`:
- `openCaseStudy(projectId)` - renderiza conteúdo do modal
- `closeCaseStudy()` - fecha via botão X, tecla ESC ou clique fora
- HTML do modal injetado no container `#caseStudyModal`
- Ver [main.js](public/js/main.js#L114-L196)

### Propriedades Customizadas CSS
Todas as cores e valores usam variáveis CSS em `:root` ([style.css](public/css/style.css#L10-L37)):
- `--accent-green: #00ff88` - cor primária da marca
- `--bg-primary: #0b0f0d` - base do tema escuro
- Use essas variáveis, nunca cores fixas no código

### Design Responsivo
- Abordagem **mobile-first**
- CSS Grid com `auto-fit` e `minmax()` para cards de projetos
- Breakpoints via media queries (não explicitamente definidos - design fluido)

## Diretrizes de Conteúdo

### Informações Pessoais (Verificar Antes do Deploy)
Verificar em [CHECKLIST.md](CHECKLIST.md):
- GitHub: https://github.com/JackobAssis
- Email: jackoblab@gmail.com
- LinkedIn: https://www.linkedin.com/in/whybson-assis-55996775/
- Instagram: https://www.instagram.com/dev.jackob/
- Foto de perfil (opcional): `public/assets/profile.jpg`

### SEO & Meta Tags
Implementação completa de SEO no [head do index.html](public/index.html#L1-L26):
- Tags Open Graph para compartilhamento social
- Twitter Cards
- Imagem de preview: `assets/preview.png` (1200x630px)

## Tarefas Comuns

### Adicionar um Novo Projeto
1. Definir objeto de estudo de caso em `caseStudies` ([main.js](public/js/main.js))
2. Adicionar card HTML do projeto na seção projetos ([index.html](public/index.html))
3. Garantir estrutura consistente: título, descrição, tags, badge de status, botões, links
4. Usar classe `.fade-in` para animação de scroll

### Modificar Animações
Toda lógica de animação em [main.js](public/js/main.js):
- `initScrollAnimations()` - fades acionados por scroll
- `initSmoothScroll()` - comportamento de links âncora
- `initActiveNavigation()` - destaca seção atual
- Ajustar thresholds em `observerOptions`

### Atualizar Estilos
Estilos globais em [style.css](public/css/style.css):
- Modificar variáveis CSS para mudanças de tema
- Todas as seções usam classe base `.section`
- Cards usam classes `.project-card`, `.service-card`
- Manter consistência do tema escuro

## Decisões Técnicas e Justificativas

### Por que JavaScript Puro?
- **Simplicidade:** Sem complexidade de build ou gerenciamento de dependências
- **Performance:** Zero overhead de framework, carregamento instantâneo
- **Aprendizado:** Demonstra proficiência em JavaScript puro
- **Manutenção:** Sem atualizações de versão ou breaking changes

### Por que Arquivo HTML Único?
- **Contexto de portfólio:** Conteúdo cabe confortavelmente em uma página
- **SEO:** Todo conteúdo indexável sem roteamento JS
- **Navegação:** Smooth scroll entre seções é UX natural

### Por que Servidor HTTP Python?
- **Disponibilidade:** Python pré-instalado na maioria dos sistemas dev
- **Simplicidade:** Comando de uma linha para servir arquivos estáticos
- **Sem configuração:** Funciona out of the box

## Checklist de Testes
Referência [CHECKLIST.md](CHECKLIST.md) antes do deploy:
- Testar todos os modais abrem/fecham corretamente
- Verificar todos os links externos (6 demos + 6 repos GitHub)
- Checar layout responsivo no mobile
- Validar informações pessoais (WhatsApp, email, LinkedIn)
- Testar animações no scroll

## Limitações Conhecidas
- **Sem backend:** Puro frontend, sem processamento de formulários
- **Idioma único:** Português apenas (pt-BR)
- **Atualizações manuais:** Sem CMS, editar HTML/JS diretamente
- **Analytics limitado:** Apenas console logging (integração GA preparada mas não ativa)

## Melhorias Futuras
Ver [MELHORIAS.md](MELHORIAS.md) para melhorias implementadas e roadmap.

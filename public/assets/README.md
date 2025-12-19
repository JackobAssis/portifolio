# 📸 Assets - Imagens do Portfólio

## Imagens Necessárias

### 1. preview.png (Open Graph)
**Obrigatório para compartilhamento em redes sociais**

- **Dimensões:** 1200x630px
- **Formato:** PNG ou JPG
- **Uso:** Preview ao compartilhar no LinkedIn, Facebook, WhatsApp
- **Localização:** `public/assets/preview.png`

**Sugestões de conteúdo:**
- Seu nome em destaque: "Whybson Assis"
- Título: "Desenvolvedor Back-End"
- Texto: "Sistemas funcionais e soluções práticas"
- Fundo: tema dark com verde (#00ff88)
- Opcional: ícones de tecnologias (HTML, CSS, JS, Firebase)

**Ferramentas para criar:**
- Canva (gratuito): https://www.canva.com/
- Figma (gratuito): https://www.figma.com/
- Photoshop / GIMP

**Template sugerido:**
```
┌─────────────────────────────────────┐
│                                     │
│        WHYBSON ASSIS                │
│    Desenvolvedor Back-End           │
│                                     │
│  💻 Sistemas Funcionais             │
│  🚀 Soluções Práticas               │
│  🧠 Projetos Reais                  │
│                                     │
│  portifolio-jackob.vercel.app       │
│                                     │
└─────────────────────────────────────┘
```

---

### 2. profile.jpg (Foto Pessoal)
**Opcional - Melhora credibilidade**

- **Dimensões:** mínimo 400x400px (recomendado: 600x600px)
- **Formato:** JPG ou PNG
- **Uso:** Seção "Sobre mim"
- **Localização:** `public/assets/profile.jpg`

**Características:**
- Foto profissional
- Boa iluminação
- Fundo neutro ou relacionado à tecnologia
- Rosto em destaque
- Expressão confiante e amigável

---

## Como Adicionar as Imagens

### Método 1: Via Interface (Recomendado)
1. Crie as imagens usando Canva ou Figma
2. Salve no formato correto (PNG/JPG)
3. Coloque na pasta `public/assets/`
4. Renomeie conforme especificado:
   - `preview.png` para Open Graph
   - `profile.jpg` para foto pessoal

### Método 2: Via Terminal
```bash
# Navegue até a pasta assets
cd "public/assets"

# Copie suas imagens para cá
cp ~/Downloads/sua-preview.png preview.png
cp ~/Downloads/sua-foto.jpg profile.jpg
```

---

## ⚠️ Importante

### Se não adicionar preview.png:
- O link do Open Graph no HTML está apontando para:
  `https://portifolio-jackob.vercel.app/assets/preview.png`
- Se a imagem não existir, as redes sociais não exibirão preview visual
- **Solução temporária:** Comente as linhas de Open Graph image no HTML

### Se não adicionar profile.jpg:
- A foto está comentada por padrão no HTML
- O portfólio funciona normalmente sem ela
- Para ativar: descomente o bloco da foto no HTML (linha ~40)

---

## 🎨 Paleta de Cores do Portfólio

Para criar imagens consistentes:

```css
Background: #0b0f0d (preto esverdeado)
Secondary: #141a17 (cinza escuro)
Accent: #00ff88 (verde neon)
Text: #e8f0ed (branco suave)
```

---

## Exemplo de Preview Simples

Se você quiser algo rápido, crie um PNG com:
- Fundo: #141a17
- Texto branco: "Whybson Assis - Desenvolvedor Back-End"
- Texto verde: "Sistemas Funcionais | Soluções Práticas"
- Centralize tudo
- Adicione seu URL: portifolio-jackob.vercel.app

**Use Canva com template "Facebook Post" (1200x630) para facilitar!**

---

## Validação

Após adicionar as imagens, teste:

1. **Open Graph:**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

2. **Foto pessoal:**
   - Abra o portfólio e verifique a seção "Sobre mim"
   - Teste em mobile para ver se está responsivo

---

✨ **Dica:** A imagem de preview é especialmente importante para LinkedIn, pois melhora muito a taxa de cliques!

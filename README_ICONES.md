# 📱 Gerando Ícones para PWA

Este projeto requer ícones PNG nos tamanhos 192x192 e 512x512 pixels para funcionar como PWA.

## ✅ Arquivo SVG Criado

O arquivo `public/icon.svg` já foi criado com o design do ícone.

## 🔧 Como Gerar os Ícones PNG

### Opção 1: Usando Ferramenta Online (Mais Fácil)

1. Acesse https://realfavicongenerator.net/
2. Faça upload do arquivo `public/icon.svg`
3. Configure os tamanhos necessários (192x192 e 512x512)
4. Baixe os arquivos gerados
5. Coloque os arquivos `icon-192x192.png` e `icon-512x512.png` na pasta `public/`

### Opção 2: Usando Sharp (Node.js)

```bash
npm install sharp --save-dev
```

Depois, execute:

```bash
node scripts/gerar-icones-com-sharp.js
```

### Opção 3: Usando ImageMagick

```bash
convert public/icon.svg -resize 192x192 public/icon-192x192.png
convert public/icon.svg -resize 512x512 public/icon-512x512.png
```

## 📋 Arquivos Necessários

Após gerar os ícones, você deve ter:

- ✅ `public/icon.svg` (já criado)
- ⚠️ `public/icon-192x192.png` (precisa ser gerado)
- ⚠️ `public/icon-512x512.png` (precisa ser gerado)

## ✅ Verificar

Execute o script de verificação:

```bash
npm run gerar-icones
```

Este script verifica se todos os arquivos necessários estão presentes.


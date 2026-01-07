const fs = require('fs');
const path = require('path');

// Script simples para criar placeholders dos ícones
// Para gerar os ícones reais, você pode usar ferramentas online ou sharp
// Este script cria arquivos de referência

const sizes = [192, 512];
const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'icon.svg');

console.log('📱 Gerando ícones para PWA...\n');

// Verificar se o SVG existe
if (!fs.existsSync(svgPath)) {
  console.error('❌ Arquivo icon.svg não encontrado em public/');
  process.exit(1);
}

console.log('✅ Arquivo icon.svg encontrado');
console.log('\n📋 Tamanhos necessários:');
sizes.forEach(size => {
  const filename = `icon-${size}x${size}.png`;
  const filepath = path.join(publicDir, filename);
  console.log(`   - ${filename}`);
  
  // Criar um arquivo de referência (você precisará gerar os PNGs reais)
  if (!fs.existsSync(filepath)) {
    console.log(`   ⚠️  ${filename} não encontrado - você precisará gerar este arquivo`);
    console.log(`   💡 Dica: Use uma ferramenta online como https://realfavicongenerator.net/`);
    console.log(`   💡 Ou use sharp: npm install sharp --save-dev`);
  } else {
    console.log(`   ✅ ${filename} já existe`);
  }
});

console.log('\n💡 Para gerar os ícones PNG a partir do SVG:');
console.log('   1. Use https://realfavicongenerator.net/');
console.log('   2. Ou instale sharp: npm install sharp --save-dev');
console.log('   3. Ou use ImageMagick: convert icon.svg -resize 192x192 icon-192x192.png\n');


# Prática 03 - Iluminação e Sombra com Three.js

## Objetivo

O objetivo desta prática é explorar os conceitos de iluminação e sombras em Three.js. A prática envolve o uso de diferentes tipos de luzes e materiais para criar uma cena 3D que ilustra como as sombras e a iluminação podem ser manipuladas para obter diferentes efeitos visuais. A compreensão desses conceitos é fundamental para criar cenas realistas e visualmente atraentes em gráficos 3D.

## Conceitos de Iluminação e Sombra

### Tipos de Iluminação

1. **Luz Ambiente (`AmbientLight`)**

   - Fornece iluminação uniforme a todos os objetos na cena.
   - Não projeta sombras.
   - Exemplo no código: `new THREE.AmbientLight(0x404040)`.

2. **Luz Direcional (`DirectionalLight`)**

   - Simula a luz que vem de uma direção específica, como a luz do sol.
   - Projeta sombras com base na direção da luz.
   - Exemplo no código: `new THREE.DirectionalLight(0xffffff, 1)`.

3. **Luz Pontual (`PointLight`)**
   - Emite luz em todas as direções a partir de um ponto específico.
   - Projeta sombras com base na posição da luz.
   - Exemplo no código: `new THREE.PointLight(0xffffff, 500, 500)`.

### Tipos de Materiais e Sombras

1. **MeshStandardMaterial**

   - Um material baseado em PBR (Physically Based Rendering) que interage de forma realista com a iluminação.
   - Exemplo no código: `new THREE.MeshStandardMaterial({ color: 0xff0000 })`.

2. **MeshPhongMaterial**

   - Material que simula a reflexão da luz e é mais simples em comparação com o `MeshStandardMaterial`.
   - Exemplo no código: `new THREE.MeshPhongMaterial({ color: 0x00ff00 })`.

3. **MeshLambertMaterial**

   - Material que calcula a iluminação com base na iluminação direta, sem considerações de reflexão.
   - Exemplo no código: `new THREE.MeshLambertMaterial({ color: 0x0000ff })`.

4. **MeshPhysicalMaterial**
   - Um material mais avançado que permite a simulação de propriedades físicas como a rugosidade e a metálica.
   - Exemplo no código: `new THREE.MeshPhysicalMaterial({ color: 0xffff00 })`.

## Estrutura do Projeto

O projeto consiste em uma cena 3D criada com Three.js, que inclui:

1. **Cena e Câmera**

   - Configura a cena e a câmera para visualizar os objetos.

2. **Renderizador**

   - Inicializa o renderizador com suporte a sombras e define o tamanho da tela.

3. **Objetos**

   - Adiciona um círculo ao fundo.
   - Cria e posiciona várias geometrias (cubo, torus knot, cone, cilindro) na cena.

4. **Luzes**

   - **Luz Direcional**: Adicionada para simular a luz do sol.
   - **Luzes Pontuais**: Adicionadas e animadas para criar efeitos de luz dinâmicos.
   - **Luz Ambiente**: Adicionada para fornecer iluminação suave e uniforme.

5. **Controles**

   - **OrbitControls**: Permite a interação com a cena usando o mouse.

6. **Animação**
   - Anima as luzes pontuais para criar efeitos dinâmicos.

## Objetivo da Prática

Esta prática é projetada para ajudar a entender como diferentes tipos de luz e materiais afetam a aparência de uma cena em Three.js. Através da configuração de luzes e materiais variados, e da visualização das sombras projetadas, você aprenderá a:

- Manipular diferentes tipos de luzes e suas propriedades.
- Configurar sombras para criar efeitos realistas.
- Usar diferentes materiais para influenciar a forma como os objetos interagem com a luz.

A compreensão desses conceitos é crucial para criar cenas 3D que sejam não apenas visualmente impressionantes, mas também realistas e interativas.

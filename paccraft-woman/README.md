# 🟡 Paccraft Woman

> Releitura do Pac-Man com protagonista mulher e universo Minecraft: colete todos os pontos, fuja do creeper. Feito no **Game Lab** ao longo de 3 aulas — os comentários `//aula 1`, `//aula 2`, `//aula 3` no código marcam a progressão real usada em sala.

**[▶️ Jogar / Remixar no Code.org](https://studio.code.org/projects/gamelab/6efc7e3b-5020-479e-b317-f2b0501dc9cd)** · Código: [`codigo.js`](codigo.js)

## O que este projeto ensina

| Conceito | Onde está no código |
|---|---|
| **Função com parâmetros** | `criarpontos(numpontos, x_coor, y_coor)` — uma função desenha TODAS as fileiras de pontos; mude os argumentos e o labirinto muda |
| **Loop `for`** | dentro de `criarpontos` e na checagem de colisão com os pontos |
| **Grupos de sprites** | `pills = createGroup()` — tratar 56 pontinhos como uma coisa só |
| **Entrada de teclado** | `keyDown("left"/"right"/"up"/"down")` + rotação do sprite |
| **Inimigo com comportamento** | o creeper compara a posição da jogadora e decide para onde ir — uma IA de 4 linhas |
| **Estados de tela** | título → jogando → vitória (troféu) ou derrota (game over), controlados por `visible` |
| **Mundo que dá a volta** | saiu pela direita, entra pela esquerda (`if (pacman.x > 400) pacman.x = 0`) |

## Decisões de design que valem conversa

- A protagonista é uma **mulher** — quem costuma ser o herói dos jogos que a turma joga? Quem decide isso?
- O creeper **persegue** a jogadora. Um inimigo parado seria justo demais? A perseguição é o que cria a tensão — tensão é uma decisão.
- Cada ponto vale **50**. Por que os jogos adoram números grandes? 50 pontos "parecem mais" que 1?

## Pergunta de fechamento (leitura crítica de mídia)

*O Pac-Man original é de 1980 e até hoje aparece em celular, em festa, em camiseta. O que faz um jogo "simples" durar 45 anos — e o que os jogos de hoje fazem para você voltar amanhã?*

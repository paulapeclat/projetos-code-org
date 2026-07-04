# 🚪 DOoooooOOOOooors

> Jogo de reflexo no **Game Lab**: a personagem segue o mouse para coletar o que faz bem (+50) e desviar do que faz mal (−50), enquanto o mundo gera obstáculos sem parar. O nome brinca com o *DOORS* do Roblox — trazer para a aula as referências que as crianças amam é meio caminho para o engajamento.

**[▶️ Jogar / Remixar no Code.org](https://studio.code.org/projects/gamelab/89d36497-1ce3-4b5b-8851-7a866dd33b23)** · Código: [`codigo.js`](codigo.js)

## O que este projeto ensina

| Conceito | Onde está no código |
|---|---|
| **Geração procedural** | `virusGerador()` cria inimigos e itens novos a cada 30 quadros — o jogo nunca é igual duas vezes |
| **Contador de frames** | `contagem` soma +1 a cada `draw()` e zera aos 30: é assim que jogos medem o tempo por dentro |
| **Aleatoriedade** | `randomNumber(25, 370)` decide onde cada item nasce — sorte também é código |
| **Grupos com velocidade** | `grupoVirus.setVelocityEach(0, -15)` move a horda inteira de uma vez |
| **Controle pelo mouse** | `garota.x = World.mouseX` — o sprite gruda no cursor, ótimo para os menores |
| **Pontuação com consequência** | encostar no item certo soma, no errado subtrai — o placar conta uma história |

## Decisões de design que valem conversa

- O jogo fica **mais difícil sozinho**: quanto mais tempo você sobrevive, mais coisas há na tela. Quem decidiu que dificuldade crescente é divertido?
- Os sons são diferentes para acerto e erro — feche os olhos e você ainda sabe como está indo. O que mais os jogos comunicam **sem palavras**?
- E se o intervalo mudasse de 30 para 15 quadros? Remixe e teste: uma linha muda o jogo inteiro.

## Pergunta de fechamento (leitura crítica de mídia)

*Este jogo nasceu inspirado num jogo famoso do Roblox. Remixar, referenciar, homenagear... onde termina a inspiração e começa a cópia? Quem decide isso nos jogos — e na internet em geral?*

# 💰 Gerenciador de Dinheiro — Minecoins

> App de educação financeira no **App Lab**: você recebe uma mesada de 100 minecoins, define quanto quer economizar no mês e cada compra (diamante −10, ouro −5, esmeralda −2) atualiza o saldo. Passou da meta? A tela **fica vermelha**. Educação financeira vestida com a moeda que as crianças conhecem melhor: a de dentro dos jogos.

**[▶️ Abrir / Remixar no Code.org](https://studio.code.org/projects/applab/hSTCVUqekc7KzUUaBB-qh1CUjWRWk92FjodDPR-mFGk)** · Código: [`codigo.js`](codigo.js) · Interface: [`design.html`](design.html)

## O que este projeto ensina

| Conceito | Onde está no código |
|---|---|
| **Eventos de interface** | `onEvent("diamante", "click", ...)` — cada botão da tela dispara sua função |
| **Variáveis que importam** | `mesada` e `economizar` guardam o estado do mês — o app inteiro gira em torno delas |
| **Entrada do usuário** | `promptNum(...)` pergunta a meta de economia — o app é diferente para cada pessoa |
| **Condicional com propósito** | `if (mesada < economizar)` → tela vermelha: o `if` vira **alerta de consumo** |
| **Feedback visual** | `setProperty(..., "background-color", "red")` — a interface fala com o usuário |
| **Ciclo de vida** | o botão "novo mês" reinicia a mesada e pergunta a meta de novo |

## Decisões de design que valem conversa

- Por que o diamante custa **mais** que a esmeralda? Quem define o valor das coisas — nos jogos e fora deles?
- O alerta é **vermelho e imediato**. Os apps de banco dos adultos avisam assim quando a gente gasta demais? Deveriam?
- A mesada volta todo mês, mas a meta é escolhida de novo: e se o app **lembrasse** seu histórico? O que apps de verdade fazem com o que lembram de você?

## Pergunta de fechamento (leitura crítica de mídia)

*Minecoins, Robux, V-Bucks... por que será que os jogos inventam moedas próprias em vez de mostrar o preço em reais? Faça a conta de um item que você já quis comprar: quanto custava em dinheiro DE VERDADE — e a moedinha do jogo facilitou ou atrapalhou essa conta?*

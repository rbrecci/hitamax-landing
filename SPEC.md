# SPEC: Landing page do Supermercado Hitamax (versão demonstrativa)

Status: rascunho para aprovação do Saker. Data: 10/10/2026.
Insumos: [research/negocio.md](research/negocio.md), [research/identidade-visual.md](research/identidade-visual.md), [assets/MANIFEST.md](assets/MANIFEST.md).

## 1. Objetivo

Entregar uma landing page de uma página só, bonita, profissional e chamativa, para o Supermercado Hitamax (Rua Balaclava, 1365, Jardim Santo Alberto, Santo André/SP). Esta é uma **versão demonstrativa**: o fim dela é o gerente abrir no celular, gostar e autorizar a continuação do projeto. Não é o site definitivo.

Critério de sucesso da demo: o gerente vê a própria loja representada com cara de marca séria, acha o endereço, o horário e o telefone em menos de 5 segundos e entende o que ganharia (mais gente do bairro achando a loja, canal de ofertas, presença própria fora de diretório).

Fora de escopo da demo: carrinho, e-commerce, login, painel administrativo, banco de dados, blog, múltiplas páginas, integração com sistema de caixa.

## 2. O negócio, só com o que a pesquisa comprova

Legenda de confiança usada em todo o documento: **[confirmado]** tem fonte pública em `research/`; **[a confirmar]** vem de diretório ou lista e depende do gerente; **[ilustrativo]** é exemplo inventado para a demo e precisa estar rotulado como tal.

| Fato | Valor | Confiança |
|---|---|---|
| Nome comercial | Supermercado Hitamax | confirmado (Google Maps) |
| Razão social | Hitamax Minimercado e Padaria (LTDA nas bases atuais, EIRELI em listas antigas) | a confirmar |
| CNPJ | 10.765.432/0001-47, ativo, aberto em 02/04/2009 | confirmado (CNPJ Biz, Econodata) |
| Endereço | Rua Balaclava, 1365, Jardim Santo Alberto, Santo André/SP, CEP 09260-440 | confirmado |
| Atividade | Minimercado (CNAE 47.12-1-00) com padaria de revenda (CNAE 47.21-1-02) | confirmado |
| Nota | 4,1 de 5 em 560 avaliações no Google Maps, consulta de 10/10/2026 | confirmado, perecível |
| Temas das avaliações | preços (53 menções), padaria (15), açougue (8), bairro (8) | confirmado |
| Telefone | (11) 2325-5600 (três fontes concordam) | a confirmar |
| Horário | seg a sáb 07:00 às 20:00; domingo 07:30 às 14:00 (outra fonte diz domingo 07:00) | a confirmar |
| Cartões e vales | consta em listas de credenciados da Ticket e da UpBrasil | a confirmar |
| Entrega | um diretório afirma, sem detalhe | a confirmar |
| Açougue | citado em avaliações | a confirmar |
| Hortifruti, frios, WhatsApp, produção própria de pães | nenhuma fonte pública | **não encontrado** |
| Site, Instagram, Facebook | nenhum encontrado | não encontrado |
| História e fundação | nenhuma fonte pública (a data de 2009 é de abertura do CNPJ, não da loja) | não encontrado |

Decisões que decorrem da tabela:

1. A página **não afirma** hortifruti, frios, produção própria de pães, entrega nem WhatsApp. Onde a demo mostrar um bloco desses, ele aparece com o selo discreto "exemplo para validar" (ver seção 5).
2. A seção de história **não inventa narrativa**. Na demo ela vira um bloco com os números verdadeiros (aberto desde 2009 no cadastro, nota 4,1 com 560 avaliações) e um texto curto sobre o bairro, com espaço sinalizado para o gerente contar a história real.
3. O nome do sócio-administrador que aparece nas bases de CNPJ **não entra** na página nem neste spec. É dado de pessoa física, sem necessidade para a landing.
4. Depoimentos de clientes **não são reproduzidos**. Citar avaliação do Google exige autorização do autor. A prova social usa só a nota agregada e os temas, com a fonte nomeada ("Nota no Google Maps").

## 3. Identidade visual

Origem: a fachada documentada no Google Maps e Street View tem letreiro e entrada em **verde vivo**, letras "SUPERMERCADO HITAMAX" em maiúsculas largas com serifas, preenchimento pêssego e contorno vermelho escuro. **Não existe logotipo digital.** Toda cor e fonte abaixo é proposta de projeto, não marca oficial.

### Paleta

| Papel | HEX | Uso | Contraste do par de texto (WCAG) |
|---|---|---|---|
| Verde principal | `#176B3A` | hero, botões primários, rodapé | branco: 6,56:1 |
| Verde claro fachada | `#73C76A` | faixas, selos, ícones | `#173323`: 6,59:1 |
| Creme padaria | `#F7F1E3` | fundo geral | `#173323`: 12,15:1 |
| Pêssego letreiro | `#E89B76` | etiquetas, destaques | `#173323`: 6,11:1 |
| Terracota oferta | `#A93F2F` | preços, ofertas, CTA pontual | branco: 6,11:1 |
| Verde texto | `#173323` | texto corrido, fundo escuro | branco: 13,69:1 |
| Branco | `#FFFFFF` | cartões | `#173323`: 13,69:1 |

Os contrastes foram calculados pelo worker de pesquisa; a conferência independente faz parte do aceite (seção 9).

### Tipografia

- Títulos e preços: **Outfit** 600 e 700.
- Texto: **DM Sans** 400 e 600.
- Carregamento: Google Fonts com `display=swap` e `preconnect`.

### Marca na demo

Sem logo. Usar um **wordmark tipográfico provisório** ("Hitamax" em Outfit 700, com "Supermercado" menor acima), desenhado em HTML/CSS e SVG simples. A seção 11 registra como pendência pedir o arquivo do logo ao gerente.

### Direção visual

Acolhedora, fresca e de bairro, com acabamento de marca grande. Fotografia de comida em destaque, preço em fonte grande, bastante creme respirando, verde como âncora, terracota só onde há ação ou oferta. Cantos arredondados médios (12 a 16 px), sombras suaves, ilustração leve. Evitar cara de panfleto lotado e evitar o visual genérico de template.

## 4. Assets

O conjunto temporário gerado por IA está descrito em [assets/MANIFEST.md](assets/MANIFEST.md). Regras:

- Todo asset da demo é **ilustrativo**. O manifesto já informa, para cada arquivo, a foto real a pedir ao gerente.
- Nenhum asset desenha o nome Hitamax ou um logo.
- A imagem do hero e qualquer imagem que sugira a loja física **não pode passar por foto da loja real**. Na página ela aparece sem legenda que a identifique como a fachada do Hitamax.
- Fotos públicas do Google Maps e do Street View servem só de referência, não entram no repositório (direitos de terceiros).
- Imagens em WebP, até 400 KB cada, `loading="lazy"` abaixo da dobra, `width` e `height` declarados para evitar salto de layout.
- Ícones: SVG inline, sem biblioteca de ícones.

Quando o gerente fornecer as fotos reais, troca-se o arquivo mantendo o mesmo nome, sem mexer em HTML.

Conferência visual feita em 10/10/2026 (6 WebP e 1 SVG entregues, todos abaixo de 400 KB, sem texto legível nem rosto):

- `hero-fachada-bairro.webp` tem toldo **vermelho** e cara de rua mediterrânea. A fachada real documentada é **verde** e fica em bairro plano de Santo André. Serve de placeholder, mas na apresentação o Saker deve avisar que é imagem de exemplo. Se a diferença incomodar, regerar com toldo verde e rua brasileira (T4 da Fase 2).
- `hortifruti-banca.webp` ilustra um departamento sem fonte pública. Fica atrás do selo "exemplo para validar" da seção 5.
- `acougue-cortes.webp` tem carne muito marmorizada, mais premium que um açougue de bairro. Aceitável na demo, trocar pela foto real.

## 5. Estrutura da página

Uma página, rolagem vertical, **mobile first** (a maioria do público do bairro chega pelo celular). Ordem das seções:

| # | Seção | Conteúdo | Dados |
|---|---|---|---|
| 0 | Faixa de demonstração | "Versão demonstrativa, conteúdo ilustrativo sujeito a confirmação." Fina, no topo, removível com uma constante | n/a |
| 1 | Cabeçalho fixo | wordmark, links âncora (Departamentos, Ofertas, Sobre, Onde estamos), botão "Como chegar" | n/a |
| 2 | Hero | Título forte de bairro, subtítulo, dois botões (Como chegar, Ligar), indicador "Aberto agora" ou "Fecha às 20:00" calculado no navegador, imagem de cabeçalho | horário [a confirmar] |
| 3 | Faixa de confiança | nota 4,1 no Google (560 avaliações), "Aberto desde 2009 (cadastro)", "Atendimento de bairro" | [confirmado] |
| 4 | Departamentos | Padaria, Açougue, Mercearia com foto e frase curta. Hortifruti aparece com selo "exemplo para validar" | padaria e açougue [a confirmar], mercearia [confirmado] |
| 5 | Ofertas da semana | 4 cartões de oferta com preço grande, unidade e validade, **todos rotulados "exemplo"** e com nota "ofertas reais serão enviadas pelo mercado" | [ilustrativo] |
| 6 | Por que o bairro escolhe | 3 argumentos curtos tirados dos temas reais (padaria, açougue, atendimento) sem citar avaliação literal | [confirmado] |
| 7 | Formas de pagamento | linha de selos genéricos (cartões e vales) com aviso "a confirmar" no código, mas sem aviso visual poluindo | [a confirmar] |
| 8 | Sobre a loja | bloco com os números verdadeiros e espaço para a história real do gerente | história [não encontrado] |
| 9 | Onde estamos | endereço, mapa incorporado, botão "Abrir rota" (link de rota do Google Maps), horário em tabela, telefone | [a confirmar] |
| 10 | Rodapé | wordmark, endereço, telefone, CNPJ e razão social, aviso de demonstração, crédito "Demonstração criada por Saker" | CNPJ [confirmado] |

Comportamentos:

- **Aberto agora**: JavaScript compara a hora no fuso `America/Sao_Paulo` com a tabela de horários, que fica em uma constante única no topo do script. Sem dependência externa. Se o JavaScript falhar, o texto estático do horário continua visível.
- **Ligar**: link `tel:+551123255600`. Não existe botão de WhatsApp, porque não há número de WhatsApp confirmado. Ele entra quando o gerente informar.
- **Como chegar**: link `https://www.google.com/maps/dir/?api=1&destination=` com o endereço codificado. Abre o app no celular.
- **Mapa**: `<iframe>` do Google Maps por consulta de endereço, sem chave de API, com `loading="lazy"` e `title` descritivo.
- **Animação**: entrada suave por rolagem com `IntersectionObserver`, desligada sob `prefers-reduced-motion`.

### Copy de apoio (rascunho para a Fase 2)

Tom: vizinho, direto, sem exagero de preço (a reclamação recorrente é preço; **não prometer "menor preço"**). Exemplos de título do hero para o Saker escolher:

1. "O mercado do seu bairro, do pão quente ao fim do dia."
2. "Pertinho de você, no Jardim Santo Alberto."
3. "Tudo para a mesa do dia a dia, a poucos passos de casa."

Recomendação: opção 1, porque junta padaria (tema forte nas avaliações) com a rotina do bairro, e não promete nada que o cadastro não sustente.

## 6. Requisitos técnicos

### Stack e decisão

HTML5, CSS e JavaScript puros, **sem framework e sem etapa de build**. Arquivos: `index.html`, `styles.css`, `script.js`, pasta `assets/`.

Por quê: a demo vai para GitHub Pages, o gerente precisa abrir rápido, e um build (React, Vite) acrescentaria dependência, pipeline e superfície de falha sem ganho para uma página estática de uma tela. Se o projeto continuar e ganhar catálogo, painel de ofertas ou pedidos, a migração para Laravel ou React acontece na Fase 4, e o conteúdo já estará separado do código.

### Hospedagem

- Repositório **público** `rbrecci/hitamax-landing` (GitHub Pages gratuito exige repositório público). O repositório contém só conteúdo público e dados de cadastro empresarial aberto, sem dado pessoal.
- Publicação: GitHub Pages a partir da branch `main`, pasta raiz.
- URL esperada: `https://rbrecci.github.io/hitamax-landing/`. Todos os caminhos de arquivo são **relativos** para funcionar sob o subcaminho.
- Domínio próprio fica para depois da aprovação.

### Qualidade

| Requisito | Meta |
|---|---|
| Lighthouse mobile (Performance, Acessibilidade, Boas práticas, SEO) | todas com 90 ou mais |
| Peso total da página sem mapa | até 1,5 MB |
| Layout | sem rolagem horizontal de 320 px a 1920 px |
| Acessibilidade | contraste AA, foco visível, `alt` em toda imagem de conteúdo, HTML semântico, ordem de tabulação lógica |
| Movimento | respeita `prefers-reduced-motion` |
| SEO local | `title`, `meta description`, Open Graph, dados estruturados JSON-LD `GroceryStore` com endereço, telefone e horário, `lang="pt-BR"` |
| Segurança | sem formulário, sem cookie, sem script de terceiros além do iframe do mapa e das fontes |
| Privacidade | sem analytics na demo |

Observação: dado estruturado com horário e telefone **a confirmar** só deve ir ao ar na versão final. Na demo o JSON-LD é incluído, mas o item de validação da seção 9 exige que ele reflita exatamente a tabela da seção 2.

## 7. Plano de execução

Regra de onda rolante: só a Fase 1 e a 2 estão em tarefas despacháveis; as seguintes ficam em épico.

### Fase 1: pesquisa e fundação (concluída em 10/10/2026)

- [x] Pesquisar negócio: [research/negocio.md](research/negocio.md) (worker Codex)
- [x] Pesquisar identidade visual: [research/identidade-visual.md](research/identidade-visual.md) (worker Codex)
- [x] Gerar assets temporários: [assets/MANIFEST.md](assets/MANIFEST.md) (worker Codex)
- [x] Redigir este SPEC (Claude)
- [ ] Criar repositório no GitHub e publicar o SPEC (marcar quando o push for verificado)

### Fase 2: construção da landing (próxima)

Cada tarefa tem dono de arquivo distinto para permitir trabalho paralelo sem conflito.

| Tarefa | Dono | Arquivos | Aceite observável |
|---|---|---|---|
| T1: esqueleto HTML semântico das 11 seções, meta tags, JSON-LD | Claude | `index.html` | HTML validado; todas as seções presentes, em ordem |
| T2: design system em CSS (tokens da seção 3, grid, componentes, responsivo) | Claude | `styles.css` | capturas a 360, 768 e 1280 px sem rolagem horizontal |
| T3: script de "aberto agora", animação de rolagem, links de rota e telefone | Codex | `script.js` | testes com 6 horários de entrada (aberto, fechado, fronteira, domingo) devolvendo o texto esperado |
| T4: otimização das imagens (WebP, tamanhos) e favicon SVG do wordmark | Codex | `assets/` | nenhum arquivo acima de 400 KB; favicon visível na aba |
| T5: revisão independente do resultado contra este SPEC, só relatório | Codex | nenhum | lista de desvios com `arquivo:linha`, sem editar |
| T6: auditoria Lighthouse e acessibilidade, correção dos achados | Claude | todos | metas da seção 6 atingidas, com relatório colado |

### Fase 3: publicação e apresentação (épico)

Ligar GitHub Pages, validar a URL em celular real, gerar cartão de compartilhamento (Open Graph) e preparar um roteiro de 3 minutos para o Saker mostrar ao gerente, incluindo o que a demo ainda não tem e o que a próxima fase entregaria.

### Fase 4: versão real (épico, depende da aprovação do gerente)

Receber do gerente: fotos reais, logo, história, ofertas, telefone e WhatsApp definitivos, perfis sociais. Trocar assets e textos, remover a faixa de demonstração e os selos de exemplo, decidir domínio e se há necessidade de painel de ofertas (aí avaliar Laravel ou um arquivo JSON editável).

## 8. Como usar o Orca neste projeto (teste do ambiente)

O objetivo secundário desta demo é validar o fluxo Claude Code com Codex no Orca. Padrão adotado, já usado na Fase 1:

1. Claude cria um `run` de orquestração e despacha workers Codex em paralelo, cada um com **brief autocontido**, dono de arquivo exclusivo, regras de texto e critério de aceite.
2. Cada worker devolve um `worker_done` com resumo. Claude confere o arquivo, roda a varredura de travessão e só então libera o terminal.
3. Quem escreveu não revisa: na Fase 2 a revisão (T5) é de outro worker e só reporta.
4. Claude trabalha no que depende de julgamento (spec, HTML, CSS) enquanto os workers rodam.

Lições registradas da Fase 1 (para os próximos briefs):

- `--worktree current` aponta para o **diretório da sessão do coordenador**, não para o repositório recém-registrado. Os workers nasceram na pasta `projects/`, e a correção foi enviada por mensagem de terminal antes de qualquer escrita. Na Fase 2, abrir a sessão dentro do repositório ou passar `--worktree` com o id do worktree do repo.
- Brief com caminho relativo exige dizer o diretório base de forma absoluta.

## 9. Critérios de aceite da demo

A demo só é declarada pronta quando cada item tiver evidência colada (comando e saída, ou captura):

1. `index.html` abre pela URL do GitHub Pages e carrega CSS, JS e imagens sem erro 404 no console.
2. Lighthouse mobile com 90 ou mais nas quatro categorias.
3. Capturas a 360, 768 e 1280 px sem rolagem horizontal e sem sobreposição.
4. Contraste dos pares da seção 3 recalculado de forma independente da pesquisa.
5. Teste do "aberto agora" nos 6 horários de borda.
6. Todo texto da página rastreável a uma linha da seção 2; nada afirmado que esteja como "não encontrado".
7. Todo conteúdo ilustrativo rotulado ("exemplo") visualmente ou por faixa de demonstração.
8. Varredura de travessão (U+2014, U+2013, U+2212) nos arquivos versionados com exit code 1:
   `LC_ALL=C.UTF-8 git grep -nP "[\x{2014}\x{2013}\x{2212}]" -- '*.md' '*.html' '*.js' '*.css' '*.svg'`
9. `git config user.name` e `user.email` conferidos antes de cada commit; nenhum `Co-Authored-By`.

## 10. Riscos

| Risco | Efeito | Mitigação |
|---|---|---|
| Informação de diretório desatualizada (horário, telefone, razão social) | gerente vê dado errado e perde confiança na demo | tudo marcado "a confirmar" aqui; conferir por telefone ou visita antes da apresentação |
| Imagens de IA passarem por fotos da loja | gerente estranha, ou leva como engano | rótulo de demonstração, nenhuma legenda que identifique a loja, pedido das fotos reais |
| Avaliações de preço (principal tema negativo) ficarem expostas por promessa de economia | contradição pública | copy sem promessa de menor preço; ofertas só com dados aprovados |
| Repositório público com nome de comércio real antes da aprovação do gerente | exposição sem consentimento | conteúdo só de fonte pública e sem dado pessoal; avisar o gerente na apresentação; se ele recusar, despublicar e apagar o repo |
| GitHub Pages sob subcaminho quebrar caminhos absolutos | CSS e imagens não carregam | todos os caminhos relativos, verificado no aceite 1 |
| Mapa incorporado depender de serviço de terceiro | bloco em branco | link "Abrir rota" funciona sem o iframe |

## 11. Pendências para o gerente (perguntas da apresentação)

1. Qual é a história da loja: quando abriu ao público, quem fundou, de onde vem o nome?
2. Quais departamentos existem hoje (padaria própria ou revenda, açougue, hortifruti, frios)?
3. Telefone oficial e se há WhatsApp. O e-mail comercial encontrado continua ativo?
4. Horário atual, inclusive domingo e feriados.
5. Faz entrega? Onde, a qual preço, por qual canal?
6. Quais cartões e vales aceita hoje?
7. Existe logo em arquivo? Existem perfis em redes sociais?
8. Autoriza fotos da loja e usar o nome comercial na página pública?
9. Quais ofertas ele quer destacar?

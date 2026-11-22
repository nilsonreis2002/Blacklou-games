# BlackLou Games

Portal de jogos online da BlackLou Games. O objetivo do projeto é oferecer jogos gratuitos, originais e acessíveis em computadores e celulares, com foco em qualidade de experiência, conteúdo útil e monetização responsável.

## Identidade e contato

- Marca: BlackLou Games
- E-mail oficial de contato: claudenilsonpaulinodosreis@gmail.com
- Identidade visual: pantera preta, verde neon, preto e prata.

## Google AdSense

- Publisher ID: `pub-9134247781656245`
- Arquivo de declaração: [ads.txt](./ads.txt)
- Linha publicada no ads.txt: `google.com, pub-9134247781656245, DIRECT, f08c47fec0942fa0`

### Requisitos antes da monetização

1. Publicar o site em um domínio próprio e adicioná-lo à conta AdSense.
2. Confirmar que `https://SEU-DOMINIO/ads.txt` responde com HTTP 200 e contém a linha acima.
3. Concluir a verificação e aguardar a revisão do Google.
4. Manter conteúdo original e suficiente em cada página de jogo, navegação clara, páginas institucionais e experiência adequada em dispositivos móveis.
5. Evitar anúncios que cubram controles, instruções, conteúdo ou área interativa dos jogos.
6. Não clicar nos próprios anúncios nem incentivar cliques.

A presença do publisher ID e do ads.txt não significa aprovação ou ativação de anúncios. A decisão é do Google.

## Hospedagem Cloudflare

- Plataforma planejada: Cloudflare Workers / Static Assets.
- Serviço informado no painel: `blacklou-games`.
- Arquivo de configuração do projeto: [wrangler.toml](./wrangler.toml).
- O domínio final ainda precisa ser confirmado e associado ao serviço antes da configuração definitiva de SEO, sitemap e verificação do AdSense.

## Estrutura do portal

- Página inicial e catálogo de jogos.
- Página Sobre.
- Página de Contato.
- Política de Privacidade.
- Termos de Uso.
- Página 404.
- Jogo Neon Defender.
- Arquivos de SEO: `robots.txt` e `sitemap.xml`.
- Recursos visuais e estilos em `assets/`.

## Desenvolvimento e publicação

O portal usa HTML, CSS e JavaScript. Consulte o arquivo `wrangler.toml` e as configurações do serviço Cloudflare antes de executar o deploy. Não publique chaves privadas, tokens ou credenciais no repositório.

## Situação deste repositório

Este repositório contém os arquivos de configuração e documentação adicionados para contato, monetização e hospedagem. A versão completa do site (páginas, jogo e assets) precisa ser sincronizada a partir do pacote-fonte do projeto antes de considerar o repositório pronto para deploy.

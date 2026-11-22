# Publicação na Cloudflare

## Serviço

- Nome do serviço informado: `blacklou-games`
- Plataforma: Cloudflare Workers com arquivos estáticos (confirmar configuração no painel).
- Configuração versionada: `wrangler.toml`.

## Checklist de publicação

- [ ] Sincronizar o código-fonte completo do portal e os assets.
- [ ] Conferir o diretório de saída e a configuração do Wrangler.
- [ ] Associar o domínio definitivo ao Worker.
- [ ] Testar HTTPS, redirecionamentos e páginas 404.
- [ ] Confirmar que `/ads.txt` está acessível publicamente.
- [ ] Confirmar que `/robots.txt` e `/sitemap.xml` usam o domínio definitivo.
- [ ] Testar jogos em celular e desktop.
- [ ] Verificar acessibilidade, velocidade e ausência de erros no console.

Não armazenar tokens de API, chaves privadas ou credenciais da Cloudflare neste repositório.

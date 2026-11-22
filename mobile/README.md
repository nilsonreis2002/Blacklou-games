# BLACKLOUT PANTHER — Android

Aplicativo Android dedicado ao jogo de ação e plataforma 3D BLACKLOUT PANTHER. O app abre diretamente no menu das masmorras, sem catálogo de minijogos.

## O que está incluído

- Campanha de fantasia sombria com seis regiões/masmorras e arenas.
- Personagem 3D, combate, chefes, XP, níveis, habilidades e armas.
- Gemas e ouro: gemas para desbloquear armas/habilidades; ouro para melhorias.
- Controles táteis e orientação horizontal no Android.
- Three.js copiado para dentro do APK: o jogo não precisa baixar a biblioteca 3D ao iniciar.

## Modo offline

A versão APK empacota a página do jogo, scripts, estilos e biblioteca Three.js em `android/app/src/main/assets/public`. Depois de instalado, o conteúdo jogável principal funciona sem internet. Anúncios em vídeo, pagamentos, sincronização na nuvem e compras na loja exigirão conexão e serão implementados separadamente.

## Gerar APK de teste

Requisitos: Node.js 20+, JDK 17 e Android SDK.

```bash
cd mobile
npm install
npm run prepare:web
node scripts/check-game.mjs
npx cap add android
npx cap sync android
node scripts/configure-android.mjs
cd android
./gradlew assembleDebug
```

APK debug: `mobile/android/app/build/outputs/apk/debug/app-debug.apk`.

## Build no GitHub

Abra Actions → Build BLACKLOUT PANTHER Android APK. O artefato gerado chama-se `BLACKLOUT-PANTHER-Android-APK`.

A versão debug é para testes e instalação manual. Para distribuição pública, gere uma versão release assinada com uma keystore protegida em GitHub Secrets; nunca envie a keystore ou senhas ao repositório.

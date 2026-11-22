# BLACKLOUT PANTHER — Android

Aplicativo Android dedicado ao jogo de ação 3D BLACKLOUT PANTHER. O app abre diretamente a aventura; a experiência de portal e catálogo de jogos foi retirada da tela inicial.

## Gerar APK de teste

Requisitos: Node.js 20+, JDK 17 e Android SDK.

```bash
cd mobile
npm install
npm run prepare:web
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK debug: `mobile/android/app/build/outputs/apk/debug/app-debug.apk`.

## Build no GitHub

Abra Actions → Build BLACKLOUT PANTHER Android APK → Run workflow. O artefato gerado chama-se `BLACKLOUT-PANTHER-Android-APK`.

A versão debug é para testes e instalação manual. Para distribuição pública, gere uma versão release assinada com uma keystore protegida em GitHub Secrets; nunca envie a keystore ou senhas ao repositório.

## Desempenho

O jogo usa Three.js empacotado localmente no APK e qualidade gráfica adaptativa para dispositivos móveis. O desempenho real ainda precisa ser validado no aparelho Android de destino.

# BlackLou Games para Android

O app usa Capacitor e reaproveita o site e os jogos existentes. O conteúdo web é copiado para `mobile/www` antes da sincronização; não edite essa pasta manualmente.

## Gerar APK de teste

Requisitos: Node.js 20+, JDK 17 e Android SDK configurado.

```bash
cd mobile
npm install
npm run prepare:web
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK de teste: `mobile/android/app/build/outputs/apk/debug/app-debug.apk`.

## Atualizar o conteúdo do app

Sempre que o site mudar:

```bash
cd mobile
npm run cap:sync
```

## Gerar APK automaticamente

No GitHub, abra **Actions → Build BlackLou Android APK → Run workflow**. O workflow compila o APK debug e publica o arquivo como artefato para baixar.

O APK debug é adequado para testes e instalação manual. Para distribuição pública como versão release, configure uma chave de assinatura Android em secrets e gere uma versão release assinada. Não coloque keystore nem senhas no repositório.

## PWA

O site também pode ser instalado pelo navegador Android quando servido por HTTPS. O service worker mantém uma cópia básica da interface para uso offline; jogos e recursos externos ainda podem exigir conexão na primeira visita.

Setup projektu
1. Sklonuj repozytorium
git clone https://github.com/Zvolinsky/youtube-learn-app.git
cd youtube-learn-app

2. Zainstaluj zależności
Użyj Yarn (zalecane) lub npm:
yarn install

lub
npm install

3. Skonfiguruj zmienną środowiskową

Stwórz plik .env w folderze głównym projektu.
Dodaj swój klucz YouTube API:YOUTUBE_API_KEY=twój_klucz_api


5. Uruchom projekt

Uruchom serwer deweloperski:
npm run start


Otwórz w Expo Go (zeskanuj QR na urządzeniu) lub:
iOS: npx expo run:ios
Android: npx expo run:android


Rozwiązywanie problemów

Błąd API: Sprawdź YOUTUBE_API_KEY w .env i quota w Google Cloud Console.
Brak SVG: Upewnij się, że react-native-svg-transformer jest poprawnie skonfigurowany.
Błąd NitroModules: Jeśli używasz react-native-nitro-modules, włącz nową architekturę (newArchEnabled=true w gradle.properties) i uruchom npx react-native codegen.

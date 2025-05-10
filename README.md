# 📘 Uproszczona wersja klienta sklepu

**Zadanie rekrutacyjne Ocado Technology**

Wersja live na [Github Pages](https://bartoszdudziak-dev.github.io/Bartosz_Dudziak_Web_Wroclaw/).

## 📝 Opis

Stworzenie działającej aplikacji webowej, która umożliwia użytkownikom<br/>
przeglądanie produktów, dodawanie i usuwanie ich z koszyka zakupów,<br/>
przeglądanie podsumowania zamówienia przed oraz po jego złożeniu.<br/>

&nbsp;

## ⚙️ Technologie

![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

&nbsp;

## 🤔 Podejście

- Skalowalna struktura folderów i komponenty do ponownego użycia, np. **Table** (inspirowany **TanStack Table**).

- Stan koszyka zarządzany za pomocą **useReducer** i **useContext** - dobre dla mniejszych aplikacji,<br/>
  ale może powodować nadmierne rerenderowanie. W większych aplikacjach rozważyłbym użycie **Redux**.<br/>

- Informacje dotyczące zamówienia są przesyłane do strony potwierdzenia poprzez **localStorage**,<br/>
  który jest czyszczony przy wyjściu ze strony.<br/>

- Routing został dostosowany do działania na **GitHub Pages**.<br/>

&nbsp;

## 🚀 Instalacja i uruchamianie projektu

```bash
# 1. Upewnij się, że masz zainstalowane Node.js i npm:
node -v
npm -v

# 2. Sklonuj repozytorium
git clone https://github.com/bartoszdudziak-dev/Bartosz_Dudziak_Web_Wroclaw.git

# 3. Przejdź do katalogu projektu
cd Bartosz_Dudziak_Web_Wroclaw

# 4. Zainstaluj zależności
npm install

# 5. Uruchom aplikację w trybie deweloperskim (Vite)
npm run dev
```

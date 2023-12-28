<p align="center">
  <a href="https://aggutierrez.com" rel="noopener" target="_blank">
    <img src="https://raw.githubusercontent.com/aggutierrez98/aggutierrez-portfolio/main/public/banner.png" alt="aggutierrez.com banner"/>
  </a>
</p>

<h1 align="center">aggutierrez.com</h1>

<div align="center">

![Website](https://img.shields.io/website?logo=vercel&style=for-the-badge&up_message=online&url=https%3A%2F%2Fwww.aggutierrez.com%2F)
![Security Headers](https://img.shields.io/github/actions/workflow/status/aggutierrez98/aggutierrez-portfolio/main.yml?branch=main&label=Main%20pipeline&logo=github-actions&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/aggutierrez98/aggutierrez-portfolio?style=for-the-badge)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/aggutierrez98/aggutierrez-portfolio/react?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/aggutierrez98/aggutierrez-portfolio/next?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/aggutierrez98/aggutierrez-portfolio/framer-motion?style=for-the-badge)

</div>

## 👋 Greetings

Welcome to the source code of [aggutierrez.com](https://aggutierrez.com). Built with Nexjts and hosted with Vercel. You can see my personal web page code here.

## Requirements

1. Must have npm or yarn installed in computer. I will follow the installation using yarn as an example.

2. Must have Infisical CLI installed in your computer.
   [See documentation to install it in diffetent OS](https://infisical.com/docs/cli/overview).

3. Ensure you are logged in Infisical CLI

   ```sh
    infisical auth
   ```

4. Create a project in Infisical and the secrets needed.

   ```dosini
   # VARIABLES NEEDED

   NEXT_PUBLIC_ASSETS_URL  # Path (relative to project root) of public assets loaded.
   NEXT_PUBLIC_RAW_DATA_URL  # Url of the github repository from which the information shown in the portfolio is loaded.
   NEXT_PUBLIC_GH_DATA_TOKEN  # Token needed to read data from that github repository.

   # Emailjs service variables to send mails
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   NEXT_PUBLIC_EMAILJS_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   ```

## 🛠 Installation & Set Up

1. Install project dependencies

   ```sh
   yarn install
   ```

2. Start the development server

   ```sh
   yarn dev
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   yarn build
   ```

2. Preview the site build

   ```sh
   yarn start
   ```

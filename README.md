# SantaSki

Bienvenue sur le dépôt de **SantaSki**, un site web interactif développé avec **HTML, CSS, JavaScript, Node.js, Express et Prisma**.

## 👀 Aperçu

SantaSki est un projet scolaire qui a pour but d'inciter les enfants défavorisés à aller aux vacances de skis gratuitement. Ce projet combine un **frontend dynamique** et un **backend robuste** pour offrir une expérience immersive.
## 🚀 Fonctionnalités

-   **Interface fluide et responsive** (HTML, CSS, JavaScript)
-   **Gestion des scores et utilisateurs** avec une base de données via Prisma
-   **Serveur backend** en **Node.js + Express** pour gérer les données et les sessions
-   **Stockage des scores** dans une base de données SQL grâce à Prisma ORM

## 🛠 Technologies utilisées

-   **Frontend** : HTML, CSS, JavaScript (animations et interactions)
-   **Backend** : Node.js, Express.js
-   **Base de données** : Prisma (avec MySQL)
-   **Gestion des dépendances** : npm

## 🔧 Installation et utilisation

1. **Cloner le dépôt** :

    ```bash
    git clone https://github.com/Nico-Sung/SantaSki.git
    ```

2. **Accéder au répertoire du projet** :

    ```bash
    cd SantaSki
    ```

3. **Installer les dépendances** :

    ```bash
    npm install
    ```

4. **Configurer la base de données** :

    - Dans le fichier `.env`, ajoutez votre URL de base de données Prisma :
        ```env
        DATABASE_URL="postgresql://user:password@localhost:5432/santaski"
        ```
    - Exécutez la migration Prisma :
        ```bash
        npx prisma migrate dev
        ```

5. **Lancer le serveur backend** :

    ```bash
    npm run dev
    ```

    Le backend sera accessible sur [http://localhost:3000](http://localhost:3000).

---

🎅 Merci d'essayer SantaSki ! Amusez-vous bien sur les pistes ! 🏂❄️

import Image from 'next/image';

export default function Projet1() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* En-tête du projet */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Application Lourde – Les Folies de Louise
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">
          Gestion de restaurant desktop en C#
        </h2>
      </header>

      {/* Section d'introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          L'application lourde « Les Folies de Louise » est un outil de gestion desktop développé en C# pour moderniser l'organisation du café fictif Les Folies de Louise, situé à Camoël.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Conçue pour gérer en local les commandes, les réservations, les stocks et le personnel, cette application offre une interface intuitive pour les employés (serveurs, cuisiniers, administrateurs) et une base de données structurée via Entity Framework Core.
        </p>
      </section>

      {/* Section Objectifs */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Objectifs du projet
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Objectif principal : proposer un système de caisse et de gestion complet, rapide et adapté aux besoins actuels, que ce soit pour la consommation sur place ou à emporter. L'application permet de centraliser toutes les données (produits, commandes, employés, stocks, réservations) et d'automatiser les processus courants du restaurant.
        </p>
      </section>

      {/* Section Technologies */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Technologies & Outils
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>C# (.NET 6)</li>
          <li>Entity Framework Core (ORM)</li>
          <li>MySQL (administré via PhpMyAdmin)</li>
          <li>Windows Forms / WPF (selon implémentation)</li>
          <li>Visual Studio 2022</li>
          <li>Serveur Windows Server 2022 (déploiement local)</li>
          <li>Base de données Linux Debian 12</li>
          <li>API REST (Laravel) pour la partie mobile</li>
          <li>Flutter (application mobile)</li>
          <li>GitHub (gestion du code), Slack, Jira, Confluence (gestion de projet)</li>
        </ul>
      </section>

      {/* Section Fonctionnalités */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Fonctionnalités par rôle utilisateur
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Accès libre (sans connexion)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Consultation dynamique des actualités du restaurant</li>
              <li>Parcours de la carte et filtrage des produits</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Client (après connexion sur le site web)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Réservation de table (création, modification, annulation)</li>
              <li>Espace personnel pour suivre ses réservations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Serveur / Cuisinier / Administrateur (dans l'application desktop)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Gestion des commandes
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Création d'une nouvelle commande (sélection de produits, quantité)</li>
                  <li>Suivi de l'état : « en préparation », « servi », « annulé »</li>
                </ul>
              </li>
              <li>Gestion des employés
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Ajout, modification, suppression d'un utilisateur avec rôle</li>
                  <li>Attribution des droits selon rôle</li>
                </ul>
              </li>
              <li>Gestion des stocks
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Suivi des niveaux de stock des produits</li>
                  <li>Alertes de réapprovisionnement automatiques</li>
                  <li>Historique des entrées/sorties de stock</li>
                </ul>
              </li>
              <li>Génération des factures
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Émission de facture PDF ou impression directe</li>
                  <li>Envoi automatique par e-mail (simulateur MailBox)</li>
                </ul>
              </li>
              <li>Suivi des déchets et signalement de problèmes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Base de données */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Base de données & Architecture
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto mb-6">
{`• UTILISATEUR (Id, Nom, Prénom, Email, Mot de passe encrypté, Rôle)
• PRODUIT (Id, Nom, Description, Prix, Type)
• COMMANDE (Id, Date, Statut, IdClient, ListeProduits)
• RESERVATION (Id, DateHeure, NbPlaces, IdClient, Statut)
• STOCK (IdProduit, QuantitéActuelle, SeuilAlerte)
• EVENEMENT (Id, Nom, Description, DateDébut, DateFin)
• REDUCTION (Id, Pourcentage, Conditions, Durée)`}
        </pre>
        <p className="text-gray-700 dark:text-gray-300">
          L'utilisation d'Entity Framework Core comme ORM (Object-Relational Mapping) assure une parfaite cohérence entre les objets C# et la base de données MySQL. Les migrations sont automatisées, facilitant ainsi l'évolution du schéma de données tout en préservant l'intégrité des données existantes.
        </p>
      </section>

      {/* Section Screenshots */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Captures d'écran de l'application
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {
              <Image
                src="/assets/images/screen4.PNG"
                alt="Description de la capture"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              /> 
              
          }
          {
              <Image
                src="/assets/images/screen.PNG"
                alt="Description de la capture"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              /> 
              
          }
          {
              <Image
                src="/assets/images/screen2.PNG"
                alt="Description de la capture"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              /> 
              
          }
          {
              <Image
                src="/assets/images/screen3.PNG"
                alt="Description de la capture"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              /> 
              
          }
          
        </div>
      </section>

      {/* Section Conditions de réalisation */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Conditions et contexte de réalisation
        </h3>
        <div className="prose prose-gray dark:prose-invert">
          <p>
            Le projet a été réalisé du 16 novembre 2024 au 12 janvier 2025, au sein du Lycée Chevrollier. 
            Réalisé en équipe, nous avons utilisé Visual Studio / Visual Studio Code pour le développement. 
            La partie serveur repose sur Windows Server 2022, la base de données est hébergée sur Linux Debian 12 via MySQL (PhpMyAdmin). 
            Les mots de passe sont encryptés à l'aide de BCrypt.
          </p>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Compétences mises en œuvre
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Conception et développement d'une application desktop en C#</li>
          <li>Modélisation de base de données relationnelle (MySQL)</li>
          <li>Implémentation ORM avec Entity Framework Core</li>
          <li>Mise en place d'une API REST en Laravel (pour la partie mobile)</li>
          <li>Développement multi-plateforme (C#, Flutter)</li>
          <li>Gestion de projet agile (GitHub, Slack, Jira, Confluence)</li>
        </ul>
      </section>

      {/* Section Conclusion */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Conclusion & Retours
        </h3>
        <p className="mt-12 mb-8 text-gray-800 dark:text-gray-200">
          Ce projet m'a permis de consolider mes compétences en C#, en conception de bases de données et en développement multi-plateforme. 
          J'ai découvert les enjeux de la synchronisation des données entre plusieurs applications (web, desktop, mobile) et l'importance d'une architecture sécurisée. 
          Le travail en équipe via GitHub, Slack, Jira et Confluence m'a familiarisé avec les méthodes agiles, améliorant ainsi mon efficacité collaborative.
        </p>
      </section>
    </article>
  );
} 
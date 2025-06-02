import Image from 'next/image';

export default function Projet2() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* En-tête du projet */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Intranet - Gestion des Frais et Formations
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">
          Application web de gestion des dépenses et formations professionnelles
        </h2>
      </header>

      {/* Section d'introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Ce projet a été développé durant les Ateliers de Professionnalisation afin de proposer aux collaborateurs d'une entreprise fictive un espace sécurisé pour gérer leurs frais professionnels et leurs demandes de formation.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          L'objectif était de créer un intranet ergonomique qui centralise toutes les informations liées aux dépenses et aux parcours de formation, tout en offrant aux responsables la possibilité de valider, ajuster ou refuser ces requêtes.
        </p>
      </section>

      {/* Section Fonctionnalités */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Fonctionnalités principales
        </h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Consultation des notes de frais et des demandes de formation
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Chaque employé peut soumettre et visualiser ses propres frais et requêtes de formation. Un tableau de bord dédié affiche l'historique de ses soumissions avec les statuts correspondants (en attente, accepté, refusé).
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Espace décisionnaire pour les responsables
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Les managers ont accès à une interface où ils retrouvent la liste des frais et demandes de leurs collaborateurs. Ils peuvent les approuver, les rejeter ou demander des modifications.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Modification des frais et génération de documents
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              En cas de besoin, un responsable peut corriger une note de frais, ajuster les montants ou les justificatifs, puis générer un récapitulatif imprimable. De même, il peut éditer une attestation de formation au format PDF pour la personne concernée.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
              Motif obligatoire en cas de refus
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Lorsque qu'une demande de frais ou de formation est rejetée, le responsable doit renseigner une raison précise, afin que l'employé comprenne les modifications nécessaires ou la justification du refus.
            </p>
          </div>
        </div>
      </section>

      {/* Section Screenshots */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Captures d'écran de l'application
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Image
            src="/assets/images/intranet1.png"
            alt="Tableau de bord employé"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/assets/images/intranet2.png"
            alt="Interface de validation des responsables"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Section Technologies */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Technologies utilisées
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>React.js (Frontend)</li>
          <li>Node.js & Express (Backend)</li>
          <li>MongoDB (Base de données)</li>
          <li>JWT (Authentification)</li>
          <li>PDF.js (Génération de documents)</li>
          <li>Material-UI (Interface utilisateur)</li>
        </ul>
      </section>

      {/* Section Conclusion */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Conclusion
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Ce projet m'a permis de développer une application web complète en utilisant les technologies modernes du développement web. 
          J'ai particulièrement apprécié la mise en place de l'authentification, la gestion des rôles utilisateurs et la génération de documents PDF.
          L'aspect le plus enrichissant a été la conception d'une interface intuitive qui répond aux besoins spécifiques des différents types d'utilisateurs.
        </p>
      </section>
    </article>
  );
} 
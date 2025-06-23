"use client";

import { Footer as AntdFooter } from "antd/lib/layout/layout";
import { FooterWrapper } from "./Footer.style";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";
import { data } from "@/static";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <AntdFooter style={{ padding: 0 }}>
      <FooterWrapper>
        <Flex vertical>
          <Button type="link" onClick={() => setIsModalVisible(true)}>
            Politique de confidentalité et mentions légales
          </Button>
          {/* {data.cities.map((city, i) => (
            <a key={i} href={`/${city.slug}`}>
              <Button type="link">{city.title}</Button>
            </a>
          ))} */}
        </Flex>
        <Flex>
          <p>
            Créé avec soin par <a href="https://www.artilis.fr">ARTILIS</a>
          </p>
        </Flex>
      </FooterWrapper>
      <Modal
        title="Politique de confidentalité et mentions légales"
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        <h2>Mentions légales</h2>
        <p>
          1. Identification de l'éditeur du site
          <br />
          Le site {data.siteurl} est édité par :<br />
          <br />
          Nom de l'entreprise : MONSIEUR BOURY ELIE
          <br />
          Numéro SIRET : 88822951500026
          <br />
          <br />
          Téléphone : 07 81 97 22 51
          <br />
          Email : elie.boury@orange.fr
          <br />
          Directeur de la publication : Elie Boury
          <br />
          <br />
          2. Propriété intellectuelle
          <br />
          Tous les contenus présents sur ce site (textes, images, vidéos, logos,
          etc.) sont la propriété exclusive de {data.companyName} ou de ses
          partenaires et sont protégés par le droit d'auteur et le droit de la
          propriété intellectuelle.
          <br />
          <br />
          3. Responsabilité
          <br />
          {data.companyName} ne peut être tenue responsable des dommages directs
          ou indirects causés par l’utilisation du site ou des informations
          qu’il contient.
          <br />
          <br />
          4. Contact
          <br />
          Pour toute question ou réclamation, vous pouvez nous contacter à
          l'adresse suivante :<br />
          <br />
          Email : {data.email}
          <br />
          Téléphone : {data.phone}
        </p>
        <h2>Politique de confidentialité</h2>
        <p>
          ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS
          <br />
          Lorsque vous nous contactez, nous recueillons les renseignements
          personnels que vous nous fournissez, tels que votre nom, votre adresse
          et votre adresse e-mail.
          <br />
          <br />
          <br />
          Lorsque vous naviguez sur notre site web, nous recevons également
          automatiquement l’adresse de protocole Internet (adresse IP) de votre
          ordinateur, qui nous permet d’obtenir plus de détails au sujet du
          navigateur et du système d’exploitation que vous utilisez.
          <br />
          <br />
          <br />
          <br />
          Marketing par e-mail (le cas échéant):
          <br />
          <br />
          Avec votre permission, nous pourrions vous envoyer des e-mails au
          sujet de notre boutique, de nouveaux produits et d’autres mises à
          jour.
          <br />
          <br />
          <br />
          ARTICLE 2 – CONSENTEMENT
          <br />
          <br />
          <br />
          Comment obtenez-vous mon consentement ?<br />
          <br />
          <br />
          Lorsque vous nous fournissez vos renseignements personnels pour
          conclure une transaction, vérifier votre carte de crédit, passer une
          commande, planifier une livraison ou retourner un achat, nous
          présumons que vous consentez à ce que nous recueillions vos
          renseignements et à ce que nous les utilisions à cette fin uniquement.
          <br />
          <br />
          <br />
          Si nous vous demandons de nous fournir vos renseignements personnels
          pour une autre raison, à des fins de marketing par exemple, nous vous
          demanderons directement votre consentement explicite, ou nous vous
          donnerons la possibilité de refuser.
          <br />
          Comment puis-je retirer mon consentement?
          <br />
          <br />
          <br />
          Si après nous avoir donné votre consentement, vous changez d’avis et
          ne consentez plus à ce que nous puissions vous contacter, recueillir
          vos renseignements ou les divulguer, vous pouvez nous en aviser en
          nous contactant à {data.email}
          <br />
          ou par courrier à :<br />
          <br />
          <br />
          ARTICLE 3 – DIVULGATION
          <br />
          <br />
          <br />
          Nous pouvons divulguer vos renseignements personnels si la loi nous
          oblige à le faire ou si vous violez nos Conditions Générales de Vente
          et d’Utilisation.
          <br />
          <br />
          <br />
          ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS
          <br />
          <br />
          <br />
          De manière générale, les fournisseurs tiers que nous utilisons vont
          uniquement recueillir, utiliser et divulguer vos renseignements dans
          la mesure du nécessaire pour pouvoir réaliser les services qu’ils nous
          fournissent.
          <br />
          <br />
          <br />
          Cependant, certains tiers fournisseurs de services, comme les
          passerelles de paiement et autres processeurs de transactions de
          paiement, possèdent leurs propres politiques de confidentialité quant
          aux renseignements que nous sommes tenus de leur fournir pour vos
          transactions d’achat.
          <br />
          <br />
          <br />
          En ce qui concerne ces fournisseurs, nous vous recommandons de lire
          attentivement leurs politiques de confidentialité pour que vous
          puissiez comprendre la manière dont ils traiteront vos renseignements
          personnels.
          <br />
          <br />
          <br />
          Il ne faut pas oublier que certains fournisseurs peuvent être situés
          ou avoir des installations situées dans une juridiction différente de
          la vôtre ou de la nôtre. Donc si vous décidez de poursuivre une
          transaction qui requiert les services d’un fournisseur tiers, vos
          renseignements pourraient alors être régis par les lois de la
          juridiction dans laquelle ce fournisseur se situe ou celles de la
          juridiction dans laquelle ses installations sont situées.
          <br />À titre d’exemple, si vous êtes situé au Canada et que votre
          transaction est traitée par une passerelle de paiement située aux
          États-Unis, les renseignements vous appartenant qui ont été utilisés
          pour conclure la transaction pourraient être divulgués en vertu de la
          législation des États-Unis, y compris le Patriot Act.
          <br />
          Une fois que vous quittez notre site web ou que vous êtes redirigé
          vers le site web ou l’application d’un tiers, vous n’êtes plus régi
          par la présente Politique de Confidentialité ni par les Conditions
          Générales de Vente et d’Utilisation de notre site web.
          <br />
          <br />
          <br />
          <br />
          Liens
          <br />
          Vous pourriez être amené à quitter notre site web en cliquant sur
          certains liens présents sur notre site. Nous n’assumons aucune
          responsabilité quant aux pratiques de confidentialité exercées par ces
          autres sites et vous recommandons de lire attentivement leurs
          politiques de confidentialité.
          <br />
          <br />
          <br />
          ARTICLE 6 – SÉCURITÉ
          <br />
          <br />
          <br />
          Pour protéger vos données personnelles, nous prenons des précautions
          raisonnables et suivons les meilleures pratiques de l’industrie pour
          nous assurer qu’elles ne soient pas perdues, détournées, consultées,
          divulguées, modifiées ou détruites de manière inappropriée.
          <br />
          <br />
          <br />
          Si vous nous fournissez vos informations de carte de crédit, elles
          seront chiffrées par le biais de l’utilisation du protocole de
          sécurisation SSL et conservées avec un chiffrement de type AES-256.
          Bien qu’aucune méthode de transmission sur Internet ou de stockage
          électronique ne soit sûre à 100 %, nous suivons toutes les exigences
          de la norme PCI-DSS et mettons en œuvre des normes supplémentaires
          généralement reconnues par l’industrie.
          <br />
          &nbsp;
          <br />
          <br />
          <br />
          ARTICLE 7 – ÂGE DE CONSENTEMENT
          <br />
          <br />
          <br />
          En utilisant ce site, vous déclarez que vous avez au moins l’âge de la
          majorité dans votre État ou province de résidence, et que vous nous
          avez donné votre consentement pour permettre à toute personne d’âge
          mineur à votre charge d’utiliser ce site web.
          <br />
          <br />
          <br />
          ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE
          CONFIDENTIALITÉ
          <br />
          Nous nous réservons le droit de modifier la présente politique de
          confidentialité à tout moment, donc veuillez s’il vous plaît la
          consulter fréquemment. Les changements et les clarifications prendront
          effet immédiatement après leur publication sur le site web. Si nous
          apportons des changements au contenu de cette politique, nous vous
          aviserons ici qu’elle a été mise à jour, pour que vous sachiez quels
          renseignements nous recueillons, la manière dont nous les utilisons,
          et dans quelles circonstances nous les divulguons, s’il y a lieu de le
          faire.
          <br />
          Si notre site web fait l’objet d’une acquisition par ou d’une fusion
          avec une autre entreprise, vos renseignements pourraient être
          transférés aux nouveaux propriétaires pour que nous puissions
          continuer à vous vendre des produits.
          <br />
          <br />
          <br />
          <br />
          QUESTIONS ET COORDONNÉES
          <br />
          Si vous souhaitez: accéder à, corriger, modifier ou supprimer toute
          information personnelle que nous avons à votre sujet, déposer une
          plainte, ou si vous souhaitez simplement avoir plus d’informations,
          contactez notre agent responsable des normes de confidentialité
          <br />
          <br />
          {data.email}
        </p>
        <p>
          {data.address}
          <br />
        </p>
      </Modal>
    </AntdFooter>
  );
};

export default Footer;

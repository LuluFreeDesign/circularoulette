export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  source: string;
}

export const quizDataByCategory: Record<string, Question[]> = {
  "bon plan": [
    {
      id: 1,
      question: "Combien y a-t-il de Repair'Café en France ?",
      options: ["Une petite dizaine", "Dans les 50", "Plus de 350", "Bientôt 2 500 !"],
      correctAnswer: 2,
      explanation: "Il y a plus de 350 Repair'Café en France ! Ces ateliers collaboratifs permettent de réparer gratuitement ses objets avec l'aide de bénévoles. C'est une excellente alternative à l'achat neuf et une façon de lutter contre l'obsolescence programmée.",
      source: "Repair Café"
    },
    {
      id: 2,
      question: "Des expérimentations sont en cours. Quel est le montant décroché pour une bouteille en verre consignée ?",
      options: ["0,20€ à 0,50€ par bouteille", "1€ à 2€ par bouteille", "0€, mais on obtient un bon d'achat quand on rapporte une bouteille"],
      correctAnswer: 0,
      explanation: "Le montant de consigne pour une bouteille en verre est généralement entre 0,20€ et 0,50€ par bouteille. Quand vous rapportez la bouteille, vous récupérez cette somme. La consigne encourage le réemploi des contenants plutôt que leur recyclage.",
      source: "Citeo"
    },
    {
      id: 3,
      question: "C'est quoi une filière REP (Responsabilité Élargie du Producteur) ?",
      options: [
        "Une filière qui met en œuvre le principe du pollueur/payeur",
        "Une filière qui embauche prioritairement les producteurs locaux",
        "Une filière qui développe des activités de réparation",
        "Une filière qui s'organise sur le territoire pour l'économie circulaire"
      ],
      correctAnswer: 0,
      explanation: "Une filière REP (Responsabilité Élargie du Producteur) applique le principe du pollueur-payeur : les producteurs contribuent financièrement à la collecte, au tri et au traitement des déchets issus de leurs produits. Il existe des REP pour les emballages, les équipements électriques, les textiles, etc.",
      source: "Ministère de la transition écologique et de la cohésion des territoires"
    },
    {
      id: 4,
      question: "Quand l'industrie textile française a cessé d'exister en France ?",
      options: ["Dans les années 60", "Dans les années 90", "Dans les années 2000", "Elle n'a jamais disparu"],
      correctAnswer: 2,
      explanation: "La filière textile française a quasiment disparu dans les années 2000 avec la délocalisation massive de la production. Aujourd'hui, la majorité de nos vêtements sont fabriqués à l'étranger. Il existe cependant un renouveau de la production locale avec des marques engagées.",
      source: "Alla bonne heure"
    },
    {
      id: 5,
      question: "Quelle ressource naturelle la plus utilisée dans le monde se place sur le podium en 2e position ?",
      options: ["Le pétrole", "Le coton", "L'acier", "Le sable"],
      correctAnswer: 3,
      explanation: "Le sable est la deuxième ressource naturelle la plus exploitée au monde après l'eau ! Il est utilisé dans la construction (béton, verre), l'électronique, et même dans certains cosmétiques. Son extraction massive pose de graves problèmes environnementaux.",
      source: "ADEME"
    },
    {
      id: 6,
      question: "Combien faut-il de litres d'eau pour produire un jean ?",
      options: ["Entre 7 à 10 litres", "Entre 70 à 100 litres", "Entre 700 et 1000 litres", "Jusqu'à 7 000 litres"],
      correctAnswer: 3,
      explanation: "Il faut jusqu'à 7 000 litres d'eau pour produire un jean ! Cette eau est utilisée pour la culture du coton, la teinture et les traitements du tissu. C'est énorme. D'où l'importance d'acheter des jeans de qualité qui durent longtemps, ou d'opter pour la seconde main.",
      source: "ADEME"
    },
    {
      id: 7,
      question: "Que signifie le jour du dépassement ?",
      options: [
        "Le jour où chaque pays a consommé toutes les ressources qu'il peut régénérer en un an",
        "Le jour où l'humanité a consommé toutes les ressources que la planète peut régénérer en un an",
        "Le jour où l'UE a pris trop le soleil et part en vacances",
        "Le jour où notre planète est capable de régénérer en termes de ressources naturelles"
      ],
      correctAnswer: 1,
      explanation: "Le jour du dépassement marque la date à laquelle l'humanité a consommé l'ensemble des ressources que la Terre peut régénérer en un an. À partir de cette date, nous vivons à crédit écologique. En 2024, ce jour est tombé le 1er août.",
      source: "Global Footprint Network"
    },
    {
      id: 8,
      question: "Depuis les années 70, l'extraction de ressources naturelles a :",
      options: ["augmenté de moitié", "doublé", "plus que triplé", "été multipliée par 10"],
      correctAnswer: 2,
      explanation: "Depuis les années 70, l'extraction de ressources naturelles a plus que triplé ! Nous extrayons et consommons de plus en plus de matières premières : métaux, minéraux, combustibles fossiles, biomasse... Cette surconsommation épuise les ressources de la planète.",
      source: "PNUE"
    },
    {
      id: 9,
      question: "Dans votre smartphone, on trouve ...",
      options: [
        "70 types de métaux/non métaux différents dont de l'or",
        "80 types de métaux différents",
        "50 types de métaux/non métaux qui pèsent le plus lourd"
      ],
      correctAnswer: 0,
      explanation: "Un smartphone contient environ 70 types de métaux et matériaux différents ! Or, argent, cuivre, cobalt, terres rares... L'extraction de ces métaux a un impact environnemental et social important. C'est pourquoi il est essentiel de faire durer son téléphone le plus longtemps possible.",
      source: "ADEME"
    },
    {
      id: 10,
      question: "La loi AGEC, ça vous parle ?",
      options: [
        "LOI pour l'Activité Généralisée et l'Économie des Énergies",
        "LOI pour l'Action Gouvernementale en Épargne à la Citoyenneté",
        "LOI Anti-Gaspillage pour une Économie Circulaire",
        "LOI pour l'Accessibilité Généralisée et l'Économie Circulaire"
      ],
      correctAnswer: 2,
      explanation: "La loi AGEC est la loi Anti-Gaspillage pour une Économie Circulaire, promulguée en 2020. Elle vise à transformer notre économie linéaire en économie circulaire. Ses mesures incluent l'interdiction de certains plastiques à usage unique, l'affichage de l'indice de réparabilité, etc.",
      source: "Loi AGEC"
    },
    {
      id: 11,
      question: "Si on répartissait la quantité de plastique utilisée chaque année dans le monde, cela représenterait...",
      options: [
        "Une tour de 230m de haut",
        "Le poids de toutes les baleines bleues sur terre",
        "Le poids de tous les humains sur terre",
        "Le poids de toutes les fourmis sur terre"
      ],
      correctAnswer: 2,
      explanation: "Si on répartissait tout le plastique produit chaque année dans le monde, cela représenterait l'équivalent du poids de tous les humains sur Terre ! La production mondiale de plastique dépasse les 400 millions de tonnes par an. Réduire notre consommation de plastique est urgent.",
      source: "OCDE/United Nations"
    },
    {
      id: 12,
      question: "Dans un téléphone portable...",
      options: [
        "Il y a environ 40% de métaux qui ne sont pas utilisés",
        "Il y a une dizaine de terres rares et métaux précieux",
        "Il y a du fer pour la légèreté"
      ],
      correctAnswer: 0,
      explanation: "Un téléphone contient de nombreux métaux et matériaux dont environ 40% ne sont pas recyclés actuellement. La fabrication d'un smartphone nécessite l'extraction de ressources rares et a un fort impact environnemental. C'est pourquoi il est crucial de faire durer son téléphone le plus longtemps possible et de le recycler en fin de vie.",
      source: "Divers"
    }
  ],

  "challenge !!!": [
    {
      id: 15,
      question: "Quelle est la durée moyenne d'utilisation d'un jouet par un enfant ?",
      options: ["2 mois", "8 mois", "2 ans"],
      correctAnswer: 0,
      explanation: "La durée moyenne d'utilisation d'un jouet par un enfant est de seulement 2 mois ! C'est très court quand on pense à toutes les ressources nécessaires pour fabriquer un jouet. Avant d'acheter un nouveau jouet, pensez à l'emprunt en ludothèque, à l'achat d'occasion, ou au système d'échange entre parents.",
      source: "ADEME"
    },
    {
      id: 16,
      question: "Quel est le pourcentage de jouets jetés dans l'année suivant leur achat ?",
      options: ["Très peu", "Un tiers", "La moitié", "Les trois-quarts"],
      correctAnswer: 1,
      explanation: "Un tiers des jouets sont jetés dans l'année suivant leur achat ! C'est énorme. Les jouets représentent un gaspillage considérable de ressources. Pour limiter cet impact, privilégiez les jouets durables, de qualité, et pensez au don ou à la revente des jouets dont vos enfants ne se servent plus.",
      source: "ADEME"
    },
    {
      id: 17,
      question: "Parmi ces propositions, quelle est l'invention qui a réellement vu le jour ?",
      options: [
        "Un distributeur de croquettes pour chat à reconnaissance faciale",
        "Un biberon qui vous alerte par un bip s'il est mal incliné et que bébé boit trop vite",
        "Un bikini connecté qui prévient quand on a trop pris le soleil"
      ],
      correctAnswer: 2,
      explanation: "Le bikini connecté existe vraiment ! Ces trois inventions peuvent sembler farfelues, mais elles illustrent la tendance à la surconsommation d'objets connectés souvent inutiles. Avant d'acheter un objet 'intelligent', posez-vous la question : en ai-je vraiment besoin ? L'ajout de composants électroniques rend les objets plus complexes à réparer et à recycler.",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 18,
      question: "Parmi ces propositions, quelle est l'invention qui a réellement vu le jour ?",
      options: [
        "Un porte-gobelet pour smartphone",
        "Des chaussures auto-laçantes",
        "Des bougies connectées",
        "Un parapluie volant commandé par drone"
      ],
      correctAnswer: 1,
      explanation: "Les chaussures auto-laçantes existent réellement ! Popularisées par le film 'Retour vers le futur', elles ont été commercialisées par plusieurs marques. Comme pour beaucoup d'objets 'connectés' ou high-tech, posons-nous la question de leur réelle utilité et de leur impact environnemental.",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 19,
      question: "Mon imprimante ne fonctionne plus, quel est le choix le plus (éco)logique ?",
      options: [
        "Vu le prix des imprimantes, je vais en acheter une neuve et ce sera réglé",
        "Je cherche un réparateur et profite des 35€ du 'Bonus Réparation'",
        "Je vais essayer de la réparer au Repair Café près de chez moi",
        "Je pense que finalement je n'ai pas vraiment besoin d'avoir ma propre imprimante"
      ],
      correctAnswer: 3,
      explanation: "La meilleure solution est de se demander si on a vraiment besoin d'une imprimante ! En France, une imprimante est utilisée en moyenne seulement 20 minutes par an. Privilégiez les services d'impression (bibliothèques, espaces de coworking, commerces). Si vous en avez vraiment besoin, la réparation est évidemment préférable à l'achat neuf.",
      source: "Ecosystem"
    },
    {
      id: 20,
      question: "Pour un lave-linge de 70kg, quelle est la quantité de matières utilisées pour le produire ?",
      options: ["400 kg", "700 kg", "1200 kg", "1800 kg"],
      correctAnswer: 2,
      explanation: "Il faut 1200 kg de matières pour produire un lave-linge de 70 kg ! C'est 17 fois son poids. Cela inclut les matières premières extraites, l'eau utilisée, l'énergie dépensée... C'est ce qu'on appelle le 'sac à dos écologique'. D'où l'importance de faire durer nos appareils le plus longtemps possible en les entretenant et en les réparant.",
      source: "Secrétariat Général à la Planification Écologique"
    },
    {
      id: 21,
      question: "En moyenne, combien d'équipements électriques et électroniques les Français et Françaises ont-ils chez eux ?",
      options: ["Une dizaine", "Une trentaine", "Une centaine"],
      correctAnswer: 2,
      explanation: "En moyenne, les Français possèdent une centaine d'équipements électriques et électroniques ! Smartphone, ordinateur, TV, four, cafetière, sèche-cheveux, console de jeu... La liste est longue. Chacun de ces équipements nécessite des ressources pour être fabriqué et de l'énergie pour fonctionner. Avant d'acheter, posez-vous la question : en ai-je vraiment besoin ?",
      source: "ADEME"
    },
    {
      id: 22,
      question: "En moyenne, combien de temps une perceuse est-elle utilisée tout au long de sa vie ?",
      options: ["12 minutes", "2 heures", "20 heures", "3 jours"],
      correctAnswer: 0,
      explanation: "Une perceuse est utilisée en moyenne seulement 12 minutes durant toute sa vie ! C'est l'exemple parfait d'un objet qu'on pourrait partager, louer ou emprunter plutôt que d'acheter. Les outils de bricolage sont parfaits pour l'économie du partage : ateliers partagés, location entre voisins, prêt entre amis...",
      source: "ADEME"
    },
    {
      id: 23,
      question: "Quelle information doit être mentionnée sur les téléviseurs et lave-linges en France depuis 2025 ?",
      options: ["Ecoscore", "Nutriscore", "Indice de réparabilité", "Indice de durabilité"],
      correctAnswer: 3,
      explanation: "Depuis janvier 2025, l'indice de durabilité doit être affiché sur les téléviseurs et lave-linges ! Il complète l'indice de réparabilité (obligatoire depuis 2021). L'indice de durabilité prend en compte la fiabilité du produit, sa robustesse et la disponibilité des pièces détachées. C'est un outil précieux pour choisir des produits qui durent.",
      source: "Loi AGEC"
    },
    {
      id: 24,
      question: "Où trouve-t-on cette information ?",
      options: [
        "Sur les appareils électriques et électroniques",
        "Sur les emballages alimentaires",
        "Sur les vêtements",
        "Sur les meubles"
      ],
      correctAnswer: 0,
      explanation: "Ce logo se trouve sur les appareils électriques et électroniques ! Il indique que le produit fait partie d'une filière de recyclage et que son producteur contribue financièrement au recyclage. Les pictogrammes vous informent sur les bonnes pratiques : où déposer l'appareil en fin de vie, les gestes de tri, etc. Ne jetez jamais un appareil électrique à la poubelle !",
      source: "Ecologic"
    },
    {
      id: 25,
      question: "Où peut-on voir cette étiquette ?",
      options: [
        "Sur les appareils électroménagers",
        "Sur les vêtements",
        "Sur les voitures",
        "Sur les logements"
      ],
      correctAnswer: 0,
      explanation: "L'étiquette énergie se trouve sur les appareils électroménagers ! Elle indique la classe énergétique de l'appareil (de A à G, A étant le plus économe). Elle vous renseigne aussi sur la consommation annuelle, le niveau sonore, etc. Choisir un appareil de classe A peut vous faire économiser beaucoup d'énergie et d'argent sur le long terme !",
      source: "ADEME"
    },
    {
      id: 26,
      question: "En moyenne, les Français achètent un vêtement...",
      options: ["Toutes les semaines", "3 fois par mois", "1 fois par mois", "Cinq fois par an"],
      correctAnswer: 1,
      explanation: "Les Français achètent en moyenne 3 vêtements par mois, soit environ 40 par an ! C'est beaucoup trop au regard de l'impact environnemental de l'industrie textile (consommation d'eau, pollution, transport...). Avant d'acheter, demandez-vous si vous en avez vraiment besoin. Privilégiez la qualité à la quantité, la seconde main, et prenez soin de vos vêtements pour qu'ils durent.",
      source: "Re_fashion"
    }
  ],

  "ça va où ?": [
    {
      id: 1,
      question: "Lorsque je dépose mes piles usagées dans un point de collecte. Que va-t-il leur arriver ?",
      options: ["Les composants seront recyclés", "Ils seront enfouis sous terre", "Ils exploseront", "Ils seront vendus à l'étranger"],
      correctAnswer: 0,
      explanation: "Déposer ces objets en fin de vie dans un point de collecte, c'est leur permettre une seconde vie ! Les métaux contenus dans les piles et accumulateurs sont valorisés et peuvent servir à fabriquer de nouveaux objets de notre quotidien (couverts en acier, clefs, canettes, gouttières, etc.). Pour trouver des points de collecte de piles autour de chez vous : https://quefairedemesdechets.ademe.fr/dechets-piles-batteries/ Une alternative : les piles rechargeables.",
      source: "Que faire de mes objets"
    },
    {
      id: 2,
      question: "Les épluchures doivent-elles se jeter dans la poubelle des ordures ménagères ?",
      options: ["Oui", "Non"],
      correctAnswer: 1,
      explanation: "Depuis 2024 toutes les communes doivent proposer un système de valorisation des biodéchets organiques. Ils doivent être triés séparément des autres déchets. Compost, lombricompost, bac collectif, etc. permettent de valoriser les déchets alimentaires qui ne sont pas des emballages !",
      source: "Loi AGEC"
    },
    {
      id: 3,
      question: "Si les vêtements sont jetés dans la poubelle de tri des emballages, que va-t-il leur arriver ?",
      options: ["Refus", "Ils seront recyclés normalement", "Ils seront donnés à une association", "Ils seront brûlés"],
      correctAnswer: 0,
      explanation: "Pour qu'ils aient une seconde vie, les vêtements doivent obligatoirement être déposés dans un des points de collecte dédié (borne dans l'espace public, en magasin, dans une association). S'ils sont déposés dans la poubelle ménagère, le sac est refusé lors de la collecte et reste sur le trottoir. En revanche, s'il est emmené et mélangé au reste des emballages, il peut entraîner le refus de la benne entière. Sur la chaîne de tri, il peut entraîner le refus d'emballages et sera envoyé à l'incinérateur.",
      source: "Refashion"
    },
    {
      id: 4,
      question: "Faut-il écraser ou aplatir les canettes et les bouteilles avant de les jeter dans la poubelle de tri ?",
      options: ["Oui, toujours", "Non, jamais", "Non", "Peu importe"],
      correctAnswer: 2,
      explanation: "De préférence non, mais si c'est nécessaire, les écraser dans le sens de la longueur. Au risque qu'elles ne soient pas recyclées, il est conseillé de ne pas les écraser ni les aplatir lors du tri (tout comme les bouteilles). Les canettes en acier, en aluminium, et les capsules métalliques sont ensuite triées et fondues pour être réintégrées à la chaîne de production et fabriquer de nouveaux produits.",
      source: "Citeo"
    },
    {
      id: 5,
      question: "En France, parmi nos emballages (tris), quelle est la matière qui se recycle le mieux ?",
      options: ["Plastique", "Papier/carton", "Verre et acier", "Aluminium"],
      correctAnswer: 2,
      explanation: "Le verre et l'acier sont ceux qui se recyclent le mieux. Taux de recyclage par matériaux : 88% verre et acier, 72% papier cartons, 28% plastique (tout ce qui est en plastique ne peut pas se recycler), 44% aluminium. Le PET (bouteilles transparentes) est un type de plastique qui se recycle mieux.",
      source: "Citeo"
    },
    {
      id: 6,
      question: "Quelle est la solution qui vous irait le mieux pour valoriser vos épluchures dans votre cuisine ?",
      options: [],
      correctAnswer: 0,
      explanation: "En moyenne, plus de la moitié des déchets qui finissent dans nos poubelles sont un gaspillage. Ils pourraient être valorisés comme déchets organiques. Les composter est un amendement pour les sols naturel et permet de remplacer les engrais chimiques. Cela permet de réduire efficacement le volume de nos déchets et donc fait économiser de l'énergie. Le lombricomposteur est également une solution. Si vous cherchez un point d'apport de compost, le site quefairedemesdechets référence des composteurs collectifs.",
      source: "ADEME"
    },
    {
      id: 7,
      question: "Quand je dépose mes emballages dans la poubelle de tri...",
      options: ["Je les lave d'abord", "Je les emballe ensemble", "Je les aplatis tous", "Tels quels"],
      correctAnswer: 3,
      explanation: "Il n'y a pas besoin d'emboîter, ni de laver les emballages. En général il faut les déposer tels quels dans le bac, mais dans certaines collectivités il faut les mettre dans un sac (jaune translucide en général). Donc cela peut être interprété comme la bonne réponse également.",
      source: "Citeo"
    },
    {
      id: 8,
      question: "Il me reste des médicaments de mon ancien traitement mais ils sont périmés. Que faire ?",
      options: ["Les jeter à la poubelle", "Les garder au cas où", "Pharmacie + boîte et notice tri", "Les donner à quelqu'un"],
      correctAnswer: 2,
      explanation: "Sur Cyclamed on peut mettre le nom de son \"médicament\" pour savoir s'il doit être collecté ou pas. Pour trouver la pharmacie la plus proche de chez vous pour déposer vos médicaments tapez \"médicaments\" dans quefairedemesdechets ou rdv sur https://quefairedemesdechets.ademe.fr/fiche/medicaments/",
      source: "Cyclamed"
    },
    {
      id: 9,
      question: "En moyenne, combien de vêtements restent dans nos placards sans en sortir ?",
      options: ["10%", "Un quart", "Plus de la moitié", "Tous sont portés régulièrement"],
      correctAnswer: 2,
      explanation: "Et vous ? (pour discussion) En moyenne, plus de la moitié des vêtements que nous possédons restent dans nos placards sans être utilisés, cela représente un stock de 120 millions de vêtements ... et nous continuons d'en acheter.",
      source: "Refashion"
    },
    {
      id: 10,
      question: "Que deviennent les vêtements quand ils sont déposés dans une borne de don ?",
      options: ["Ils sont tous donnés", "Ils sont tous recyclés", "Ils sont tous jetés", "Les 4 en fonction de l'état des vêtements"],
      correctAnswer: 3,
      explanation: "60% des TLC (textile, linge de maison, chaussures) déposés en point de collecte sont réutilisés en l'état, le reste est valorisé en isolant, fibre textile recyclée. Une infime part est incinérée (0.15%). Concernant le marché de la friperie, 90% des pièces en bon état sont exportées pour être revendues à l'international. C'est le signe que nous produisons-achetons beaucoup trop, le marché de la seconde main français n'arrive pas à absorber l'important stock de vêtements donnés sur notre territoire. Que faire ? Réduire et réparer!",
      source: "Refashion"
    },
    {
      id: 11,
      question: "Combien de paires de chaussures possédez-vous ? (tous types confondus)",
      options: [],
      correctAnswer: 0,
      explanation: "Vous avez déjà compté les vôtres ? Faites-le en rentrant. Participez au défi chaussures proposé par Impact CO2.",
      source: "Impact CO2"
    },
    {
      id: 12,
      question: "Mon cintre en bois est vraiment cassé, impossible à réparer. Si je le dépose en déchetterie, que va-t-il lui arriver ?",
      options: ["Il sera réparé", "Broyé", "Recyclé en nouveau cintre", "Jeté à la poubelle"],
      correctAnswer: 1,
      explanation: "Déposé en déchetterie, un cintre en bois sera broyé et nettoyé pour être valorisé sous forme de combustible ou de particules recyclées dans l'industrie du panneau aggloméré.",
      source: "ADEME"
    },
    {
      id: 13,
      question: "Que faire de mes restes de repas y compris les os de viande et les croûtes de fromage ?",
      options: ["Poubelle normale", "Biodéchets", "Recyclage", "Compost uniquement"],
      correctAnswer: 1,
      explanation: "Les restes de repas peuvent être en très grande majorité valorisés, ce sont des biodéchets. On peut les déposer au point de collecte du quartier (ou sac dédié), ils seront envoyés vers une filière de compostage industriel. À la maison, les restes alimentaires peuvent être mis dans un lombricomposteur, à quelques exceptions près. Les os, les croûtes de fromages par exemple sont à éviter. Pas d'agrumes, ni d'épluchures d'oignons et poireaux en lombricompost.",
      source: "ADEME"
    },
    {
      id: 14,
      question: "Les épluchures de fruits et noyaux peuvent être jetés dans la nature ?",
      options: ["Oui, c'est naturel", "Oui, mais seulement les fruits locaux", "Non", "Oui, si c'est en forêt"],
      correctAnswer: 2,
      explanation: "Dans la nature, les êtres vivants sont en équilibre. Ils constituent un écosystème. Un écosystème, c'est l'ensemble des organismes (plantes, insectes, animaux, champignons, etc) qui interagissent entre eux au sein d'un même milieu. En cas de dépôt d'éléments extérieurs, même s'ils paraissent inoffensifs, ils risquent d'être décomposés plus lentement. La décomposition des aliments est moins rapide que nous ne pouvons l'imaginer. Les animaux ne se nourrissent pas des mêmes aliments que les êtres humains.",
      source: "ADEME"
    }
  ],

  "j'agis !!": [
    {
      id: 27,
      question: "S'il est cassé, quel est le meilleur geste pour prolonger la durée de vie d'un objet ?",
      options: [
        "Le jeter avec les encombrants",
        "Le déposer en déchetterie",
        "Le vendre ou le donner",
        "Le réparer"
      ],
      correctAnswer: 3,
      explanation: "Il existe une \"hiérarchie des modes de traitement des déchets\" qui nous permet de savoir quelle est la meilleur \"deuxième vie\" pour un objet et lui éviter au maximum de passer par la case déchet ! Avant qu'il ne devienne un déchet on peut réparer l'objet soi-même, chez un réparateur agréé, ou dans un repair café.",
      source: "ADEME"
    },
    {
      id: 28,
      question: "Nouvelle ordonnance de l'ophtalmo : il faut changer de lunettes. Que faire ?",
      options: [
        "Garder son ancienne paire au cas où et acheter une nouvelle paire",
        "Déposer son ancienne paire dans une boîte de collecte et acheter une nouvelle paire",
        "Commander de nouveaux verres à sa vue et les faire monter sur ses anciennes lunettes",
        "Trouver un opticien qui permet d'acheter 4 paires pour le prix d'une"
      ],
      correctAnswer: 2,
      explanation: "La réponse optimale serait de faire monter de nouveaux verres sur son ancienne monture. Si la monture doit vraiment être changée, il est possible de déposer sa paire de lunettes dans une borne de collecte pour lui donner une seconde vie. Les points d'apport sont disponibles sur quefairedemesdechets.fr",
      source: "Que faire de mes objets"
    },
    {
      id: 29,
      question: "Vous cassez le poignet et utilisez une attelle quelques semaines. Une fois rétabli, que pourriez-vous en faire ?",
      options: [
        "La jeter à la poubelle",
        "La garder au cas où",
        "La rapporter en pharmacie",
        "La déposer dans un point de collecte"
      ],
      correctAnswer: 3,
      explanation: "Dans la poubelle jaune, elle ne sera jamais recyclée et finira à l'incinération. Les points de collecte se trouvent en pharmacie ou dans les hôpitaux. Elle peut aussi être donnée ou vendue pour servir à quelqu'un d'autre.",
      source: "Que faire de mes objets"
    },
    {
      id: 30,
      question: "Vous avez une peluche en bon état que votre enfant n'utilise plus. Quelle est la meilleure solution pour vous en débarrasser sans gaspiller ?",
      options: [
        "La jeter avec les encombrants",
        "La donner à une association, ressourcerie, vente sur une plateforme de seconde main",
        "La rapporter au magasin",
        "La déposer dans un point de collecte textile"
      ],
      correctAnswer: 1,
      explanation: "Si elle est en bon état, vous pouvez la donner ou la vendre pour qu'elle poursuive sa vie dans les bras d'autres enfants (entourage, associations, ressourceries, vente sur une plateforme de seconde main, etc). Si mauvais état, la déposer dans un point de collecte textile. En mauvais état même la déposer dans un point de collecte.",
      source: "Que faire de mes objets"
    },
    {
      id: 31,
      question: "Pour réduire mes déchets quand je vais à la boulangerie, je peux...",
      options: [
        "Apporter mon propre sac pour remporter le pain",
        "Apporter une boîte pour y mettre les pâtisseries que j'achète",
        "Utiliser les emballages offerts et surtout ne pas les jeter sur le trottoir",
        "Toutes ces réponses"
      ],
      correctAnswer: 3,
      explanation: "Prenons le réflexe ! Depuis 2021, les commerces de détails (boulangerie, boucherie, fromagerie, etc) ont l'obligation d'accepter de nous servir dans nos contenants réutilisables (propres et adaptés bien sûr !).",
      source: "Loi AGEC"
    },
    {
      id: 32,
      question: "Mon manteau est déchiré au niveau de la doublure, que faire ?",
      options: [
        "Je le recouds",
        "Je cherche une solution locale (couturière, retoucherie, repair café textile)",
        "Je le jette et j'en rachète un neuf ou d'occasion",
        "Je le dépose dans un point de collecte textile"
      ],
      correctAnswer: 0,
      explanation: "Recoudre ou faire recoudre permettrait de prolonger la vie du manteau et d'éviter un déchet textile supplémentaire, surtout s'il est encore en bon état. Le bonus réparation pour réparer une doublure se compte en € (de 6€ à 25€).",
      source: "Que faire de mes objets + Refashion"
    },
    {
      id: 33,
      question: "Vous ne voulez plus de votre canapé, mais il est encore confortable. Quelle est la meilleure solution pour vous en débarrasser sans gaspiller ?",
      options: [
        "Le jeter avec les encombrants",
        "Le donner à une association, ressourcerie, le vendre",
        "Le rapporter au magasin",
        "Le déposer en déchetterie"
      ],
      correctAnswer: 1,
      explanation: "Le proposer à son entourage, à son voisinage, à une ressourcerie, ou sur un site de dons. Sinon vous pouvez l'emmener en déchetterie.",
      source: "Que faire de mes objets"
    },
    {
      id: 34,
      question: "Dans son immeuble, il est désormais possible d'installer une zone de troc / don dans les espaces communs.",
      options: [
        "C'est une très bonne idée, tout le monde peut le faire",
        "Oui, avec l'accord des habitants de l'immeuble",
        "Seulement s'il y a une gardienne",
        "Non, c'est interdit"
      ],
      correctAnswer: 1,
      explanation: "C'est parfois la façon la plus simple de pratiquer l'économie circulaire en ultra-local ! Un conseil : commencer avec des livres ou des revues, puis passer aux petits objets.",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 35,
      question: "Un téléphone reconditionné...",
      options: [
        "Permet d'économiser des matières et des émissions de gaz à effet de serre",
        "Est vendu sans garantie",
        "Coûte plus cher qu'un téléphone neuf"
      ],
      correctAnswer: 0,
      explanation: "Un smartphone reconditionné bénéficie de la même garantie qu'un téléphone neuf. Il est jusqu'à 8 X moins impactant pour l'environnement que le neuf en moyenne, et permet d'économiser 82 kg de matières économisées, 87 % de gaz à effet de serre en moins.",
      source: "ADEME"
    },
    {
      id: 36,
      question: "Combien de Français·es ont acheté un objet d'occasion dans les 12 derniers mois ? Et vous ?",
      options: ["1 sur 4", "2 sur 4", "3 sur 4", "Presque personne"],
      correctAnswer: 2,
      explanation: "Vous faites partie de cette proportion ? Pensez-vous qu'autant de personnes achètent d'occasion ?",
      source: "ADEME"
    },
    {
      id: 37,
      question: "Mon lave-linge tombe en panne, quelle est la meilleure solution pour régler ce problème ?",
      options: [
        "Je le jette et j'en rachète un neuf",
        "Je le répare moi-même",
        "Je fais appel à un réparateur et bénéficie du Bonus Réparation",
        "Toutes ces réponses par ordre de priorité : réparer ou faire réparer puis acheter reconditionné"
      ],
      correctAnswer: 3,
      explanation: "Par ordre de priorité : réparer ou faire réparer puis acheter reconditionné.",
      source: "ADEME"
    },
    {
      id: 38,
      question: "Vous allez chez le boucher ou le fromager, vous avez le droit d'apporter votre contenant propre pour ces produits ?",
      options: [
        "Oui !",
        "Non, le commerçant pourrait refuser car ce n'est pas pratique"
      ],
      correctAnswer: 0,
      explanation: "Oui bien sûr, à condition qu'il soit propre. Les commerçants les plus engagés vous feront même profiter d'une réduction, mais ce n'est pas encore obligatoire ni très pratiqué.",
      source: "Loi AGEC"
    },
    {
      id: 39,
      question: "Vous changez de chaise de bureau. Quelle est la meilleure option pour lui donner une seconde vie ?",
      options: [
        "La jeter avec les encombrants",
        "La déposer en déchetterie",
        "La donner à son entourage, ses voisins, à une association ou la mettre en vente",
        "La démonter et trier les matériaux"
      ],
      correctAnswer: 2,
      explanation: "La donner à son entourage, ses voisins, à une association ou la mettre en vente.",
      source: "Que faire de mes objets"
    }
  ],

  "ma conso": [
    {
      id: 40,
      question: "Quels sont les objets qui peuvent bénéficier du Bonus Réparation ?",
      options: [
        "Une tondeuse à gazon",
        "Une machine à café",
        "Des plaques de cuisson",
        "Un réfrigérateur"
      ],
      correctAnswer: 3,
      explanation: "Tous ces objets peuvent bénéficier du Bonus Réparation ! Le dispositif concerne de nombreux équipements électriques et électroniques : électroménager, petit électroménager, multimédia, outils de jardin... Avant de jeter un appareil en panne, pensez à le faire réparer avec l'aide du bonus.",
      source: "Que faire de mes objets"
    },
    {
      id: 41,
      question: "Je pars faire du camping, j'aimerais m'équiper de diverses choses indispensables, quelle offre me permettra de consommer moins ?",
      options: [
        "J'achète en ligne et je me fais livrer",
        "Je me rends chez ma grand-mère pour emprunter le matériel qu'elle n'utilise plus",
        "Je loue du matériel car je ne vais pas m'en servir souvent",
        "Je me rends dans l'un de mes magasins préférés"
      ],
      correctAnswer: 2,
      explanation: "La location est la meilleure option pour du matériel de camping utilisé occasionnellement ! Pourquoi acheter des objets qui vont prendre la poussière le reste de l'année ? La location permet d'utiliser du matériel de qualité sans l'impact environnemental de la fabrication. Emprunter à sa famille ou ses amis est aussi une excellente alternative.",
      source: "ADEME"
    },
    {
      id: 42,
      question: "Prolonger d'un an la durée d'usage de ses vêtements contribue à en réduire l'impact carbone de ... ?",
      options: ["10%", "20 à 30%", "40%", "60%"],
      correctAnswer: 1,
      explanation: "Prolonger d'un an la durée d'usage de ses vêtements réduit leur impact carbone de 20 à 30% ! C'est considérable. Plus on garde et on porte ses vêtements longtemps, plus on amortit l'impact de leur fabrication. Prenez soin de vos vêtements, réparez-les, et faites-les durer le plus longtemps possible.",
      source: "ADEME"
    },
    {
      id: 43,
      question: "Si nous venions moins en voiture en centre ville, les commerces de détails (boulangerie, boucherie, fromagerie, etc) ont l'obligation de proposer des contenants réutilisables ?",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "Faux ! Il n'y a pas d'obligation de réduction tarifaire. Cependant, la réglementation impose aux restaurants de proposer des contenants réutilisables pour les repas sur place afin de réduire les déchets d'emballages jetables.",
      source: "Loi AGEC"
    },
    {
      id: 44,
      question: "Tout le monde peut-il bénéficier du Bonus Réparation ?",
      options: [
        "Non, il est seulement pour les moins de 18 ans",
        "Oui, sur justificatif d'un faible revenu annuel",
        "Oui mais seulement les moins de 30 ans",
        "C'est une aide pour n'importe qui veut réparer un appareil"
      ],
      correctAnswer: 3,
      explanation: "Le Bonus Réparation est accessible à tous, sans condition de ressources ou d'âge ! N'importe qui peut en bénéficier pour faire réparer ses appareils chez un professionnel labelisé. L'objectif est d'encourager tout le monde à réparer plutôt qu'à jeter.",
      source: "Loi AGEC"
    },
    {
      id: 45,
      question: "Quel est le montant du Bonus Réparation pour réparer la semelle d'une paire de chaussures ?",
      options: ["2 €", "6 €", "12 €", "16 €"],
      correctAnswer: 1,
      explanation: "Le Bonus Réparation pour réparer la semelle d'une paire de chaussures est de 6€. Ce dispositif aide à financer la réparation plutôt que l'achat neuf. Il existe des bonus réparation pour de nombreux objets : électroménager, chaussures, vêtements, vélos...",
      source: "ADEME/Ecosystem"
    },
    {
      id: 46,
      question: "Quel est le montant du Bonus Réparation pour faire réparer son imprimante ?",
      options: ["0 €", "15 €", "25 €", "35 €"],
      correctAnswer: 3,
      explanation: "Le Bonus Réparation pour faire réparer son imprimante est de 35€ ! C'est une aide importante qui rend la réparation plus accessible. Avant de jeter votre imprimante en panne, pensez à la faire réparer chez un professionnel labelisé QualiRépar.",
      source: "Ecosystem"
    },
    {
      id: 47,
      question: "Dans quelle situation pouvez-vous bénéficier du Bonus Réparation ?",
      options: [
        "Recoudre un pantalon en faisant un ourlet",
        "Refaire la semelle d'une paire de chaussures",
        "Remplacer l'écran de mon smartphone",
        "Toutes ces réponses"
      ],
      correctAnswer: 3,
      explanation: "Toutes ces réparations peuvent bénéficier du Bonus Réparation ! Le dispositif s'applique à de nombreux types de réparations : électroménager, vêtements, chaussures, vélos... L'objectif est d'encourager la réparation plutôt que l'achat neuf.",
      source: "Que faire de mes objets"
    },
    {
      id: 48,
      question: "Comment pouvez-vous vous faire aider pour réparer vos objets ?",
      options: [
        "Je peux regarder des tutoriels de réparateurs en ligne",
        "Je peux commander une pièce détachée sur Internet",
        "Je peux me rendre dans un Repair Café",
        "Toutes ces réponses"
      ],
      correctAnswer: 3,
      explanation: "Toutes ces solutions sont bonnes ! Vous pouvez regarder des tutoriels en ligne, commander des pièces détachées, vous rendre dans un Repair Café, ou faire appel à un professionnel pour bénéficier du Bonus Réparation. Choisissez la solution adaptée à votre objet et vos compétences.",
      source: "Que faire de mes objets"
    },
    {
      id: 49,
      question: "Quelle est la durée de garantie légale minimale pour un produit neuf en France ?",
      options: ["6 mois", "1 an", "2 ans", "5 ans"],
      correctAnswer: 2,
      explanation: "La garantie légale de conformité est de 2 ans minimum pour tout produit neuf en France ! Durant cette période, si votre produit présente un défaut, le vendeur doit le réparer ou le remplacer. Cette garantie est gratuite et automatique. Faites-la valoir avant de racheter !",
      source: "Code de la consommation"
    },
    {
      id: 50,
      question: "Un produit reconditionné bénéficie-t-il d'une garantie ?",
      options: [
        "Non, aucune garantie",
        "Oui, 6 mois minimum",
        "Oui, 1 an minimum",
        "Oui, 2 ans comme le neuf"
      ],
      correctAnswer: 1,
      explanation: "Un produit reconditionné bénéficie d'une garantie légale minimale de 6 mois ! Certains vendeurs proposent même des garanties plus longues (1 an, 2 ans). Le reconditionné est une excellente alternative écologique et économique, avec une garantie qui vous protège.",
      source: "Code de la consommation"
    },
    {
      id: 51,
      question: "Lors de l'achat d'un nouvel appareil électrique, le vendeur a-t-il l'obligation de reprendre votre ancien appareil ?",
      options: [
        "Non, jamais",
        "Oui, uniquement si j'achète le même type d'appareil",
        "Oui, toujours et gratuitement",
        "Oui, mais je dois payer pour la reprise"
      ],
      correctAnswer: 1,
      explanation: "Oui ! Lors de l'achat d'un nouvel appareil électrique ou électronique, le vendeur a l'obligation de reprendre gratuitement votre ancien appareil équivalent (principe du 1 pour 1). Cette reprise permet d'assurer le recyclage ou le reconditionnement de votre ancien appareil.",
      source: "Loi AGEC"
    }
  ],

  "on en parle !?": [
    {
      id: 66,
      question: "Donner à une asso ou revendre ses vêtements, quelles différences ?",
      options: [],
      correctAnswer: 0,
      explanation: "Vendez-vous vos vêtements sur les vide-greniers ? En ligne ? Avez-vous déjà donné des vêtements à une association ? Quelles associations se trouvent près de chez vous ? (Faire réfléchir sur l'impact social des assos, qui emploient des personnes en insertion, créent du lien social, etc)",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 67,
      question: "Les sacs en plastique sont interdits en France depuis 2016. Quelles alternatives avez-vous pu mettre en place ?",
      options: [],
      correctAnswer: 0,
      explanation: "Seront certainement évoqués les tote-bags, les sacs réutilisables, les paniers, etc. Une petite organisation nécessaire au départ, qui est devenue un réflexe pour beaucoup.",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 68,
      question: "Vous êtes devant le bac \"anti-gaspi\" dédié aux aliments avec une date de péremption proche et une réduction de 30%, qu'est-ce que vous faites ?",
      options: [],
      correctAnswer: 0,
      explanation: "Écologie rime souvent avec économies ! Pour lutter contre le gaspillage alimentaire des grandes surfaces, il est désormais possible de \"sauver\" des produits alimentaires du bac \"anti gaspi\" au même d'atteindre leur date de péremption = \"à consommer jusqu'au\" DLC : date limite de consommation = \"à consommer de préférence avant le\" DDM : date de durabilité minimale = \"à consommer jusqu'au\"",
      source: "ADEME"
    },
    {
      id: 69,
      question: "On vous offre un cadeau de 2nde main pour votre anniversaire. Que ressentez-vous ?",
      options: [],
      correctAnswer: 0,
      explanation: "En France, 3 personnes sur 4 ont acheté un article de seconde main pendant les 12 derniers mois. Si vous préférez qu'on vous offre un cadeau de seconde main, n'hésitez pas à le dire autour de vous !",
      source: "ADEME"
    },
    {
      id: 70,
      question: "Avez-vous déjà offert un cadeau de 2nde main à quelqu'un ? Comment cela a-t-il été reçu ?",
      options: [],
      correctAnswer: 0,
      explanation: "En France, 3 personnes sur 4 ont acheté un article de seconde main pendant les 12 derniers mois. Si on le fait facilement pour soi, peut-on aussi offrir des cadeaux de seconde main aux autres ? N'hésitez pas à en discuter avec vos proches et amis pour voir comment ils perçoivent cette idée.",
      source: "ADEME"
    },
    {
      id: 71,
      question: "Seriez-vous prêt·e à prêter vos outils de bricolage à vos voisins, d'immeuble ou de quartier ?",
      options: [],
      correctAnswer: 0,
      explanation: "Des plateformes permettent de faciliter et d'encadrer le prêt des objets. Par exemple Bricolis propose la location d'outils entre particuliers, Poppins le prêt et la location de jeux et objets entre particuliers, etc. Quand on sait par exemple qu'une perceuse est utilisée en moyenne 10 minutes dans sa vie, la location et le prêt semblent être bien plus appropriés que l'achat personnel !",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 72,
      question: "Quel est votre cadeau \"moment\" préféré pour un anniversaire ?",
      options: [],
      correctAnswer: 0,
      explanation: "Un cadeau \"moment\" c'est un cadeau qui n'est pas matériel. Il permet d'offrir du bon temps à une activité en particulier (culinaires, culturelles, sportives, découvertes, etc), avec ou sans la personne qui l'offre. Exemple : bon pour une soirée ciné, bon pour un pic nic sur la plage, bon pour une randonnée all inclusive, etc",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 73,
      question: "Pour faire plaisir à quelqu'un, avez-vous pensé à lui offrir un moment passé ensemble plutôt qu'un objet ?",
      options: [],
      correctAnswer: 0,
      explanation: "Qu'aimez-vous offrir ? Comment ces cadeaux sont-ils reçus ? Et vous, qu'est-ce que vous préférez recevoir ?",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 74,
      question: "Pensez à 1 objet que vous n'utilisez pas ou très peu à la maison. Pourquoi l'avoir acheté ? Que pourriez-vous en faire ?",
      options: [],
      correctAnswer: 0,
      explanation: "Appareil électroménager dans la cuisine, vêtement que vous mettiez avant, etc. Identifier l'objet et trouver une manière de lui donner une seconde vie !",
      source: "La Fresque de l'Économie Circulaire"
    },
    {
      id: 75,
      question: "Et si pour le prochain Noël, on s'offrait des cadeaux autrement (fait maison, seconde main, moments, etc) ?",
      options: [],
      correctAnswer: 0,
      explanation: "Poser la question en amont aux personnes concernées / prévenez à l'aide d'une étiquette ou d'un petit mot.",
      source: "La Fresque de l'Économie Circulaire"
    }
  ],

  "et ça repart !": [],
  "mystère ???": []
};

import { DefaultTheme } from "vitepress/theme";

export const sidebar: DefaultTheme.SidebarMulti = {
    "/t-spe/": [
        {
            text: "Le programme (Bulletin Officiel)",
            link: "/t-spe/programme-terminale",
        },
        {
            text: "Transformations acides bases",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/composition-et-transformation/transformations-acides-bases/",
                },
                {
                    text: "Les acides et les bases",
                    link: "/t-spe/composition-et-transformation/transformations-acides-bases/les-acides-et-les-bases",
                },
                {
                    text: "Le pH en solution",
                    link: "/t-spe/composition-et-transformation/transformations-acides-bases/ph-en-solution",
                },
            ],
        },
        {
            text: "Déterminer la composition d’un système par des méthodes physiques et chimiques",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/composition-et-transformation/determiner-la-composition/",
                },
                {
                    text: "Méthodes physiques",
                    link: "/t-spe/composition-et-transformation/determiner-la-composition/methodes-physiques",
                },
                {
                    text: "Méthodes chimiques",
                    link: "/t-spe/composition-et-transformation/determiner-la-composition/methodes-chimiques",
                },
            ],
        },
        {
            text: "Évolution spontanée d’un système chimique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/",
                },
                {
                    text: "Équilibre chimique",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/equilibre-chimique",
                },
                {
                    text: "Évolution spontanée d’un système hors équilibre chimique",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/hors-equilibre-chimique",
                },
                {
                    text: "Force des acides et des bases",
                    link: "/t-spe/composition-et-transformation/evolution-spontanee/force-acides-bases",
                },
            ],
        },
        {
            text: "Modéliser l’évolution temporelle d’un système chimique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/",
                },
                {
                    text: "Évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/evolution-temporelle",
                },
                {
                    text: "Suivi de l’évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/suivi-evolution-temporelle",
                },
                {
                    text: "Modélisation de l’évolution temporelle",
                    link: "/t-spe/composition-et-transformation/evolution-temporelle/modelisation-evolution-temporelle",
                },
            ],
        },
        {
            text: "Cinématique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/mouvement-et-interactions/cinematique/",
                },
                {
                    text: "Référentiel",
                    link: "/t-spe/mouvement-et-interactions/cinematique/referentiel",
                },
                {
                    text: "Vecteur position",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-position",
                },
                {
                    text: "Vecteur vitesse",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-vitesse",
                },
                {
                    text: "Vecteur accélération",
                    link: "/t-spe/mouvement-et-interactions/cinematique/vecteur-acceleration",
                },
                {
                    text: "Numérique et programmation",
                    link: "/t-spe/mouvement-et-interactions/cinematique/python",
                },
            ],
        },
        {
            text: "Mouvement dans un champ uniforme",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/",
                },
                {
                    text: "Vocabulaire et outils",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/vocabulaire-et-outils",
                },
                {
                    text: "Lois de Newton",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/deuxieme-loi-de-newton",
                },
                {
                    text: "Aspects énergétiques",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/aspect-energetique",
                },
                {
                    text: "Numérique et programmation",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/python",
                },
                {
                    text: "Méthode de résolution de problème",
                    link: "/t-spe/mouvement-et-interactions/champ-uniforme/methode-de-resolution-de-probleme",
                }
            ],
        },
        {
            text: "Mouvement dans un champ non uniforme",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/",
                },
                {
                    text: "Lois de Kepler",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/lois-de-kepler",
                },
                {
                    text: "Mouvement circulaire uniforme",
                    link: "/t-spe/mouvement-et-interactions/champ-non-uniforme/circulaire-uniforme",
                },
            ],
        },
        {
            text: "Transferts macroscopiques d’énergie",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/",
                },
                {
                    text: "Système thermodynamique",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/systeme-thermodynamique",
                },
                {
                    text: "Energie interne",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/energie-interne",
                },
                {
                    text: "Transmission de la chaleur",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/transmission-chaleur",
                },
                {
                    text: "Transferts thermique par conduction",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/transfert-thermique",
                },
                {
                    text: "Bilan d’énergie",
                    link: "/t-spe/energie-conversions-et-transferts/thermodynamique/bilan-energie",
                },
            ],
        },
    ],
    "/seconde/": [
        {
            text: "Émission et perception des sons",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/ondes-et-signaux/emission-perception-son/",
                },
                {
                    text: "Les sons et leurs propagation",
                    link: "/seconde/ondes-et-signaux/emission-perception-son/son-et-propagation",
                },
                {
                    text: "Les sons périodiques",
                    link: "/seconde/ondes-et-signaux/emission-perception-son/sons-periodiques",
                },
                {
                    text: "Les sons et l’oreille",
                    link: "/seconde/ondes-et-signaux/emission-perception-son/sons-et-oreille",
                },
            ],
        },
        {
            text: "Le noyau de l’atome et son cortège électronique",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/",
                },
                {
                    text: "Le modèle de l’atome",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/modele",
                },
                {
                    text: "Le noyau",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/noyau",
                },
                {
                    text: "Le cortège électronique",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/cortege",
                },
                {
                    text: "Le tableau périodique",
                    link: "/seconde/composition-et-transformation/noyau-et-cortege/tableau-periodique",
                },
            ],
        },
        {
            text: "Identification des espèces chimiques",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/composition-et-transformation/identification/",
                },
                {
                    text: "Corps purs et mélanges",
                    link: "/seconde/composition-et-transformation/identification/corps-purs-et-melanges",
                },
                {
                    text: "Propriétés des espèces chimiques",
                    link: "/seconde/composition-et-transformation/identification/proprietes",
                },
                {
                    text: "Méthodes d’identification",
                    link: "/seconde/composition-et-transformation/identification/methodes-identification",
                },
            ],
        },
        {
            text: "Les solutions",
            collapsed: false,
            items: [
                {
                    text: "Introduction",
                    link: "/seconde/composition-et-transformation/solutions/",
                },
                {
                    text: "Vocabulaire et outils",
                    link: "/seconde/composition-et-transformation/solutions/solutions",
                },
                {
                    text: "Préparation d'une solution",
                    link: "/seconde/composition-et-transformation/solutions/preparation",
                },
                {
                    text: "Mesure de la concentration",
                    link: "/seconde/composition-et-transformation/solutions/mesures",
                },
            ],
        },
    ],
};

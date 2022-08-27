import { defaultTheme } from "@vuepress/theme-default";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defaultTheme({
  logo: "logo.png",
  repo: "physique-chimie-org/physique-chimie-org.github.io",
  docsDir: "docs",
  navbar: navbar,
  sidebar: sidebar,
  editLinkText: "Contribuer sur GitHub",
  lastUpdatedText: "Dernière contribution",
  contributorsText: "Contributeurs",
  backToHome: "Retour à l'accueil",
  openInNewWindow: "Ouvrir dans une nouvelle fenêtre",
  toggleColorMode: "Changer le theme de couleur",
  toggleSidebar: "Afficher le menu latéral",
});

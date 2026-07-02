function myMenuFunction() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive");
}


/*------Dark mode-------*/
const body = document.querySelector("body"),
      toggleSwitch = document.getElementById("toogle-switch");

// Dark mode by default; remembers the visitor's choice after that
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
    body.classList.remove("dark");
} else {
    body.classList.add("dark");
}

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("portfolio-theme", body.classList.contains("dark") ? "dark" : "light");
});


/*------Language (FR default / EN toggle)-------*/
const i18n = {
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.skills": { en: "Skills", fr: "Compétences" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },

  //"hero.badge": { en: "Open to freelance & internship opportunities", fr: "Ouverte aux missions freelance et aux stages" },
  "hero.title": { en: "Hi, I'm Nour Taleb", fr: "Nour " },
  "hero.role_prefix": { en: "I design & build", fr: "Je conçois et je crée" },
  "hero.info": { en: "I create modern, responsive websites, UI/UX mockups and digital content that turn ideas into clean, engaging online experiences — from the first wireframe to the final line of code.", fr: "Je crée des sites web modernes et responsives, des maquettes UI/UX et des contenus digitaux qui transforment des idées en expériences en ligne claires et engageantes — du premier wireframe à la dernière ligne de code." },
  "hero.stat3": { en: "Branding & Content", fr: "Branding & Contenu" },
  "hero.contact_btn": { en: "Contact me", fr: "Me contacter" },
  "hero.cv_btn": { en: "Download CV", fr: "Télécharger le CV" },
  "hero.scroll": { en: "Scroll", fr: "Défiler" },

  "services.tag": { en: "What I do", fr: "Ce que je fais" },
  "services.heading": { en: 'Turning ideas into <span class="gradient-text">great websites</span>', fr: 'Transformer des idées en <span class="gradient-text">sites qui marquent</span>' },
  "services.subtitle": { en: "A blend of web design, front-end integration and digital communication.", fr: "Un mélange de web design, d'intégration front-end et de communication digitale." },
  "services.card1.title": { en: "Website Design & Development", fr: "Conception & Développement de Sites Web" },
  "services.card1.desc": { en: "I design and build responsive websites and landing pages, combining clean UI with solid HTML, CSS and JavaScript integration.", fr: "Je conçois et développe des sites web et des landing pages responsives, en combinant une interface soignée avec une intégration HTML, CSS et JavaScript solide." },
  "services.card2.title": { en: "UI/UX Mockups & Prototyping", fr: "Maquettes UI/UX & Prototypage" },
  "services.card2.desc": { en: "From wireframes to interactive prototypes, I design intuitive interfaces in Figma, built around real user needs.", fr: "Du wireframe au prototype interactif, je conçois des interfaces intuitives sur Figma, pensées autour des besoins réels des utilisateurs." },
  "services.card3.title": { en: "Branding & Communication", fr: "Branding & Communication" },
  "services.card3.desc": { en: "I create visual identities, moodboards and communication visuals that give brands a consistent, memorable look.", fr: "Je crée des identités visuelles, des moodboards et des visuels de communication qui donnent aux marques une image cohérente et mémorable." },
  "services.card4.title": { en: "Digital Content & Project Coordination", fr: "Contenu Digital & Coordination de Projet" },
  "services.card4.desc": { en: "I manage content, product data through CMS/PIM tools and project follow-up, keeping every web project organised from brief to delivery.", fr: "Je gère le contenu, les données produits via des outils CMS/PIM et le suivi de projet, pour garder chaque projet web organisé du brief à la livraison." },

  "about.tag": { en: "About me", fr: "À propos de moi" },
  "about.heading": { en: 'The person behind the <span class="gradient-text">pixels & code</span>', fr: 'La personne derrière les <span class="gradient-text">pixels & le code</span>' },
  "about.card1.title": { en: "Web Designer & Digital Creator", fr: "Web Designer & Créatrice Digitale" },
  "about.card1.text": {
    en: "I design and build modern websites and digital experiences — from UI/UX mockups to front-end integration. My background blends web development, visual design and digital communication, shaped by academic projects and hands-on agency experience.</br></br>My goal is to keep growing as a web designer and site creator, building websites, interfaces and visual content that combine strong design, clean integration and real impact — while keeping the organisation, agile collaboration and client communication skills I've built along the way.",
    fr: "Je conçois et développe des sites web et des expériences digitales modernes — des maquettes UI/UX à l'intégration front-end. Mon parcours mêle développement web, design visuel et communication digitale, façonné par des projets académiques et une expérience concrète en agence.</br></br>Mon objectif est de continuer à grandir en tant que web designer et créatrice de sites, en concevant des sites, interfaces et contenus visuels qui allient un design fort, une intégration propre et un impact réel — tout en gardant les compétences en organisation, collaboration agile et communication client que j'ai développées en chemin."
  },
  "about.hire_btn": { en: "Hire Me", fr: "Me recruter" },
  "about.journey": { en: "My journey", fr: "Mon parcours" },
  "about.t1.date": { en: "Bachelor's Degree", fr: "Licence" },
  "about.t1.title": { en: "Information Systems", fr: "Systèmes d'Information" },
  "about.t1.desc": { en: "Numerous academic web projects covering the full cycle of website creation: needs analysis, UI conception, front-end integration and testing.", fr: "De nombreux projets web académiques couvrant tout le cycle de création d'un site : analyse des besoins, conception UI, intégration front-end et tests." },
  "about.t2.date": { en: "Master's Degree", fr: "Master" },
  "about.t2.title": { en: "Multimedia Products & Services", fr: "Produits et Services Multimédia" },
  "about.t2.desc": { en: "Projects combining digital communication, visual identity design and web/UI design.", fr: "Des projets combinant communication digitale, identité visuelle et design web/UI." },
  "about.t3.date": { en: "Currently", fr: "Actuellement" },
  "about.t3.title": { en: "Digital Project Management Internship — Reflet Communication", fr: "Stage en Gestion de Projet Digital — Reflet Communication" },
  "about.t3.desc": { en: "Project follow-up, creation of product sheets and content, PIM/CMS integration, and client request management within a digital agency — a real, hands-on view of the full web project lifecycle.", fr: "Suivi de projets, création de fiches produits et de contenus, intégration PIM/CMS et gestion des demandes clients au sein d'une agence digitale — une vision concrète du cycle de vie complet d'un projet web." },

  "skills.tag": { en: "Skills", fr: "Compétences" },
  "skills.heading": { en: 'My <span class="gradient-text">toolkit</span>', fr: 'Ma <span class="gradient-text">boîte à outils</span>' },
  "skills.subtitle": { en: "Web creation skills at the core, backed by organisation and communication.", fr: "La création web au cœur, appuyée par l'organisation et la communication." },
  "skills.technical.title": { en: "Web Creation & Design", fr: "Création Web & Design" },
  "skills.skill1": { en: "Web Development: HTML, CSS, JavaScript, responsive design", fr: "Développement Web : HTML, CSS, JavaScript, design responsive" },
  "skills.skill2": { en: "UI/UX Design & Prototyping: Figma (wireframes, mockups, interactive prototypes)", fr: "Design UI/UX & Prototypage : Figma (wireframes, maquettes, prototypes interactifs)" },
  "skills.skill3": { en: "CMS & PIM: WordPress, content management, product data integration", fr: "CMS & PIM : WordPress, gestion de contenu, intégration de données produits" },
  "skills.skill4": { en: "Visual & Digital Content Creation: Canva, moodboards, social visuals", fr: "Création de Contenu Visuel & Digital : Canva, moodboards, visuels réseaux sociaux" },
  "skills.skill5": { en: "Database Management: SQL, basic administration and queries", fr: "Gestion de Bases de Données : SQL, administration et requêtes de base" },
  "skills.organisation.title": { en: "Organisation & Collaboration", fr: "Organisation & Collaboration" },
  "skills.org1": { en: "Agile (Scrum/Kanban)", fr: "Agile (Scrum/Kanban)" },
  "skills.org2": { en: "Client communication", fr: "Communication client" },
  "skills.org3": { en: "Team coordination", fr: "Coordination d'équipe" },
  "skills.personal.title": { en: "Personal Abilities", fr: "Qualités Personnelles" },
  "skills.p1": { en: "Adaptability", fr: "Adaptabilité" },
  "skills.p2": { en: "Autonomy & Initiative", fr: "Autonomie & Initiative" },
  "skills.p3": { en: "Creativity & Problem Solving", fr: "Créativité & Résolution de Problèmes" },
  "skills.p4": { en: "Communication & Teamwork", fr: "Communication & Travail d'Équipe" },

  "projects.tag": { en: "Portfolio", fr: "Portfolio" },
  "projects.heading": { en: 'Selected <span class="gradient-text">Projects</span>', fr: 'Projets <span class="gradient-text">Sélectionnés</span>' },
  "projects.subtitle": { en: "Websites — designed and built by me from scratch. Click any preview to browse the live site.", fr: "Sites web — conçus et développés par mes soins. Cliquez sur un aperçu pour naviguer sur le site en direct." },
  "projects.view_case_study": { en: "View case study", fr: "Voir l'étude de cas" },

  "project1.eyebrow": { en: "Web Design & Front-End", fr: "Web Design & Front-End" },
  "project1.title": { en: "Aurelia Estates — Real Estate Website", fr: "Aurelia Estates — Site Immobilier" },
  "project1.desc": { en: "A website for a boutique real estate & interior design studio — dark editorial palette, serif display type and a full property showcase.", fr: "Un site web pour un studio immobilier & design d'intérieur haut de gamme — palette sombre et éditoriale, typographie serif et une vitrine complète de biens." },
  "project1.tag2": { en: "Responsive Design", fr: "Design Responsive" },
  "project1.tag3": { en: "Real Photography", fr: "Vraies Photographies" },

  "project2.eyebrow": { en: "Web Design & Front-End", fr: "Web Design & Front-End" },
  "project2.title": { en: "Solène — Fashion Brand Website", fr: "Solène — Site de Marque de Mode" },
  "project2.desc": { en: "A website for an independent fashion label — bold oversized typography, a deep red-and-black palette and an offset editorial lookbook grid.", fr: "Un site web pour une marque de mode indépendante — typographie imposante, palette rouge et noir profonde et grille de lookbook éditoriale décalée." },
  "project2.tag2": { en: "Editorial Layout", fr: "Mise en Page Éditoriale" },
  "project2.tag3": { en: "Real Photography", fr: "Vraies Photographies" },

  "project3.eyebrow": { en: "Web Design & Front-End", fr: "Web Design & Front-End" },
  "project3.title": { en: "Meridian — Engineering Corporate Website", fr: "Meridian — Site Corporate d'Ingénierie" },
  "project3.desc": { en: "A website for an engineering & infrastructure firm — navy-and-orange palette, a services grid and a stats band built to signal scale and trust.", fr: "Un site corporate pour une entreprise d'ingénierie & d'infrastructure — palette bleu marine et orange, grille de services et bandeau de chiffres clés pour inspirer confiance." },
  "project3.tag2": { en: "Corporate Design", fr: "Design Corporate" },
  "project3.tag3": { en: "Real Photography", fr: "Vraies Photographies" },

  "contact.tag": { en: "Contact", fr: "Contact" },
  "contact.heading": { en: "Let's build something <span class=\"gradient-text\">great together</span>", fr: "Construisons quelque chose de <span class=\"gradient-text\">formidable ensemble</span>" },
  "contact.subtitle": { en: "Have a website or design project in mind? Let's talk about it.", fr: "Un projet de site web ou de design en tête ? Parlons-en." },
  "contact.find_me": { en: "Find me", fr: "Me trouver" },
  "contact.phone": { en: "Phone: 06 40 09 27 82", fr: "Téléphone : 06 40 09 27 82" },
  "contact.form.name": { en: "Your Name", fr: "Votre nom" },
  "contact.form.email": { en: "Your Email", fr: "Votre email" },
  "contact.form.subject": { en: "Subject", fr: "Sujet" },
  "contact.form.message": { en: "Message", fr: "Message" },
  "contact.form.send": { en: "Send", fr: "Envoyer" },

  "footer.copyright": {
    en: 'Copyright &copy; <a href="#home" style="text-decoration:none;color:rgb(71,151,255);">Nour Taleb</a> — All rights reserved 2026',
    fr: 'Copyright &copy; <a href="#home" style="text-decoration:none;color:rgb(71,151,255);">Nour Taleb</a> — Tous droits réservés 2026'
  },
  "footer.copyright.sub": {
    en: 'Copyright &copy; <a href="index.html" style="color: rgb(71, 151, 255);">Nour Taleb</a> — All rights reserved 2026',
    fr: 'Copyright &copy; <a href="index.html" style="color: rgb(71, 151, 255);">Nour Taleb</a> — Tous droits réservés 2026'
  },

  "cs.visit_live": { en: "Visit Live Site", fr: "Voir le site en direct" },
  "cs.meta.role_label": { en: "Role", fr: "Rôle" },
  "cs.meta.role_value": { en: "Web Design & Build", fr: "Conception & Développement Web" },
  "cs.meta.timeline_label": { en: "Timeline", fr: "Durée" },
  "cs.meta.tools_label": { en: "Tools", fr: "Outils" },
  "cs.meta.type_label": { en: "Type", fr: "Type" },
  "cs.meta.type_value": { en: "Personal Project", fr: "Projet Personnel" },
  "cs.challenge_title": { en: "The Challenge", fr: "Le Défi" },
  "cs.approach_title": { en: "The Approach", fr: "L'Approche" },
  "cs.process_heading": { en: "From brief to build", fr: "Du brief à la mise en ligne" },
  "cs.step4.title": { en: "Build & Launch", fr: "Développement & Lancement" },
  "cs.step4.desc": { en: "Hand-coded the full responsive page in HTML/CSS/JS with scroll-based reveal animations.", fr: "Page responsive entièrement codée à la main en HTML/CSS/JS, avec des animations au scroll." },
  "cs.showcase_heading": { en: "Key screens", fr: "Aperçu des écrans clés" },
  "cs.next_label": { en: "Next Project", fr: "Projet Suivant" },
  "cs.back_btn": { en: "← Back to Portfolio", fr: "← Retour au Portfolio" },

  "cs.aurelia.tag": { en: "Web Design & Front-End ·", fr: "Web Design & Front-End ·" },
  "cs.aurelia.title": { en: "Aurelia Estates — Real Estate Website", fr: "Aurelia Estates — Site Immobilier" },
  "cs.aurelia.subtitle": { en: "A fully designed and coded one-page website for a boutique real estate & interior design studio — built from scratch with HTML, CSS and JavaScript, live and browsable below.", fr: "Un site web une page entièrement conçu et codé pour un studio immobilier & design d'intérieur haut de gamme — construit de A à Z en HTML, CSS et JavaScript, en direct et navigable ci-dessous." },
  "cs.aurelia.timeline_value": { en: "3-Week Build", fr: "Réalisé en 3 semaines" },
  "cs.aurelia.challenge": { en: "Real estate sites often bury great properties under cluttered layouts. The goal was a calm, editorial site that lets the photography and the properties do the talking.", fr: "Les sites immobiliers noient souvent de belles propriétés sous des mises en page trop chargées. L'objectif était un site calme et éditorial qui laisse la photographie et les biens parler d'eux-mêmes." },
  "cs.aurelia.approach": { en: "I chose a dark, warm palette with a serif display typeface for a premium feel, built a full-bleed photographic hero, and kept every section to one clear idea.", fr: "J'ai choisi une palette sombre et chaleureuse avec une typographie serif pour un rendu premium, construit un hero photographique plein cadre, et gardé une idée claire par section." },
  "cs.aurelia.process_subtitle": { en: "Four steps I followed to take Aurelia Estates from concept to a live, coded website.", fr: "Les quatre étapes suivies pour faire passer Aurelia Estates du concept à un site codé et en ligne." },
  "cs.aurelia.step1.title": { en: "Research", fr: "Recherche" },
  "cs.aurelia.step1.desc": { en: "Studied high-end real estate and hospitality sites for pacing, typography and photo treatment.", fr: "Étude de sites immobiliers et hôteliers haut de gamme pour le rythme, la typographie et le traitement photo." },
  "cs.aurelia.step2.title": { en: "Wireframe", fr: "Wireframe" },
  "cs.aurelia.step2.desc": { en: "Mapped the page as a journey: hero, credibility (stats), listings, philosophy, contact.", fr: "Structuration de la page comme un parcours : hero, crédibilité (chiffres), biens, philosophie, contact." },
  "cs.aurelia.step3.title": { en: "Visual Design", fr: "Design Visuel" },
  "cs.aurelia.step3.desc": { en: "Defined the palette, serif/sans type pairing, and a reusable property-card component.", fr: "Définition de la palette, de l'association serif/sans-serif et d'un composant de carte de bien réutilisable." },
  "cs.aurelia.showcase_subtitle": { en: "A closer look at the property listings and interior photography used across the site.", fr: "Un aperçu détaillé des biens en vente et des photos d'intérieur utilisées sur le site." },
  "cs.aurelia.next_title": { en: "Solène — Fashion Brand Website", fr: "Solène — Site de Marque de Mode" },

  "cs.solene.tag": { en: "Web Design & Front-End ·", fr: "Web Design & Front-End ·" },
  "cs.solene.title": { en: "Solène — Fashion Brand Website", fr: "Solène — Site de Marque de Mode" },
  "cs.solene.subtitle": { en: "A bold, editorial one-page website for an independent fashion label — designed and coded from scratch, with a full lookbook and brand story, live and browsable below.", fr: "Un site web une page audacieux et éditorial pour une marque de mode indépendante — conçu et codé de A à Z, avec un lookbook complet et l'histoire de la marque, en direct et navigable ci-dessous." },
  "cs.solene.timeline_value": { en: "2-Week Build", fr: "Réalisé en 2 semaines" },
  "cs.solene.challenge": { en: "Independent fashion brands need a site that feels as considered as the clothes themselves — bold enough to carry the brand, without competing with the photography.", fr: "Les marques de mode indépendantes ont besoin d'un site aussi soigné que leurs vêtements — assez fort pour porter la marque, sans faire concurrence à la photographie." },
  "cs.solene.approach": { en: "I built around a single oversized headline, a deep red-and-black palette, and an offset lookbook grid that lets each image breathe at a different size.", fr: "J'ai construit le site autour d'un titre unique et imposant, d'une palette rouge et noir profonde, et d'une grille de lookbook décalée où chaque image respire à une taille différente." },
  "cs.solene.process_subtitle": { en: "Four steps I followed to take Solène from concept to a live, coded website.", fr: "Les quatre étapes suivies pour faire passer Solène du concept à un site codé et en ligne." },
  "cs.solene.step1.title": { en: "Brand Direction", fr: "Direction Artistique" },
  "cs.solene.step1.desc": { en: "Defined a bold, editorial tone: oversized type, high-contrast palette, minimal copy.", fr: "Définition d'un ton audacieux et éditorial : typographie imposante, palette à fort contraste, texte minimal." },
  "cs.solene.step2.title": { en: "Wireframe", fr: "Wireframe" },
  "cs.solene.step2.desc": { en: "Structured the story: hero, values, brand narrative, lookbook, newsletter capture.", fr: "Structuration du récit : hero, valeurs, histoire de marque, lookbook, capture newsletter." },
  "cs.solene.step3.title": { en: "Visual Design", fr: "Design Visuel" },
  "cs.solene.step3.desc": { en: "Built the offset lookbook grid and alternating light/dark section rhythm.", fr: "Création de la grille de lookbook décalée et du rythme alterné entre sections claires et sombres." },
  "cs.solene.showcase_subtitle": { en: "A closer look at the lookbook photography and accessory styling.", fr: "Un aperçu détaillé des photos du lookbook et du stylisme des accessoires." },
  "cs.solene.next_title": { en: "Meridian — Engineering Corporate Website", fr: "Meridian — Site Corporate d'Ingénierie" },

  "cs.meridian.tag": { en: "Web Design & Front-End ·", fr: "Web Design & Front-End ·" },
  "cs.meridian.title": { en: "Meridian — Engineering Corporate Website", fr: "Meridian — Site Corporate d'Ingénierie" },
  "cs.meridian.subtitle": { en: "A professional corporate website for an engineering & infrastructure firm — designed and coded from scratch, built to communicate scale and trust, live and browsable below.", fr: "Un site corporate professionnel pour une entreprise d'ingénierie & d'infrastructure — conçu et codé de A à Z pour communiquer envergure et confiance, en direct et navigable ci-dessous." },
  "cs.meridian.timeline_value": { en: "3-Week Build", fr: "Réalisé en 3 semaines" },
  "cs.meridian.challenge": { en: "Engineering firms need to communicate scale and precision fast — the goal was a site that reads as credible to a client within the first scroll, not just informative.", fr: "Les entreprises d'ingénierie doivent communiquer envergure et précision rapidement — l'objectif était un site crédible dès le premier scroll, pas seulement informatif." },
  "cs.meridian.approach": { en: "I used a confident navy-and-orange palette, a services grid with clear icons, and a stats band to put scale (projects, countries, delivery record) front and center.", fr: "J'ai utilisé une palette bleu marine et orange affirmée, une grille de services avec des icônes claires, et un bandeau de chiffres mettant en avant l'envergure (projets, pays, taux de livraison)." },
  "cs.meridian.process_subtitle": { en: "Four steps I followed to take Meridian from concept to a live, coded website.", fr: "Les quatre étapes suivies pour faire passer Meridian du concept à un site codé et en ligne." },
  "cs.meridian.step1.title": { en: "Research", fr: "Recherche" },
  "cs.meridian.step1.desc": { en: "Looked at how engineering and construction firms structure trust signals and services.", fr: "Étude de la façon dont les entreprises d'ingénierie et de BTP structurent leurs signaux de confiance et services." },
  "cs.meridian.step2.title": { en: "Wireframe", fr: "Wireframe" },
  "cs.meridian.step2.desc": { en: "Structured the page: hero, services, about & expertise, stats, featured projects, contact.", fr: "Structuration de la page : hero, services, à propos & expertise, chiffres clés, projets phares, contact." },
  "cs.meridian.step3.title": { en: "Visual Design", fr: "Design Visuel" },
  "cs.meridian.step3.desc": { en: "Built a reusable service-card component and a dark stats band for scannable proof points.", fr: "Création d'un composant de carte de service réutilisable et d'un bandeau de chiffres sombre facile à parcourir." },
  "cs.meridian.showcase_subtitle": { en: "A closer look at the featured infrastructure project and field team photography.", fr: "Un aperçu détaillé du projet d'infrastructure phare et des photos de l'équipe terrain." },
  "cs.meridian.next_title": { en: "Aurelia Estates — Real Estate Website", fr: "Aurelia Estates — Site Immobilier" },
};

let currentTyped = null;
function restartTypedEffect(lang) {
  const el = document.querySelector(".typedText");
  if (!el || typeof Typed === "undefined") return;
  if (currentTyped) currentTyped.destroy();
  const strings = lang === "fr"
    ? ["des sites modernes", "des maquettes UI/UX", "des interfaces Figma", "des expériences numériques"]
    : ["modern websites", "UI/UX mockups", "Figma interfaces", "digital experiences"];
  currentTyped = new Typed(".typedText", {
    strings,
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true,
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const entry = i18n[el.getAttribute("data-i18n")];
    if (entry && entry[lang] !== undefined) el.textContent = entry[lang];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const entry = i18n[el.getAttribute("data-i18n-html")];
    if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const entry = i18n[el.getAttribute("data-i18n-placeholder")];
    if (entry && entry[lang] !== undefined) el.setAttribute("placeholder", entry[lang]);
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  restartTypedEffect(lang);
  localStorage.setItem("portfolio-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const savedLang = localStorage.getItem("portfolio-lang");
applyLanguage(savedLang === "en" ? "en" : "fr");

/*-----Scroll animation-------*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1200,
    reset: true,
});

sr.reveal(".badge-pill", { delay: 100 });
sr.reveal(".hero-title", { delay: 200 });
sr.reveal(".hero-role", { delay: 300 });
sr.reveal(".text-info", { delay: 400 });
sr.reveal(".hero-stats", { delay: 450 });
sr.reveal(".text-btn", { delay: 500 });
sr.reveal(".socical_icons", { delay: 550 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".service-card", { interval: 150 });
sr.reveal(".timeline-item", { interval: 150 });
sr.reveal(".top-header", {});
sr.reveal(".tech-strip", { delay: 150 });
sr.reveal(".spotlight-number", { delay: 100 });

sr.reveal(".cs-hero-inner", { delay: 100 });
sr.reveal(".cs-hero-visual", { delay: 250 });
sr.reveal(".cs-meta-chip", { interval: 100 });
sr.reveal(".cs-goal-card", { interval: 150 });
sr.reveal(".cs-step", { interval: 120 });
sr.reveal(".cs-showcase-item", { interval: 150 });
sr.reveal(".cs-stat", { interval: 120 });
sr.reveal(".cs-next-card", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 1200,
    reset: true,
});

srLeft.reveal(".about-info", { interval: 150 });
srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".spotlight-row:not(.reverse) .spotlight-visual", { delay: 100 });
srLeft.reveal(".spotlight-row.reverse .spotlight-content", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "60px",
    duration: 1200,
    reset: true,
});

srRight.reveal(".technical-skill", { delay: 100 });
srRight.reveal(".personal-skill", { delay: 200 });
srRight.reveal(".form-control", { delay: 100 });
srRight.reveal(".spotlight-row:not(.reverse) .spotlight-content", { delay: 200 });
srRight.reveal(".spotlight-row.reverse .spotlight-visual", { delay: 200 });

/*-----active link-------*/
const sections = document.querySelectorAll(".section[id], #home");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 90,
            sectionId = current.getAttribute("id");

        const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
        if (!navLink) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
        } else {
            navLink.classList.remove("active-link");
        }
    });
}

/*-----navbar scroll effect + progress bar + back to top-------*/
const headerNav = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

function onScroll() {
    scrollActive();

    if (window.scrollY > 60) {
        headerNav.classList.add("scrolled");
    } else {
        headerNav.classList.remove("scrolled");
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = progress + "%";

    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }
}

window.addEventListener("scroll", onScroll);

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Fermer le menu mobile après clic sur un lien
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("myNavMenu");
    if (menu.classList.contains("responsive")) {
      menu.classList.remove("responsive");
    }
  });
});

/*-----live browser frame sizing-------*/
function sizeBrowserFrames() {
  document.querySelectorAll(".browser-frame").forEach(frame => {
    const iframe = frame.querySelector("iframe");
    const body = frame.querySelector(".browser-body");
    if (!iframe || !body) return;
    const scale = frame.clientWidth / 1440;
    iframe.style.transform = `scale(${scale})`;
    const vh = frame.classList.contains("tall") ? 1700 : 900;
    body.style.height = Math.round(vh * scale) + "px";
  });
}
if (document.querySelector(".browser-frame")) {
  sizeBrowserFrames();
  window.addEventListener("load", sizeBrowserFrames);
  window.addEventListener("resize", sizeBrowserFrames);
}

/*-----tilt hover effect on visual cards-------*/
const tiltEls = document.querySelectorAll(".visual-card, .cs-showcase-item, .browser-frame");

tiltEls.forEach(el => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  });
});

/*-----animated stat counters-------*/
const statNumbers = document.querySelectorAll(".cs-stat-number[data-count]");

if (statNumbers.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-count"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));
}

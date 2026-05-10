Jean Cocteau International School - Content Reference

# Shared: Navbar (src/components/Navbar.jsx)

Appears on every page.

Section: Top Bar (desktop only)

**Phone link**: +212 522728868 (tel: +212522-728868)

**Email link**: <gsjeancocteau@gmail.com> (mailto)

**Top right link 1**: Préinscription en ligne -> /admissions

**Top right link 2**: Carrières -> /carrieres

**Language toggle cycles**: FR -> EN -> AR

Section: Logo

**Logo image**: /logo.png

**Logo alt**: Jean Cocteau International School

Section: Main Navigation Items

**Accueil** -> /

**À propos** -> /a-propos

**Cycles scolaires** -> /cycles (dropdown)

Maternelle -> /cycles/maternelle

Primaire -> /cycles/primaire

Collège -> /cycles/college

Lycée -> /cycles/lycee

**Admissions** -> /admissions

**Vie scolaire** -> /vie-scolaire

**Actualités** -> /actualites

**Galerie** -> /galerie

**Contact** -> /contact

Section: CTA Button

**Label**: Inscription -> /admissions

Section: Mobile Menu

**Aria label**

:

Menu

**Bottom CTA**

:

Inscription ->

/admissions

# Shared: Footer (src/components/Footer.jsx)

Appears on every page.

Section: Newsletter

**Title**: Restez informés

**Subtitle**: Recevez les actualités et événements de l'école directement dans votre boîte mail. **Email placeholder**: Votre adresse email

Section: Brand Column

**Logo image**: /logo.png (alt: Jean Cocteau International School)

**Description**: Une école d'excellence offrant une éducation internationale, multilingue et bienveillante, de la maternelle au lycée. **Social icons**: Facebook, Instagram, Linkedin, Youtube (all href="#")

Section: Navigation Column

**Heading**: Navigation

**Links**

:

Accueil -> /

À propos -> /a-propos

Cycles scolaires -> /cycles

Admissions -> /admissions

Vie scolaire -> /vie-scolaire

Galerie -> /galerie

Section: Ressources Column

**Heading**: Ressources

**Links**

:

FAQ -> /faq

Actualités -> /actualites

Carrières -> /carrieres

Préinscription -> /admissions

Demander une visite -> /contact

Brochure (PDF) -> #

Section: Contact Column

**Heading**: Contact

**Address**: Sidi Moumen, Attacharouk/ Casablanca, Maroc

**Phone**: +212 522-728868 (tel: +212522-728868)

**Email**: <gsjeancocteau@gmail.com>

Section: Bottom Bar

**Copyright**

:

©

Jean Cocteau International School. Tous droits réservés.

**Legal links**

(all

href="#"

):

Mentions légales

Politique de confidentialité

CGU

# Shared: CTASection (src/components/CTASection.jsx)

Used on Home, About, Cycles, SchoolLife, Faq, and all 4 cycle pages.

Section: Final CTA

**Title**

:

Donnez à votre enfant l'avenir qu'il mérite

**Subtitle**

:

Réservez une visite de notre campus ou commencez le processus d'inscription dès aujourd'hui.

**Button 1**

:

Demander une visite ->

/contact

**Button 2**

:

Inscription ->

/admissions

# Shared: PageHeader (src/components/PageHeader.jsx)

Reusable hero used on all interior pages. Props accepted:

**title** (string) - large H1 **subtitle** (string, optional) - displayed below title

**breadcrumbs** (array of { label, to? }) - rendered after the auto "Accueil" crumb **image** (string URL, optional) - background image; falls back to gradient

Built-in text:

**Breadcrumb root**

:

Accueil ->

/

# Shared: CyclePage (src/components/CyclePage.jsx)

Reusable layout consumed by Maternelle / Primaire / Collège / Lycée. Props: title, age, intro, heroImage, sections\[\], schedule\[\], gallery\[\].

Built-in static text

**Schedule section title**: Une journée type

**Gallery section eyebrow**: Galerie

**Gallery section title**: Moments de vie

**Gallery CTA**: Voir toute la galerie -> /galerie

**Default section eyebrow when label missing**: Pédagogie

**Subtitle format**: {age} • {intro}

**Breadcrumbs format**: Cycles scolaires -> /cycles / {title}

Section item shape

Each sections\[\] item has: label, title, text, bullets\[\], img. Each schedule\[\] item has: time, activity. gallery\[\] is an array of image URLs.

Shared: WhatsAppButton

# (src/components/WhatsAppButton.jsx)

**Link**

:

<https://wa.me/212500000000?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20l'%C3%A9cole>.

**Pre-filled message (decoded)**

:

Bonjour, je souhaite avoir des informations sur l'école.

**Aria label**

:

Contactez-nous sur WhatsApp

## Page: Home

**Route**: / **File**: src/pages/Home.jsx

Section: Hero

**Background image**: <https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&q=80>

**Badge**: Inscriptions ouvertes pour 2026 - 2027

**H1 line 1**: L'excellence éducative,

**H1 line 2 (accent)**: pour vos enfants

**Paragraph**: Jean Cocteau International School offre une éducation premium, multilingue et bienveillante, de la maternelle au lycée, préparant chaque élève à devenir un citoyen du monde accompli.

**Button 1**: Inscription en ligne -> /admissions

**Button 2**: Visiter le campus -> /contact

**Button 3** (video): Voir la vidéo

Section: Stats Strip (floating)

**Item 1** -> **Value**: 1700+ / **Label**: Élèves

**Item 2** -> **Value**: 150+ / **Label**: Enseignants experts

**Item 3** -> **Value**: 98% / **Label**: Réussite au Bac

**Item 4** -> **Value**: 3 / **Label**: Langues principales

Section: Welcome / Présentation

**Image**: <https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80> (alt: Campus)

**Floating badge 1**: 10+ / Années d'excellence

**Eyebrow**: Bienvenue

**Title**: Une école pensée pour révéler chaque enfant

**Paragraph 1**: Depuis plus de 10 ans, Jean Cocteau International School accompagne les familles dans l'éducation de leurs enfants. Notre pédagogie allie rigueur académique, ouverture culturelle et bienveillance.

**Paragraph 2**: Notre campus moderne, nos enseignants passionnés et notre projet pédagogique unique offrent à chaque élève les conditions idéales pour s'épanouir et

réussir.

**Bullet items**:

Programme international

Petits effectifs

Suivi personnalisé

Activités enrichissantes

**CTA button**: Découvrir l'école -> /a-propos

### Section: Cyclese

**Eyebrow**: Notre offre

**Title**: Nos cycles scolaires

**Subtitle**: Un parcours complet, cohérent et exigeant, de la première rentrée aux portes de l'université. **Card link label**: En savoir plus

#### Cycles array

**Title**: Maternelle

**Item 1**

**Item 2**

**Item 3**

**Item 4**

**Age**: 3 - 5 ans

**Description**: Éveil, créativité et premières découvertes dans un environnement bienveillant.

**Link**: /cycles/maternelle

**Image**: <https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80>

**Title**: Primaire

**Age**: 6 - 10 ans

**Description**: Apprentissages fondamentaux et ouverture sur le monde et les langues.

**Link**: /cycles/primaire

**Image**: <https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80>

**Title**: Collège

**Age**: 11 - 14 ans

**Description**: Approfondissement des connaissances et développement de l'autonomie.

**Link**: /cycles/college

**Image**: <https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80>

**Title**: Lycée

**Age**: 15 - 18 ans

**Description**: Préparation au Bac et orientation vers les meilleures universités.

**Link**: /cycles/lycee

**Image**: <https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80>

### Section: Why Choose Us (Features)

**Eyebrow**: Nos atouts

**Title**: Pourquoi choisir Jean Cocteau

**Subtitle**: Six raisons qui font de notre école un choix d'exception pour votre enfant.

#### Features array

**Item 1** -> **Title**: Approche internationale / **Description**: Une éducation ouverte sur le monde, multiculturelle et multilingue.

**Item 2** -> **Title**: Trilinguisme / **Description**: Français, anglais et arabe enseignés dès le plus jeune âge.

**Item 3** -> **Title**: Excellence académique / **Description**: 98% de réussite au Baccalauréat, dont 70% avec mention.

**Item 4** -> **Title**: Bienveillance / **Description**: Un suivi personnalisé et un cadre épanouissant pour chaque enfant.

**Item 5** -> **Title**: Petits effectifs / **Description**: Classes à effectifs réduits pour un encadrement de qualité.

**Item 6** -> **Title**: Activités riches / **Description**: Plus de 30 clubs et activités extrascolaires proposés.

### Section: News

**Eyebrow**: Actualités

**Title**: Ce qui se passe à l'école

**Top-right CTA**: Toutes les actualités -> /actualites

**Card CTA per article**: Lire l'article -> /actualites

#### News array

**Date**: 15 Mars 2026

**Item 1**

**Category**: Événement

**Title**: Journée portes ouvertes le 12 avril

**Excerpt**: Découvrez notre campus, rencontrez nos enseignants et posez toutes vos questions.

**Image**: <https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80>

**Item 2**

**Item 3**

**Date**: 08 Mars 2026

**Category**: Réussite

**Title**: Nos élèves médaillés au concours national

**Excerpt**: Trois élèves de Terminale ont brillé au concours national de mathématiques.

**Image**: <https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80>

**Date**: 01 Mars 2026

**Category**: International

**Title**: Voyage scolaire à Paris pour les 3ème

**Excerpt**: Une semaine culturelle au cœur de la capitale française.

**Image**: <https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80>

Section: Testimonials

**Eyebrow**: Témoignages

**Title**: Ce qu'ils disent de nous

**Subtitle**: Parents et anciens élèves partagent leur expérience à Jean Cocteau.

#### Testimonials array

**Name**: Sarah El Idrissi **Role**: Parent d'élève

**Item 1**

**Item 2**

**Item 3**

**Text**: Le cadre éducatif et l'attention portée à chaque enfant sont remarquables. Notre fille s'épanouit pleinement.

**Rating**: 5

**Name**: Karim Benali

**Role**: Ancien élève, Promo 2022

**Text**: Jean Cocteau m'a donné les outils pour réussir mes études supérieures à l'étranger. Une école d'exception.

**Rating**: 5

**Name**: Amina Tazi

**Role**: Parent d'élève

**Text**: Une équipe pédagogique à l'écoute, des infrastructures modernes et des valeurs solides. Je recommande vivement. **Rating**: 5

Section: CTA

Renders shared &lt;CTASection /&gt; (see Shared section above).

## Page: About

**Route**: /a-propos **File**: src/pages/About.jsx

Section: PageHeader

**Title**: À propos de nous

**Subtitle**: Une école d'exception, une histoire d'engagement et de passion pour l'éducation. **Breadcrumb**: À propos

Section: Histoire

**Eyebrow**: Notre histoire

**Title**: 25 ans d'excellence éducative

**Paragraph 1**: Fondée en 2019 par un groupe d'éducateurs visionnaires, Jean Cocteau International School est née d'une ambition : offrir une éducation de très haut niveau, alliant rigueur académique et ouverture sur le monde.

**Paragraph 2**: De ses premières classes maternelles à son lycée d'aujourd'hui, l'école n'a cessé de grandir, s'enrichissant de partenariats prestigieux, d'enseignants passionnés et d'infrastructures modernes.

**Paragraph 3**: Aujourd'hui, plus de 1 700 élèves construisent leur avenir chaque jour.

**Image**: <https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80> (alt: Campus) **Floating badge**: 2019 / Année de fondation

Section: Vision & Mission

### Items

**Title**: Notre vision

**Item 1**

**Item 2**

**Text**: Éveiller des esprits curieux et responsables, prêts à construire l'avenir avec créativité et confiance, tout en cultivant un fort attachement aux valeurs de leur société.

**Title**: Notre mission

**Text**: Offrir à chaque élève une éducation d'excellence, multilingue et bienveillante, qui développe pleinement son potentiel académique, humain et culturel.

Section: Valeurs

**Eyebrow**: Nos valeurs

**Title**: Les piliers de notre identité

### Values array

**Item 1** -> **Title**: Bienveillance / **Description**: Un cadre rassurant où chaque élève se sent écouté, respecté et soutenu.

**Item 2** -> **Title**: Excellence / **Description**: Une exigence académique élevée, sans jamais sacrifier l'épanouissement.

**Item 3** -> **Title**: Ouverture / **Description**: Un esprit international, multiculturel et tourné vers le monde.

**Item 4** -> **Title**: Communauté / **Description**: Une école-famille où parents, élèves et enseignants avancent ensemble.

Section: Mot de la direction

**Image**: <https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80> (alt: Direction) **Eyebrow**: Mot de la direction

**Quote/Title**: "Chaque enfant porte en lui une étoile à révéler."

**Paragraph 1**: Diriger Jean Cocteau International School est un honneur et une responsabilité que je porte avec humilité. Notre engagement quotidien est d'offrir à chaque enfant les conditions de son épanouissement : un cadre exigeant mais bienveillant, des enseignants passionnés et un projet pédagogique solide.

**Paragraph 2**: Bienvenue dans une école où l'apprentissage devient passion, où la curiosité devient compétence, et où chaque élève trouve sa voie.

**Signature name**: Mme. Mériame Bouirig

**Signature role**: Directrice Générale

Section: Équipe

**Eyebrow**: Notre équipe

**Title**: Une direction d'expérience

### Team array

**Item 1** -> **Name**: Mme. Mériame Bouirig / **Role**: Directrice Générale / **Image**: <https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80>

**Item 2** -> **Name**: M. Smail Sarab / **Role**: Responsable Primaire / **Image**: <https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80>

**Item 3** -> **Name**: Mme. Wafaa Khalfi / **Role**: Responsable Maternelle / **Image**: <https://images.unsplash.com/photo-1580489944761-15a19d654956>?

w=400&q=80

**Item 4** -> **Name**: M. Driss Elgraini / **Role**: Responsable Collège & Lycée / **Image**: <https://images.unsplash.com/photo-1472099645785-5658abf4ff4e>? w=400&q=80

Section: Campus / Infrastructures

**Eyebrow**: Notre campus

**Title**: Des infrastructures d'exception

### Campus items

**Title**: Salles modernes

**Item 1**

**Item 2**

**Item 3**

**Description**: 60 salles équipées de tableaux interactifs et matériel pédagogique de pointe.

**Image**: <https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80>

**Title**: Centre sportif

**Description**: Gymnase, terrains, piscine et espaces dédiés au sport et au bien-être.

**Image**: <https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80>

**Title**: Laboratoires & arts

**Description**: Laboratoires sciences, salles de musique, arts plastiques et théâtre.

**Image**: <https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80>

Section: Partenaires

**Heading**: Certifications et partenariats

**Items** (rendered as text):

Cambridge

Section: CTA

Renders shared &lt;CTASection /&gt;.

## Page: Cycles

**Route**: /cycles **File**: src/pages/Cycles.jsx

Section: PageHeader

**Title**: Nos cycles scolaires

**Subtitle**: De la maternelle au lycée, un parcours cohérent et exigeant pensé pour chaque âge. **Breadcrumb**: Cycles scolaires

Section: Cycle blocks

**Per-card eyebrow**: Cycle

**Per-card CTA**: Découvrir le cycle

### Cycles array

**Item 1: Maternelle**

**Age**: 3 - 5 ans

**Description**: Un environnement sécurisant pour les premiers pas dans l'apprentissage. Éveil sensoriel, créativité, motricité, langages.

**Bullets**: Pédagogie active / Bilingue dès la PS / Petits effectifs / Activités artistiques

**Image**: <https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80>

**Link**: /cycles/maternelle

**Item 2: Primaire**

**Age**: 6 - 10 ans

**Description**: Acquisition des fondamentaux dans un cadre stimulant. Lecture, mathématiques, sciences, langues et culture.

**Bullets**: Programme français / Anglais quotidien / Sciences expérimentales / Activités sportives

**Image**: <https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80>

**Link**: /cycles/primaire

**Item 3: Collège**

**Age**: 11 - 14 ans

**Description**: Approfondissement et autonomie. Développement de l'esprit critique, projets pluridisciplinaires et orientation.

**Bullets**: Préparation Brevet / Sections internationales / Projets innovants / Orientation guidée

**Image**: <https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80>

**Link**: /cycles/college

**Item 4: Lycée**

**Age**: 15 - 18 ans

**Description**: Préparation au Bac et à l'enseignement supérieur. Spécialités, orientation et accompagnement personnalisé.

**Bullets**: Bac français / Bac international / Préparation universitaire / Mentorat

**Image**: <https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80> **Link**: /cycles/lycee

Section: CTA

Renders shared &lt;CTASection /&gt;.

## Page: Maternelle

**Route**: /cycles/maternelle **File**: src/pages/cycles/Maternelle.jsx Uses CyclePage component.

Section: PageHeader

**Title**: Maternelle **Age**: 3 - 5 ans

**Intro (forms subtitle)**: Un environnement chaleureux pour les premiers apprentissages.

**Hero image**: <https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600&q=80>

Section: Content sections

**Label**: Présentation

**Section 1**

**Section 2**

**Section 3**

**Section 4**

**Title**: Une école qui éveille la curiosité

**Text**: La Maternelle Jean Cocteau accueille les enfants de 3 à 5 ans dans un environnement adapté à leur rythme et à leurs besoins. Notre approche pédagogique

active favorise l'éveil sensoriel, la sociabilisation et le plaisir d'apprendre.

**Bullets**: Petite, Moyenne et Grande Section / Petits effectifs (max 18 élèves) / Salles lumineuses et adaptées / Cours de récréation sécurisée

**Image**: <https://images.unsplash.com/photo-1543322748-33df6d3db1bb?w=900&q=80>

**Label**: Méthode pédagogique

**Title**: Une pédagogie active et bienveillante

**Text**: Inspirée des méthodes Montessori et Reggio, notre pédagogie place l'enfant au cœur de son apprentissage. Manipulation, exploration et jeu structuré sont les piliers de notre démarche.

**Bullets**: Pédagogie Montessori / Apprentissage par le jeu / Ateliers en autonomie / Suivi individualisé

**Image**: <https://images.unsplash.com/photo-1564429097439-e4ec0e391b96?w=900&q=80>

**Label**: Langues

**Title**: Le bilinguisme dès la PS

**Text**: Dès la Petite Section, les enfants sont immergés dans un environnement bilingue français-anglais. L'arabe est introduit progressivement à partir de la Moyenne

Section.

**Bullets**: Français langue principale / Anglais quotidien / Initiation à l'arabe / Comptines et rituels multilingues

**Image**: <https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80>

**Label**: Activités

**Title**: Activités motrices et artistiques

**Text**: Le développement moteur et la créativité sont au centre de nos activités quotidiennes. Sport, arts plastiques, musique et expression corporelle rythment la

semaine.

**Bullets**: Psychomotricité / Arts plastiques / Éveil musical / Théâtre et expression

**Image**: <https://images.unsplash.com/photo-1607968565043-36af90dde238?w=900&q=80>

Section: Une journée type (schedule)

**08h30** - Accueil et activités d'éveil libre

**09h30** - Rituels du matin & langage

**10h00** - Ateliers d'apprentissage

**10h30** - Récréation

**11h00** - Déjeuner et temps calme

**13h00** - Activités artistiques ou motrices

**14h30** - Goûter et histoires

**16h15** - Sortie

Section: Galerie

<https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80> <https://images.unsplash.com/photo-1564429097439-e4ec0e391b96?w=600&q=80> <https://images.unsplash.com/photo-1543322748-33df6d3db1bb?w=600&q=80> <https://images.unsplash.com/photo-1607968565043-36af90dde238?w=600&q=80> <https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80> <https://images.unsplash.com/photo-1597392582469-a697322d5c16?w=600&q=80>

Section: CTA

Shared &lt;CTASection /&gt;.

## Page: Primaire

**Route**: /cycles/primaire **File**: src/pages/cycles/Primaire.jsx Uses CyclePage component.

Section: PageHeader

**Title**: Primaire

**Age**: 6 - 10 ans

**Intro**: L'âge des fondamentaux et de la curiosité du monde.

**Hero image**: <https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80>

Section: Content sections

**Label**: Programme

**Section 1**

**Section 2**

**Section 3**

**Section 4**

**Title**: Le programme français enrichi

**Text**: Notre primaire suit le programme français, enrichi par des spécificités propres à notre école : ouverture internationale, sciences expérimentales et arts. Du

CP au CM2, chaque élève bénéficie d'un suivi personnalisé.

**Bullets**: Programme officiel français / Du CP au CM2 / 24h hebdomadaires + ateliers / Évaluations bienveillantes

**Image**: <https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80>

**Label**: Langues

**Title**: Un enseignement multilingue

**Text**: Dès le primaire, les élèves bénéficient d'un enseignement renforcé en français, en anglais et en arabe afin de développer des compétences linguistiques solides dans un environnement international.

**Bullets**: Français langue d'enseignement / Anglais renforcé / Arabe langue vivante / Préparation aux certifications Cambridge

**Image**: <https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80>

**Label**: Activités

**Title**: Activités parascolaires riches

**Text**: Plus de 20 activités parascolaires sont proposées : sport, arts, sciences, robotique, musique, théâtre... Pour cultiver la passion de chaque élève.

**Bullets**: Sports collectifs et individuels / Robotique et coding / Théâtre et arts visuels / Échecs et jeux logiques

**Image**: <https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=900&q=80>

**Label**: Suivi

**Title**: Accompagnement personnalisé

**Text**: Chaque élève bénéficie d'un suivi individualisé. Ateliers de soutien, aide aux devoirs et entretiens réguliers avec les familles garantissent une scolarité réussie.

**Bullets**: Aide aux devoirs encadrée / Soutien personnalisé / Entretiens parents trimestriels / Cellule psy-pédagogique

**Image**: <https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80>

Section: Une journée type

**08h00** - Accueil

**08h30** - Cours principaux

**11h15** - Récréation

**10h30** - Cours

**12h30** - Cours

**13h30** - Récréation

**15h30** - Cours

**16h00** - Cours

**16h30** \- Sortie

Section: Galerie

<https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80> <https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80> <https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=600&q=80> <https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80> <https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80> <https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80>

Section: CTA

Shared &lt;CTASection /&gt;.

## Page: Collège

**Route**: /cycles/college **File**: src/pages/cycles/College.jsx Uses CyclePage component.

Section: PageHeader

**Title**: Collège

**Age**: 11 - 14 ans

**Intro**: Approfondir ses connaissances et gagner en autonomie.

**Hero image**: <https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80>

Section: Content sections

**Label**: Parcours académique

**Section 1**

**Section 2**

**Section 3**

**Section 4**

**Title**: Un parcours exigeant et structuré

**Text**: De la 1AC à la 3AC, les élèves développent leurs compétences académiques dans un environnement structuré et stimulant. Notre objectif est de les préparer efficacement au cycle du lycée tout en renforçant leur autonomie, leur esprit critique et leur ouverture internationale.

**Bullets**: Programme pédagogique moderne / Enseignement multilingue / Préparation au cycle lycée / Développement personnel et orientation

**Image**: <https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80>

**Label**: Préparation examens

**Title**: Accompagnement académique renforcé

**Text**: Tout au long du cycle collège, les élèves bénéficient d'un accompagnement pédagogique structuré visant à renforcer leurs acquis, développer leur méthodologie de travail et préparer leur réussite au cycle lycée.

**Bullets**: Suivi pédagogique continu Ateliers méthodologiques / Sessions de soutien et révision / Accompagnement individualisé

**Image**: <https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80>

**Label**: Vie au collège

**Title**: Clubs et projets innovants

**Text**: Le collège offre un environnement dynamique où les élèves participent à diverses activités éducatives, culturelles et sportives favorisant l'épanouissement personnel, l'esprit d'équipe et la créativité.

**Bullets**: Activités culturelles et artistiques / Clubs éducatifs / Activités sportives / Projets pédagogiques et événements scolaires

**Image**: <https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80>

**Label**: Orientation

**Title**: Orientation guidée et personnalisée

**Text**: Notre cellule d'orientation accompagne les élèves dès la 2AC dans la construction de leur projet personnel. Forums, stages, rencontres avec professionnels.

**Bullets**: Conseillère d'orientation dédiée / Forum des métiers / Stages en entreprise (3AC) / Tests d'orientation

**Image**: <https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80>

Section: Une journée type

**08h00** - Accueil

**08h30** - Cours principaux

**11h15** - Récréation

**10h30** - Cours

**12h30** - Cours

**13h30** - Récréation

**15h30** - Cours

**16h00** - Cours

**16h30** \- Sortie

Section: Galerie

<https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80> <https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80> <https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80> <https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80> <https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80> <https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80>

Section: CTA

Shared &lt;CTASection /&gt;.

## Page: Lycée

**Route**: /cycles/lycee **File**: src/pages/cycles/Lycee.jsx Uses CyclePage component.

Section: PageHeader

**Title**: Lycée

**Age**: 15 - 18 ans

**Intro**: Préparer le Bac et les portes des meilleures universités.

**Hero image**: <https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80>

Section: Content sections

**Label**: Filières

**Section 1**

**Section 2**

**Section 3**

**Section 4**

**Title**: Filières et spécialités

**Text**: De la Tronc Commun jusqu'à la 2ème année du Baccalauréat, notre lycée accompagne les élèves dans un parcours académique structuré favorisant l'excellence, l'autonomie et la préparation aux études supérieures.

**Bullets**: Bac général français / Bac International (IB) / Accompagnement et orientation / Préparation aux études supérieures

**Image**: <https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80>

**Label**: Préparation Bac

**Title**: Une préparation au Bac d'excellence

**Text**: Avec 98% de réussite et 70% de mentions, notre lycée se classe parmi les meilleurs de la région. Bacs blancs, soutien personnalisé, stages intensifs et préparation au Grand Oral.

**Bullets**: 98% de réussite au Bac / 70% avec mention / Stages intensifs vacances / Préparation Grand Oral

**Image**: <https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80>

**Label**: Orientation

**Title**: Orientation universitaire mondiale

**Text**: Notre cellule d'orientation post-bac accompagne chaque élève dans son projet des conseils d'orientation et un accompagnement vers les études supérieures.

**Bullets**: Conseiller d'orientation post-bac / préparation aux écoles supérieures / Suivi personnalisé des élèves / Salons et forums

**Image**: <https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80>

**Label**: Excellence

**Title**: Résultats et excellence

**Text**: Nos anciens élèves poursuivent leurs études dans plusieurs établissements d'enseignement supérieur reconnus au Maroc et à l'international. Notre objectif est d'accompagner chaque élève vers la réussite académique et professionnelle.

**Bullets**: Top universités françaises / Universités européennes / Universités nationale / Réseau d'anciens élèves

**Image**: <https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80>

Section: Une journée type

**08h00** - Accueil

**08h30** - Cours principaux

**11h15** - Récréation

**10h30** - Cours

**12h30** - Cours

**13h30** - Récréation

**15h30** - Cours

**16h00** - Cours

**16h30** \- Sortie

Section: Galerie

<https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80> <https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80> <https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80> <https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80> <https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80> <https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=600&q=80>

Section: CTA

Shared &lt;CTASection /&gt;.

## Page: Admissions

**Route**: /admissions **File**: src/pages/Admissions.jsx

Section: PageHeader

**Title**: Admissions

**Subtitle**: Rejoignez la communauté Jean Cocteau. Découvrez notre processus d'admission simple et transparent. **Breadcrumb**: Admissions

### Section: Process (4 steps)

**Eyebrow**: Procédure

**Title**: 4 étapes pour rejoindre l'école

#### Steps array

**Step 1** -> **Title**: Demande en ligne ou en présentiel / **Description**: Remplissez notre formulaire de préinscription en quelques minutes.

**Step 2** -> **Title**: Entretien / **Description**: Rencontre avec notre équipe pédagogique et l'élève.

**Step 3** -> **Title**: Tests d'admission / **Description**: Évaluation adaptée au niveau et à l'âge de l'enfant.

**Step 4** -> **Title**: Confirmation / **Description**: Réponse sous 7 jours ouvrés et finalisation du dossier.

### Section: Documents requis

**Heading**: Documents requis

**Items**

:

Livret de famille (copie)

Acte de naissance de l'élève

Bulletins scolaires des 2 dernières années

Certificat médical récent

4 photos d'identité récentes

Pièce d'identité des parents

**CTA button**: Télécharger la brochure -> #

### Section: Frais de scolarité

**Heading**: Frais de scolarité

**Subtitle**: Tarifs 2026-2027, hors frais d'inscription (1500 MAD).

**Footnote**: \* Bourses et facilités de paiement disponibles sur étude du dossier.

**Table headers**: Cycle / Annuel / Mensuel

#### Fees array

### **Maternelle** -> Annuel : 12 000 MAD / Mensuel : 1 200 MAD

**Primaire** -> Annuel : 14 000 MAD / Mensuel : 1 400 MAD  
**Collège** -> Annuel : 15 000 MAD / Mensuel : 1 500 MAD  
**Lycée** -> Annuel : 18 000 MAD / Mensuel : 1 800 MAD

### Section: Form (Préinscription)

**Eyebrow**: Formulaire

**Title**: Demande de préinscription

**Subtitle**: Complétez ce formulaire - nous vous recontactons sous 48h.

**Submit button**: Envoyer ma demande

**Success state title**: Demande envoyée !

**Success state text**: Notre équipe admissions vous recontactera très prochainement.

#### Field labels

Prénom du parent \*

Nom du parent \*

Email \*

Téléphone \*

Prénom de l'élève \*

Date de naissance \*

Cycle souhaité \* (select with placeholder "Sélectionner" and options: Maternelle / Primaire / Collège / Lycée)

Message (textarea placeholder: "Précisez vos questions ou attentes...")

### Section: FAQ

**Eyebrow**: FAQ

**Title**: Questions fréquentes

#### FAQ array

**Q1**: Quand commencent les inscriptions ? **A**: Les inscriptions ouvrent en janvier pour la rentrée de septembre suivante. Les places restantes sont attribuées au fil de l'eau.

**Q2**: Y a-t-il une liste d'attente ? **A**: Oui, en cas de classes complètes, les candidats sont placés sur liste d'attente et contactés dès qu'une place se libère.

**Q3**: Proposez-vous des bourses ? **A**: Nous proposons des bourses au mérite et des aides sociales étudiées au cas par cas. Contactez notre service admissions pour en savoir plus.

**Q4**: Faut-il être bilingue pour intégrer l'école ? **A**: Non. Nous accueillons les élèves de tous niveaux linguistiques et proposons un accompagnement adapté pour les non-

francophones.

(Note: this page does NOT render &lt;CTASection /&gt;.)

## Page: SchoolLife

**Route**: /vie-scolaire **File**: src/pages/SchoolLife.jsx

Section: PageHeader

**Title**: Vie scolaire

**Subtitle**: Une école qui ne se limite pas aux salles de classe : clubs, événements, sport, arts et bien plus.

**Breadcrumb**: Vie scolaire

**Hero image**: <https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80>

Section: Clubs

**Eyebrow**: Activités

**Title**: Plus de 30 clubs et activités

**Subtitle**: Sport, arts, sciences, langues : chaque élève trouve sa passion.

### Clubs array

**Item 1** -> **Name**: Musique / **Description**: Chorale, orchestre, piano, guitare et percussions.

**Item 2** -> **Name**: Arts plastiques / **Description**: Peinture, sculpture, photographie et arts numériques.

**Item 3** -> **Name**: Sports / **Description**: Football, basket, natation, tennis, échecs, judo.

**Item 4** -> **Name**: Théâtre / **Description**: Atelier théâtre français, anglais et arabe.

**Item 5** -> **Name**: Robotique / **Description**: Programmation, électronique et compétitions FLL.

Section: Events (Calendrier)

**Eyebrow**: Calendrier

**Title**: Événements à venir

### Events array

**Item 1** -> **Date**: 12 Avril / **Title**: Journée portes ouvertes / **Image**: <https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80>

**Item 2** -> **Date**: 25 Mai / **Title**: Gala annuel des arts / **Image**: <https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80>

**Item 3** -> **Date**: 10 Juin / **Title**: Tournoi sportif inter-classes / **Image**: <https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80>

**Item 4** -> **Date**: 20 Juin / **Title**: Cérémonie de fin d'année / **Image**: <https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80>

Section: Services

**Eyebrow**: Services

**Title**: Au quotidien à l'école

### Services array

**Item 1** -> **Title**: Cantine / **Description**: Cuisine maison, équilibrée préparée chaque jour sur place. Menus variés.

**Item 2** -> **Title**: Transport scolaire / **Description**: Service de bus dans toutes les zones de la ville. Accompagnateurs à bord, horaires fiables.

**Item 3** -> **Title**: Sécurité / **Description**: Campus surveillé 24/7, contrôle d'accès, vidéosurveillance, infirmière sur place et plan d'urgence.

Section: Sports & Arts banner

**Card 1 (Sports)**

**Image**: <https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80>

**Title**: Sports

**Subtitle**: 15 disciplines, 8 équipes inter-écoles

**Card 2 (Arts & culture)**

**Image**: <https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80>

**Title**: Arts & culture

**Subtitle**: Théâtre, musique, peinture et plus

### Section: CTA

Shared &lt;CTASection /&gt;.

Page: News (Actualités)

**Route**: /actualites **File**: src/pages/News.jsx

### Section: PageHeader

**Title**: Actualités

**Subtitle**: Suivez la vie de notre école : événements, réussites et actualités pédagogiques. **Breadcrumb**: Actualités

### Section: Filter tabs

Tous

Événement

Réussite

International

Pédagogie

### Section: Articles list

**Per-card CTA**: Lire l'article -> #

#### Articles array

**Article 1**

**Article 2**

**Article 3**

**Article 4**

**Article 5**

**Article 6**

**Date**: 10 Aout 2026

**Category**: Événement

**Title**: Journée portes ouvertes le 10 Aout

**Excerpt**: Découvrez notre campus, rencontrez nos enseignants et posez vos questions.

**Image**: <https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80>

**Date**: 08 Mars 2026

**Category**: Réussite

**Title**: Concours national de mathématiques

**Excerpt**: Trois élèves de Terminale ont brillé dans cette compétition prestigieuse.

**Image**: <https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80>

**Date**: 01 Mars 2026

**Category**: International

**Title**: voyage scolaire à londres pour collégienne et lycéenne

**Excerpt**: semaine culturelle au cœur de Londre

**Image**: <https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80>

**Date**: 20 Septembre 2026

**Category**: Pédagogie

**Title**: Lancement du programme STEAM en primaire

**Excerpt**: Sciences, technologie, ingénierie, arts et mathématiques au programme.

**Image**: <https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80>

**Date**: 10 Février 2026

**Category**: Événement

**Title**: Concert de la chorale du lycée

**Excerpt**: Une soirée musicale exceptionnelle ouverte aux familles.

**Image**: <https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80>

**Date**: 01 Février 2026

**Category**: Réussite

**Title**: Notre équipe robotique qualifiée pour FLL

**Excerpt**: Les élèves du club robotique se sont distingués lors des sélections régionales.

**Image**: <https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&q=80>

(Note: News page does NOT render &lt;CTASection /&gt;.)

## Page: Gallery

**Route**: /galerie **File**: src/pages/Gallery.jsx

### Section: PageHeader

**Title**: Galerie

**Subtitle**: Plongez dans l'univers Jean Cocteau à travers nos photos.

**Breadcrumb**: Galerie

### Section: Filter tabs

Tout

Campus

Classes

Activités

Événements

### Section: Image grid

Each item has

src

(URL) and

cat

(category badge shown on hover).

<https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80>

- Campus

<https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80>

- Classes

<https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=80>

- Activités

<https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80>

- Événements

<https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80>

- Classes

<https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=900&q=80>

- Activités

<https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80>

- Campus

<https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80>

- Événements

<https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=900&q=80>

- Activités

<https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80>

- Classes

<https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80>

- Campus

<https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80>

- Événements

(

)

No CTASection on this page.

## Page: Contact

**Route**: /contact **File**: src/pages/Contact.jsx

### Section: PageHeader

**Title**: Contactez-nous

**Subtitle**: Une question ? Une demande de visite ? Notre équipe est à votre écoute.

**Breadcrumb**: Contact

### Section: Info cards

**Card 1: Adresse**

Avenue de l'Excellence

Casablanca, 20100, Maroc

**Card 2: Téléphone**

+212 522-728868

+212 669-717478

**Card 3: Email** <gsjeancocteau@gmail.com>

**Card 4: Horaires**

Lun - Ven : 8h - 18h

Sam : 9h - 12h

Section: Contact form

**Heading**: Envoyez-nous un message

**Subtitle**: Nous vous répondons généralement sous 24h ouvrées.

**Submit button**: Envoyer le message

**Success heading**: Message envoyé !

**Success body**: Nous vous recontacterons très prochainement.

#### Field placeholders

Nom \*

Email \*

Téléphone

Select placeholder: Objet de la demande

Inscription

Visite du campus

Information générale

Carrières

Autre

Textarea: Votre message \*

Section: Social

**Label**: Suivez-nous :

**Icons**: Facebook / Instagram / Linkedin (all href="#")

Section: Map

**Heading**: Nous trouver

**Iframe title**: Carte

**Iframe src**: <https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106496.18036725075!2d->

7.6837!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!

(No CTASection on this page.)

## Page: FAQ

**Route**: /faq **File**: src/pages/Faq.jsx

Section: PageHeader

**Title**: Foire aux questions

**Subtitle**: Toutes les réponses aux questions les plus fréquentes des familles. **Breadcrumb**: FAQ

Section: FAQ groups

### Group 1: Inscriptions

**Q1**: Quand commencent les inscriptions ? **A**: Les inscriptions ouvrent en janvier pour la rentrée de septembre. Les places restantes sont attribuées au fil de l'eau.

**Q2**: À partir de quel âge accueillez-vous les enfants ? **A**: Nous accueillons les enfants à partir de 3 ans en Petite Section de Maternelle, jusqu'à la Terminale.

**Q3**: Y a-t-il des tests d'admission ? **A**: Oui, des tests adaptés au niveau et à l'âge sont organisés pour évaluer le niveau scolaire et linguistique de l'élève.

### Group 2: Pédagogie

**Q1**: Quelles sont les langues enseignées ? **A**: Le français est notre langue principale. L'anglais est enseigné quotidiennement dès la maternelle et l'arabe à partir du primaire.

L'espagnol est proposé en option au collège et au lycée.

**Q2**: Suivez-vous le programme français ? **A**: Oui, notre établissement suit le programme officiel de l'Éducation Nationale française, enrichi de spécificités internationales.

**Q3**: Quel est l'effectif moyen par classe ? **A**: Nos classes accueillent en moyenne 18 élèves en maternelle, 22 en primaire, 24 au collège et au lycée.

### Group 3: Vie scolaire

**Q1**: Y a-t-il un service de cantine ? **A**: Oui, notre cantine propose une cuisine équilibrée préparée sur place chaque jour, avec options végétariennes et halal.

**Q2**: Proposez-vous un transport scolaire ? **A**: Oui, des bus scolaires desservent toutes les zones de la ville, avec accompagnateurs et suivi GPS.

**Q3**: Quelles activités parascolaires proposez-vous ? **A**: Plus de 30 clubs et activités : sport, arts, sciences, robotique, musique, théâtre, échecs, MUN...

### Group 4: Frais & paiement

**Q1**: Quels sont les frais de scolarité ? **A**: Les frais varient selon le cycle, de 45 000 MAD/an en maternelle à 75 000 MAD/an au lycée. Tous les détails sur la page Admissions.

**Q2**: Proposez-vous des bourses ? **A**: Oui, nous proposons des bourses au mérite et des aides sociales étudiées au cas par cas.

**Q3**: Quelles sont les modalités de paiement ? **A**: Paiement annuel, trimestriel ou mensuel possible. Facilités de paiement disponibles sur étude.

Section: CTA

Shared &lt;CTASection /&gt;.

## Page: Careers

**Route**: /carrieres **File**: src/pages/Careers.jsx

Section: PageHeader

**Title**: Carrières

**Subtitle**: Rejoignez une équipe passionnée au service de l'éducation et contribuez à l'excellence. **Breadcrumb**: Carrières

Section: Pourquoi nous

**Eyebrow**: Travailler avec nous

**Title**: Faites partie de l'aventure

**Paragraph**: Travailler à Jean Cocteau International School, c'est rejoindre une communauté d'enseignants et de professionnels passionnés, dans un cadre stimulant et bienveillant.

**Image**: <https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80> (alt: Équipe)

### Bullet list

Formation continue et accompagnement

Salaires attractifs et avantages

Cadre de travail moderne

Évolution professionnelle

Esprit d'équipe et collaboration

Section: Offres

**Eyebrow**: Offres en cours

**Title**: {jobs.length} offres disponibles (currently: 5 offres disponibles)

**Per-card meta label**: Temps plein

**Per-card CTA**: Postuler

### Jobs array

**Title**: Enseignant(e) de mathématiques - Lycée

**Job 1**

**Job 2**

**Job 3**

**Job 4**

**Type**: CDI

**Location**: Casablanca

**Department**: Lycée

**Description**: Enseignement des mathématiques en classes de Seconde, Première et Terminale.

**Title**: Professeur(e) des écoles - Primaire

**Type**: CDI

**Location**: Casablanca

**Department**: Primaire

**Description**: Prise en charge d'une classe de CE2. Pédagogie active et bienveillante.

**Title**: Enseignant(e) d'anglais - Collège

**Type**: CDI

**Location**: Casablanca

**Department**: Collège

**Description**: Enseignement de l'anglais en sections internationales.

**Title**: Animateur(trice) périscolaire

**Job 5**

**Type**: CDD

**Location**: Casablanca

**Department**: Vie scolaire

**Description**: Animation des activités parascolaires (arts, sport, sciences).

**Title**: Conseiller(e) pédagogique

**Type**: CDI

**Location**: Casablanca

**Department**: Direction

**Description**: Accompagnement pédagogique des enseignants et coordination.

Section: Candidature spontanée

**Title**

:

Candidature spontanée

**Body**

:

Vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanée.

**CTA button**

:

Envoyer mon CV ->

mailto:rh@jeancocteau-school.com

(

No CTASection on this page.

)

## Page: 404 / NotFound

**Route**: \* (catch-all) **File**: src/pages/NotFound.jsx

Section: NotFound

**Big number**

: 404

**Title**

:

Page introuvable

**Body**

:

Désolé, la page que vous recherchez n'existe pas ou a été déplacée.

**CTA button**

:

Retour à l'accueil ->

/

Image URL Quick Index (for easy swapping)

Logo

/logo.png (Navbar + Footer)

Home

Hero bg: <https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&q=80>

Welcome image: <https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80>

Cycles cards: see Home > Cycles array

News cards: see Home > News array

About

History image: <https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80>

Director image: <https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80>

Team images: see About > Team array

Campus images: see About > Campus / Infrastructures

### Cycles overview & each cycle page hero/body/gallery

See per-cycle sections above.

SchoolLife

Hero: <https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80>

Sports banner: <https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80> Arts banner: <https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80>

News, Gallery, Careers

See arrays above.

Contact map

<https://www.google.com/maps/place/Jean+Cocteau+international+school/@33.5766685,-7.5174879,17z/data=!3m1!4b1!4m6!3m5!1s0xda7cbd9ce1b1217:0xae674d921a63cf88!8m2!3d33.5766641!4d-7.514913!16s%2Fg%2F11nh0ghbnq?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D>

## Site-wide Contact / Identity Snapshot

**School name**: Jean Cocteau International School

**Phone (display)**: +212 522-728868 / **Tel link**: tel:+212522-728868

**Secondary phone (Contact page)**: +212 669-717478

**Primary email**: <gsjeancocteau@gmail.com>

**Admissions email**: <gsjeancocteau@gmail.com>

**HR email (Careers)**: <gsjeancocteau@gmail.com>

**WhatsApp number**: +212 669-717478

**Address**: Sidi Moumen Attacharouk, Casablanca, 20100, Maroc

**Hours**: Lun - Ven : 8h - 17h

**Founded**: 2019 (10+ ans)

**Headline stats**: 1700+ élèves / 150+ enseignants / 98% réussite Bac / 3 langues

**Inscription year shown in hero badge**: 2026 - 2027
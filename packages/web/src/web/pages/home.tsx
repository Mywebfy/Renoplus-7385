import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  Ruler,
  Volume2,
  Thermometer,
  Plus,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const phone = "+33 6 88 77 62 81";
const whatsapp = (
  message = "Bonjour RENOPLUS, je souhaite obtenir un devis gratuit pour mon projet de chape et d’isolation. Pourriez-vous me recontacter ?",
) => `https://wa.me/33688776281?text=${encodeURIComponent(message)}`;
const services = [
  {
    name: "Chapes traditionnelles & fluides",
    short: "Une base parfaitement plane.",
    description:
      "Coulage de chapes ciment traditionnelles (tirées à la règle) et de chapes fluides/liquides (anhydrite ou ciment). Idéal pour le ravoirage, la mise à niveau parfaite de vos sols et l’enrobage de planchers chauffants.",
    tags: ["Ciment & anhydrite", "Planchers chauffants", "Ravoirage"],
    icon: Layers3,
    image: "/images/screed.webp",
    alt: "Application et nivellement d’une chape dans un bâtiment en construction",
  },
  {
    name: "Isolation thermique des sols",
    short: "Le confort commence sous vos pieds.",
    description:
      "Pose de tous isolants thermiques sous chape (panneaux polyuréthane, PSE, XPS). Optimisez l’efficacité énergétique de votre bâtiment et réduisez vos pertes de chaleur par le sol.",
    tags: ["Polyuréthane", "PSE & XPS", "Performance énergétique"],
    icon: Thermometer,
    image: "/images/heating.webp",
    alt: "Mise en œuvre d’une chape sur un plancher chauffant",
  },
  {
    name: "Isolation phonique & acoustique",
    short: "Plus de calme, à chaque étage.",
    description:
      "Mise en œuvre de sous-couches acoustiques performantes pour atténuer efficacement les bruits de choc, les bruits de pas et garantir le confort entre les étages.",
    tags: ["Bruits de choc", "Confort acoustique", "Sous-couches"],
    icon: Volume2,
    image: "/images/interior.webp",
    alt: "Intérieur lumineux illustrant le confort de l’habitat",
  },
  {
    name: "Préparation & terrasses",
    short: "Des supports solides. Des sols durables.",
    description:
      "Préparation rigoureuse des supports intérieurs et extérieurs, réalisation de chapes pour terrasses et aménagements extérieurs durables.",
    tags: ["Intérieur & extérieur", "Supports", "Terrasses"],
    icon: Ruler,
    image: "/images/screed.webp",
    alt: "Préparation d’un sol avant son revêtement final",
  },
];
const reviews = [
  {
    name: "Marc L.",
    role: "Architecte · Yvelines (78)",
    text: "Une planéité parfaite ! L’équipe de RENOPLUS a réalisé une chape fluide sur plancher chauffant pour l’un de mes chantiers. Travail soigné, respect des niveaux au millimètre près et excellent contact.",
    initials: "ML",
  },
  {
    name: "Thomas & Elodie D.",
    role: "Propriétaires",
    text: "Nous avons fait appel à RENOPLUS pour l’isolation phonique et la chape de notre nouvelle maison. Le chantier a été rendu extrêmement propre et les délais ont été parfaitement respectés. Je recommande vivement.",
    initials: "TE",
  },
  {
    name: "Julien R.",
    role: "Rénovation totale",
    text: "Entreprise très professionnelle et réactive. Ravoirage et chape traditionnelle impeccable sur un sol très irrégulier à l’origine. Le résultat est top.",
    initials: "JR",
  },
];

function WhatsAppLink({
  children,
  className = "",
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      className={`button whatsapp ${className}`}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={19} />
      <span>{children}</span>
      <ArrowUpRight size={17} />
    </a>
  );
}

function FloorDiagram() {
  return (
    <div
      className="floor-diagram"
      aria-label="Composition illustrative d’un sol : revêtement, chape, isolant et support"
    >
      <div className="diagram-heading">
        <span>LA PRÉCISION, À CHAQUE COUCHE</span>
        <Layers3 size={16} />
      </div>
      <div className="layers-visual">
        <div className="slab slab-one" />
        <div className="slab slab-two" />
        <div className="slab slab-three" />
        <div className="slab slab-four" />
      </div>
      <div className="layer-labels">
        <span>
          <i />
          Revêtement final
        </span>
        <span>
          <i />
          Chape de précision
        </span>
        <span>
          <i />
          Isolation du sol
        </span>
        <span>
          <i />
          Support préparé
        </span>
      </div>
      <div className="diagram-foot">
        Une base technique. Un confort durable.<span>Schéma de principe</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState(0);
  const [project, setProject] = useState("Chapes traditionnelles & fluides");
  const [surface, setSurface] = useState("");
  const [city, setCity] = useState("");
  const [legal, setLegal] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (legal) dialog.current?.showModal();
    else dialog.current?.close();
  }, [legal]);
  const active = services[selected];
  const projectMessage = `Bonjour RENOPLUS, je souhaite une estimation pour mon projet.\nPrestation : ${project}${surface ? `\nSurface : ${surface} m²` : ""}${city.trim() ? `\nVille du chantier : ${city.trim()}` : ""}\nJe peux vous transmettre mes plans et des photos. Merci !`;
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <a href="#accueil" className="brand" aria-label="RENOPLUS — accueil">
            <Layers3 />
            <span>
              RENO<span className="brand-plus">PLUS</span>
              <small>CHAPES & ISOLATION</small>
            </span>
          </a>
          <nav
            className={menu ? "navigation open" : "navigation"}
            aria-label="Navigation principale"
          >
            <a href="#prestations" onClick={() => setMenu(false)}>
              Nos prestations
            </a>
            <a href="#entreprise" onClick={() => setMenu(false)}>
              L’entreprise
            </a>
            <a href="#avis" onClick={() => setMenu(false)}>
              Avis clients
            </a>
            <a href="#contact" onClick={() => setMenu(false)}>
              Contact
            </a>
          </nav>
          <a className="header-quote" href={whatsapp()} target="_blank" rel="noopener noreferrer">
            Un projet ? Parlons-en <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="accueil">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                VOTRE EXPERT SOLS EN ÎLE-DE-FRANCE
              </div>
              <h1>
                Chapes et Isolation
                <br />
                en Île-de-France :<br />
                <span>Votre Sol Parfait</span>
                <br />
                avec RENOPLUS<span className="h1-dot">.</span>
              </h1>
              <p>
                Application de chapes fluides, traditionnelles et isolation thermique/phonique. Un
                travail de haute précision pour particuliers et professionnels.
              </p>
              <WhatsAppLink>Demander un devis gratuit sur WhatsApp</WhatsAppLink>
              <div className="hero-call">
                <Phone size={14} />
                <span>
                  Ligne directe : <a href="tel:+33688776281">{phone}</a>
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/images/interior.webp"
                alt="Intérieur contemporain lumineux avec un sol parfaitement uniforme"
                fetchPriority="high"
              />
              <div className="photo-grid" />
              <span className="photo-label">LA QUALITÉ SE CONSTRUIT À LA BASE.</span>
              <div className="precision-card">
                <Ruler size={22} />
                <div>
                  La précision sous vos pieds.<span>Planéité. Confort. Durabilité.</span>
                </div>
              </div>
              <div className="hero-location">
                <MapPin size={15} />
                Conflans-Sainte-Honorine · Île-de-France
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              <Check />
              Devis gratuit, sans engagement
            </span>
            <span>
              <Check />
              Particuliers & professionnels
            </span>
            <span>
              <Check />
              Intervention rapide en Île-de-France
            </span>
            <a href="#prestations">
              Découvrez notre savoir-faire <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section className="services section-dark" id="prestations">
          <div className="container">
            <div className="section-topline">
              <span className="eyebrow">01 / NOS PRESTATIONS</span>
              <span>LA TECHNIQUE AU SERVICE DE VOTRE CONFORT</span>
            </div>
            <div className="services-intro">
              <h2>
                Un sol réussi.
                <br />À tous les niveaux.
              </h2>
              <p>
                De la préparation du support à la finition de la chape, nous créons les fondations
                du confort de votre habitat.
              </p>
            </div>
            <div className="service-grid">
              <div className="service-list">
                {services.map((s, i) => (
                  <div className={`service-item ${selected === i ? "selected" : ""}`} key={s.name}>
                    <button
                      onClick={() => setSelected(i)}
                      aria-expanded={selected === i}
                      aria-controls={`service-${i}`}
                    >
                      <span className="service-number">0{i + 1}</span>
                      <s.icon size={20} />
                      <span>{s.name}</span>
                      {selected === i ? <span className="minus">−</span> : <Plus size={19} />}
                    </button>
                    <div id={`service-${i}`} hidden={selected !== i} className="service-detail">
                      <h3>{s.short}</h3>
                      <p>{s.description}</p>
                      <div className="tags">
                        {s.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={whatsapp(
                          `Bonjour RENOPLUS, je souhaite un devis pour la prestation : ${s.name}. Pourriez-vous m’accompagner dans mon projet ?`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Parlons de votre projet <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="service-showcase">
                <img key={active.image} src={active.image} alt={active.alt} loading="lazy" />
                <div className="showcase-caption">
                  <span>{active.name}</span>
                  <span>LE SAVOIR-FAIRE RENOPLUS</span>
                </div>
                <FloorDiagram />
              </div>
            </div>
          </div>
        </section>

        <section className="about container" id="entreprise">
          <div className="section-topline">
            <span className="eyebrow">02 / À PROPOS DE RENOPLUS</span>
            <span>UN PARTENAIRE DE CONFIANCE, PRÈS DE CHEZ VOUS</span>
          </div>
          <div className="about-grid">
            <div>
              <h2>
                La rigueur d’un expert.
                <br />
                <span>La proximité d’un artisan.</span>
              </h2>
              <div className="about-photo">
                <img
                  src="/images/heating.webp"
                  alt="Travail de mise en œuvre d’une chape sur plancher chauffant"
                  loading="lazy"
                />
                <span>Du support au sol fini, chaque détail compte.</span>
              </div>
            </div>
            <div className="about-content">
              <p className="lead">
                Bien plus qu’une chape.
                <br />
                La base de votre projet.
              </p>
              <p>
                RENOPLUS est une entreprise spécialisée dans la préparation de supports, l’isolation
                et le coulage de chapes de haute précision. Basée à Conflans-Sainte-Honorine
                (78700), l’entreprise met son savoir-faire technique au service des particuliers et
                des professionnels du bâtiment.
              </p>
              <p>
                Notre engagement est d’allier réactivité, rigueur technique et respect des normes en
                vigueur pour vous garantir un sol parfaitement plat et durable, prêt à recevoir
                votre revêtement final. Nous intervenons rapidement sur tous types de chantiers à
                travers la région parisienne.
              </p>
              <div className="commitments">
                <div>
                  <Ruler />
                  <span>
                    Haute précision<small>Une mise à niveau soignée</small>
                  </span>
                </div>
                <div>
                  <ShieldCheck />
                  <span>
                    Rigueur technique<small>Des supports préparés avec soin</small>
                  </span>
                </div>
                <div>
                  <MapPin />
                  <span>
                    Proximité & réactivité<small>À travers toute la région parisienne</small>
                  </span>
                </div>
              </div>
              <a className="text-link" href="#contact">
                Construisons votre projet ensemble <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="reviews" id="avis">
          <div className="container">
            <div className="section-topline">
              <span className="eyebrow">03 / AVIS CLIENTS</span>
              <span>VOTRE SATISFACTION, NOTRE PLUS BELLE FINITION</span>
            </div>
            <div className="reviews-heading">
              <h2>
                Des sols impeccables.
                <br />
                Des clients convaincus.
              </h2>
              <div className="review-score">
                <div className="stars" aria-label="5 étoiles">
                  ★★★★★
                </div>
                <span>La confiance, chantier après chantier.</span>
              </div>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review" key={review.name}>
                  <div className="stars" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>« {review.text} »</blockquote>
                  <div className="review-person">
                    <span className="avatar">{review.initials}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <small>{review.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="review-note">Témoignages communiqués par RENOPLUS.</p>
          </div>
        </section>

        <section className="coverage container">
          <div className="coverage-title">
            <span className="eyebrow">PROCHES DE VOTRE CHANTIER</span>
            <h2>
              Notre terrain d’action ?<br />
              Toute l’Île-de-France.
            </h2>
            <p>
              Basés à Conflans-Sainte-Honorine, nous intervenons rapidement dans la région
              parisienne et les départements limitrophes.
            </p>
            <a className="text-link" href="tel:+33688776281">
              <Phone size={17} />
              {phone}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="coverage-map">
            <div className="map-grid" />
            <svg viewBox="0 0 480 330" aria-hidden="true">
              <path
                className="map-outline"
                d="M115 68 180 38 234 70 294 44 330 91 375 102 409 163 370 193 365 255 294 286 244 258 195 290 132 259 104 218 65 196 92 145Z"
              />
              <path d="m115 68 36 66-59 11m59-11 47-39 36-25m-36 25 32 58-29 48-69 58m98-106 65-30 35-32m-35 32 34 72 41-2m-169 8 71 25 22 60m-22-60 57-21m-128 6-59 17m71-123 65 28m-30 103-28 32" />
              <circle className="map-halo" cx="166" cy="130" r="17" />
              <circle className="map-dot" cx="166" cy="130" r="5" />
              <text x="185" y="133">
                RENOPLUS
              </text>
              <circle cx="257" cy="174" r="3" />
              <text x="269" y="179">
                Paris
              </text>
              <text x="122" y="201" className="map-number">
                78
              </text>
              <text x="212" y="99" className="map-number">
                95
              </text>
              <text x="218" y="178" className="map-number">
                92
              </text>
            </svg>
            <div className="regions">
              <span>
                Yvelines <b>78</b>
              </span>
              <span>
                Val-d’Oise <b>95</b>
              </span>
              <span>
                Hauts-de-Seine <b>92</b>
              </span>
              <span>
                Paris <b>75</b>
              </span>
            </div>
            <span className="map-note">Zone d’intervention · carte schématique</span>
          </div>
        </section>

        <section className="contact section-dark" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">04 / CONTACT & DEVIS</span>
              <h2>
                Discutons de votre
                <br />
                projet <span>dès aujourd’hui.</span>
              </h2>
              <p>
                Envoyez-nous vos dimensions ou plans directement par message pour une estimation
                rapide.
              </p>
              <div className="contact-benefits">
                <span>
                  <Check size={16} />
                  Devis gratuit
                </span>
                <span>
                  <Check size={16} />
                  Sans engagement
                </span>
                <span>
                  <Check size={16} />
                  Contact direct
                </span>
              </div>
              <a href="tel:+33688776281" className="contact-phone">
                <Phone size={20} />
                {phone}
                <ArrowUpRight size={18} />
              </a>
              <small>Un échange simple. Une réponse adaptée à votre chantier.</small>
            </div>
            <div className="quote-panel">
              <div className="quote-heading">
                <FaWhatsapp size={25} />
                <span>
                  Votre projet, en quelques mots<small>Préparons votre message ensemble.</small>
                </span>
              </div>
              <label htmlFor="project">Quelle prestation vous intéresse ?</label>
              <div className="select-wrap">
                <select
                  id="project"
                  value={project}
                  onChange={(event) => setProject(event.target.value)}
                >
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                  <option>Plusieurs prestations / besoin de conseils</option>
                </select>
                <ChevronDown size={16} />
              </div>
              <div className="input-grid">
                <div>
                  <label htmlFor="surface">
                    Surface estimée <span>(facultatif)</span>
                  </label>
                  <div className="surface-wrap">
                    <input
                      id="surface"
                      aria-label="Surface estimée en mètres carrés"
                      type="number"
                      min="1"
                      placeholder="Ex. 80"
                      value={surface}
                      onChange={(event) => setSurface(event.target.value)}
                    />
                    <span>m²</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="city">
                    Ville du chantier <span>(facultatif)</span>
                  </label>
                  <input
                    id="city"
                    aria-label="Ville du chantier"
                    placeholder="Ex. Conflans"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
              </div>
              <WhatsAppLink message={projectMessage}>
                Envoyer les détails de mon projet sur WhatsApp
              </WhatsAppLink>
              <p className="privacy-note">
                Vous serez redirigé vers WhatsApp. Aucune donnée saisie n’est enregistrée sur ce
                site.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-main">
            <div>
              <a href="#accueil" className="brand">
                <Layers3 />
                <span>
                  RENO<span className="brand-plus">PLUS</span>
                  <small>CHAPES & ISOLATION</small>
                </span>
              </a>
              <p>
                La précision sous vos pieds.
                <br />
                Le confort dans votre habitat.
              </p>
            </div>
            <div>
              <h3>Nous contacter</h3>
              <a href="tel:+33688776281">
                <Phone size={15} />
                {phone}
              </a>
              <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={15} />
                Échanger sur WhatsApp <ArrowUpRight size={13} />
              </a>
              <p>
                <MapPin size={15} />
                <span>
                  Rue de la Croix Rouge
                  <br />
                  78700 Conflans-Sainte-Honorine
                </span>
              </p>
            </div>
            <div className="footer-area">
              <h3>Notre zone d’intervention</h3>
              <p>
                Nous intervenons partout en Île-de-France : Yvelines (78), Val-d’Oise (95),
                Hauts-de-Seine (92), Paris (75) et départements limitrophes.
              </p>
              <a href="#prestations">
                Nos prestations <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="footer-map">
            <div className="footer-map-heading">
              <div>
                <h3>Retrouvez-nous à Conflans-Sainte-Honorine</h3>
                <p>Rue de la Croix Rouge, 78700 Conflans-Sainte-Honorine</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rue%20de%20la%20Croix%20Rouge%2C%2078700%20Conflans-Sainte-Honorine%2C%20France"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} /> Ouvrir dans Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
            <iframe
              title="Google Maps — Rue de la Croix Rouge, Conflans-Sainte-Honorine"
              src="https://www.google.com/maps?q=Rue%20de%20la%20Croix%20Rouge%2C%2078700%20Conflans-Sainte-Honorine%2C%20France&t=m&z=16&output=embed&hl=fr"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} RENOPLUS. Tous droits réservés.</span>
            <span>Entreprise enregistrée au Registre National des Entreprises.</span>
            <button onClick={() => setLegal(true)}>
              Mentions légales <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        aria-label="Contacter RENOPLUS sur WhatsApp"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={26} />
      </a>
      <dialog ref={dialog} className="legal-dialog" onCancel={() => setLegal(false)}>
        <button
          className="dialog-close"
          onClick={() => setLegal(false)}
          aria-label="Fermer les mentions légales"
        >
          <X />
        </button>
        <span className="eyebrow">RENOPLUS</span>
        <h2>Mentions légales</h2>
        <h3>Éditeur du site</h3>
        <p>
          RENOPLUS
          <br />
          Rue de la Croix Rouge
          <br />
          78700 Conflans-Sainte-Honorine
          <br />
          Téléphone : {phone}
        </p>
        <p>
          Entreprise enregistrée au Registre National des Entreprises, selon les informations
          communiquées par RENOPLUS.
        </p>
        <h3>Informations à compléter avant publication</h3>
        <p>
          La forme juridique, le numéro SIREN/SIRET, le responsable de publication et les
          coordonnées de l’hébergeur doivent être renseignés par l’entreprise pour finaliser ces
          mentions.
        </p>
        <h3>Vos données</h3>
        <p>
          Les informations saisies dans l’estimateur sont utilisées uniquement pour composer votre
          message WhatsApp ; elles ne sont pas enregistrées par ce formulaire. WhatsApp applique ses
          propres conditions et sa politique de confidentialité. Le site intègre l’outil de mesure
          d’audience fourni par la plateforme d’hébergement.
        </p>
        <h3>Illustrations et témoignages</h3>
        <p>
          Les photographies sont illustratives et ne représentent pas nécessairement des
          réalisations de RENOPLUS. Les témoignages sont reproduits à partir des textes transmis par
          l’entreprise.
        </p>
      </dialog>
    </>
  );
}

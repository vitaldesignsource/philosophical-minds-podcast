import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

const projects = [
  {
    title: "Aetheric Magic",
    creator: "Ike Baker",
    image: "/aetheric-magic-book-ike-baker.jpg",
  },
  {
    title: "Astrological Goetia",
    creator: "Jaime Paul Lamb",
    image: "/astrological-goetia.jpg",
  },
  {
    title: "Esoteric Mythology",
    creator: "Ike Baker",
    image: "/esoteric-mythology-ike-baker.jpg",
  },
];

const affiliatedProjects = [
  {
    title: "Three Magi Press",
    logo: "/three-magi-press-logo.png",
    description: "Publishing project connected to the wider Philosophical Minds creative orbit.",
    host: null,
    links: [["Website", "https://threemagipress.com"]],
  },
  {
    title: "Aetherica Podcast",
    logo: "/aetherica-podcast-logo.png",
    description: "A companion podcast project exploring esoteric philosophy, symbolism, and hidden currents of thought.",
    host: "Hosted by Sky Mathis and Ike Baker.",
    links: [
      ["Website", "https://aethericapodcast.com"],
      ["YouTube", "https://www.youtube.com/@AETHERICAPODCAST"],
      ["Patreon", "https://www.patreon.com/c/Aetherica"],
    ],
  },
];

export const metadata: Metadata = {
  title: "Projects & Collaborations",
  description: "Selected projects and collaborations connected to Philosophical Minds and Sky Mathis.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <SiteHeader />
        <p className="eyebrow">Projects and Collaborations</p>
        <h1>Creative Work Beyond the Archive</h1>
        <p>
          Selected book projects, collaborations, and visual contributions connected to the wider Philosophical Minds
          orbit.
        </p>
      </section>

      <section className="route-section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Internal Artwork Contributions</p>
          <h2>Books and Collaborations</h2>
          <p>Sky Mathis contributed internal artwork for the following three book projects.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__cover">
                <img className="project-card__image" src={project.image} alt={`${project.title} book cover`} />
              </div>
              <div className="project-card__body">
                <p className="project-card__meta">Book Project</p>
                <h2>{project.title}</h2>
                <p className="project-card__creator">By {project.creator}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading section-heading--secondary">
          <p className="eyebrow">Affiliated Projects</p>
          <h2>Press and Podcast Work</h2>
          <p>Additional creative projects connected to the wider Philosophical Minds constellation.</p>
        </div>
        <div className="affiliated-grid">
          {affiliatedProjects.map((project) => (
            <article className="affiliated-card" key={project.title}>
              <div className="affiliated-card__logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
              <div className="affiliated-card__body">
                <p className="project-card__meta">Project</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.host && <p className="affiliated-card__host">{project.host}</p>}
                {project.links.length > 0 && (
                  <div className="project-card__links">
                    {project.links.map(([label, href]) => (
                      <a href={href} key={href} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

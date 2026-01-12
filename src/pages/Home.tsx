import { Link } from 'react-router-dom'
import { projects } from '../resources/projects'
import manuelImg from '../assets/ManuelCabanas.jpeg'

export default function Home() {
  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100 antialiased"
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      {/* Gradient background overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero / Introduction Section */}
      <header className="min-h-[90vh] flex items-center justify-center px-6 py-20 animate-[fadeIn_0.8s_ease-out_forwards]">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={manuelImg}
            alt="Manuel Cabanas"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
          <p className="text-amber-400/80 font-medium tracking-widest uppercase text-sm mb-6">
            Welcome to my portfolio
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-zinc-100 mb-8 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent italic">
              Manuel Cabanas
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            I’m a Systems Engineering student at Universidad Tecnológica Nacional (FRBA) with
            hands-on experience building web applications and personal projects. I focus on
            developing solutions that meet real client requirements, prioritizing robustness,
            maintainability, and ease of use. I’m constantly driven to learn, improve my skills, and
            grow as a software developer, with a strong interest in building reliable and
            well-structured products.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">
              View my work
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-[slideUp_0.8s_ease-out_forwards]">
            <h2
              className="text-4xl md:text-5xl text-zinc-100 mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Featured <span className="italic text-amber-300">Projects</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              A selection of projects I've built and contributed to over the years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/projects/${project.slug}`}
                className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm p-8 block
                               transition-all duration-500 hover:border-amber-500/30 hover:bg-zinc-900/80 hover:shadow-[0_0_60px_-15px_rgba(251,191,36,0.15)] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {project.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-zinc-700 group-hover:border-amber-500/50 transition-colors">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-xl text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-zinc-600 group-hover:text-amber-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-full border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl text-zinc-100 mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's <span className="italic text-amber-300">connect</span>
          </h2>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-zinc-300 hover:text-amber-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 group-hover:after:w-full">
                manucabanas803@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/manuel-cabanas-944148224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-300 hover:text-amber-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 group-hover:after:w-full">
                LinkedIn
              </span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800/50">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Manuel Cabanas. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Keyframes via style tag for animations */}
      <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
    </div>
  )
}

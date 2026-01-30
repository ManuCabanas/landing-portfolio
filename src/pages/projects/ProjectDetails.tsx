import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../../resources/projects'
import type { FlowDetail } from '../../resources/projects'

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const [expandedFlows, setExpandedFlows] = useState<number[]>([])

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const toggleFlow = (index: number) => {
    setExpandedFlows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  if (!project) {
    return (
      <div
        className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center"
        style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
      >
        <div className="text-center px-6">
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Project <span className="italic text-amber-300">not found</span>
          </h1>
          <p className="text-zinc-400 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100 antialiased"
      style={{ fontFamily: "'Syne', system-ui, sans-serif" }}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6 md:py-10">
        {/* Back link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors mb-6 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to projects
        </Link>

        {/* Project Header */}
        <header className="mb-8 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-zinc-700 shadow-lg"
              />
            )}
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-zinc-100 mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.title}
              </h1>
              {(project.year || project.role) && (
                <div className="flex flex-wrap items-center gap-4 text-zinc-500">
                  {project.year && (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {project.year}
                    </span>
                  )}
                  {project.role && (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {project.role}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Tags and Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags &&
                project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm font-medium text-amber-300/80 bg-amber-500/10 rounded-full border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-zinc-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-100 font-semibold rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Description */}
        <section className="mb-12 animate-[slideUp_0.6s_ease-out_0.1s_both]">
          <h2
            className="text-2xl text-zinc-100"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            About this <span className="italic text-amber-300">project</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section className="mb-10 animate-[slideUp_0.6s_ease-out_0.2s_both]">
            <h2
              className="text-2xl text-zinc-100 mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Key <span className="italic text-amber-300">features</span>
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-400">
                  <svg
                    className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Scroll to Flows Arrow */}
        {project.flows && project.flows.length > 0 && (
          <div className="flex justify-center mb-8 animate-[slideUp_0.6s_ease-out_0.2s_both]">
            <a
              href="#flows"
              className="inline-flex flex-col items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span className="text-sm">View app flows</span>
              <svg
                className="w-6 h-6 group-hover:translate-y-1 transition-transform"
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
        )}

        {/* Flows */}
        {project.flows && project.flows.length > 0 && (
          <section id="flows" className="mb-12 animate-[slideUp_0.6s_ease-out_0.25s_both]">
            <h2
              className="text-2xl text-zinc-100 mb-8"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              App <span className="italic text-amber-300">flows</span>
            </h2>

            <div>
              {project.flows.map((flow, flowIndex) => {
                const isExpanded = expandedFlows.includes(flowIndex)
                return (
                  <div key={flowIndex} className="border-b border-zinc-800">
                    {/* Clickable Header */}
                    <button
                      onClick={() => toggleFlow(flowIndex)}
                      className="w-full flex items-center gap-3 py-4 text-left hover:text-amber-300 transition-colors group"
                    >
                      <svg
                        className={`w-4 h-4 text-amber-400 transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <h3 className="text-lg font-medium text-zinc-100 group-hover:text-amber-300 transition-colors">
                        {flow.title}
                      </h3>
                    </button>

                    {/* Collapsible Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-7 pb-6">
                        {/* Flow Description */}
                        <p className="text-zinc-400 leading-relaxed mb-6">{flow.description}</p>

                        {/* Main Media (Image or Video) */}
                        {(flow.mainImage || flow.mainVideo) && (
                          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 mb-6">
                            {flow.mainVideo ? (
                              <video
                                src={flow.mainVideo}
                                controls
                                className="w-full h-auto"
                                preload="metadata"
                              >
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={flow.mainImage}
                                alt={`${flow.title} - Main view`}
                                className="w-full h-auto"
                              />
                            )}
                          </div>
                        )}

                        {/* Flow Details with Images */}
                        {flow.details && flow.details.length > 0 && (
                          <div className="space-y-4">
                            <ul className="space-y-2">
                              {flow.details.map((detail, detailIndex) => {
                                const isNested = typeof detail === 'object'
                                const detailObj = detail as FlowDetail
                                return (
                                  <li key={detailIndex} className="text-zinc-400 text-sm">
                                    <div className="flex items-start gap-3">
                                      <span className="text-amber-400 mt-1">•</span>
                                      <span>{isNested ? detailObj.text : detail}</span>
                                    </div>
                                    {isNested &&
                                      detailObj.subItems &&
                                      detailObj.subItems.length > 0 && (
                                        <ul className="ml-6 mt-2 space-y-1">
                                          {detailObj.subItems.map((subItem, subIndex) => (
                                            <li
                                              key={subIndex}
                                              className="flex items-start gap-3 text-zinc-400 text-sm"
                                            >
                                              <span className="text-amber-400/60 mt-1">◦</span>
                                              {subItem}
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                  </li>
                                )
                              })}
                            </ul>

                            {/* Details Images */}
                            {flow.detailsImages && flow.detailsImages.length > 0 && (
                              <div className="grid gap-4 mt-4">
                                {flow.detailsImages.map((image, imageIndex) => (
                                  <div
                                    key={imageIndex}
                                    className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
                                  >
                                    <img
                                      src={image}
                                      alt={`${flow.title} - Detail ${imageIndex + 1}`}
                                      className="w-full h-auto"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

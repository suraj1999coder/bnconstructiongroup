import { Helmet } from 'react-helmet'
import { useState } from 'react'

export default function Projects() {
  const allProjects = [
    {
      title: '3BHK RCC House',
      location: 'Barhalganj, Gorakhpur',
      date: 'May 2024',
      tags: ['Residential'],
      image: 'project1.jpg'
    },
    {
      title: 'Modern Duplex Home',
      location: 'Basti, Uttar Pradesh',
      date: 'Jan 2024',
      tags: ['Residential'],
      image: 'project2.jpg'
    },
    {
      title: 'Commercial Office Building',
      location: 'Gorakhpur City',
      date: 'Oct 2023',
      tags: ['Commercial'],
      image: 'project3.jpg'
    },
    {
      title: 'School Extension Wing',
      location: 'Deoria',
      date: 'Nov 2022',
      tags: ['Institutional'],
      image: 'project5.jpg'
    }
  ]

  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter(p => p.tags.includes(filter))

  const categories = ['All', 'Residential', 'Commercial', 'Institutional']

  return (
    <>
      <Helmet>
        <title>Projects - BN Construction & Property</title>
        <meta
          name="description"
          content="See BN Construction's residential, commercial and institutional construction projects in Eastern UP."
        />
      </Helmet>

      <section className="container py-5">
        <h2 className="text-center fw-bold text-primary mb-4">Our Projects</h2>

        {/* Category Filter */}
        <div className="text-center mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm mx-1 ${
                filter === cat ? 'btn-primary' : 'btn-outline-primary'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row">
          {filteredProjects.map((project, i) => (
            <div className="col-md-6 col-lg-4 mb-4" key={i}>
              <div
                className="card h-100 shadow-sm border-0"
                onClick={() => setSelectedProject(project)}
                role="button"
              >
                <img
                  src={`/assets/${project.image}`}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5>{project.title}</h5>
                  <small className="text-muted">{project.location} • {project.date}</small>
                  <div className="mt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary me-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Preview */}
      {selectedProject && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}
          tabIndex="-1"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedProject(null)}></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={`/assets/${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
                <p className="mt-3 text-muted">
                  {selectedProject.location} • {selectedProject.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

import { Helmet } from 'react-helmet'

export default function Services() {
  const services = [
    {
      id: 'construction',
      title: 'Residential & Commercial Construction',
      icon: 'bi-houses',
      description:
        'From single-floor homes to commercial complexes — our construction team delivers robust RCC foundations, load-bearing walls, lintel casting, plastering, and turnkey possession.'
    },
    {
      id: 'materials',
      title: 'Material Supply',
      icon: 'bi-truck',
      description:
        'Timely delivery of bricks, river sand, ballast, cement, steel (TMT), concrete mix, and shuttering items anywhere across Barhalganj, Basti & Gorakhpur.'
    },
    {
      id: 'architecture',
      title: 'Architectural Design & Vastu',
      icon: 'bi-rulers',
      description:
        'Custom 2D layout plans, 3D elevation views, Vastu-compliant floor design, AutoCAD files, and DPRs by licensed engineers.'
    },
    {
      id: 'renovation',
      title: 'Renovation & Interior Works',
      icon: 'bi-paint-bucket',
      description:
        'Tiling, waterproofing, electrical rewiring, false ceiling, modular kitchens, and wall putty — we refresh your existing home inside and out.'
    },
    {
      id: 'approvals',
      title: 'Government Plan Approval',
      icon: 'bi-file-earmark-check',
      description:
        'We submit structural drawings to Nagar Panchayat / Municipality and assist with plan approval, mutation, and site clearance documents.'
    },
    {
      id: 'supervision',
      title: 'Site Supervision & Labor Management',
      icon: 'bi-people-fill',
      description:
        'Daily on-site supervision to ensure quality control, proper mix ratios, curing schedules, and timely labor deployment.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services - BN Construction & Property</title>
        <meta
          name="description"
          content="Explore the complete civil construction and building solutions provided by BN Construction across Barhalganj, Gorakhpur, Basti, and Eastern Uttar Pradesh."
        />
      </Helmet>

      <section className="container py-5">
        <h2 className="text-center text-primary fw-bold mb-4">Our Services</h2>
        <div className="row">
          {services.map(({ id, title, icon, description }) => (
            <div className="col-md-6 col-lg-4 mb-4" key={id}>
              <section id={id} className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className={`bi ${icon} display-4 text-primary mb-3`} aria-hidden="true"></i>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text text-muted">{description}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

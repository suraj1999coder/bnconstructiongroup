import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import heroImg from '../assets/home-hero.jpg'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - BN Construction & Property</title>
        <meta
          name="description"
          content="BN Construction & Property is your trusted civil contractor in Barhalganj, Gorakhpur — specializing in home construction, materials, and architectural design."
        />
        <meta
          name="keywords"
          content="construction, Gorakhpur, Barhalganj, contractor, civil engineer, house builder, UP"
        />
      </Helmet>

      {/* Hero Section */}
      <header
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          position: 'relative'
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            padding: '2rem',
            borderRadius: '10px'
          }}
        >
          <h1 className="display-4 fw-bold mb-3">सपनों का घर, अब भरोसे के साथ</h1>
          <p className="lead">
            Serving Gorakhpur, Barhalganj & Eastern UP for over 15 years — construction, design, and material solutions under one roof.
          </p>
          <Link to="/contact" className="btn btn-warning btn-lg mt-3">
            Book Site Visit
          </Link>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-5 fw-bold">Why People Trust BN Construction</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <i className="bi bi-person-check-fill display-5 text-success mb-3"></i>
                <h5 className="fw-bold">Experienced Team</h5>
                <p>
                  Civil Engineers with 15+ years in design & execution across Gorakhpur, Basti & Deoria.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <i className="bi bi-building-check display-5 text-warning mb-3"></i>
                <h5 className="fw-bold">One-Stop Solution</h5>
                <p>
                  We handle design, materials, labor, approvals & final finishes — so you don't have to.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <i className="bi bi-stars display-5 text-danger mb-3"></i>
                <h5 className="fw-bold">Local Reputation</h5>
                <p>
                  90% of clients refer us — known for transparent rates, quality delivery, and local support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h3 className="mb-3 fw-bold">Free Site Visit + Plan Consultation</h3>
          <p className="mb-4">
            Whether you’re planning a new home or commercial site, we’re ready to help you from day one.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg me-3">
            Contact Us
          </Link>
          <a
            href="https://wa.me/919956914748"
            className="btn btn-outline-light btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp me-2"></i> WhatsApp Now
          </a>
        </div>
      </section>
    </>
  )
}

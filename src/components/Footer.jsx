import { useEffect, useState } from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const toggleBtn = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener('scroll', toggleBtn)
    return () => window.removeEventListener('scroll', toggleBtn)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container text-center text-md-start">
          <div className="row">

            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase fw-bold">BN Construction</h5>
              <p>
                Civil contractor for Barhalganj, Gorakhpur & Eastern UP. Trusted for residential, commercial, and institutional builds with quality & transparency.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="fw-semibold">Contact</h6>
              <p className="mb-1">📍 Barhalganj, Gorakhpur, UP</p>
              <p className="mb-1">📞 <a href="tel:+919956914748" className="text-white">+91-9956914748</a></p>
              <p className="mb-1">📧 <a href="mailto:info@bnconstruction.com" className="text-white">info@bnconstruction.com</a></p>
              <p className="mb-0">⏰ Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="fw-semibold">Follow Us</h6>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a><br />
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i> Instagram</a><br />
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i> LinkedIn</a>
            </div>
          </div>

          <hr className="border-light" />
          <div className="text-center">
            <small>© {year} BN Construction & Property. All rights reserved.</small>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: '30px',
            right: '30px',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            zIndex: 1050
          }}
        >
          <i className="bi bi-arrow-up-short fs-4"></i>
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919956914748"
        className="btn btn-success position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: '30px',
          left: '30px',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          zIndex: 1050
        }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp fs-4"></i>
      </a>
    </>
  )
}

import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Construction', path: '/services#construction' },
        { name: 'Architecture & Vastu', path: '/services#architecture' },
        { name: 'Material Supply', path: '/services#materials' }
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          BN Construction
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {navItems.map(({ name, path, dropdown }) =>
              dropdown ? (
                <li className="nav-item dropdown" key={name}>
                  <span
                    className="nav-link dropdown-toggle px-3"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {name}
                  </span>
                  <ul className="dropdown-menu">
                    {dropdown.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.path} className="dropdown-item">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link px-3${isActive ? ' active fw-semibold text-warning' : ''}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              )
            )}

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://wa.me/919956914748"
                className="btn btn-success d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

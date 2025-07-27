import { Helmet } from 'react-helmet'
import engineerImg from '../assets/engineer.jpg'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - BN Construction & Property</title>
        <meta
          name="description"
          content="Er. Bijendra Nishad (M.Tech), a highly experienced civil engineer based in Basti & Gorakhpur, leads BN Construction & Property in delivering trusted and quality construction services across Eastern UP."
        />
      </Helmet>

      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 text-center">
            <img
              src={engineerImg}
              alt="Er. Bijendra Nishad"
              className="rounded shadow"
              style={{ width: '350px', height: '400px', objectFit: 'cover' }}
            />
            <div className="bg-secondary text-white p-4 rounded mt-4">
              <h3 className="fw-bold mb-1">Er. Bijendra Nishad</h3>
              <h6 className="mb-2">M.Tech – Civil Engineering</h6>
              <p className="mb-1">Founder & Principal Engineer</p>
              <p className="mb-1">BN Construction & Property</p>
              <p className="mb-0">Lives in Basti • From Gorakhpur</p>
            </div>
          </div>

          <div className="col-md-7">
            <h2 className="text-primary fw-bold mb-3">About the Founder</h2>
            <p>
              I’m <strong>Er. Bijendra Nishad</strong>, a qualified civil engineer with over <strong>20 years</strong> of field experience in structural design, residential planning, and on-site construction management.
              From early beginnings in <strong>Barhalganj</strong> to managing large-scale projects in <strong>Basti</strong> and <strong>Gorakhpur</strong>, I’ve proudly helped build hundreds of homes and commercial properties across Eastern Uttar Pradesh.
            </p>

            <p>
              As a registered <strong>On-Site Manager</strong> and <strong>Site Engineer</strong>, my journey began in 2000 and I’ve been actively working with local clients, government agencies, and developers since then.
              I bring technical precision, local expertise, and practical on-ground execution to every project.
            </p>

            <ul className="list-unstyled mb-4">
              <li>✅ Residential & Commercial Building Construction</li>
              <li>✅ Site Supervision and Labor Management</li>
              <li>✅ Architectural Design, 3D Elevations & Vastu</li>
              <li>✅ Material Supply: Cement, Steel, Bricks, Sand</li>
              <li>✅ Government Plan Approvals & Estimation Reports</li>
            </ul>

            <p>
              I earned my Master’s in Civil Engineering from <strong>Noida International University</strong> and began my education at
              <strong> National Bal Mandir, Barhalganj</strong>. Today, I lead a dedicated team that delivers projects with trust,
              quality, and transparency.
            </p>

            <p className="mb-1"><strong>Phone:</strong> <a href="tel:+919956914748">+91 9956914748</a></p>
            <p className="mb-1"><strong>Email:</strong> info@bnconstruction.com</p>
            <p><strong>Location:</strong> Basti • Barhalganj • Gorakhpur</p>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h3 className="mb-4">Our Core Values</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>🔍 Transparency</h5>
              <p>No hidden charges. Every client gets daily site updates & material receipts.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>🛠️ Quality First</h5>
              <p>We use lab-tested materials and follow IS code standards for long-term strength.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>🤝 Local Trust</h5>
              <p>90% of our new clients come from referrals — a testament to our credibility in Eastern UP.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

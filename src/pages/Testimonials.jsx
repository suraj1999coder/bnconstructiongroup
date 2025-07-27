import { Helmet } from 'react-helmet'

const testimonials = [
  {
    name: 'Rahul Singh',
    location: 'Bansgaon, Gorakhpur',
    quote: 'BN Construction built our 3BHK in record time. The team was professional, honest, and the quality exceeded our expectations.',
    img: 'client1.jpg',
    rating: 5
  },
  {
    name: 'Pooja Yadav',
    location: 'Kauriram, Gorakhpur',
    quote: 'From blueprint to finishing, every step was transparent and well-managed. Highly recommended for anyone building in UP.',
    img: 'client2.jpg',
    rating: 5
  },
  {
    name: 'Amit Verma',
    location: 'Barhalganj',
    quote: 'They turned my empty plot into a beautiful duplex. Bijendra ji and his team handled everything end-to-end.',
    img: 'client3.jpg',
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials - BN Construction & Property</title>
        <meta
          name="description"
          content="What our happy clients from Barhalganj, Gorakhpur, and nearby areas say about BN Construction's quality, professionalism, and reliability."
        />
      </Helmet>

      <section className="container py-5">
        <h2 className="text-center text-primary fw-bold mb-4">What Our Clients Say</h2>
        <div className="row">
          {testimonials.map(({ name, location, quote, img, rating }, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={`/assets/${img}`}
                    alt={name}
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title mb-0">{name}</h5>
                  <small className="text-muted">{location}</small>
                  <div className="my-2">
                    {[...Array(5)].map((_, idx) => (
                      <i
                        key={idx}
                        className={`bi ${idx < rating ? 'bi-star-fill' : 'bi-star'} text-warning`}
                      />
                    ))}
                  </div>
                  <p className="card-text fst-italic">“{quote}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

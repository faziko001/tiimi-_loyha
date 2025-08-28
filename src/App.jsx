import React from "react";
import "./App.css";

const courses = [
  {
    id: 1,
    name: "Dasturlash",
    description:
      "JavaScript, Python, Java, C++, va boshqa mashhur dasturlash tillari bo‘yicha chuqur bilimlar.",
    price: 350000,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Til o‘rganish",
    description:
      "Ingliz, Nemis, Fransuz va boshqa tillarni professional o‘rganish kurslari.",
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Dizayn",
    description:
      "Grafik dizayn, UI/UX, Adobe Photoshop, Illustrator va boshqa kreativ sohalar.",
    price: 300000,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Biznes",
    description:
      "Marketing, menejment, startaplar va moliyaviy rejalashtirish kurslari.",
    price: 400000,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Matematika va Fanlar",
    description:
      "Oliy va o‘rta maktab darajasidagi matematika, fizika, kimyo kurslari.",
    price: 280000,
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=700&q=80",
  },
];

const teachers = [
  {
    id: 1,
    name: "Dilshod Akbarov",
    specialty: "Senior Dasturchi va Mentor",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "Nilufar Karimova",
    specialty: "Til o‘rganish bo‘yicha ekspert",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Jasur Tursunov",
    specialty: "Grafik dizayner va o‘qituvchi",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 4,
    name: "Laylo Rasulova",
    specialty: "Biznes va marketing bo‘yicha murabbiy",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 5,
    name: "Otabek Xolmatov",
    specialty: "Matematika va Fanlar o‘qituvchisi",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sardorbek N.",
    feedback:
      "TIIMI kurslari orqali o‘zimga yangi ko‘nikmalar orttirdim, endi IT sohasida ishlayman!",
  },
  {
    id: 2,
    name: "Gulchehra M.",
    feedback:
      "Ustozlar juda malakali va sabrli, til kurslari ayniqsa zo‘r! Raxmat TIIMI!",
  },
  {
    id: 3,
    name: "Jasur Q.",
    feedback:
      "Biznes kurslari mening startap g‘oyamni rivojlantirishga katta yordam berdi.",
  },
];

function App() {
  return (
    <div className="app" role="main">
      <header className="header" aria-label="Sayt bosh sahifa sarlavhasi">
        <h1 className="main-title">
          <span className="highlight">TIIMI</span> O‘quv Markazi
        </h1>
      </header>

      <section className="section intro" aria-label="Sayt haqida qisqacha">
        <p className="intro-text">
          TIIMI o‘quv markazi sizga eng yaxshi ta’lim xizmatlarini taqdim etadi.
          Zamonaviy kurslar, malakali ustozlar, hamda qulay to‘lov tizimi bilan
          bilimlaringizni yangi bosqichga olib chiqing!
        </p>
        <ul className="benefits-list">
          <li>Sifatli va interaktiv darslar</li>
          <li>Qulay va arzon narxlar</li>
          <li>Professional ustozlar</li>
          <li>Doimiy amaliy mashg‘ulotlar</li>
          <li>Online va oflayn variantlar</li>
        </ul>
      </section>

      <section className="section courses" aria-label="Kurslar ro‘yxati">
        <h2 className="section-title">Mashhur Kurslarimiz</h2>
        <div className="courses-grid" role="list">
          {courses.map(({ id, name, description, price, image }) => (
            <article
              key={id}
              className="course-card"
              role="listitem"
              tabIndex={0}
              aria-labelledby={`course-title-${id}`}
              aria-describedby={`course-desc-${id} course-price-${id}`}
            >
              <img
                src={image}
                alt={`${name} kursiga oid rasm`}
                className="course-image"
                loading="lazy"
              />
              <h3 id={`course-title-${id}`} className="course-name">
                {name}
              </h3>
              <p id={`course-desc-${id}`} className="course-desc">
                {description}
              </p>
              <p id={`course-price-${id}`} className="course-price">
                Narxi: <span>{price.toLocaleString("uz-UZ")} so‘m</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section teachers" aria-label="Ustozlar haqida">
        <h2 className="section-title">Malakali Ustozlarimiz</h2>
        <div className="teachers-grid">
          {teachers.map(({ id, name, specialty, photo }) => (
            <article
              key={id}
              className="teacher-card"
              tabIndex={0}
              aria-labelledby={`teacher-name-${id}`}
              aria-describedby={`teacher-specialty-${id}`}
            >
              <img
                src={photo}
                alt={`${name}ning rasmi`}
                className="teacher-photo"
                loading="lazy"
              />
              <h3 id={`teacher-name-${id}`} className="teacher-name">
                {name}
              </h3>
              <p id={`teacher-specialty-${id}`} className="teacher-specialty">
                {specialty}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" aria-label="Oylik to‘lovlar haqida">
        <h2 className="section-title">Oylik To‘lovlar</h2>
        <p className="pricing-text">
          Bizning oylik to‘lovlarimiz barcha uchun qulay bo‘lishi uchun moslashtirilgan.
          Kursga yozilishdan oldin quyidagi tariflarni ko‘rib chiqing:
        </p>
        <ul className="pricing-list">
          <li className="pricing-item">Dasturlash kursi: 350,000 so‘m</li>
          <li className="pricing-item">Til o‘rganish kursi: 250,000 so‘m</li>
          <li className="pricing-item">Dizayn kursi: 300,000 so‘m</li>
          <li className="pricing-item">Biznes kursi: 400,000 so‘m</li>
          <li className="pricing-item">Matematika va Fanlar: 280,000 so‘m</li>
        </ul>
      </section>

      <section className="section testimonials" aria-label="O‘quvchilar fikrlari">
        <h2 className="section-title">O‘quvchilarimizning Fikrlari</h2>
        <div className="testimonials-grid">
          {testimonials.map(({ id, name, feedback }) => (
            <blockquote
              key={id}
              className="testimonial-card"
              tabIndex={0}
              aria-label={`Fikr - ${name}`}
            >
              <p className="testimonial-feedback">“{feedback}”</p>
              <footer className="testimonial-name">— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section benefits" aria-label="Maxsus imtiyozlar">
        <h2 className="section-title">Nima uchun TIIMI?</h2>
        <ul className="benefits-detailed">
          <li>Onlayn va oflayn darslar tanlovi</li>
          <li>Shaxsiy mentorlik va qo‘llab-quvvatlash</li>
          <li>Amaliyotga yo‘naltirilgan o‘quv dasturlari</li>
          <li>Tez va qulay to‘lov tizimi</li>
          <li>Har oy maxsus chegirmalar va sovrinlar</li>
        </ul>
      </section>

      <footer className="footer" role="contentinfo" aria-label="Sayt footer qismi">
        <div className="footer-container">
          <div className="footer-about">
            <h3>TIIMI o‘quv markazi</h3>
            <p>
              Eng sifatli ta’lim xizmatlari va zamonaviy o‘quv dasturlari bilan
              bilimlaringizni rivojlantiring. Biz siz bilan birgamiz!
            </p>
          </div>
          <div className="footer-contact">
            <h3>Bog‘lanish</h3>
            <p>
              Telefon:{" "}
              <a href="tel:+998901234567" className="link">
                +998 90 123 45 67
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@tiimi.uz" className="link">
                info@tiimi.uz
              </a>
            </p>
            <p>Manzil: Toshkent, Shayxontohur tumani</p>
            <p>
              Web:{" "}
              <a
                href="https://tiimi.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                tiimi.uz
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 TIIMI o‘quv markazi. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
}

export default App;

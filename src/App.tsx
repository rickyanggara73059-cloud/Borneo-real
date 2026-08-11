
import React, { useState } from "react";
import { ProjectsSection } from "./components/ProjectsSection";
import { TrustSection } from "./components/TrustSection";
import "./App.css";
import {
  WalletCards,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  KeyRound,
  ArrowRight,
} from "lucide-react";


const App: React.FC = () => {

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeMenu, setActiveMenu] = useState("beranda");


  return (
    <>
    
      {/* ========================================
          NAVBAR
      ======================================== */}
      <header className="site-header">
        <nav className="navbar">
          <div className="navbar__container">
            <a href="#beranda" className="navbar__brand">
              <img
  src="/images/logo/brand/logo.png"
  alt="Borneo Real Properti"
/>
       <span>Borneo Real Properti</span>
       </a>

            <div className="navbar__menu">

  <a
    href="#beranda"
    className={activeMenu === "beranda" ? "active" : ""}
    onClick={() => setActiveMenu("beranda")}
  >
    Beranda
  </a>

  <a
    href="#keunggulan"
    className={activeMenu === "keunggulan" ? "active" : ""}
    onClick={() => setActiveMenu("keunggulan")}
  >
    Keunggulan
  </a>

  <a
    href="#tentang"
    className={activeMenu === "tentang" ? "active" : ""}
    onClick={() => setActiveMenu("tentang")}
  >
    Tentang Kami
  </a>

  <a
    href="#project"
    className={activeMenu === "project" ? "active" : ""}
    onClick={() => setActiveMenu("project")}
  >
    Project
  </a>

  <a
    href="#proses"
    className={activeMenu === "proses" ? "active" : ""}
    onClick={() => setActiveMenu("proses")}
  >
    Proses
  </a>

  <a
    href="#faq"
    className={activeMenu === "faq" ? "active" : ""}
    onClick={() => setActiveMenu("faq")}
  >
    FAQ
  </a>

  <a
    href="#kontak"
    className={activeMenu === "kontak" ? "active" : ""}
    onClick={() => setActiveMenu("kontak")}
  >
    Kontak
  </a>

</div>

          </div>
        </nav>
      </header>

      {/* ========================================
          MAIN
      ======================================== */}
      <main>

        {/* ========================================
            HERO
        ======================================== */}
        <section className="hero" id="beranda">
          <div className="hero__container">

            <div className="hero__content">
              <span className="hero__eyebrow">
                RUMAH SUBSIDI PONTIANAK
              </span>

              <h1>
  Rumah Subsidi Pontianak
  <br />
  <span>Untuk Keluarga Anda</span>
</h1>

              <p>
                Pilihan rumah subsidi dengan lokasi strategis,
                harga terjangkau, dan proses KPR yang mudah.
              </p>

              <div className="hero__actions">
                <a
                  href="#project"
                  className="hero__button hero__button--primary"
                >
                  Lihat Project
                </a>
              </div>
            </div>

            {/* FOTO HERO */}
            <div className="hero__visual">
              <img
  src="/images/hero/hero.jpeg"
  alt="Borneo Real Properti"
  className="hero__image"
/>


              
            </div>

          </div>
        </section>

        {/* ========================================
            TRUST / VALUE
        ======================================== */}
        <TrustSection />

        
{/* ========================================
    TENTANG KAMI
======================================== */}
<section className="about-section" id="tentang">
  <div className="about-section__container">

    <div className="about-section__content">
      <span className="about-section__eyebrow">
        TENTANG BORNEO REAL PROPERTI
      </span>

      <h2>
        Partner Terpercaya
        <br />
        <strong>untuk Rumah Impian Anda</strong>
      </h2>

      <p>
        Borneo Real Properti hadir membantu masyarakat
        mendapatkan hunian subsidi dengan proses yang
        jelas, transparan, dan terpercaya.
      </p>

      <p>
        Kami mendampingi calon pembeli mulai dari pemilihan
        rumah, proses pengajuan KPR, hingga akad kredit dan
        serah terima kunci.
      </p>

    </div>

    <div className="about-section__trust">

      <div className="about-trust-card">
        <div className="about-trust-card__number">
          01
        </div>

        <div>
          <h3>Legalitas & Dokumen Jelas</h3>
          <p>
            Kami mengutamakan kejelasan informasi dan
            kelengkapan dokumen dalam setiap proses pembelian.
          </p>
        </div>
      </div>

      <div className="about-trust-card">
        <div className="about-trust-card__number">
          02
        </div>

        <div>
          <h3>Proses KPR Didampingi</h3>
          <p>
            Tim kami membantu dan mendampingi proses
            pengajuan KPR hingga mendapatkan persetujuan bank.
          </p>
        </div>
      </div>

      <div className="about-trust-card">
        <div className="about-trust-card__number">
          03
        </div>

        <div>
          <h3>Informasi Transparan</h3>
          <p>
            Informasi mengenai harga, cicilan, proses dan
            persyaratan disampaikan secara terbuka.
          </p>
        </div>
      </div>

      <div className="about-trust-card">
        <div className="about-trust-card__number">
          04
        </div>

        <div>
          <h3>Pendampingan Sampai Selesai</h3>
          <p>
            Kami tetap mendampingi hingga akad kredit dan
            proses serah terima kunci.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


        {/* ========================================
            PROJECT
        ======================================== */}
        <ProjectsSection />

    

        {/* ========================================
    PROSES PEMBELIAN
======================================== */}
<section
  className="process-section"
  id="proses"
>
  <div className="process-section__container">

    <div className="process-section__header">
      <span className="section-eyebrow">
        PROSES PEMBELIAN
      </span>

      <h2>
        Proses Mudah & <span>Cepat</span>
      </h2>

      <p>
        Mulai dari reservasi hingga serah terima kunci,
        kami mendampingi setiap tahap agar proses
        pembelian rumah Anda lebih mudah dan terarah.
      </p>
    </div>

    <div className="process-timeline">

      {/* 01 */}
      <div className="process-step">
        <div className="process-step__number">
          01
        </div>

        <div className="process-step__icon">
          <WalletCards size={24} />
        </div>

        <h3>Booking Fee</h3>

        <p>
          Cukup bayar Rp1 juta untuk reservasi
          rumah pilihan Anda.
        </p>
      </div>

      {/* 02 */}
      <div className="process-step">
        <div className="process-step__number">
          02
        </div>

        <div className="process-step__icon">
          <ClipboardCheck size={24} />
        </div>

        <h3>Survey & Verifikasi</h3>

        <p>
          Survey lokasi dan verifikasi dokumen
          untuk mempersiapkan pengajuan KPR.
        </p>
      </div>

      {/* 03 */}
      <div className="process-step">
        <div className="process-step__number">
          03
        </div>

        <div className="process-step__icon">
          <FileCheck2 size={24} />
        </div>

        <h3>Proses KPR</h3>

        <p>
          Tim kami membantu mengurus proses KPR
          hingga mendapatkan persetujuan bank.
        </p>
      </div>

      {/* 04 */}
      <div className="process-step">
        <div className="process-step__number">
          04
        </div>

        <div className="process-step__icon">
          <Landmark size={24} />
        </div>

        <h3>Akad Kredit</h3>

        <p>
          Anda melakukan akad kredit dengan bank
          dengan pendampingan tim kami.
        </p>
      </div>

      {/* 05 */}
      <div className="process-step">
        <div className="process-step__number">
          05
        </div>

        <div className="process-step__icon">
          <KeyRound size={24} />
        </div>

        <h3>Serah Terima Kunci</h3>

        <p>
          Rumah siap ditempati. Selanjutnya
          tinggal pindahan ke rumah baru Anda.
        </p>
      </div>

    </div>

    <div className="process-section__bottom">
      <span>
        Dari reservasi hingga memiliki rumah impian.
      </span>

      <ArrowRight size={18} />
    </div>

  </div>
</section>
       
 {/* ========================================
    FAQ
======================================== */}
<section className="faq-section" id="faq">
  <div className="faq-section__container">

    <div className="faq-section__header">
      <span>FAQ</span>

      <h2>
        Yang Sering <strong>Ditanyakan</strong>
      </h2>

      <p>
        Temukan jawaban atas pertanyaan yang sering
        ditanyakan calon pembeli rumah di Borneo Real Properti.
      </p>
    </div>

    <div className="faq-list">

      {/* FAQ 01 */}
      <div className={`faq-item ${openFaq === 0 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 0 ? null : 0)
          }
          aria-expanded={openFaq === 0}
        >
          <span>Berapa minimum nominal DP?</span>

          <span className="faq-icon">
            {openFaq === 0 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 0 && (
          <div className="faq-answer">
            <p>
              DP bisa mulai dari Rp 1 juta untuk booking unit.
              Untuk DP KPR tergantung kebijakan bank, biasanya
              mulai 1% dari harga rumah.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 02 */}
      <div className={`faq-item ${openFaq === 1 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 1 ? null : 1)
          }
          aria-expanded={openFaq === 1}
        >
          <span>Syarat pengajuan KPR apa aja?</span>

          <span className="faq-icon">
            {openFaq === 1 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 1 && (
          <div className="faq-answer">
            <p>
              Syarat umum: KTP, KK, slip gaji/surat keterangan
              penghasilan, rekening koran 3 bulan terakhir, dan NPWP.
              Tim kami bantu melengkapi dan mengurus semua berkasnya.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 03 */}
      <div className={`faq-item ${openFaq === 2 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 2 ? null : 2)
          }
          aria-expanded={openFaq === 2}
        >
          <span>Bisa langsung bayar cash lunas?</span>

          <span className="faq-icon">
            {openFaq === 2 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 2 && (
          <div className="faq-answer">
            <p>
              Bisa. Kamu bisa bayar cash keras dengan skema
              pembayaran yang bisa didiskusikan dengan tim kami.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 04 */}
      <div className={`faq-item ${openFaq === 3 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 3 ? null : 3)
          }
          aria-expanded={openFaq === 3}
        >
          <span>Berapa lama proses sampai beres?</span>

          <span className="faq-icon">
            {openFaq === 3 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 3 && (
          <div className="faq-answer">
            <p>
              Rata-rata 2–3 bulan mulai dari proses booking sampai
              serah terima kunci, tergantung kecepatan proses KPR
              di bank. Kami usahakan secepat mungkin.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 05 */}
      <div className={`faq-item ${openFaq === 4 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 4 ? null : 4)
          }
          aria-expanded={openFaq === 4}
        >
          <span>Apakah lokasi jauh dari kota?</span>

          <span className="faq-icon">
            {openFaq === 4 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 4 && (
          <div className="faq-answer">
            <p>
              Tidak. Semua lokasi kami strategis, dekat dengan
              kampus, sekolah, rumah sakit, dan pusat perbelanjaan.
              Akses mudah ke pusat kota Pontianak.
            </p>
          </div>
        )}
      </div>

      {/* FAQ 06 */}
      <div className={`faq-item ${openFaq === 5 ? "is-open" : ""}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === 5 ? null : 5)
          }
          aria-expanded={openFaq === 5}
        >
          <span>Bagaimana kualitas bangunannya?</span>

          <span className="faq-icon">
            {openFaq === 5 ? "−" : "+"}
          </span>
        </button>

        {openFaq === 5 && (
          <div className="faq-answer">
            <p>
              Bangunan kokoh dengan material berkualitas.
              Sudah terbukti banyak penghuni nyaman tinggal
              bertahun-tahun tanpa masalah struktural.
            </p>
          </div>
        )}
      </div>

    </div>

    {/* VIDEO */}
    <div className="faq-video">
      <div className="faq-video__header">
        <span>LIHAT LEBIH DEKAT</span>

        <h3>
          Kenali Lebih Jauh Project Kami
        </h3>
      </div>

      <div className="faq-video__frame">
        <iframe
          src="https://www.youtube.com/embed/ser-QUmNf1A"
          title="Video Borneo Real Properti"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>

  </div>
</section>

  {/* ========================================
    KONTAK / CTA
======================================== */}
<section
  className="contact-section"
  id="kontak"
>
  <div className="contact-section__container">

    <div className="contact-section__header">
      <span>KONTAK</span>

      <h2>
        Temukan Rumah <strong>Impian Anda</strong>
      </h2>

      <p>
        Punya pertanyaan tentang rumah subsidi,
        lokasi, harga, atau proses KPR?
        Hubungi salah satu admin kami.
      </p>
    </div>

    <div className="contact-admins">

      {/* ADMIN 1 */}
      <div className="contact-admin">
        <div className="contact-admin__avatar">
          01
        </div>

        <div className="contact-admin__info">
          <span>ADMIN 1</span>
          <h3>Konsultasi Rumah</h3>
          <p>
            Siap membantu informasi project dan unit tersedia.
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=6285845585994&text=Halo.%20Saya%20mau%20tanya2%20rumah%20subsidi%20Borneo%20Real%20Properti"
          className="contact-admin__button"
          target="_blank"
          rel="noreferrer"
        >
          Chat WhatsApp
        </a>
      </div>

      {/* ADMIN 2 */}
      <div className="contact-admin">
        <div className="contact-admin__avatar">
          02
        </div>

        <div className="contact-admin__info">
          <span>ADMIN 2</span>
          <h3>Konsultasi Rumah</h3>
          <p>
            Siap membantu informasi project dan unit tersedia.
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=6285347433305&text=Halo.%20Saya%20mau%20tanya2%20rumah%20subsidi%20Borneo%20Real%20Properti"
          className="contact-admin__button"
          target="_blank"
          rel="noreferrer"
        >
          Chat WhatsApp
        </a>
      </div>

      {/* ADMIN 3 */}
      <div className="contact-admin">
        <div className="contact-admin__avatar">
          03
        </div>

        <div className="contact-admin__info">
          <span>ADMIN 3</span>
          <h3>Konsultasi Rumah</h3>
          <p>
            Siap membantu informasi project dan unit tersedia.
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=6281288448040&text=Halo.%20Saya%20mau%20tanya2%20rumah%20subsidi%20Borneo%20Real%20Properti"
          className="contact-admin__button"
          target="_blank"
          rel="noreferrer"
        >
          Chat WhatsApp
        </a>
      </div>

      {/* ADMIN 4 */}
      <div className="contact-admin">
        <div className="contact-admin__avatar">
          04
        </div>

        <div className="contact-admin__info">
          <span>ADMIN 4</span>
          <h3>Konsultasi Rumah</h3>
          <p>
            Siap membantu informasi project dan unit tersedia.
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=6285705463676&text=Halo.%20Saya%20mau%20tanya2%20rumah%20subsidi%20Borneo%20Real%20Properti"
          className="contact-admin__button"
          target="_blank"
          rel="noreferrer"
        >
          Chat WhatsApp
        </a>
      </div>

    </div>

  </div>
</section>

</main>


      {/* ========================================
    FOOTER
======================================== */}
<footer className="site-footer">
  <div className="site-footer__container">

    {/* BRAND */}
<div className="site-footer__brand">

  <div className="site-footer__brand-mark">
    <div className="site-footer__brand-icon">
      ⌂
    </div>

    <div className="site-footer__brand-text">
      <strong>Borneo Real Properti</strong>

      <span>
        Rumah Subsidi Pontianak
      </span>
    </div>
  </div>

  <div className="site-footer__brand-line" />

  <p>
    Wujudkan rumah impian bersama Borneo Real Properti.
    Hunian nyaman, terjangkau, dan pilihan tepat
    untuk keluarga Indonesia.
  </p>

</div>

    {/* NAVIGATION */}
    <div className="site-footer__links">
      <h4>Navigasi</h4>

      <a href="#home">Beranda</a>
      <a href="#tentang">Tentang Kami</a>
      <a href="#project">Project</a>
      <a href="#proses">Proses</a>
      <a href="#faq">FAQ</a>
      <a href="#kontak">Kontak</a>
    </div>

    {/* CONTACT */}
   <div className="site-footer__contact">
  <h4>Hubungi Kami</h4>

  <p>
    Konsultasikan kebutuhan rumah Anda
    bersama tim Borneo Real Properti.
  </p>

  <a
    href="https://www.instagram.com/borneorealproperti?igsh=MjR0MGQwOHBhZm85"
    target="_blank"
    rel="noreferrer"
    className="site-footer__instagram"
  >
   <span className="site-footer__social-icon">
  <span className="site-footer__instagram-logo">
    <span className="site-footer__instagram-dot" /> 
  </span>
</span>
 <span>Instagram</span>
  </a>
</div>

  </div>

  {/* COPYRIGHT */}
  <div className="site-footer__bottom">
    <span>
      © 2026 Borneo Real Properti
    </span>

    <span>
      Rumah Subsidi Pontianak
    </span>
  </div>
</footer>
    </>
  );
};

export default App;


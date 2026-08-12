
import React from "react";
import {
  MapPin,
  BadgeCheck,
  WalletCards,
  Headset,
} from "lucide-react";

export const TrustSection: React.FC = () => {
  const values = [
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      description:
        "Pilihan project berada di lokasi yang mudah diakses dan terus berkembang.",
    },
    {
      icon: BadgeCheck,
      title: "Project Terpercaya",
      description:
        "Berpengalaman mengembangkan berbagai project rumah subsidi di Pontianak.",
    },
    {
      icon: WalletCards,
      title: "Harga Terjangkau",
      description:
        "Rumah subsidi dengan harga terjangkau dan pilihan cicilan mulai 1 jutaan.",
    },
    {
      icon: Headset,
      title: "Didampingi Sampai Selesai",
      description:
        "Tim kami membantu proses mulai dari booking hingga akad dan serah terima kunci.",
    },
  ];

  return (
    <section className="trust-section" id="keunggulan">
      <div className="trust-section__container">

        <div className="trust-section__heading">
          <span>KENAPA BORNEO REAL PROPERTI?</span>

          <h2>
            Lebih Mudah Menemukan
            <br />
            <strong>Rumah Impian Anda</strong>
          </h2>

          <p>
            Kami membantu Anda mendapatkan rumah subsidi
            dengan proses yang lebih mudah, transparan,
            dan didampingi dari awal hingga rumah siap ditempati.
          </p>
        </div>

        <div className="trust-section__grid">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="trust-card"
                key={item.title}
              >
                <div className="trust-card__icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="trust-card__content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trust-section__bottom">
          <div>
            <strong>Rp182 jutaan</strong>
            <span>Harga rumah</span>
          </div>

          <div>
            <strong>Rp1 jutaan</strong>
            <span>Cicilan mulai / bulan</span>
          </div>

          <div>
            <strong>Rp1 juta</strong>
            <span>Booking fee</span>
          </div>

          <div>
            <strong>1 Bulan</strong>
            <span>Estimasi proses</span>
          </div>
        </div>

      </div>
    </section>
  );
};


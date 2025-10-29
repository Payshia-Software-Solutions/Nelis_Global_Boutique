
"use client";

import Image from "next/image";

const partners = [
  {
    name: "Charleston",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/charleston.webp",
  },
  {
    name: "Good Market",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/good-market.webp",
  },
  {
    name: "Home Yoga Paris",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/home_yoga_paris.png",
  },
  {
    name: "Jetwing",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/jetwing.webp",
  },
  {
    name: "Odel",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/odel.webp",
  },
  {
    name: "Refuge",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/refuge.webp",
  },
  {
    name: "Royal Kandyan",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/royal_kandyan.webp",
  },
  {
    name: "Tony and Guy",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/tony_and_guy.webp",
  },
];

export function OurPartnersSection() {
    return (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Partners</h2>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partners.map((partner) => (
                  <div key={partner.name}>
                    <Image
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      width={150}
                      height={60}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
          </div>
        </section>
    );
}


import Image from "next/image";

const partners = [
  {
    name: "Charleston",
    logoUrl: "http://content-provider.payshia.com/nelis-global/logo/charleston.webp",
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

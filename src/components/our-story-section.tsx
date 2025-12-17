
import Image from 'next/image';
import { Leaf } from 'lucide-react';

export function OurStorySection() {
  return (
    <section className="bg-background">
      <div className="grid md:grid-cols-10 items-stretch min-h-[500px]">
        <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-16">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Our Story</h2>
          </div>
          <div className="space-y-4 text-muted-foreground max-w-2xl">
            <p>
              Nelis Pvt Ltd was founded in 2018 with a simple yet powerful vision – to bring the finest natural herbal teas and dehydrated fruits to the world while empowering local communities. What started as a home-based venture has now grown into a certified manufacturing company, recognized for quality and sustainability.
            </p>
            <p>
              Our founder, Nelka Hewage, was inspired by her work with rural communities and her experience in food technology. She saw an opportunity to reduce food waste, create employment for women, and promote Sri Lanka&apos;s rich agricultural heritage through high-quality, chemical-free products.
            </p>
          </div>
        </div>
        <div className="md:col-span-3 relative min-h-[500px] md:min-h-0">
          <Image
            src="https://content-provider.payshia.com/nelis-global/sketch.jpg"
            alt="A sketch of the company founder"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            data-ai-hint="founder sketch"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

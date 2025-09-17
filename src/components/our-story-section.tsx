
import Image from 'next/image';
import { Leaf } from 'lucide-react';

export function OurStorySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nelis Pvt Ltd was founded in 2018 with a simple yet powerful vision – to bring the finest natural herbal teas and dehydrated fruits to the world while empowering local communities. What started as a home-based venture has now grown into a certified manufacturing company, recognized for quality and sustainability.
              </p>
              <p>
                Our founder, Nelka Hewage, was inspired by her work with rural communities and her experience in food technology. She saw an opportunity to reduce food waste, create employment for women, and promote Sri Lanka&apos;s rich agricultural heritage through high-quality, chemical-free products.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://content-provider.payshia.com/nelis-global/600x500-our-story.webp"
              alt="A collection of Nelis Global Boutique products"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              data-ai-hint="tea products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

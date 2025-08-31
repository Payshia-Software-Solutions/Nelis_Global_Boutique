
import { Coffee } from 'lucide-react';

export function SpecialBlendsSection() {
    return (
        <section id="special-blends" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Coffee className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Special Blends</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Enjoy our unique blends that combine herbs and spices for a flavorful and health-boosting experience.
                    </p>
                </div>
            </div>
        </section>
    );
}


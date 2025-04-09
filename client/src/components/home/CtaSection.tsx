import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 bg-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready for a Spotless Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the difference professional cleaning can make. Book your service today!</p>
        <a href="#booking">
          <Button 
            variant="outline" 
            className="bg-white text-accent hover:bg-light transition duration-300 px-8 py-3 h-auto text-lg font-heading font-semibold shadow-md"
          >
            Book Your Cleaning
          </Button>
        </a>
      </div>
    </section>
  );
}

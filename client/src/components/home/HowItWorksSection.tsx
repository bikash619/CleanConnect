export default function HowItWorksSection() {
  const steps = [
    {
      icon: "fas fa-calendar-alt",
      title: "1. Book Online",
      description: "Select your service, date, and time using our easy online booking system."
    },
    {
      icon: "fas fa-home",
      title: "2. We Clean",
      description: "Our professional cleaning team arrives on time and provides exceptional service."
    },
    {
      icon: "fas fa-smile",
      title: "3. You Relax",
      description: "Enjoy your spotless space! Leave a review and schedule your next cleaning."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-primary">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Booking your cleaning service with us is quick and easy. Here's our simple process:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-6 text-3xl">
                <i className={step.icon}></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-primary">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

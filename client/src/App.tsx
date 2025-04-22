import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import ServicesIndex from "@/pages/services";
import WindowCleaning from "@/pages/services/WindowCleaning";
import GuttersCleaning from "@/pages/services/GuttersCleaning";
import BondCleaning from "@/pages/services/BondCleaning";
import SolarPanelCleaning from "@/pages/services/SolarPanelCleaning";
import GeneralCleaning from "@/pages/services/GeneralCleaning";
import BlindsCleaning from "@/pages/services/BlindsCleaning";
import CarpetUpholsteryCleaning from "@/pages/services/CarpetUpholsteryCleaning";
import TileGroutCleaning from "@/pages/services/TileGroutCleaning";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/services" component={ServicesIndex} />
      <Route path="/services/window-cleaning" component={WindowCleaning} />
      <Route path="/services/gutters-cleaning" component={GuttersCleaning} />
      <Route path="/services/bond-cleaning" component={BondCleaning} />
      <Route path="/services/solar-panel-cleaning" component={SolarPanelCleaning} />
      <Route path="/services/general-cleaning" component={GeneralCleaning} />
      <Route path="/services/blinds-cleaning" component={BlindsCleaning} />
      <Route path="/services/carpet-upholstery-cleaning" component={CarpetUpholsteryCleaning} />
      <Route path="/services/tile-grout-cleaning" component={TileGroutCleaning} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <CookieConsent />
        
        {/* WhatsApp Contact Button */}
        <a 
          href="https://wa.me/61482089848" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
          aria-label="Contact us on WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

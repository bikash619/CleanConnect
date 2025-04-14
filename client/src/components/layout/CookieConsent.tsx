import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 pr-4 max-w-3xl">
            <p>
              This website uses cookies to ensure you get the best experience on our website. 
              {showSettings && (
                <span className="block mt-2">
                  We use necessary cookies to make our site work and analytics cookies to help us improve it.
                </span>
              )}
            </p>
          </div>
          <div className="flex space-x-3 shrink-0">
            <Button 
              variant="default" 
              onClick={acceptCookies}
              className="bg-primary text-white hover:bg-accent transition duration-300 px-5 py-2 h-auto rounded-md text-sm"
            >
              Accept
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowSettings(!showSettings)}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition duration-300 px-5 py-2 h-auto rounded-md text-sm"
            >
              {showSettings ? 'Hide Settings' : 'Settings'}
            </Button>
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h4 className="font-heading font-semibold mb-2">Cookie Settings</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="necessary-cookies" 
                  checked 
                  disabled 
                  className="mt-1 mr-2" 
                />
                <div>
                  <label htmlFor="necessary-cookies" className="font-semibold block">Necessary Cookies</label>
                  <p className="text-sm text-gray-600">These cookies are essential for the website to function properly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="analytics-cookies" 
                  defaultChecked 
                  className="mt-1 mr-2" 
                />
                <div>
                  <label htmlFor="analytics-cookies" className="font-semibold block">Analytics Cookies</label>
                  <p className="text-sm text-gray-600">These cookies help us improve our website by collecting anonymous information.</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button 
                variant="default" 
                onClick={acceptCookies}
                className="bg-primary text-white hover:bg-accent transition duration-300 px-5 py-2 h-auto rounded-md text-sm"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

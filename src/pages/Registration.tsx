import { useState } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Landmark } from "lucide-react";

export function Registration() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Subtle background watermark effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Landmark className="text-primary w-[400px] h-[400px]" strokeWidth={1} />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Official Registration</h1>
          <p className="font-body-lg text-body-lg text-on-surface max-w-lg mx-auto">
            Join global leaders and visionaries at the premier institutional gathering.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-lowest rounded-lg border border-secondary/30 border-t-4 border-t-secondary p-8 md:p-12 shadow-[0_12px_40px_rgba(0,32,74,0.12)]">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-4 font-bold">Registration Received</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Thank you for your interest. Your details have been successfully sent. We will contact you shortly with further information.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="bg-primary text-white font-label-md px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity"
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === "error" && (
                <div className="p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-50">
                  There was an error submitting your registration. Please try again or contact us directly. (Ensure you have configured VITE_WEB3FORMS_ACCESS_KEY).
                </div>
              )}
              
              <div>
                <label className="block font-label-md text-label-md uppercase tracking-widest text-primary mb-2" htmlFor="full_name">Full Name</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-primary/20 rounded-DEFAULT px-4 py-3 text-on-surface focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" 
                  id="full_name" 
                  name="full_name" 
                  required 
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md uppercase tracking-widest text-primary mb-2" htmlFor="professional_title">Professional Title</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-primary/20 rounded-DEFAULT px-4 py-3 text-on-surface focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" 
                    id="professional_title" 
                    name="professional_title" 
                    required 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md uppercase tracking-widest text-primary mb-2" htmlFor="organization">Organization / Sector</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-primary/20 rounded-DEFAULT px-4 py-3 text-on-surface focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" 
                    id="organization" 
                    name="organization" 
                    required 
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-md uppercase tracking-widest text-primary mb-2" htmlFor="email">Email Address</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-primary/20 rounded-DEFAULT px-4 py-3 text-on-surface focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" 
                  id="email" 
                  name="email" 
                  required 
                  type="email"
                />
              </div>

              <div className="pt-6">
                <button 
                  className="w-full bg-gold text-[#00204A] font-label-md text-label-md uppercase tracking-widest py-4 rounded-DEFAULT hover:opacity-90 transition-all gold-shadow flex items-center justify-center gap-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Secure Access"}
                  {!status && <ArrowRight className="w-5 h-5" />}
                  {status !== "submitting" && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </form>
          )}

          {/* Inquiry Details */}
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">For inquiries or assistance:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 font-body-lg text-body-lg font-medium text-primary">
              <a className="hover:text-secondary transition-colors flex items-center justify-center gap-2" href="tel:+233244859572">
                <Phone className="w-5 h-5" />
                +233244859572
              </a>
              <span className="hidden sm:inline text-primary/20">|</span>
              <a className="hover:text-secondary transition-colors flex items-center justify-center gap-2" href="tel:+233249885086">
                <Phone className="w-5 h-5" />
                +233249885086
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

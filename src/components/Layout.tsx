import { Link, Outlet, useLocation } from "react-router-dom";
import { Landmark, Menu, Globe, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine link path and active state
  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';
  const isDarkTop = location.pathname === '/' || location.pathname === '/about';

  const navStyles = isHome 
    ? { 
        backgroundImage: isScrolled ? "url('/pattern-bg.png')" : "none", 
        backgroundColor: isScrolled ? "#242528" : "transparent",
        backgroundRepeat: 'repeat', 
        backgroundSize: '600px'
      }
    : isDarkTop ? {
        backgroundColor: isScrolled ? "#ffffff" : "transparent"
      } : {};

  const navClassName = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? isHome 
        ? 'border-b border-white/10 shadow-sm' 
        : 'bg-surface/95 backdrop-blur-md border-b border-primary/10 shadow-sm'
      : 'bg-transparent'
  } ${(!isScrolled && isDarkTop) ? 'text-white' : (isHome ? 'text-white' : 'text-primary')}`;

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    return (
      <Link
        to={to}
        className={`font-body-md text-label-md uppercase tracking-widest transition-colors duration-300 scale-95 active:scale-90 transition-transform ${
          isActive(to)
            ? "text-[#C2984A] font-bold"
            : (!isScrolled && isDarkTop) || isHome ? "text-white/80 hover:text-white" : "text-primary hover:text-secondary"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
      <nav className={navClassName} style={navStyles}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/logo.jpeg" 
              alt="Gatekeepers Conference Logo" 
              className="w-12 h-12 object-contain rounded-full"
            />
            <span className="font-headline-sm text-headline-sm font-bold hidden sm:block tracking-wide">
              GATEKEEPERS CONFERENCE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/speakers" label="Speakers" />
          </div>

          <div className="flex gap-4 items-center">
            <Link
              to="/registration"
              className="hidden md:block bg-[#C2984A] text-black font-label-md text-label-md uppercase tracking-widest px-6 py-3 rounded hover:shadow-[0_4px_20px_rgba(0,32,74,0.15)] transition-all duration-300 scale-95 active:scale-90 font-bold"
            >
              REGISTRATION
            </Link>
            <button
              className={`md:hidden transition-colors ${(!isScrolled && isDarkTop) || isHome ? 'text-white' : 'text-primary'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 px-margin-mobile border-b flex flex-col gap-4 ${((!isScrolled && isDarkTop) || isHome) ? 'bg-[#242528] border-white/10 text-white' : 'bg-surface border-primary/10 text-primary'}`} style={((!isScrolled && isDarkTop) || isHome) ? { backgroundImage: "url('/pattern-bg.png')", backgroundRepeat: 'repeat', backgroundSize: '600px' } : {}}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/speakers" onClick={() => setIsMenuOpen(false)}>Speakers</Link>
            <Link to="/registration" onClick={() => setIsMenuOpen(false)}>Registration</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-primary w-full pt-section-padding pb-8 border-t-4 border-secondary text-on-primary">
        <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="font-headline-sm text-headline-sm text-secondary-fixed mb-4 block">
              GATEKEEPERS CONFERENCE
            </Link>
            <p className="font-body-md text-body-md text-on-primary/80 max-w-md">
              Empowering leaders to guard the values and future of our institutions with unwavering accountability and vision.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest font-bold">Contact Us</h4>
              <a className="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors opacity-100 hover:opacity-80 flex gap-2 items-center" href="tel:+233244859572">
                <Phone className="w-4 h-4" /> +233244859572
              </a>
              <a className="font-body-md text-body-md text-on-primary/80 hover:text-secondary-fixed transition-colors opacity-100 hover:opacity-80 flex gap-2 items-center" href="tel:+233249885086">
                <Phone className="w-4 h-4" /> +233249885086
              </a>
            </div>
          </div>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 pt-8 border-t border-on-primary/10 flex justify-between items-center">
          <div className="font-body-md text-body-md text-on-primary/60">
            © 2026 Gatekeepers Conference. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a className="text-on-primary/60 hover:text-secondary-fixed transition-colors" href="#"><Globe className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const galleryImages: { src: string; className: string; heightClass?: string }[] = [
  { src: "/mahama-2.jpg", className: "w-48 md:w-64", heightClass: "h-80 md:h-[28rem]" },
  { src: "/combined-1.jpeg", className: "w-80 md:w-[32rem]" },
  { src: "/Kumuyi-1.webp", className: "w-56 md:w-72" },
  { src: "/joyce-1.jpeg", className: "w-48 md:w-64" },
  { src: "/nyamekye-1.jpeg", className: "w-72 md:w-96", heightClass: "h-80 md:h-[28rem]" },
  { src: "/combined.jpeg", className: "w-80 md:w-[32rem]" },
  { src: "/mahama-1.jpg", className: "w-56 md:w-72" },
  { src: "/combined-2.jpeg", className: "w-80 md:w-[32rem]" },
  { src: "/Kumuyi-2.jpeg", className: "w-48 md:w-64", heightClass: "h-80 md:h-[28rem]" },
  { src: "/joyce-2.jpeg", className: "w-64 md:w-80" },
  { src: "/combined-3.jpeg", className: "w-80 md:w-[32rem]" },
  { src: "/nyamekye-2.jpeg", className: "w-80 md:w-[32rem]" },
];

export function Home() {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("June 14, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="bg-[#242528] flex flex-col justify-center pt-24 pb-section-padding relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{ backgroundImage: "url('/pattern-bg.png')", backgroundRepeat: 'repeat', backgroundSize: '600px' }}
        />
        
        {/* Moving Image Gallery (Slanted) */}
        <div className="w-full relative z-10 mt-12 md:mt-24 mb-16 flex justify-center">
          <div className="gallery-slant w-[150vw] -ml-[25vw] overflow-hidden">
            <div className="marquee-images-content gap-4 md:gap-8 px-4 items-center">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div key={i} className={`${img.className} ${img.heightClass || 'h-64 md:h-80'} bg-surface-variant/20 rounded-lg overflow-hidden shrink-0 shadow-xl border border-secondary/20`}>
                  <img alt={`Gallery ${i}`} className="w-full h-full object-cover object-top" src={img.src} loading="eager" fetchPriority="high" decoding="sync" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Title Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 md:mt-24 mb-16 relative z-20 px-4 md:px-8 flex flex-col items-center"
        >
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="font-display-lg font-bold text-4xl md:text-[52px] lg:text-[60px] text-[#B99249] tracking-normal text-center max-w-6xl mx-auto leading-tight drop-shadow-md"
          >
            {"Guarding the Soul of the Nation:".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="inline-block mr-[0.25em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 0.7, scaleX: 1, transition: { delay: 0.8, duration: 0.6, ease: "easeOut" } }
            }}
            className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[780px] h-[1px] bg-[#B99249] my-4 md:my-5 origin-center"
          ></motion.div>
          <motion.h1 
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } }
            }}
            className="font-display-lg font-bold text-4xl sm:text-5xl md:text-[72px] lg:text-[80px] text-[#F2EDD0] tracking-normal text-center max-w-5xl mx-auto leading-[1.1] drop-shadow-lg"
          >
            {["ACCOUNTABILITY", "IN"].map((word, i) => (
              <motion.span
                key={`line1-${i}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {["LEADERSHIP"].map((word, i) => (
              <motion.span
                key={`line2-${i}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Details & CTA */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-20 flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-on-primary bg-[#0B1528] border border-outline/20 px-6 py-4 rounded-xl shadow-lg">
              <Calendar className="text-[#C2984A] w-5 h-5 flex-shrink-0" />
              <span className="font-body-md text-[#EBE3C5] text-left">14th - 16th June, 2026</span>
            </div>
            <div className="flex items-start md:items-center gap-3 text-on-primary text-left bg-[#0B1528] border border-outline/20 px-6 py-4 rounded-xl shadow-lg">
              <MapPin className="text-[#C2984A] w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0" />
              <span className="font-body-md text-[#EBE3C5] max-w-sm">
                College of Physicians and Surgeons<br />Conference Centre, Accra, Ghana
              </span>
            </div>
          </div>

          <div className="flex gap-2 sm:gap-4 md:gap-8 mb-16">
            <div className="flex flex-col items-center bg-surface/10 backdrop-blur-md border border-gold/30 p-3 sm:p-4 md:p-6 rounded-lg min-w-[70px] sm:min-w-[100px] md:min-w-[120px]">
              <span className="font-headline-lg text-headline-sm sm:text-headline-lg text-on-primary">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="font-label-md text-[10px] sm:text-label-md text-gold uppercase tracking-widest mt-2">Days</span>
            </div>
            <div className="flex flex-col items-center bg-surface/10 backdrop-blur-md border border-gold/30 p-3 sm:p-4 md:p-6 rounded-lg min-w-[70px] sm:min-w-[100px] md:min-w-[120px]">
              <span className="font-headline-lg text-headline-sm sm:text-headline-lg text-on-primary">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="font-label-md text-[10px] sm:text-label-md text-gold uppercase tracking-widest mt-2">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-surface/10 backdrop-blur-md border border-gold/30 p-3 sm:p-4 md:p-6 rounded-lg min-w-[70px] sm:min-w-[100px] md:min-w-[120px]">
              <span className="font-headline-lg text-headline-sm sm:text-headline-lg text-on-primary">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="font-label-md text-[10px] sm:text-label-md text-gold uppercase tracking-widest mt-2">Mins</span>
            </div>
            <div className="flex flex-col items-center bg-surface/10 backdrop-blur-md border border-gold/30 p-3 sm:p-4 md:p-6 rounded-lg min-w-[70px] sm:min-w-[100px] md:min-w-[120px]">
              <span className="font-headline-lg text-headline-sm sm:text-headline-lg text-on-primary">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="font-label-md text-[10px] sm:text-label-md text-gold uppercase tracking-widest mt-2">Secs</span>
            </div>
          </div>

          <Link to="/registration" className="bg-gold text-[#00204A] font-label-md text-label-md uppercase tracking-widest px-10 py-5 rounded-DEFAULT hover:shadow-[0_4px_20px_rgba(0,32,74,0.15)] transition-all duration-300 hover:-translate-y-1 font-bold text-lg">
            Register Now
          </Link>
        </div>
      </section>

    </div>
  );
}

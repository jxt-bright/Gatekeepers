import { Eye, Network, Globe } from "lucide-react";

export function About() {
  return (
    <div className="">
      {/* Hero & Rationale Combined Section */}
      <div className="relative overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/about.png" 
            alt="About the Conference Background" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient to transition softly to next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Page Header */}
          <section className="pt-32 pb-20 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop text-center max-w-container-max mx-auto">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-6">About The Conference</h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-3xl mx-auto">Understanding the call, the mandate, and the responsibility of the modern Gatekeeper.</p>
          </section>

          {/* Introduction & Rationale / Biblical Mandate */}
          <section className="pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative p-10 bg-surface/95 backdrop-blur-sm shadow-xl border border-white/10 rounded-xl">
                <div className="absolute -top-6 -left-6 text-gold opacity-20 font-display-lg text-[120px] leading-none">
                  "
                </div>
                <blockquote className="relative z-10 mb-8">
                  <p className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-6 italic">
                    "Okandifo na ɔkyerɛ kwan"
                  </p>
                  <footer className="font-body-md text-body-md text-on-surface-variant uppercase tracking-widest">
                    — It is the leader who shows the way
                  </footer>
                </blockquote>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  However, showing the way is only half the battle; the other half is guarding the path. Ghana stands at a pivotal crossroads where the moral, economic, and social fabric of our society is being tested.
                </p>
              </div>
              <div>
                <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-white mb-6 border-b-4 border-gold inline-block pb-2">The Biblical Mandate</h2>
                <p className="font-body-lg text-body-lg text-white/90 mb-6">
                  In the scriptures, a gatekeeper was never a passive observer. As seen in <span className="font-bold text-gold">2 Kings 7:10-11</span>, the gatekeepers were the first line of defence and the first to announce the arrival of provisions.
                </p>
                <ul className="font-body-md text-body-md text-white/80 space-y-4 list-none mt-6">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Custodians of Access
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Guardians of the Treasury
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    The Spiritual-Temporal Link
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Objectives */}
      <section className="py-section-padding bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary text-center mb-16">Conference Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-primary/10 rounded-lg hover:border-gold/50 transition-colors group">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Re-awaken Responsibility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Shift mindset from "holding office" to "guarding a gate"
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 border border-primary/10 rounded-lg hover:border-gold/50 transition-colors group">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Strategic Alignment</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bridge the gap between spiritual values and governance
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 border border-primary/10 rounded-lg hover:border-gold/50 transition-colors group">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">National Intercession & Action</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Create a manifesto of ethical conduct
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Program Highlights */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Target Audience */}
          <div>
            <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary mb-8 border-b-4 border-gold inline-block pb-2">Target Audience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Gov't & Public Sector</h4>
                <ul className="text-on-surface-variant text-sm space-y-1 list-disc pl-4">
                  <li><strong>Judiciary:</strong> Judges, Magistrates</li>
                  <li><strong>Legislature:</strong> Ministers, MPs, Local Govt</li>
                  <li><strong>Security:</strong> Police, Military, Immigration</li>
                </ul>
              </div>
              
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Corporate</h4>
                <p className="text-on-surface-variant text-sm">CEOs, Board Chairs, and Entrepreneurs leading the business sector.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Religious Leaders</h4>
                <p className="text-on-surface-variant text-sm">Clergy and heads of Faith-Based organizations across denominations.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Academia & Education</h4>
                <p className="text-on-surface-variant text-sm">Vice Chancellors, Principals, and Deans shaping future minds.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Traditional Authorities</h4>
                <p className="text-on-surface-variant text-sm">Nananom and custodians of cultural heritage.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-lg border border-primary/10 shadow-sm hover:border-gold/50 transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Media & Civil Society</h4>
                <p className="text-on-surface-variant text-sm">Journalists, Advocacy groups, and independent Think tanks.</p>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="flex flex-col">
            <h2 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary mb-8 border-b-4 border-gold inline-block pb-2 w-max">Program Highlights</h2>
            <div className="flex-grow bg-primary text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary font-bold text-xl shrink-0 shadow-lg">1</div>
                    <div className="w-0.5 h-full bg-gold/30 mt-4 h-16"></div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-gold mb-2">Insightful Keynotes</h4>
                    <p className="font-body-md text-body-md text-white/80 leading-relaxed">Engaging keynote addresses and high-level panel discussions focusing strictly on accountability across governance, business, and faith sectors.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary font-bold text-xl shrink-0 shadow-lg">2</div>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-gold mb-2">Strategic Interactivity</h4>
                    <p className="font-body-md text-body-md text-white/80 leading-relaxed">Participate in dynamic interactive sessions aimed directly at identifying our national 'broken walls' and formulating actionable strategies for restoration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcome Banner */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary-container text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_100%)]"></div>
        <div className="max-w-container-max mx-auto text-center relative z-10 w-full md:w-3/4">
          <h2 className="font-body-md text-label-md uppercase tracking-widest text-gold mb-4">Expected Outcome</h2>
          <p className="font-headline-lg text-headline-sm md:text-headline-lg font-bold leading-normal">
            A network of <span className="text-gold">"Nehemiah Leaders"</span> emerges, committed to guarding Ghana's soul and driving positive change.
          </p>
        </div>
      </section>
    </div>
  );
}

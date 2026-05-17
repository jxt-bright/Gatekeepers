import { ArrowRight, Landmark, Church, Globe, Users } from "lucide-react";

export function Speakers() {
  return (
    <div className="pt-[120px] min-h-screen">
      {/* Keynote Section */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Featured Voices</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Convener Spotlight */}
        <div className="bg-surface-container-lowest border border-primary/10 rounded-xl overflow-hidden flex flex-col md:flex-row-reverse shadow-lg hover:shadow-xl transition-shadow relative mb-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="md:w-1/2 relative h-[500px] md:h-auto">
            <img 
              alt="Portrait of Rev. Dr. Joyce Rosalind Aryee" 
              className="w-full h-full object-cover" 
              src="/DrJoyce.jpeg" 
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full font-label-md uppercase text-[12px] w-max shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Convener
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Rev. Dr. Joyce Rosalind Aryee</h2>
            <p className="font-body-lg text-body-lg text-primary/80 mb-6 font-semibold uppercase tracking-wide text-sm">
              Executive Director, Salt and Light Ministries
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed text-lg">
              A former politician, minister of state, and renowned management and communication consultant, Rev. Dr. Joyce Aryee serves as the Convener for the Gatekeepers Conference. Her wealth of experience in public service and corporate leadership bridges the gap between spiritual principles and national development.
            </p>
          </div>
        </div>

        {/* Keynote Spotlight */}
        <div className="bg-surface-container-lowest border border-primary/10 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="md:w-1/2 relative h-[500px] md:h-auto">
            <img 
              alt="Portrait of Pastor Dr. W. F. Kumuyi" 
              className="w-full h-full object-cover" 
              src="/Kumuyi.jpg" 
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full font-label-md uppercase text-[12px] w-max shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Keynote Speaker
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Pastor Dr. W. F. Kumuyi</h2>
            <p className="font-body-lg text-body-lg text-primary/80 mb-6 font-semibold uppercase tracking-wide text-sm">
              Founder and General Superintendent, Deeper Life Bible Church
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed text-lg">
              A visionary leader and global spiritual authority, Pastor Dr. W. F. Kumuyi brings decades of insight into institutional leadership and community transformation. His perspective on the 'Gatekeeper' role provides a foundational framework for modern executives and diplomats navigating complex global landscapes.
            </p>
          </div>
        </div>
      </section>

            {/* Speakers Teaser Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden border-t-4 border-t-gold group hover:shadow-[0_4px_20px_rgba(0,32,74,0.05)] transition-shadow">
              <div className="h-64 bg-surface-container overflow-hidden">
                <img alt="Dr. Eric Nyamekye" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpDpRILNVB0GaUafbgU4ope0AMPnMDg6Snw9S6A-wS0QOjq7weGiW87r0VHgxTppYXThIq8CyyczUIR0wDzWeBG7bHJA34L8u9s6gTss3rNNqCaO1zW9uuEFZjLHv2qxRKEc6MTraD2FOTGoTdcGYAm3Kd4Kkx3nSTGtH_zKk0AoERFBivlM0g4x55xLCo48B6m8lPByPHvW6KnhHAImcoJJ-01scM2e_NpSrahkgbiMFQBwanKQRohBmz5jruNfnIN7nPPh2d3V5w" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-2">Dr. Eric Nyamekye</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Chairman, The Church of Pentecost</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden border-t-4 border-t-gold group hover:shadow-[0_4px_20px_rgba(0,32,74,0.05)] transition-shadow">
              <div className="h-64 bg-surface-container overflow-hidden">
                <img alt="Rt. Rev. Dr. Lt. Col. Bliss Agbeko (Rtd.)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top" src="https://ghanaiantimes.com.gh/wp-content/uploads/2025/07/AACC-appoints-Rt.-Rev-Dr-Lt-Col-Bliss-Divine-Agbeko-Rtd.jpg" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-2">Rt. Rev. Dr. Lt. Col. Bliss Agbeko (Rtd.)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Chairman of the Christian Council of Ghana</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden border-t-4 border-t-gold group hover:shadow-[0_4px_20px_rgba(0,32,74,0.05)] transition-shadow">
              <div className="h-64 bg-surface-container overflow-hidden">
                <img alt="Most Rev. Matthew Kwasi Gyamfi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top" src="https://newswatchgh.com/wp-content/uploads/2021/07/DSC3481.jpg" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-2">Most Rev. Matthew Kwasi Gyamfi</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">President of the Ghana Catholic Bishops' Conference</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden border-t-4 border-t-gold group hover:shadow-[0_4px_20px_rgba(0,32,74,0.05)] transition-shadow">
              <div className="h-64 bg-surface-container overflow-hidden">
                <img alt="Archbishop Nicholas Duncan-Williams" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top" src="https://epistlesofrealitiesblog.wordpress.com/wp-content/uploads/2021/05/fb_img_16207824146133191878640459773331.jpg" />
              </div>
              <div className="p-8">
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-2">Archbishop Nicholas Duncan-Williams</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Chairman of the National Association of Charismatic and Christian Churches (NACCC)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecumenical Bodies Section */}
      <section className="bg-surface-container-low py-section-padding px-margin-mobile md:px-margin-desktop border-t border-primary/5">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">In Partnership With</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              United in purpose, these esteemed ecumenical bodies stand with the Gatekeepers Conference to foster dialogue and institutional strength.
            </p>
            <div className="w-16 h-1 bg-gold/50 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest border-t-4 border-t-gold border border-x-primary/10 border-b-primary/10 p-10 rounded-b-lg flex flex-col items-center justify-center text-center h-56 shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-surface rounded-full mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-primary/5">
                <Landmark className="text-primary w-8 h-8 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-wide leading-relaxed">Christian Council of Ghana</h3>
            </div>

            <div className="bg-surface-container-lowest border-t-4 border-t-gold border border-x-primary/10 border-b-primary/10 p-10 rounded-b-lg flex flex-col items-center justify-center text-center h-56 shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-surface rounded-full mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-primary/5">
                <Church className="text-primary w-8 h-8 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-wide leading-relaxed">Ghana Catholic Bishops' Conference</h3>
            </div>

            <div className="bg-surface-container-lowest border-t-4 border-t-gold border border-x-primary/10 border-b-primary/10 p-10 rounded-b-lg flex flex-col items-center justify-center text-center h-56 shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-surface rounded-full mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-primary/5">
                <Globe className="text-primary w-8 h-8 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-wide leading-relaxed">NACCC</h3>
            </div>

            <div className="bg-surface-container-lowest border-t-4 border-t-gold border border-x-primary/10 border-b-primary/10 p-10 rounded-b-lg flex flex-col items-center justify-center text-center h-56 shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-surface rounded-full mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-primary/5">
                <Users className="text-primary w-8 h-8 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-wide leading-relaxed">Ghana Evangelical Fellowship</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

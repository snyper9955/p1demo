"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Star, Award, Heart, Sparkles, Clock, Send, Camera } from "lucide-react";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Home() {
  return (
    <div className="relative bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-500/5 rounded-full blur-[100px] -z-10"></div>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen pt-32 pb-20 flex items-center">
        <main className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content & Summary */}
            <div className="flex flex-col space-y-10 order-2 lg:order-1">
              <div>
                <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary"></span>
                  Makeup Artist Darbhanga
                </p>
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                  Pooja Kumari
                </h1>
                <div className="flex flex-col space-y-4">
                  <h1 className="text-md md:text-xl font-semibold text-white bg-pink-500/20 border border-pink-500 shadow-xl rounded-2xl px-6 py-3 leading-[1.1] mb-2 tracking-tight w-fit">
                    Located near Laheria Sarai Station, Darbhanga, Bihar.
                  </h1>
                  <h2 className="text-md md:text-xl font-semibold text-primary leading-relaxed max-w-xl">
                    With over 8 years of dedicated experience, Pooja Kumari has become the premier choice for brides and fashion enthusiasts in Darbhanga.
                  </h2>
                </div>
              </div>

              {/* Services Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                {['All Events', 'Makeover', 'Bridal', 'Festivals'].map((service) => (
                  <div 
                    key={service} 
                    className="flex items-center gap-3 p-4 bg-foreground/5 rounded-2xl border border-transparent  hover:bg-neutral-800 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-semibold tracking-wide group-hover:text-primary transition-colors">{service}</span>
                  </div>
                ))}
              </div>

              {/* Contact & CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://wa.me/917070217738" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 flex items-center gap-2 py-4 bg-[#c21385] text-white rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#c21385]/20 hover:-translate-y-1"
                >
                  <WhatsAppIcon size={18} /> chat with me
                </a>
                <a 
                  href="#contact" 
                  className="px-10 flex items-center gap-2 py-4 border border-foreground/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#c21385] hover:text-white transition-all hover:border-[#c21385] hover:-translate-y-1"
                >
                  <Phone size={18} /> Contact Me
                </a>
              </div>
            </div>
            
            {/* Right: Profile Image & Creative Layout */}
            <div className="relative group order-1 lg:order-2">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                <Image
                  src="/images/profile.png"
                  alt="Pooja Kumari - Professional Makeup Artist"
                  fill
                  className="object-cover scale-x-[-1] transition-transform duration-1000 group-hover:scale-[1.05] group-hover:scale-x-[-1]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl flex justify-between items-center text-white shadow-2xl">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Experience</p>
                    <p className="text-xl font-serif font-bold">8+ Years</p>
                  </div>
                  <div className="flex gap-1.5 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              
              {/* Background Frames */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-3 group-hover:-translate-y-3"></div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-secondary/40 rounded-[2.5rem] -z-20 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3"></div>
            </div>
          </div>
        </main>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-xs font-semibold text-primary mb-4">Behind the Brush</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">The Artist Behind the Glamour</h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square shadow-2xl group">
                <Image 
                  src="/images/about.png" 
                  alt="Pooja at work" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-secondary/50 rounded-[3rem] -z-10"></div>
            </div>

            <div className="flex flex-col space-y-10 order-1 lg:order-2">
              <h3 className="text-4xl font-serif font-bold text-foreground">Meet Pooja Kumari</h3>
              <div className="space-y-6">
                <p className="text-xl text-foreground/80 leading-relaxed font-light">
                  With over 8 years of dedicated experience in the beauty industry, Pooja Kumari has become the premier choice for brides and fashion enthusiasts in Darbhanga. Located near Laheria Sarai Station, she brings a blend of international techniques and local traditional aesthetics to every client.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-foreground/5">
                <div className="flex flex-col space-y-3">
                  <Star className="text-primary" size={32} />
                  <h4 className="font-bold uppercase text-xl tracking-widest">Bridal Specialist</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">Crafting unforgettable, radiant looks for your most precious day.</p>
                </div>
                <div className="flex flex-col space-y-3">
                  <Award className="text-primary" size={32} />
                  <h4 className="font-bold font-serif text-xl tracking-widest uppercase">Certified Artist</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">Trained by industry leaders to deliver world-class beauty standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-700 backdrop-blur-sm rounded-[3rem] p-12 md:p-24 mb-32 text-center border border-white/20 shadow-xl">
            <div className="max-w-3xl mx-auto space-y-10">
              <Heart className="text-pink-500 mx-auto" size={48} />
              <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-snug">
                "True beauty is the radiance that comes from within when you feel truly yourself."
              </h3>
              <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">— Pooja Kumari's Philosophy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Technique", desc: "Mastery of airbrushing, contouring, and advanced color theory to ensure a flawless finish that lasts." },
              { title: "Premium Products", desc: "Using only the highest quality, skin-loving products from brands like Chanel, Dior, and Charlotte Tilbury." },
              { title: "Personalized Care", desc: "Every appointment includes a detailed consultation to ensure your vision is perfectly realized." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="space-y-6 hover:bg-[#c21385] group p-10 rounded-[2.5rem] transition-all duration-500 border border-transparent hover:shadow-2xl cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors">
                  <Sparkles className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-foreground/70 group-hover:text-white/80 font-light leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-xs font-semibold text-primary mb-4">Portfolio</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8">The Gallery</h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
              A curated collection of beauty transformations, from timeless bridal elegance to high-fashion editorial artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { src: "/images/gallery1.png", title: "Bridal Radiance", category: "Bridal" },
              { src: "/images/gallery2.png", title: "Editorial Edge", category: "Fashion" },
              { src: "/images/gallery3.png", title: "Evening Glow", category: "Events" },
              

              { src: "/images/gallery4.png", title: "Timeless Beauty", category: "Classic" },
              { src: "/images/gallery5.png", title: "Avant-Garde Art", category: "Creative" },
              { src: "/images/gallery6.png", title: "Clean Aesthetic", category: "Natural" },
            ].map((img, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden rounded-[3rem] aspect-[3/4] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
                    {img.category}
                  </p>
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">
                    {img.title}
                  </h3>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all">
                    <Camera size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-xs font-semibold text-primary mb-4">What We Offer</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">Premium Beauty Services</h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Bridal Glamour",
                desc: "Timeless and luminous looks tailored for your most precious day. Our comprehensive bridal service includes a detailed trial session to perfect your vision.",
                icon: <Heart className="text-pink-500" size={48} />,
              },
              {
                title: "Editorial & Fashion",
                desc: "High-definition artistry for commercial shoots, magazines, and fashion shows. We work closely with photographers to ensure flawless on-camera results.",
                icon: <Camera className="text-primary" size={48} />,
              },
              {
                title: "Special Events",
                desc: "Exquisite makeup for galas, red carpets, proms, or any occasion that demands perfection. Feel your absolute best with a customized beauty look.",
                icon: <Star className="text-primary" size={48} />,
              },
              {
                title: "Masterclasses",
                desc: "One-on-one or group lessons designed to master your own makeup routine or refine professional skills using industry-standard techniques.",
                icon: <Sparkles className="text-primary" size={48} />,
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="relative bg-neutral-900 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/30 shadow-sm hover:shadow-2xl hover:bg-neutral-950 transition-all duration-700 group flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left cursor-pointer"
              >
                <div className="flex-shrink-0 w-28 h-28 bg-primary/10 rounded-[2rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <div className="group-hover:scale-110 transition-transform duration-700">
                    {service.icon}
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-foreground group-hover:text-white transition-colors mb-4">{service.title}</h3>
                    <p className="text-lg text-foreground/60 group-hover:text-white/70 transition-colors leading-relaxed mb-8 font-light">
                      {service.desc}
                    </p>
                  </div>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary group-hover:text-pink-400 group-hover:translate-x-2 transition-all duration-300"
                  >
                    Inquire for Details <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Philosophy Footer */}
          <div className="mt-24 flex flex-col lg:flex-row justify-between items-center p-12 md:p-16 bg-primary/30 rounded-[3rem] gap-12 border border-primary/20 shadow-2xl">
            <div className="text-left max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground leading-tight">Need a custom package?</h4>
              <p className="text-xl text-foreground/60 font-light leading-relaxed">We offer tailored beauty experiences for wedding parties, multi-day editorial projects, and destination events.</p>
            </div>
            <a 
              href="#contact" 
              className="px-12 py-6 bg-foreground text-background rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#c21385] hover:text-white hover:-translate-y-1 transition-all whitespace-nowrap shadow-2xl"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-xs font-semibold text-primary mb-4">Get in Touch</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8">Let's Create Magic Together</h2>
            <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
              Ready to elevate your look for your next big event? Reach out to schedule a consultation or inquire about availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="flex flex-col space-y-12">
              <div className="space-y-10">
                <h3 className="text-3xl font-serif font-bold text-foreground">Contact Details</h3>
                
                {[
                  { icon: <Mail size={28} />, label: "Email", value: "hello@gmail.com", href: "mailto:hello@gmail.com" ,hover:"group-hover:bg-primary"},
                  { icon: <Phone size={28} />, label: "Phone", value: "+91 7070217738", href: "tel:+917070217738",hover:"group-hover:bg-green-500" },
                  { icon: <MapPin size={28} />, label: "Location", value: "Madhubani, Bihar", href: null ,hover:"group-hover:bg-blue-500"},
                  { icon: <Clock size={28} />, label: "Availability", value: "Mon - Sat: 9 AM - 7 PM", href: null ,hover:"group-hover:bg-primary"}
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-8 group"
                  >
                    <div className={`${item.hover} w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:text-white transition-all shadow-sm `}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 font-bold mb-2">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xl hover:text-primary transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-xl font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8 pt-8 border-t border-foreground/5">
                <h3 className="text-3xl font-serif font-bold text-foreground">Follow the Journey</h3>
                <div className="flex items-center gap-6">
                  {[
                    { icon: <InstagramIcon size={24} />, name: "instagram", hover: "hover:bg-pink-500" },
                    { icon: "fb", name: "facebook", hover: "hover:bg-blue-500" },
                    { icon: "tw", name: "twitter", hover: "hover:bg-neutral-500" }
                  ].map((social, idx) => (
                    <div
                      key={idx}
                      className={`${social.hover} w-14 h-14 text-white  rounded-2xl flex items-center justify-center  hover:text-white hover:-translate-y-1 transition-all font-bold text-sm cursor-pointer shadow-sm`}
                    >
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-foreground/5 p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-white/10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 ml-3">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Please enter your name" 
                      className="w-full bg-background border border-foreground/10 p-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 ml-3">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Please enter your email" 
                      className="w-full bg-background border border-foreground/10 p-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 ml-3">Event Type</label>
                  <div className="relative">
                    <select className="w-full bg-background border border-foreground/10 p-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all appearance-none text-lg">
                      <option>Bridal Makeup</option>
                      <option>Editorial / Commercial</option>
                      <option>Special Event</option>
                      <option>Masterclass Inquiry</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 ml-3">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Please enter your message..." 
                    className="w-full bg-background border border-foreground/10 p-5 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none text-lg"
                  ></textarea>
                </div>

                <button 
                  className="w-full py-6 bg-[#c21385] text-white rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl shadow-[#c21385]/20 text-lg hover:-translate-y-1"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-foreground/5 text-center bg-foreground/[0.01]">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-bold">
          © {new Date().getFullYear()} Luxe Glamour by Pooja Kumari. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

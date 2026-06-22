import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const BlogPage: React.FC = () => {
  const posts = [
    {
      slug: 'saas-loesninger-2026',
      title: 'SaaS-løsninger i 2026: Hvad B2B virksomheder bør vide',
      description: 'En gennemgang af de vigtigste SaaS-trends i 2026 og hvordan B2B virksomheder kan drage fordel af moderne cloud-platforme.',
      date: '2026-01-15',
      category: 'Tech & SaaS'
    },
    {
      slug: 'ai-automation-2026',
      title: 'AI Automation i Salg: Sådan bruger du det rigtigt i 2026',
      description: 'Kunstig intelligens forandrer salgsindsatsen. Lær hvordan du implementerer AI-automation i din salgsproces og øger konverteringsraten.',
      date: '2026-02-01',
      category: 'AI & Teknologi'
    },
    {
      slug: 'modebooking-2026',
      title: 'Effektiv Mødebooking i 2026: Strategier der virker',
      description: 'Få de bedste metoder og scripts til professionel mødebooking i 2026 – og se hvorfor kvalitet slår kvantitet.',
      date: '2026-02-20',
      category: 'Mødebooking'
    },
    {
      slug: 'telesalg-2026',
      title: 'Telesalg i 2026: Teknikker og strategier for moderne sælgere',
      description: 'Telesalg er ikke død – det har bare ændret sig. Her er de teknikker der virker i et moderne B2B salgslandskab.',
      date: '2026-03-05',
      category: 'Telemarketing'
    },
    {
      slug: 'outbound-sales-2026',
      title: 'Outbound Sales 2026: Byg en salgsmaskine der skalerer',
      description: 'En komplet guide til at bygge og optimere din outbound salgsmotor i 2026 – fra prospektering til lukket aftale.',
      date: '2026-03-20',
      category: 'Salgsstrategier'
    }
  ];

  return (
    <>
      <SEO
        title="Blog | Nexny – Indsigt om B2B Salg, Mødebooking og Vækst"
        description="Nexny's blog med praktiske guides, tips og trends inden for B2B salg, mødebooking, telemarketing, leadgenerering og digital vækst for erhvervsvirksomheder."
        canonical="/blog"
        keywords="Nexny blog, B2B salg tips, mødebooking guide, telemarketing artikler, salgsstrategi 2026"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nexny Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Praktisk viden og konkrete råd om B2B salg, mødebooking, leadgenerering og digital vækst.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                  <h2 className="text-xl font-bold mt-4 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
                    <span className="text-blue-600 font-medium flex items-center gap-1">Læs mere <ArrowRight size={14} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvad skriver Nexny om på bloggen?', answer: 'Nexny\'s blog dækker emner som B2B telemarketing, mødebooking, leadgenerering, webudvikling, AI-integration og salgsoptimering.' },
        { question: 'Hvem skriver artiklerne?', answer: 'Artiklerne skrives af Nexny\'s team af salgs- og digitalspecialister baseret på praktisk erfaring og aktuel brancheviden.' },
        { question: 'Kan jeg bruge Nexny\'s blogindhold i min virksomhed?', answer: 'Du er velkommen til at dele og referere til vores indhold. Kontakt os, hvis du ønsker at bruge indholdet kommercielt.' },
        { question: "Hvor ofte udgiver Nexny nye blogindlæg?", answer: "Vi udgiver løbende indlæg om B2B salg, telemarketing, webudvikling og AI-trends. Følg vores blog for de seneste opdateringer." },
        { question: "Kan jeg tilmelde mig et nyhedsbrev?", answer: "Kontakt os og angiv at du gerne vil modtage vores nyhedsbrev med de seneste indsigter og tips." },
        { question: "Skriver Nexny om specifikke brancher?", answer: "Ja – vi dækker brancher som SaaS, energi, finans, HR og servicevirksomheder med praksisnære artikler og cases." },
        { question: "Kan jeg foreslå emner til bloggen?", answer: "Ja – send os dine forslag via kontaktformularen. Vi skriver gerne om emner der er relevante for vores læsere." },
        { question: "Bruger Nexny AI til at skrive blogindlæg?", answer: "Vi bruger AI som hjælpeværktøj til research og struktur, men alle artikler kvalitetssikres og godkendes af vores faglige team." },
        { question: "Er blogindlæggene SEO-optimerede?", answer: "Ja – alle Nexny's blogindlæg skrives med SEO som fokus, inkl. relevante søgeord, meta-beskrivelser og struktureret indhold." },
        { question: "Kan jeg dele Nexny's artikler på LinkedIn?", answer: "Ja – du er meget velkommen til at dele vores artikler på sociale medier. Vi sætter pris på at budskabet spredes." },
        { question: "Skriver Nexny gæsteindlæg for andre medier?", answer: "Ja – vi samarbejder med brancherelevante medier og platforme. Kontakt os hvis du er interesseret i et samarbejde." },
        { question: "Er artiklerne tilgængelige på engelsk?", answer: "Primært skriver vi på dansk, men vi har udvalgte artikler og materialer på engelsk til internationale kunder." },
        { question: "Kan jeg citere Nexny's artikler i mit eget indhold?", answer: "Ja – du er velkommen til at citere vores artikler med reference til nexny.dk som kilde." },
      ]} />
      <CTASection
        title="Hold dig opdateret – og lad Nexny drive din vækst"
        subtitle="Læs vores seneste artikler om B2B salg, mødebooking og digital vækst – og kontakt os, når du er klar til at komme i gang."
        primaryText="Kontakt Nexny"
        primaryLink="/kontakt"
        secondaryText="Se ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPage;

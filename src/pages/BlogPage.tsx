import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const BlogPage: React.FC = () => {
  const posts = [
    { slug: 'saas-loesninger-2026', title: 'SaaS-løsninger i 2026: Hvad B2B virksomheder bør vide', description: 'En gennemgang af de vigtigste SaaS-trends i 2026 og hvordan B2B virksomheder kan drage fordel af moderne cloud-platforme.', date: '2026-01-15', category: 'Tech & SaaS' },
    { slug: 'ai-automation-2026', title: 'AI Automation i Salg: Sådan bruger du det rigtigt i 2026', description: 'Kunstig intelligens forandrer salgsindsatsen. Lær hvordan du implementerer AI-automation i din salgsproces og øger konverteringsraten.', date: '2026-02-01', category: 'AI & Teknologi' },
    { slug: 'modebooking-2026', title: 'Effektiv Mødebooking i 2026: Strategier der virker', description: 'Få de bedste metoder og scripts til professionel mødebooking i 2026 – og se hvorfor kvalitet slår kvantitet.', date: '2026-02-20', category: 'Mødebooking' },
    { slug: 'telesalg-2026', title: 'Telesalg i 2026: Teknikker og strategier for moderne sælgere', description: 'Telesalg er ikke død – det har bare ændret sig. Her er de teknikker der virker i et moderne B2B salgslandskab.', date: '2026-03-05', category: 'Telemarketing' },
    { slug: 'outbound-sales-2026', title: 'Outbound Sales 2026: Byg en salgsmaskine der skalerer', description: 'En komplet guide til at bygge og optimere din outbound salgsmotor i 2026 – fra prospektering til lukket aftale.', date: '2026-03-20', category: 'Salgsstrategier' },
    { slug: 'hvorfor-saas-2026', title: 'Hvorfor SaaS i 2026? Fordele for B2B virksomheder', description: 'SaaS-løsninger giver fleksibilitet, lavere TCO og hurtigere skalerbarhed. Læs hvorfor B2B virksomheder vælger cloud frem for on-premise.', date: '2026-04-01', category: 'Tech & SaaS' },
    { slug: 'saas-vs-on-premise', title: 'SaaS vs. On-Premise: Hvad passer til din virksomhed i 2026?', description: 'En grundig sammenligning af SaaS og on-premise løsninger – inkl. hybridmodeller og hvornår det ene er bedre end det andet.', date: '2026-04-05', category: 'Tech & SaaS' },
    { slug: 'bedste-saas-tools-2026', title: 'De 10 bedste SaaS-tools til B2B virksomheder i 2026', description: 'Top 10 SaaS-platforme der driver vækst, effektivitet og salg for B2B virksomheder i 2026.', date: '2026-04-10', category: 'Tech & SaaS' },
    { slug: 'saas-integration-2026', title: 'SaaS Integration i 2026: Sådan forbinder du dine platforme', description: 'Integrationskvalitet er afgørende for ROI. Lær de 3 integrationsniveauer og de 5 høj-ROI integrationer din virksomhed bør prioritere.', date: '2026-04-15', category: 'Tech & SaaS' },
    { slug: 'saas-security-gdpr', title: 'SaaS Sikkerhed & GDPR: Hvad du skal vide i 2026', description: 'GDPR-compliance, DPA-aftaler og datasikkerhed i cloud. En komplet tjekliste til valg af GDPR-sikre SaaS-løsninger.', date: '2026-04-20', category: 'Tech & SaaS' },
    { slug: 'hvorfor-magnora-webudvikling', title: 'Hvorfor vælge Magnora Marketing til webudvikling?', description: 'Magnora Marketing kombinerer teknisk ekspertise med kommerciel indsigt for at levere hjemmesider der sælger – ikke bare ser godt ud.', date: '2026-04-25', category: 'Webudvikling' },
    { slug: 'hvorfor-magnora-ai-integration', title: 'Hvorfor vælge Magnora Marketing til AI-integration?', description: 'Magnora Marketing hjælper B2B virksomheder med at implementere AI-løsninger der skaber målbare resultater og øger effektiviteten.', date: '2026-05-01', category: 'AI & Teknologi' },
    { slug: 'hjemmeside-til-vaekst-2026', title: 'Hjemmeside til Vækst i 2026: Hvad B2B-kunder forventer', description: 'Den digitale rejse for B2B-buyers i 2026 – og hvad der skal til for at din hjemmeside konverterer besøgende til kunder.', date: '2026-05-05', category: 'Webudvikling' },
    { slug: 'ai-integration-roi-2026', title: 'AI Integration ROI i 2026: Hvornår betaler det sig?', description: 'Beregn ROI på AI-implementering. Top 5 AI-initiativer med dokumenteret effekt – og hvornår det IKKE betaler sig at investere i AI.', date: '2026-05-10', category: 'AI & Teknologi' },
    { slug: 'websitekonvertering-tips', title: '10 tips til bedre websitekonvertering for B2B virksomheder', description: 'Konkrete CRO-tips der øger konverteringsraten på din B2B hjemmeside – fra landingssider til call-to-action og formularer.', date: '2026-05-15', category: 'Webudvikling' },
    { slug: 'hvorfor-magnora-telesalg', title: 'Hvorfor vælge Magnora Marketing til telesalg?', description: 'Magnora Marketing leverer professionelt B2B telesalg med erfarne konsulenter, datadrevne metoder og dokumenterede resultater.', date: '2026-05-20', category: 'Telemarketing' },
    { slug: 'hvorfor-magnora-moedebooking', title: 'Hvorfor vælge Magnora Marketing til mødebooking?', description: 'Magnora Marketing booker kvalificerede møder med beslutningstagere – og leverer konsistent høj mødekvalitet til ambitiøse B2B virksomheder.', date: '2026-05-25', category: 'Mødebooking' },
    { slug: 'outsourcing-telesalg-2026', title: 'Outsourcing af Telesalg i 2026: Fordele, faldgruber og krav', description: 'Alt du skal vide om at outsource dit telesalg i 2026 – inkl. hvad du skal kræve af en partner og hvilke fejl du skal undgå.', date: '2026-06-01', category: 'Telemarketing' },
    { slug: 'b2b-salg-strategi-2026', title: 'B2B Salgsstrategi i 2026: 5 fundamenter der skaber vækst', description: 'De 5 fundamenter i en moderne B2B salgsstrategi: ICP-definition, prospektering, dialog, pipeline-styring og closing-teknikker.', date: '2026-06-05', category: 'Salgsstrategier' },
    { slug: 'moedebooking-scripts-2026', title: 'Mødebooking Scripts 2026: Konkrete eksempler der virker', description: 'Effektive scripteksempler til mødebooking i 2026 – inkl. åbningssætninger, indvendingshåndtering og closing.', date: '2026-06-10', category: 'Mødebooking' },
    { slug: 'leadgenerering-strategier-2026', title: 'Leadgenerering Strategier 2026: 5 metoder der virker', description: 'De 5 mest effektive leadgenereringsstrategier i 2026: SEO, outbound, LinkedIn, ABM og webinarer – med konkrete implementeringstips.', date: '2026-06-15', category: 'Salgsstrategier' },
    { slug: 'hvad-er-bant-2026', title: 'Hvad er BANT? Framework til kvalificering af B2B leads i 2026', description: 'BANT-frameworket forklaret med eksempelspørgsmål for alle 4 faktorer – Budget, Authority, Need og Timeline.', date: '2026-06-20', category: 'Salgsstrategier' },
    { slug: 'vaekst-partner-guide', title: 'Vækstpartner Guide: Hvornår skal du hyre en ekstern partner?', description: 'Hvad er en vækstpartner, hvornår giver det mening at hyre en, og hvad skal du konkret kræve af et samarbejde?', date: '2026-06-23', category: 'Salgsstrategier' },
    { slug: 'startup-til-vaekst-2026', title: 'Fra Startup til Vækst i 2026: 3 skaleringsmodeller', description: 'De 3 primære skaleringsmodeller for startups og vækstvirksomheder i 2026: outsourcing, inbound og AI-drevet salg.', date: '2026-06-26', category: 'Salgsstrategier' },
    { slug: 'cold-calling-vs-inbound', title: 'Cold Calling vs. Inbound: Hvad virker bedst i 2026?', description: 'En grundig sammenligning af cold calling og inbound marketing – og hvordan "allbound"-kombinationen skaber de bedste resultater.', date: '2026-06-29', category: 'Telemarketing' },
  ];

  return (
    <>
      <SEO
        title="Blog | Magnora Marketing – Indsigt om B2B Salg, Mødebooking og Vækst"
        description="Magnora Marketing's blog med praktiske guides, tips og trends inden for B2B salg, mødebooking, telemarketing, leadgenerering og digital vækst for erhvervsvirksomheder."
        canonical="/blog"
        keywords="Magnora Marketing blog, B2B salg tips, mødebooking guide, telemarketing artikler, salgsstrategi 2026"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Magnora Marketing Blog</h1>
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
        { question: 'Hvad skriver Magnora Marketing om på bloggen?', answer: 'Magnora Marketing\'s blog dækker emner som B2B telemarketing, mødebooking, leadgenerering, webudvikling, AI-integration og salgsoptimering.' },
        { question: 'Hvem skriver artiklerne?', answer: 'Artiklerne skrives af Magnora Marketing\'s team af salgs- og digitalspecialister baseret på praktisk erfaring og aktuel brancheviden.' },
        { question: 'Kan jeg bruge Magnora Marketing\'s blogindhold i min virksomhed?', answer: 'Du er velkommen til at dele og referere til vores indhold. Kontakt os, hvis du ønsker at bruge indholdet kommercielt.' },
        { question: "Hvor ofte udgiver Magnora Marketing nye blogindlæg?", answer: "Vi udgiver løbende indlæg om B2B salg, telemarketing, webudvikling og AI-trends. Følg vores blog for de seneste opdateringer." },
        { question: "Kan jeg tilmelde mig et nyhedsbrev?", answer: "Kontakt os og angiv at du gerne vil modtage vores nyhedsbrev med de seneste indsigter og tips." },
        { question: "Skriver Magnora Marketing om specifikke brancher?", answer: "Ja – vi dækker brancher som SaaS, energi, finans, HR og servicevirksomheder med praksisnære artikler og cases." },
        { question: "Kan jeg foreslå emner til bloggen?", answer: "Ja – send os dine forslag via kontaktformularen. Vi skriver gerne om emner der er relevante for vores læsere." },
        { question: "Bruger Magnora Marketing AI til at skrive blogindlæg?", answer: "Vi bruger AI som hjælpeværktøj til research og struktur, men alle artikler kvalitetssikres og godkendes af vores faglige team." },
        { question: "Er blogindlæggene SEO-optimerede?", answer: "Ja – alle Magnora Marketing's blogindlæg skrives med SEO som fokus, inkl. relevante søgeord, meta-beskrivelser og struktureret indhold." },
        { question: "Kan jeg dele Magnora Marketing's artikler på LinkedIn?", answer: "Ja – du er meget velkommen til at dele vores artikler på sociale medier. Vi sætter pris på at budskabet spredes." },
        { question: "Skriver Magnora Marketing gæsteindlæg for andre medier?", answer: "Ja – vi samarbejder med brancherelevante medier og platforme. Kontakt os hvis du er interesseret i et samarbejde." },
        { question: "Er artiklerne tilgængelige på engelsk?", answer: "Primært skriver vi på dansk, men vi har udvalgte artikler og materialer på engelsk til internationale kunder." },
        { question: "Kan jeg citere Magnora Marketing's artikler i mit eget indhold?", answer: "Ja – du er velkommen til at citere vores artikler med reference til magnoramarketing.dk som kilde." },
      ]} />
      <CTASection
        title="Hold dig opdateret – og lad Magnora Marketing drive din vækst"
        subtitle="Læs vores seneste artikler om B2B salg, mødebooking og digital vækst – og kontakt os, når du er klar til at komme i gang."
        primaryText="Kontakt Magnora Marketing"
        primaryLink="/kontakt"
        secondaryText="Se ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPage;

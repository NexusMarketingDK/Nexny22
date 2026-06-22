import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, CheckCircle, ArrowRight, Building } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Partnerskab',
      description: 'Vi behandler vores kunders forretning som vores egen og investerer i langvarige samarbejdsrelationer baseret på gensidig tillid.'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Kompetence',
      description: 'Vores team af erfarne salgsprofessionelle og digitale eksperter leverer høj kvalitet i alt, hvad vi gør.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: 'Resultater',
      description: 'Vi sætter klare, målbare mål og holder os selv ansvarlige – din vækst er det eneste succeskriterium, der tæller.'
    }
  ];

  const industries = [
    { name: 'Tech & SaaS', description: 'Stærk track record inden for salg af softwareløsninger og teknologiprodukter.' },
    { name: 'Konsulentbranchen', description: 'Specialiseret erfaring med mødebooking for konsulentvirksomheder og rådgivere.' },
    { name: 'Produktion & Industri', description: 'Solid B2B erfaring inden for industri- og produktionssektoren.' },
    { name: 'Grøn Energi & Klima', description: 'Dedikeret indsats for bæredygtige løsninger og energioptimering.' }
  ];

  return (
    <>
      <SEO
        title="Om Nexny | Vækstpartner inden for Telesalg, Mødebooking og AI"
        description="Lær mere om Nexny – din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver. Stærkt team og dokumenterede resultater."
        canonical="/om-os"
        keywords="Nexny, om os, B2B salg, vækstpartner, mødebooking, digital udvikling, salgspartner"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nexny – din dedikerede vækstpartner
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vi kombinerer erfaren salgskraft med digital ekspertise for at skabe målbare resultater for ambitiøse B2B virksomheder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Om Nexny</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nexny er et resultatdrevet vækstbureau med speciale i B2B mødebooking, telemarketing og digitale løsninger. Vi er stiftet af erfarne salgsprofessionelle med et klart mål: at hjælpe virksomheder med at vinde flere kunder og skabe bæredygtig vækst.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Hos Nexny tror vi på, at den bedste vej til vækst går gennem ægte relationer og præcis kommunikation. Vores team arbejder tæt sammen med kunderne om at forstå deres marked, deres kunder og deres unikke værdiskabelse.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi kombinerer menneskelig salgskraft med smarte digitale redskaber og datadrevne metoder. Det giver os mulighed for at skalere indsatsen og levere konsistente, høje resultater – uanset branche eller målgruppe.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Nexny teamsamarbejde og partnerrelationer"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vores kerneværdier</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Disse værdier guider os i vores daglige arbejde og i samarbejdet med kunder og partnere.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Professionel B2B Mødebooking & Telemarketing med Nexny</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                  Nexny er bygget på et fundament af erfaring og resultater. Vores mødebookere og telemarketingkonsulenter er specialister i at åbne døre og skabe dialog med relevante beslutningstagere – på tværs af brancher og virksomhedsstørrelser.
                </p>
                <p className="text-gray-600 mb-4">
                  Vi arbejder struktureret og metodisk. Fra den første lead-kvalificering til det bookede møde sikrer vi, at hvert trin i processen lever op til høje standarder. Det betyder færre no-shows, bedre mødekvalitet og højere konverteringsrater for din salgsstyrke.
                </p>
                <p className="text-gray-600 mb-4">
                  Vores tilgang er altid skræddersyet. Vi dykker ned i din virksomhed, forstår dine produkter og services, og udvikler præcise scripts og kommunikationsstrategier, der resonerer med din målgruppe. Resultatet er møder med reel forretningspotentiale.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Brancheerfaring hos Nexny</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nexny har dyb erfaring med B2B mødebooking og salgsaktiviteter på tværs af industrier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klar til at tage din virksomhed til næste niveau?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tag kontakt til Nexny i dag og hør, hvordan vi kan hjælpe dig med at skabe mere vækst, flere leads og bedre resultater. Vi ser frem til at møde dig.
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kontakt Nexny nu <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <FAQSection faqs={[
        { question: 'Hvornår blev Nexny grundlagt?', answer: 'Nexny har rødder i professionel telemarketing og B2B salg og har hjulpet over 200 virksomheder med at vækste.' },
        { question: 'Hvor er Nexny baseret?', answer: 'Nexny har kontorer i Danmark (Aarhus) og Spanien (Valencia), og betjener kunder i hele Skandinavien og internationalt.' },
        { question: 'Hvad adskiller Nexny fra andre telemarketingbureauer?', answer: 'Nexny kombinerer menneskelig salgskraft med datadrevne metoder og digitale løsninger – alt under ét tag. Vi fokuserer altid på ROI og dokumenterede resultater.' },
        { question: 'Arbejder I med store og små virksomheder?', answer: 'Ja – vi samarbejder med virksomheder i alle størrelser, fra iværksættere til etablerede B2B virksomheder.' },
        { question: "Hvad er Nexny's vision?", answer: "Nexny's vision er at være Danmarks mest effektive vækstpartner for B2B virksomheder – ved at kombinere menneskelig salgskraft med digitale løsninger." },
        { question: "Hvem er typisk kunden hos Nexny?", answer: "Vores typiske kunde er en B2B virksomhed med et klart produkt eller service, der ønsker at vækste hurtigt uden at ansætte et stort internt salgsteam." },
        { question: "Er Nexny certificeret eller brancheorganiseret?", answer: "Nexny opererer i overensstemmelse med dansk markedsføringslov og branchestandarder for telemarketing og B2B salg." },
        { question: "Hvad er Nexny's værdier?", answer: "Vores tre kerneværdier er: Resultater (vi leverer det vi lover), Transparens (åben kommunikation og rapportering) og Partnerskab (vi ser os som din partner, ikke leverandør)." },
        { question: "Hvad er størrelsen på Nexny's team?", answer: "Nexny har et kernehold af specialister suppleret med et netværk af erfarne freelance sælgere der kan mobiliseres hurtigt." },
        { question: "Har Nexny vundet priser eller anerkendelse?", answer: "Nexny er anerkendt af sine kunder for høj service og dokumenterede resultater. Vi deler gerne referencer og cases ved henvendelse." },
        { question: "Hvad er Nexny's tilgang til kvalitetssikring?", answer: "Vi QA-tjekker løbende samtaler, scripts og resultater. Kvalitet er altid vigtigere end volumen hos Nexny." },
        { question: "Er Nexny GDPR-compliant?", answer: "Ja – alle processer, databaser og kommunikation hos Nexny er i fuld overensstemmelse med GDPR og dansk databeskyttelseslovgivning." },
        { question: "Hvad sker der, hvis min kontaktperson hos Nexny skifter?", answer: "Vi sikrer altid en grundig overdragelse og kontinuitet i samarbejdet. Du mister aldrig viden eller momentum ved personskifte." },
        { question: "Kan jeg besøge Nexny's kontor?", answer: "Ja – vi har kontorer i Aarhus, Danmark og Valencia, Spanien. Kontakt os for at aftale et besøg." },
      ]} />
      <CTASection
        title="Lær os bedre at kende – tag en snak med teamet"
        subtitle="Vi er klar til at fortælle mere om vores tilgang, resultater og samarbejdsmodeller."
        primaryText="Kontakt Nexny"
        primaryLink="/kontakt"
        secondaryText="Se vores ydelser"
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default AboutPage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Calendar, ArrowRight, Mail } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  useEffect(() => {
    document.title = 'Blog | Telemarketing & Mødebooking Insights | Nexus Marketing';
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: '13',
      slug: 'saas-loesninger-2026',
      title: 'SaaS-løsninger i 2026: Tendenser og muligheder for moderne virksomheder',
      excerpt: 'Udforsk de nyeste tendenser inden for SaaS-løsninger i 2026. Fra AI-integration til sikkerhed og skalerbarhed - få indsigt i, hvad der driver SaaS-industrien fremad.',
      category: 'teknologi',
      date: '15. januar 2026',
      author: 'Nexus Marketing',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      id: '14',
      slug: 'ai-automation-2026',
      title: 'AI-automation i 2026: Sådan effektiviserer du din virksomhed',
      excerpt: 'Lær hvordan AI-automation transformerer danske virksomheder i 2026. Konkrete eksempler, ROI-beregninger og best practices for implementering af AI-drevet automatisering.',
      category: 'teknologi',
      date: '22. januar 2026',
      author: 'Nexus Marketing',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg'
    },
    {
      id: '15',
      slug: 'modebooking-2026',
      title: 'Mødebooking i 2026: Sådan booker du flere kvalificerede B2B-møder',
      excerpt: 'Opdateret guide til professionel mødebooking i 2026. Lær de nyeste teknikker, værktøjer og strategier der sikrer flere kvalificerede B2B-møder.',
      category: 'mødebooking',
      date: '18. januar 2026',
      author: 'Nexus Marketing',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg'
    },
    {
      id: '16',
      slug: 'telesalg-2026',
      title: 'Telesalg i 2026: Strategier der konverterer i en digital tidsalder',
      excerpt: 'Komplet guide til effektivt telesalg i 2026. Lær de nyeste teknikker, værktøjer og strategier. Fra compliance til konvertering - alt du behøver at vide.',
      category: 'telemarketing',
      date: '25. januar 2026',
      author: 'Nexus Marketing',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg'
    },
    {
      id: '17',
      slug: 'outbound-sales-2026',
      title: 'Outbound Sales i 2026: Sådan bygger du en skalerbar salgsmotor',
      excerpt: 'Komplet guide til moderne outbound sales i 2026. Lær hvordan du bygger en effektiv outbound-motor med AI, multi-channel tilgange og dokumenterede best practices.',
      category: 'salg',
      date: '28. januar 2026',
      author: 'Nexus Marketing',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    },
    {
      id: '1',
      slug: 'effektive-telemarketing-strategier-2025',
      title: 'Effektive telemarketing-strategier for B2B virksomheder i 2025',
      excerpt: 'Opdagelser og tips til, hvordan din virksomhed kan maksimere resultater gennem moderne telemarketing-teknikker.',
      category: 'telemarketing',
      date: '15. januar 2025',
      author: 'Mette Hansen',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    },
    {
      id: '2',
      slug: 'mødebooking-best-practices',
      title: '7 Best Practices for succesfuld mødebooking i B2B-sektoren',
      excerpt: 'Lær hvordan du kan booke flere kvalificerede møder og optimere din salgsproces gennem effektiv mødebooking.',
      category: 'mødebooking',
      date: '3. december 2024',
      author: 'Anders Nielsen',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      id: '3',
      slug: 'outsourcing-telemarketing-fordele',
      title: 'Fordele ved at outsource din telemarketing til specialister',
      excerpt: 'Hvorfor flere og flere virksomheder vælger at outsource deres telemarketing, og hvordan det kan gavne din bundlinje.',
      category: 'outsourcing',
      date: '21. november 2024',
      author: 'Lars Petersen',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
    },
    {
      id: '4',
      slug: 'freelance-sælger-karriere',
      title: 'Sådan bliver du en succesfuld freelance sælger i 2025',
      excerpt: 'Tips og vejledning til at kickstarte din karriere som freelance sælger eller mødebooker med attraktiv indtjening.',
      category: 'karriere',
      date: '12. oktober 2024',
      author: 'Sofie Jensen',
      image: 'https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg'
    },
    {
      id: '5',
      slug: 'digital-omstilling-telemarketing',
      title: 'Digital omstilling i telemarketing: Trends og muligheder',
      excerpt: 'Hvordan ny teknologi og digitale værktøjer transformerer telemarketingbranchen og skaber nye muligheder.',
      category: 'telemarketing',
      date: '8. september 2024',
      author: 'Nikolaj Andersen',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg'
    },
    {
      id: '6',
      slug: 'salgsscripts-der-virker',
      title: '5 Effektive salgsscripts der øger konverteringsraten',
      excerpt: 'Konkrete eksempler på salgsscripts, der har bevist deres effektivitet i telemarketing og mødebooking.',
      category: 'salg',
      date: '17. august 2024',
      author: 'Louise Thomsen',
      image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg'
    },
    {
      id: '7',
      slug: 'work-life-balance-freelancer',
      title: 'Opnå den perfekte work-life balance som freelancer',
      excerpt: 'Guide til hvordan du som freelance sælger kan skabe den optimale balance mellem arbejde og privatliv.',
      category: 'karriere',
      date: '25. maj 2024',
      author: 'Maria Larsen',
      image: 'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg'
    },
    {
      id: '8',
      slug: 'b2b-partnerskaber-succes',
      title: 'Sådan skaber du succesfulde B2B partnerskaber',
      excerpt: 'Strategisk guide til at etablere og vedligeholde værdifulde partnerskaber i B2B-sektoren.',
      category: 'outsourcing',
      date: '12. marts 2024',
      author: 'Thomas Nielsen',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    },
    {
      id: '9',
      slug: 'remote-sales-tips',
      title: 'Tips til effektivt fjernsalg og remote mødebooking',
      excerpt: 'Bedste praksis og værktøjer til at lykkes med salg og mødebooking når du arbejder remote.',
      category: 'mødebooking',
      date: '8. januar 2024',
      author: 'Peter Hansen',
      image: 'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg'
    },
    {
      id: '10',
      slug: 'ai-telemarketing-fremtiden',
      title: 'AI i telemarketing: Fremtidens muligheder',
      excerpt: 'Hvordan kunstig intelligens revolutionerer telemarketingbranchen og skaber nye jobmuligheder.',
      category: 'telemarketing',
      date: '15. november 2023',
      author: 'Christian Andersen',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      id: '11',
      slug: 'freelancer-indtjening-guide',
      title: 'Maksimer din indtjening som freelance sælger',
      excerpt: 'Konkrete strategier og tips til hvordan du kan øge din indtjening som freelance sælger eller mødebooker.',
      category: 'karriere',
      date: '20. september 2023',
      author: 'Line Pedersen',
      image: 'https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg'
    },
    {
      id: '12',
      slug: 'partner-success-stories',
      title: 'Succeshistorier fra vores samarbejdspartnere',
      excerpt: 'Læs hvordan virksomheder har opnået markante resultater gennem strategisk samarbejde med Nexus Marketing.',
      category: 'outsourcing',
      date: '5. juli 2023',
      author: 'Michael Nielsen',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    }
  ];

  // Filter posts based on active category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Categories for filter
  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'teknologi', name: 'Teknologi' },
    { id: 'telemarketing', name: 'Telemarketing' },
    { id: 'mødebooking', name: 'Mødebooking' },
    { id: 'salg', name: 'Salg' },
    { id: 'outsourcing', name: 'Outsourcing' },
    { id: 'karriere', name: 'Karriere' }
  ];

  // Featured post - using the first post
  const featuredPost = blogPosts[0];

  // Recent posts - excluding the featured one
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <>
      <SEO 
        title="Blog | Telemarketing & Mødebooking Insights | Nexus Marketing"
        description="Få de seneste insights, tips og strategier inden for B2B telemarketing, mødebooking og salg. Ekspert viden der hjælper din virksomhed med at vækste."
        canonical="/blog"
      />

      <HeroSection
        title="Blog: Insights om Telemarketing & Mødebooking"
        subtitle="Få de seneste nyheder, trends og ekspertråd inden for B2B telemarketing, mødebooking og salg."
        ctaText="Se seneste indlæg"
        ctaLink="#blog-posts"
        backgroundImage="https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg"
      />

      <section className="section bg-white" id="blog-posts">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Udvalgt artikel</h2>
                <div className="card p-0 overflow-hidden transition-all duration-300 hover:shadow-lg fade-in">
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      Udvalgt
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span>{featuredPost.date}</span>
                      <span className="mx-2">•</span>
                      <Tag size={16} className="mr-1" />
                      <span className="capitalize">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to={`/blog/${featuredPost.slug}`} className="hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Af {featuredPost.author}</span>
                      <Link to={`/blog/${featuredPost.slug}`} className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                        Læs mere <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="mb-8 relative">
                <input
                  type="text"
                  placeholder="Søg efter artikler..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {filteredPosts.map((post, index) => (
                    <div key={post.id} className="card p-0 overflow-hidden transition-all duration-300 hover:shadow-lg fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={16} className="mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Tag size={16} className="mr-1" />
                          <span className="capitalize">{post.category}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                          <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Af {post.author}</span>
                          <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center text-sm">
                            Læs mere <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">Ingen artikler matcher dine søgekriterier.</p>
                  <button 
                    onClick={() => { setActiveCategory('all'); setSearchTerm(''); }} 
                    className="mt-4 text-blue-600 font-medium"
                  >
                    Nulstil filtre
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                      Forrige
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                      Næste
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Recent Posts */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Seneste artikler</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-md mr-3 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-2 text-sm">
                          <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Kategorier</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <li key={category.id} className="flex items-center justify-between">
                      <button 
                        onClick={() => setActiveCategory(category.id)}
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                      >
                        {category.name}
                      </button>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.category === category.id).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Mail size={24} className="mr-3" />
                  <h3 className="text-xl font-semibold">Nyhedsbrev</h3>
                </div>
                <p className="mb-4 text-sm">Få de seneste artikler, tips og nyheder om telemarketing og mødebooking direkte i din indbakke.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Din e-mail adresse" 
                    className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-white bg-blue-700 text-white placeholder-blue-200 text-sm"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-white text-blue-600 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
                  >
                    Tilmeld
                  </button>
                </form>
              </div>

              {/* CTA Box - Telemarketing Services */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-3">Brug for hjælp til telemarketing?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Vi tilbyder professionel telemarketing og mødebooking for B2B virksomheder. Kontakt os for et uforpligtende tilbud.
                </p>
                <div className="space-y-2">
                  <Link to="/samarbejdspartner" className="btn btn-primary w-full text-center text-sm">
                    Bliv samarbejdspartner
                  </Link>
                  <Link to="/priser" className="btn btn-secondary w-full text-center text-sm">
                    Se vores priser
                  </Link>
                </div>
              </div>

              {/* CTA Box - Freelancer */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Bliv freelance sælger</h3>
                <p className="text-green-700 mb-4 text-sm">
                  Er du en dygtig sælger eller mødebooker? Bliv en del af vores team og få fleksible arbejdstider og attraktiv aflønning.
                </p>
                <div className="space-y-2">
                  <Link to="/jobs/arbejd-hjemmefra" className="btn bg-green-600 text-white hover:bg-green-700 w-full text-center text-sm">
                    Arbejd hjemmefra
                  </Link>
                  <Link to="/freelance-telemarketing" className="btn bg-white text-green-600 border border-green-600 hover:bg-green-50 w-full text-center text-sm">
                    Se alle stillinger
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
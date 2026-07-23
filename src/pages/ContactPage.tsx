import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const addressLines = t('contact.info.addressLines', { returnObjects: true }) as string[];
  const accessList = t('contact.seoBlock.accessList', { returnObjects: true }) as string[];
  const faqs = t('contact.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <>
      <SEO
        title={t('contact.seo.title')}
        description={t('contact.seo.description')}
        canonical="/kontakt"
        keywords={t('contact.seo.keywords')}
      />

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">{t('contact.header.title')}</h1>
            <p className="text-lg text-gray-600">{t('contact.header.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-2">{t('contact.form.title')}</h2>
                <p className="text-gray-500 text-sm mb-7">{t('contact.form.subtitle')}</p>
                <ContactForm sourceLabel="Kontaktsiden" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium text-lg mb-3">{t('contact.info.companyName')}</h3>
                    <div className="flex items-start">
                      <MapPin size={24} className="text-blue-600 mr-4 mt-1" />
                      <p className="text-gray-600">
                        {addressLines.map((line, i) => (
                          <React.Fragment key={i}>{line}{i < addressLines.length - 1 && <br />}</React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">{t('contact.info.emailLabel')}</h3>
                      <p className="text-gray-600">
                        <a href="mailto:mail@magnoramarketing.dk" className="hover:text-blue-600">mail@magnoramarketing.dk</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">{t('contact.info.websiteLabel')}</h3>
                    <p className="text-gray-600">
                      <a href="https://www.magnoramarketing.dk" className="hover:text-blue-600">www.magnoramarketing.dk</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">{t('contact.hours.title')}</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>{t('contact.hours.monThu')}</span>
                    <span>8:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.fri')}</span>
                    <span>8:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.weekend')}</span>
                    <span>{t('contact.hours.closed')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Optimized Content */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.seoBlock.title')}</h2>
            <div className="prose max-w-none">
              <p className="mb-4">{t('contact.seoBlock.p1')}</p>
              <p className="mb-4">{t('contact.seoBlock.p2')}</p>
              <p className="mb-4">{t('contact.seoBlock.p3')}</p>
              <ul className="list-disc pl-6 mb-4">
                {accessList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{t('contact.seoBlock.p4')}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('contact.seoText1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('contact.seoText1.p1')}</p>
            <p className="text-gray-600 mb-6">{t('contact.seoText1.p2')}</p>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('contact.seoText2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('contact.seoText2.p1')}</p>
            <p className="text-gray-600 mb-4">{t('contact.seoText2.p2')}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title={t('contact.finalCta.title')}
        subtitle={t('contact.finalCta.subtitle')}
        primaryText={t('contact.finalCta.primary')}
        primaryLink="/ydelser"
        secondaryText={t('contact.finalCta.secondary')}
        secondaryLink="/priser"
      />
    </>
  );
};

export default ContactPage;

import ru from '@/locales/ru.json'
import { absoluteUrl } from './seo'
import { siteConfig } from './site'

const HOW_WE_WORK_STEPS = ['step1', 'step2', 'step3', 'step4'] as const

export function buildHomeJsonLd() {
  const faqItems = ru.seo.faq

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.name,
        url: siteConfig.url,
        slogan: siteConfig.seo.slogan,
        email: siteConfig.email,
        description: siteConfig.descriptionRu,
        knowsAbout: siteConfig.seo.knowsAbout,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: siteConfig.email,
            url: siteConfig.telegramOperatorUrl,
            availableLanguage: ['Russian', 'English'],
            areaServed: siteConfig.seo.areaServed,
          },
        ],
        sameAs: [siteConfig.telegramChannelUrl, siteConfig.telegramOperatorUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.descriptionRu,
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: ['ru', 'en'],
        potentialAction: [
          {
            '@type': 'CommunicateAction',
            target: absoluteUrl('/#kontakt'),
            name: 'Оставить заявку',
          },
          {
            '@type': 'ReadAction',
            target: absoluteUrl('/blog'),
            name: 'Читать блог CardProc',
          },
        ],
      },
      {
        '@type': 'FinancialService',
        '@id': `${siteConfig.url}/#service`,
        name: `${siteConfig.name} — процессинг Stripe`,
        description: siteConfig.descriptionRu,
        url: siteConfig.url,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: siteConfig.seo.areaServed.map((name) => ({
          '@type': 'Place',
          name,
        })),
        serviceType: [
          'Stripe payment processing',
          'Stripe account setup',
          'Payment routing',
          'International payment acceptance',
          'High-risk payment processing',
        ],
        termsOfService: absoluteUrl('/privacy'),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Услуги процессинга Stripe',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Компания + банк + Stripe под ключ',
                url: absoluteUrl('/#services'),
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Процессинг платежей от 1.5%',
                url: absoluteUrl('/#services'),
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Прогретые Stripe-аккаунты',
                url: absoluteUrl('/#accounts'),
              },
            },
          ],
        },
        offers: {
          '@type': 'Offer',
          name: 'Процессинг Stripe от 1.5%',
          description:
            'Подключение Stripe-аккаунта, прогретые аккаунты, CRM и вывод средств без ограничений.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1.5',
            priceCurrency: 'USD',
            unitText: 'percent commission',
          },
          availability: 'https://schema.org/InStock',
          url: absoluteUrl('/#kontakt'),
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.titleRu,
        description: siteConfig.descriptionRu,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#service` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl(siteConfig.ogImage),
        },
        inLanguage: ['ru', 'en'],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '#faq-heading'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${siteConfig.url}/#how-to`,
        name: ru.howWeWork.heading,
        description:
          'Как CardProc подключает Stripe: юрлицо, банк, аккаунт, отчётность и поддержка экспертов.',
        totalTime: 'P3D',
        step: HOW_WE_WORK_STEPS.map((key, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: ru.howWeWork[key].title,
          text: ru.howWeWork[key].desc,
          url: absoluteUrl('/#how-we-work'),
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${siteConfig.url}/#services-list`,
        name: 'Услуги CardProc',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Компания + банк + Stripe под ключ',
            url: absoluteUrl('/#services'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Процессинг платежей от 1.5%',
            url: absoluteUrl('/#services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Прогретые Stripe-аккаунты',
            url: absoluteUrl('/#accounts'),
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Бесплатная консультация эксперта',
            url: absoluteUrl('/#kontakt'),
          },
        ],
      },
    ],
  }
}


export const projects = [
    {
        client: 'sarah haran',
        title: 'Lets find the perfect bag for you',
        description:
          'online destination for premium luxury bags. Indulge in our curated collection of designer pieces without the retail markup. Elevate your style with timeless elegance.',
        summary: [
          'online destination for premium luxury bags. Indulge in our curated collection of designer pieces without the retail markup. Elevate your style with timeless elegance.',
          'As a Shopify agency, we meticulously craft your online store to ensure a seamless, premium shopping experience. Elevate your style, effortlessly.',
        ],
        logo: "/images/sarah.avif",
        image: { src: "/images/sarah.png" },
        date: '2023-01',
        service: 'Web development, CMS',
        testimonial: {
          author: { name: 'sarah haran', role: 'CEO of sarah haran' },
          content:
            'Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.',
        },
        href: "/work/sarah-work",
        "slug": "sarah-work",
        improvements:[
          {
            scale: "50%",
            title: "more traffic",
          },
          {
            scale: "10x",
            title: "page load time",
          },
          {
            scale: "15% >",
            title: "Increase in revenue",
          },
          {
            scale: "300%",
            title: "customer satisfaction",
          }

        ]
    },
    {
        client: 'Flamejars',
        title: 'FlameJars: Illuminate Moments',
        description:
          'Light up your memories with FlameJars, an innovative candle company dedicated to crafting unique candles that do more than illuminate your spaces; they encapsulate and bring to life your most cherished moments.',
        summary: [
          'Light up your memories with FlameJars, an innovative candle company dedicated to crafting unique candles that do more than illuminate your spaces; they encapsulate and bring to life your most cherished moments.',
        ],
        logo: "https://flamejars.com/cdn/shop/files/logo_160x@2x.svg?v=1689722283",
        image: { src: "/images/work/flamejars.png" },
        date: '2022-06',
        service: 'Web development, seo, ads development',
        testimonial: {
          author: { name: 'shiva kandel', role: 'CPO of flamejars' },
          content:
            'The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.',
        },
        href: "/work/flamejars-work",
        slug: "flamejars-work",
        improvements:[
          {
            scale: "50%",
            title: "more traffic",
          },
          {
            scale: "10x",
            title: "page load time",
          },
          {
            scale: "15% >",
            title: "Increase in revenue",
          },
          {
            scale: "300%",
            title: "customer satisfaction",
          }

        ]
    },
    {
        client: 'madsen',
        title: 'Madsen Cycles: Carry Your World',
        description:
          'Madsen Cycles offers innovative cargo bikes designed for everyday transportation needs. With a focus on quality, safety, and practicality, their signature bucket bikes provide a fun, eco-friendly way for families to carry children, groceries, and more, turning everyday trips into adventures.',
        summary: [
          'Madsen Cycles offers innovative cargo bikes designed for everyday transportation needs. With a focus on quality, safety, and practicality, their signature bucket bikes provide a fun, eco-friendly way for families to carry children, groceries, and more, turning everyday trips into adventures.',
        ],
        logo: "//www.madsencycles.com/cdn/shop/files/M_stripe_white_370x.png?v=1676482234",
        image: { src: "/images/work/madsen.png" },
        date: '2020-10',
        service: 'Web development, Seo, Ads Development',
        testimonial: {
          author: { name: 'Smith Grant', role: 'Head of Engineering at madsen' },
          content:
            'Exceptional team! Their expertise in development, SEO, and ads not only boosted our online presence but also significantly increased our sales and customer engagement. Highly recommended for any business looking to thrive online.',
        },
        href: "/work/madsen-work",
        "slug": "madsen-work",
        improvements:[
          {
            scale: "50%",
            title: "more traffic",
          },
          {
            scale: "10x",
            title: "page load time",
          },
          {
            scale: "15% >",
            title: "Increase in revenue",
          },
          {
            scale: "300%",
            title: "customer satisfaction",
          }

        ]
    },
    {
      client: 'AsaNA REBEL',
      title: 'It is time to be a rebel',
      description:
        'Our holistic approach and user-friendly platform make it easier for people of all fitness levels to start and sustain a healthier and more balanced lifestyle.',
      summary: [
        'Our holistic approach and user-friendly platform make it easier for people of all fitness levels to start and sustain a healthier and more balanced lifestyle.',
        'Asana Rebel is a digital wellness company that provides a comprehensive and customizable app, offering yoga exercises, guided meditations, and wellness content to empower individuals in their physical and mental wellbeing journey.',
      ],
      logo: "https://asanarebel.com/assets/img/white_logo.png",
      image: { src: "/images/work/asana.png" },
      date: '2022-10',
      service: 'Web development, Seo, Ads Development',
      testimonial: {
        author: { name: 'Beth and Harry', role: 'Founders' },
        content:
          "We at Asana Rebel couldn't be happier with the services provided by shopifyfirst. Their expertise in SEO, web development, and advertising has significantly enhanced our online presence and user engagement. The team is professional, responsive, and consistently exceeds our expectations. We highly recommend FlameJars for any business seeking to optimize its digital presence and drive success.",
      },
      href: "/work/asana-work",
      "slug": "asana-work",
      improvements:[
        {
          scale: "50%",
          title: "more traffic",
        },
        {
          scale: "10x",
          title: "page load time",
        },
        {
          scale: "15% >",
          title: "Increase in revenue",
        },
        {
          scale: "300%",
          title: "customer satisfaction",
        }

      ]
  },
    
]

export function getProjectBySlug(slug:string){
    if(slug == "sarah-work"){
        return projects[0]
    }else if(slug == "flamejars-work"){
        return projects[1]
    }else if(slug == "madsen-work"){
        return projects[2]
    }else if(slug == "asana-work"){
      return projects[3]
  }
}


export function getAllProjects(){
    return  projects;
}
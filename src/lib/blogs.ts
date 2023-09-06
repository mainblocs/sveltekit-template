export interface Article {
    date: string;
    title: string;
    description: string;
    author: {
      name: string;
      role: string;
      image: {
        src: string;
      };
    };
    href: string;
    slug: string;
    sections: {
      title: string;
      content: {
        type: string;
        data: {
          text?: string;
          src?: string;
        };
      }[];
    }[];
}
export let articles:Article[] = [
    {
        date: '2023-02-18',
        title: '3 Lessons We Learned Going Back to the Office',
        description:
          'Earlier this year we made the bold decision to make everyone come back to the office full-time after two years working from a dressing table in the corner of their bedroom.',
        author: {
          name: 'Andrea Maxwell',
          role: 'Developer',
          image: { src: "/images/team/leslie-alexander.jpg" },
        },
        href :"/blog/3-lessons-we-learned-going-back-to-the-office",
        slug: "3-lessons-we-learned-going-back-to-the-office",
        sections: [
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
        ]
    },
    {
        date: '2022-12-01',
        title: 'A Short Guide to Component Naming',
        description:
          'As a developer,  the most important aspect of your job is naming components. It’s not just about being descriptive and clear, but also about having fun and being creative.',
        author: {
          name: 'Rachel Smith',
          role: 'Designer / Developer',
          image: { src: "/images/team/angela-fisher.jpg" },
        },
        href: '/blog/a-short-guide-to-component-naming',
        slug: "a-short-guide-to-component-naming",
        sections: [
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
        ]
    },
    {
        date: '2023-04-06',
        title: 'The Future of Web Development: Our Predictions for 2023',
        description:
          'Let’s explore the latest trends in web development, and regurgitate some predictions we read on Twitter for how they will shape the industry in the coming year.',
        author: {
          name: 'Kerry Hagon',
          role: 'Senior Developer',
          image: { src: "/images/team/chelsea-hagon.jpg" },
        },
        href: "/blog/future-of-web-development",
        slug: "future-of-web-development",
        sections: [
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
          {
            title: 'AI Assisted Development',
            content:[
                {
                  type: 'paragraph',
                  data:{
                    text:  'With the launch of Github Copilot in 2022 the industry got its first glimpse at what it would look like to have Stack Overflow plumbed straight into your IDE. Copilot has given thousands of developers what they always longed for: plausible deniability over the bugs they write.',
                  }
                },
                {
                  type: 'image',
                  data: {
                    src: 'https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1200&q=75',
                  },
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'In 2023 we can expect these assistants to become more sophisticated and for that to have ripple effects throughout the industry.',
                  }
                },
                {
                  type: 'paragraph',
                  data:{
                    text:  'We predict that traffic to MDN will decline precipitously as developers realise they no longer need to look up JS array methods. We also expect Stack Overflow’s sister site, Prompt Overflow, to become one of the most popular sites on the internet in a matter of months.',
                }
              }
          ]
             
          },
        ]
    }
]
export function getArticleBySlug(path:string):Article{
    if(path == "3-lessons-we-learned-going-back-to-the-office"){
        return articles[0]
    }else if(path == "a-short-guide-to-component-naming"){
        return articles[1]
    }else if(path == "future-of-web-development"){
        return articles[2]
    }
    return articles[0]
}


export function getAllArticles():Article[]{
    return articles
}
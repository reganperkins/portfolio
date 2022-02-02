export const projects = [
  {
    id: 'Modernizing',
    title: 'Modernizing',
    description: 'Dribbble is a ten year old Rails app. In the time I have been here we have made massive gains in feature release cadence, increasing code clarity and onboarding new developers.',
    layout: 'right',
    topics: [
      {
        title: 'Storybook',
        description: 'I helped implement Storybook in our process, allowing us to build UI components and pages in isolation. Storybook makes QA, adding new behavior, and adding documentation easier, and allows us to develop without interference.'
      },
      {
        title: 'Tooling',
        description: 'I set up our Eslint and Prettier, standardized our usage of tools like Bundle Wizard, Caliber, and Lighthouse. Using the aforementioned tools we have made our site increasingly more preferment and code consistent.'
      },
      {
        title: 'Vue',
        description: 'Vue has made our development easier, enabling us to build up a component library that matches our design system, better testing tools, built-in reactivity, and easy readability.',
      },
      {
        title: 'Developer guide',
        description: 'I helped to create our internal development guide to help onboard new users. It outlines important concepts like lazyloading, responsive images, using scoped styles and patterns for testing.',
      },
    ],
    sources: [
      // {
      //   type: 'image/webp',
      //   sizes: '(min-width: 1199px) 600px, 100%',
      //   srcSet: '/images/projects/modernize-600.webp 620w, /images/projects/modernize-1100.webp 1100w, /images/projects/modernize-1400.webp 1400w'
      // },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/modernize-600.png 620w, /images/projects/modernize-1100.png 1100w, /images/projects/modernize-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/modernize-600.png'
  },
  {
    id: 'Dribbble',
    title: 'Dribbble 1.5',
    description: 'A completely new look for Dribbble, this was a massive undertaking with a fairly tight deadline. It involved working closely with many parties including project managers, leadership and the design team to plan and execute.',
    layout: 'left',
    topics: [
      {
        title: 'First major update in ten years',
        description: 'I worked to update all our colour schemes, form elements, icons, as well as our default padding, margins, and basic elements. Because we needed to launch this all at once we used a webpack-level feature flag to keep showing the old styles while building the new.'
      },
      {
        title: 'A shared ecosystem',
        description: 'Previous to the re-skin Dribbble did not have a set design system. This meant that every time a dropdown was needed there was a good chance a new one would be created. In order to put an end to the madness and ensure that design and engineering were in-sync I worked to create a shared design system and component library. This has since greatly improved the time it takes to develop new features and the cohesiveness of our site.',
      }
    ],
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/dribbble-600.webp 620w, /images/projects/dribbble-1100.webp 1100w, /images/projects/dribbble-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/dribbble-600.png 620w, /images/projects/dribbble-1100.png 1100w, /images/projects/dribbble-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/dribbble-600.png'
  },
  {
    id: 'Marketplace',
    title: 'Marketplace',
    description: 'I was the Lead Engineer on the new marketplace project, this was the biggest change to our marketplace ever. I scoped out the requirements, ticketed the project into tasks, guided other developers on the team at the time of implementation, and included tech debt tasks into the project.',
    layout: 'right',
    topics: [
      {
        title: 'Product upload flow',
        description: 'A complete re-write of our product upload flow, this change also splits a \'good\' (item for sale) into its own first-world citizen.'
      },
      {
        title: 'A central marketplace',
        description: 'Created a new marketplace hub with suggested goods, daily features, search, filters, and category pages.'
      },
      {
        title: 'Admin queue',
        description: 'Mentored a junior dev on using Vue, project scoping, and helped them create our new admin review queue for posted \'goods\'.'
      },
      {
        title: 'Refactored old (hairy) code',
        description: 'Our concept of shots and shots as a \'good\' is old highly coupled code. I took this opportunity to refactor and clean up that logic.'
      },
    ],
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/marketplace-600.webp 620w, /images/projects/marketplace-1100.webp 1100w, /images/projects/marketplace-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/marketplace-600.png 620w, /images/projects/marketplace-1100.png 1100w, /images/projects/marketplace-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/marketplace-600.png'
  },
  {
    id: 'Navigation',
    title: 'Update Navigation',
    description: '',
    layout: 'hero',
    topics: [
      {
        title: 'Easily surface information',
        description: 'I have added the last two versions of the navigation on Dribbble. Each change has dramatically increased our user\'s ability to access what they want.'
      },
      {
        title: 'Better data analytics',
        description: 'Leveraging Iteratively events to better understand our users in order tailor a better experience.'
      },
      {
        title: 'Increased click through rate',
        description: 'Driving traffic to revenue generating pages and surface the pages users want more readily.'
      },
    ],
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 1300px, 100%',
        srcSet: '/images/projects/nav-600.webp 620w, /images/projects/nav-1100.webp 1100w, /images/projects/nav-1900.webp 1900w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 1300px, 100%',
        srcSet: '/images/projects/nav-600.png 620w, /images/projects/nav-1100.png 1100w, /images/projects/nav-1900.png 1900w'
      }
    ],
    width: '1300',
    height: '437',
    src: '/images/projects/nav-600.png'
  },
  {
    id: 'Search',
    title: 'Designer Search',
    description: 'One of Dribbble\'s bigger projects and one I was lead on. This turned out to be one of the biggest revenue streams for Dribbble; helping our users find the perfect fit for their company.',
    layout: 'right',
    topics: [
      {
        title: 'Saved Searches',
        description: 'Allow clients to name and save their filters, bookmarks and conversations for perspective roles.'
      },
      {
        title: 'Advanced Filtering',
        description: 'Allows for the filtering of talent based on their settings and preferences.'
      },
      {
        title: 'Marketing',
        description: 'For marketing the Designer Search platform I created an email drip campaign and set up Facebook pixel and Linkedin Ads.'
      },
      {
        title: 'Responsive',
        description: 'This design works flawlessly on desktop and mobile platforms and utilizes responsive images and lazyloading.'
      },
    ],
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/designer-search-600.webp 620w, /images/projects/designer-search-1100.webp 1100w, /images/projects/designer-search-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/designer-search-600.png 620w, /images/projects/designer-search-1100.png 1100w, /images/projects/designer-search-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/designer-search-600.png'
  },
  {
    id: 'Job',
    title: 'Job Board',
    description: 'Though a simple project I scoped, planned and created these pages and filters that showcase jobs relevant to our community.',
    layout: 'left',
    topics: [
      {
        title: 'Posting jobs',
        description: 'Allow the posting of new roles when a user purchases a job board listing.'
      },
      {
        title: 'Filtering roles',
        description: 'Created param based filters to help users find the jobs they want.'
      },
    ],
    desktopImage: 'job-board.png',
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/job-board-600.webp 620w, /images/projects/job-board-1100.webp 1100w, /images/projects/job-board-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/job-board-600.png 620w, /images/projects/job-board-1100.png 1100w, /images/projects/job-board-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/job-board-600.png'
  },
  {
    id: 'Workshops',
    title: 'Workshops',
    description: 'A new addition to our revenue stream, Dribbble workshops are added frequently and we needed a solution that enabled us to quickly add new events without taking developer time to implement',
    layout: 'right',
    topics: [
      {
        title: 'Quick rollout of new events',
        description: 'Since we need to regularly update and create new workshop pages I utilized ERB templates and a YAML file to make adding new pages a breeze.'
      },
      {
        title: 'Eventbrite',
        description: 'I set up Eventbrite as an intermediary way of collecting payments while we build our own purchase funnel.'
      },
      {
        title: 'Workshop pages',
        description: 'Each workshop has its own page also created via ERB template and YAML file.'
      },
    ],
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/learn-600.webp 620w, /images/projects/learn-1100.webp 1100w, /images/projects/learn-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/learn-600.png 620w, /images/projects/learn-1100.png 1100w, /images/projects/learn-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/learn-600.png'
  },
  {
    id: 'Login',
    title: 'Login',
    description: '',
    layout: 'left',
    topics: [
      {
        title: 'Google Authentication',
        description: 'I implemented Google One tap for quick and easy logins, this increased our login rate dramatically'
      },
      {
        title: 'Clean User Interface',
        description: 'With logins simplicity is key, the updated login and sign up pages are clear, clean and convenient'
      },
    ],
    
    sources: [
      {
        type: 'image/webp',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/login-600.webp 620w, /images/projects/login-1100.webp 1100w, /images/projects/login-1400.webp 1400w'
      },
      {
        type: 'image/jpg',
        sizes: '(min-width: 1199px) 600px, 100%',
        srcSet: '/images/projects/login-600.png 620w, /images/projects/login-1100.png 1100w, /images/projects/login-1400.png 1400w'
      }
    ],
    width: '618',
    height: '408',
    src: '/images/projects/login-600.png'
  },
];

export default projects;
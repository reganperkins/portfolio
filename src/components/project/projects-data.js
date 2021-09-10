export const projects = [
  {
    id: 'Modernizing',
    title: 'Modernizing',
    description: 'Dribbble is a ten year old Rails app. In the time I have been here we have made massive gains in feature release cadence, increasing code clarity and onboarding new developers',
    containerClass: 'right-section',
    topics: [
      {
        title: 'Storybook',
        description: 'Building UI components and pages in isolation makes it easier to QA, add new behavior after a component has been made, and develop without interference.'
      },
      {
        title: 'Tooling',
        description: 'I set up our Eslint, Prettier, and increased usage of tools like Bundle Wizard and Lighthouse which have made our site more preferment and code consistent.'
      },
      {
        title: 'Vue',
        description: 'Vue has made our development easier with the addition of a component library that matches our design system, better testing tools, built in reactivity and easy readability.',
      },
      {
        title: 'Developer guide',
        description: 'I helped to create our internal development guide which helps onboard new users. It outlines important concepts like lazyloading, responsive images, using scoped styles and patterns for testing.',
      },
    ],
    desktopImage: 'login.png',
  },
  {
    id: 'Dribbble',
    title: 'Dribbble 1.5',
    description: 'A completely new look for Dribbble, this was a massive under takeing with a fairly tight deadline. It involved working closely with many parties including project managers, leadership and the design team to plan and execute.',
    containerClass: 'left-section',
    topics: [
      {
        title: 'First major update in 10 years',
        description: 'I worked to update all our color schemes, form elements, icons, as well as our default padding, margins, and basic elements. Because we needed to launch this all at once we used a webpack-level feature flag to keep showing the old styles well building the new.'
      },
      {
        title: 'A shared ecosystem',
        description: 'Previous to the re-skin Dribbble did not have a set design system. This meant that every time a dropdown was needed there was a good chance a new one would be created. In order to put an end to the madness and ensure that design and engineering where in sync I worked to create a shared design system and component library. This has since greatly improved our development time and cohesiveness of our site.',
      }
    ],
    desktopImage: 'dribbble-1-5.png',
  },
  {
    id: 'Marketplace',
    title: 'Marketplace ...coming soon',
    description: 'Front-end lead on the biggest change to our marketplace ever',
    containerClass: 'right-section',
    topics: [
      {
        title: 'Goods upload flow',
        description: 'A complete re-write of our upload flow, this change also splits a \'good\' into its own first world citizen.'
      },
      {
        title: 'A central marketplace',
        description: 'Created a new marketplace hub with suggested goods, daily features, filters and category pages.'
      },
      {
        title: 'Admin queue',
        description: 'Mentored a junior dev on using Vue, project scoping and helped them create our new admin review queue for posted goods.'
      },
      {
        title: 'Refactoring old (hairy) code',
        description: 'Our concept of shots and shots as a good is old highly coupled code. I took this opportunity to refactor and cleanup that logic.'
      },
    ],
    desktopImage: 'marketplace.png',
  },
  {
    id: 'Navigation',
    title: 'Update Navigation',
    description: '',
    containerClass: 'hero-section',
    topics: [
      {
        title: 'Easily surface information',
        description: 'Quick access to the profile, highlighting hiring platforms and job listings, adding quick search.'
      },
      {
        title: 'Better data analytics',
        description: 'Leveraging Iteratively to better understand our users in order tailor a better experience.'
      },
      {
        title: 'Increased click through rate',
        description: 'Driving traffic to revenue generating pages and surface the pages users want.'
      },
    ],
    desktopImage: 'nav.png',
  }, {
    id: 'Search',
    title: 'Designer Search',
    description: 'One of Dribbble\'s bigger projects and one I was lead on. This turned out to be one of the biggest revenue streams for Dribbble; helping our users find the perfect fit for their company.',
    containerClass: 'right-section',
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
        title: 'Responsive',
        description: 'This design works flawlessly on desktop and mobile platforms and utilizes responsive images and lazyloading.'
      },
    ],
    desktopImage: 'designer-search.png',
  },
  {
    id: 'Job',
    title: 'Job Board',
    description: 'Though a simple project I scoped, planned and created these pages and filters that showcase jobs relevant to our community.',
    containerClass: 'left-section',
    topics: [
      {
        title: 'Posting jobs',
        description: 'Allow the posting of new roles when a user purchases a job board listing. Also creating job post details pages.'
      },
      {
        title: 'Filtering roles',
        description: 'Created param based filters to help users find the jobs they want.'
      },
    ],
    desktopImage: 'job-board.png',
  },
  {
    id: 'Workshops',
    title: 'Workshops',
    description: 'A new addition to our revenue stream, Dribbble workshops are added frequently and we needed a solution that enabled us to quickly add new events without taking developer time to implement',
    containerClass: 'right-section',
    topics: [
      {
        title: 'Quick rollout of new events',
        description: 'I utilized ERB templates and a yaml file to easily create new pages.'
      },
      {
        title: 'Responsive layout',
        description: 'I created the templates for the index and workshop pages, these pages.'
      },
      {
        title: 'Eventbrite',
        description: 'Set up Eventbrite as an intermediary way of collecting payments well we build our own.'
      },
    ],
    desktopImage: 'learn.png',
  },
  {
    id: 'Login',
    title: 'Login',
    description: '',
    containerClass: 'left-section',
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
    desktopImage: 'login.png',
  },
];

export default projects;
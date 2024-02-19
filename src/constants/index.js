import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Dang Group Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - February 2024",
    points: [
      "Customizing the banner of the homepage by adding animations using framer motion",
      "Played a pivotal role in the design and development of a scalable an e-commerce web app.",
      "Used Agile development methodologies, including Jira for project management, and utilizing GitHub for version control.", 
      "developed client and server-side functionality of web applications using Node.js(Express), React, and Typescript.", 
      "Managed the deployment process using develops technologies i.e azure-cloud, docker, Jenkins, GitHub actions.", 
      "Collaborated with design and product teams, ensuring the application's functionality met market needs.", 
      "Writing tests i.e., Unit, integration, functional and E2E tests, conducting code reviews, and debugging/troubleshooting issues.",
      "Integrating M-pesa, stripe, and Paypal payment methods into the ecommerce application.", 
      "Customizing the homepage and dashboard logo as required."
     ,
    ],
  },
  {
    title: "React and Python Developer",
    company_name: "Machini Technologies Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - June 2023",
    points: [
      "Created an offline-accessible USSD application  using Django and Africas talking to provide vital and urgent services for the company",
      " Integrated smart waste bins into the system using IoT technology, Django, and PostgreSQL.",
      " Utilized HTML, CSS, JavaScript, and Bootstrap for front-end development to ensure a visually appealing and user-friendly website",
      " Developed a web application for Decarbornizer and Impactivator, serving as a NFT marketplace for talents and sponsors using Python-Django and Rust for the backend, React JS for the frontend, AWS cloud services for hosting, and DynamoDB as the shared database",
      " Worked with a diverse technology stack, including Django, Africas Talking, PostgreSQL, Twilio, HTML, CSS, JavaScript, Bootstrap, Python-Django, Rust, React JS, AWS cloud services, and DynamoDB.",
      " Conducted testing and debugging activities to ensure the reliability and functionality of developed applications.",
      " Implemented best practices for code quality and maintained documentation for future reference."
    ],
  },
  {
    title: "Web Developer",
    company_name: " Ader",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Feb 2023",
    points: [
      " Wrote, tested, debugged, and implemented code to meet user requirements.",
      " Collaborated closely with project managers, developers, clients, testers, and web designers to conceptualize and develop new products.",
      " Designed and built login and register pages from scratch using HTML, CSS, Node.js, React.js, and TypeScript",
      " Implemented authentication mechanisms, including Email, Google, and Facebook authentication, to enhance user security and convenience",
      " Collaborated with testers to ensure the reliability and performance of the user authentication and registration processes",
      " Collaborated with web designers to implement design elements and maintain a cohesive visual style",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Upwork",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "1. Swipe Gestures Collection Platform",
      " Swipe gestures is a flask bootstrap and JavaScript website which detects every gesture of a user. Some major gestures include swipe left, swipe right, zoom in, zoom out, swipe up, swipe down, total number of clicks, maximum swipe speed and minimum swipe speed.",
      " Building and maintaining the server-side logic using Flask.",
      " Implementing data storage, retrieval, and manipulation using databases (e.g., SQLAlchemy in the context of Flask).",
      " Conducting thorough testing of the application, including unit testing and end-to-end testing.",
      " Debugging and resolving issues to ensure a robust and reliable application.",
      " Creating and maintaining comprehensive documentation for the codebase.",
      " Documenting APIs, libraries, and any other relevant components.",
      " Implementing CI/CD pipelines to automate testing and deployment processes",
      "2. Baby Shiba website",
      " Implementing features to showcase NFTs effectively, including displaying images, descriptions, and other relevant metadata.",
      " Incorporating MetaMask integration to facilitate secure wallet management and transactions",
      " Ensuring a seamless connection between the platform and users' MetaMask wallets for buying and selling NFTs.",
      " Working with smart contracts to enable functionalities such as bidding, buying, and selling of NFTs.",
      " Implementing a transaction history feature for users to track their buying and selling activities.",
      " Implementing filters and sorting options to enhance the search and discovery of NFTs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Januaries proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Ader Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like J does.",
    name: "Daniel",
    designation: "COO",
    company: "Dang Group Ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Januaries optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Jade Moore",
    designation: "CTO",
    company: "Baby Shiba",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trendy",
    description:
      "Web-based and mobile platform that allows users to see trending posts and short videos from Instagram and TikTok. The paltform also allows users to create their posts and top creators are shown. The users can also enjoy infinite scrolling posts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Januariesjm/social-media.git",
  },
  {
    name: "Links Market",
    description:
      "Web application that enables users to submit their links for different platforms and get traffic. There are two categories of users, free user and premium user. Free user must click and watch a link inorder to get a watch in his or her link. Premium user subscribes for a package and gets views according to the type of package.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Januariesjm/Lmarket.git",
  },
  {
    name: "Sky Properties",
    description:
      "This is both a real estate advertising platform and properties booking platform. The user can advertise any property for sale or rent from any where in the world. The user can also book a visit to any property advertised for booking.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

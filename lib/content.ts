// All of the homepage's content lives here. To update the site each semester,
// edit these lists; the page components only handle layout.

export const links = {
  email: "datasc@usc.edu",
  slack: "https://usc.enterprise.slack.com/archives/C0B9S4D8MT3",
  instagram:
    "https://www.instagram.com/uscdatasc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  linkedin: "https://www.linkedin.com/company/datasc/",
};

export const semesterBanner = "Fall 2026 · Project teams are underway";

export const wednesdaySchedule = [
  {
    time: "7:00 – 7:45 PM",
    title: "Curriculum session",
    description:
      "Core data science concepts through hands-on lessons and technical workshops.",
  },
  {
    time: "7:50 – 8:10 PM",
    title: "Cohort social",
    description: "Take a break, play a game, get to know your cohort.",
  },
  {
    time: "8:10 – 9:00 PM",
    title: "Project team time",
    description:
      "Work with your team on a real-world project, with guidance from mentors.",
  },
];

export const curriculum = [
  "Intro to data science, the ML pipeline, Pandas basics",
  "Python data structures, NumPy, Series and DataFrames, data I/O",
  "Data cleaning: missing values, types, outliers, merges",
  "Visualization with Matplotlib and Seaborn",
  "Exploratory data analysis and feature engineering",
  "Statistics: probability, sampling, hypothesis tests",
  "scikit-learn, linear regression, cross-validation",
  "Classification: logistic regression, k-NN, metrics",
  "Unsupervised learning: K-Means and PCA",
  "Capstone: analysis, modeling, presentation",
];

export type Project = {
  title: string;
  description: string;
  lead: string;
  image?: string;
  imageDark?: string; // optional alternate image for dark mode
};

export type Semester = "F26" | "S26" | "F25";

export const semesters: { id: Semester; label: string; blurb: string }[] = [
  {
    id: "F26",
    label: "Fall 2026",
    blurb: "Fall 2026 project teams.",
  },
  { id: "S26", label: "Spring 2026", blurb: "Spring 2026 project teams." },
  { id: "F25", label: "Fall 2025", blurb: "Fall 2025 project teams." },
];

export const projects: Record<Semester, Project[]> = {
  F26: [
    {
      title: "SafeShift: workplace injury early warning",
      description: "Forecasting injury burden from U.S. occupational safety data.",
      lead: "Ian Xie",
      image: "/projects/f26-ian.jpg",
    },
    {
      title: "GridShift NYC",
      description: "Forecasting taxi and rideshare demand across NYC zones.",
      lead: "Abhishek Sarepaka",
      image: "/projects/f26-abhishek.jpg",
    },
    {
      title: "Sentiment analysis on COVID-19 over the years",
      description: "How public discourse shifted across lockdowns, vaccines and reopenings.",
      lead: "Aaron Lo",
      image: "/projects/f26-aaron.jpg",
    },
    {
      title: "Predicting deterioration in bilateral relations",
      description: "Early warning signals before relations between countries break down.",
      lead: "Allegra Chen",
      image: "/projects/f26-allegra.jpg",
    },
    {
      title: "News headlines and the stock market",
      description: "Does headline sentiment move a company's stock price?",
      lead: "Ananya Hari",
      image: "/projects/f26-ananya.jpg",
    },
    {
      title: "UMUD Challenge: muscle architecture in ultrasound",
      description: "A Kaggle competition on automated ultrasound measurement.",
      lead: "Dominic Woetzel",
      image: "/projects/f26-dominic.jpg",
    },
    {
      title: "Diabetes risk prediction",
      description: "Interpretable models on 253,000+ CDC survey responses.",
      lead: "Kyle Matsui",
      image: "/projects/f26-kyle.jpg",
      imageDark: "/projects/f26-kyle-dark.jpg",
    },
    {
      title: "Group-based restaurant recommender",
      description: "Finding restaurants that fit a whole group's taste.",
      lead: "Trisha Tjokrosapoetro",
      image: "/projects/f26-trisha.jpg",
      imageDark: "/projects/f26-trisha-dark.jpg",
    },
    {
      title: "Marketing strategy for USC Viterbi",
      description: "Which marketing helps USC Viterbi increase its reach?",
      lead: "Edison Zhong",
      image: "/projects/f26-edison.jpg",
      imageDark: "/projects/f26-edison-dark.jpg",
    },
  ],
  S26: [
    {
      title: "Stanford RNA 3D Folding Part 2",
      description: "A Kaggle competition focused on predicting RNA 3D structures.",
      lead: "Dominic Woetzel",
      image: "/RNA.jpg",
    },
    {
      title: "Mapping LA healthcare access gaps",
      description: "A spatial analytics project identifying gaps in LA healthcare access.",
      lead: "Olena Khetan",
      image: "/health.jpg",
    },
    {
      title: "NBA performance prediction",
      description: "A sports analytics project forecasting NBA player performance.",
      lead: "Colin Quan Leung & Nolen Johnson",
      image: "/NBA.jpeg",
    },
  ],
  F25: [
    {
      title: "Hull Tactical Kaggle competition",
      description: "Financial market prediction using machine learning.",
      lead: "Ojas Nimase",
      image: "/hull_tactical.png",
    },
    {
      title: "VIOLA",
      description: "Software that helps users locate, listen to, and license songs efficiently.",
      lead: "KT Kim",
      image: "/viola.png",
    },
    {
      title: "Equity-guided urban heat mitigation",
      description: "A spatial-ML framework for prioritizing shade interventions in LA.",
      lead: "Dominic Woetzel",
      image: "/shade.jpeg",
    },
    {
      title: "Spotify song recommender",
      description: "Recommends music based on a listener's interests.",
      lead: "Andrew Bae",
      image: "/spotify.png",
    },
  ],
};

export const events = [
  {
    when: "Week 3",
    title: "Kick Off Night",
    description: "Meet your cohort and explore project teams at an escape room.",
  },
  {
    when: "Week 4",
    title: "Pro Workshops & Headshots",
    description: "Professional headshots and industry talks in data science, AI and analytics.",
  },
  {
    when: "Oct 10–12",
    title: "Overnight Club Retreat",
    description: "A weekend of team building and workshops at Big Bear.",
  },
  {
    when: "End of semester",
    title: "Final Project Showcase",
    description: "Teams present to judges and compete for prizes. Formal wear, catered.",
  },
  {
    when: "Jan 27",
    title: "Data Recruiting Summit",
    description: "Research talks, workshops, and time with industry recruiters.",
  },
];

export type Member = { name: string; role: string; image: string };

const hs = (file: string) => `/Board Headshots/cropped/${file}`;

export const boardTitle = "The board, 2026–2027";

export const board: { group: string; members: Member[] }[] = [
  {
    group: "Executive board",
    members: [
      { name: "Natalie Lam Johnson", role: "Co-President", image: hs("Natalie.jpg") },
      { name: "Jaden Lin", role: "Co-President", image: hs("Jaden.jpg") },
      { name: "Ojas Nimase", role: "Vice President", image: hs("Ojas.jpg") },
      { name: "Anvitha Komarraju", role: "Director of Operations", image: hs("Anvitha_Komarraju_Headshot.jpg") },
      { name: "Theo Singkarin", role: "Social Chair", image: hs("Theo.jpg") },
      { name: "Connor Mao", role: "Finance", image: hs("Connor.jpg") },
      { name: "Danica Pham", role: "Sponsorship & Outreach", image: hs("Danica.jpg") },
      { name: "Anh Phan", role: "Sponsorship & Outreach", image: hs("Anh.jpg") },
      { name: "Nadeem Alabed", role: "Graduate Recruitment Chair", image: hs("Nadeem.jpg") },
      { name: "Lauren Lu", role: "Marketing", image: hs("Lauren.jpg") },
    ],
  },
  {
    group: "Curriculum",
    members: [
      { name: "Emin Cilingiroglu", role: "Curriculum Director", image: hs("Emin.jpg") },
    ],
  },
  {
    group: "Project leads",
    members: [
      { name: "Aaron Lo", role: "Project Lead", image: hs("Aaron.jpg") },
      { name: "Abhishek Sarepaka", role: "Project Lead", image: hs("Abhishek.jpg") },
      { name: "Allegra Chen", role: "Project Lead", image: hs("Allegra.jpg") },
      { name: "Ananya Hari", role: "Project Lead", image: hs("Ananya.jpg") },
      { name: "Dominic Woetzel", role: "Project Lead", image: hs("Dominic.jpeg") },
      { name: "Edison Zhong", role: "Project Lead", image: hs("Edison.jpg") },
      { name: "Ian Xie", role: "Project Lead", image: hs("Ian.jpg") },
      { name: "Kyle Matsui", role: "Project Lead", image: hs("Kyle.jpg") },
      { name: "Trisha Tjokrosapoetro", role: "Project Lead", image: hs("Trisha.jpg") },
    ],
  },
  {
    group: "Senior advisors",
    members: [
      { name: "Matthew Hall", role: "Senior Curriculum Advisor", image: hs("Matthew.jpg") },
      { name: "Nathan Nguyen", role: "Senior Curriculum Advisor", image: hs("Nathan.jpg") },
      { name: "Colin Quan Leung", role: "Senior Advisor", image: hs("Colin.jpeg") },
      { name: "Nolen Johnson", role: "Senior Advisor", image: hs("Nolen.jpeg") },
      { name: "Selina Hui", role: "Senior Advisor", image: hs("Selina.jpg") },
    ],
  },
];

export const faqs = [
  { q: "Who can join?", a: "Any USC student, regardless of major or experience level." },
  { q: "Do I need to know how to code?", a: "No. The curriculum starts from the fundamentals." },
  {
    q: "How do project teams work?",
    a: "Teams are formed by interest and skill balance, and work on scoped, real-world problems.",
  },
  { q: "When do applications open?", a: "At the start of each semester. Join our Slack to hear first." },
];

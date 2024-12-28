import maariyan from "../assets/maariyan-logo.png";
import gatsbyLogo from "../assets/gatsby-logo.png";
import airbnb from "../assets/airbnb.jpg";
import orderkaro from "../assets/final_logo_order_karo6.png";
import timeCountDown from "../assets/time-count-down-logo.png";
import placePicker from "../assets/place-picker.png";
import projectLogo from "../assets/project-logo.png";

const logos = [
  maariyan,
  gatsbyLogo,
  airbnb,
  orderkaro,
  timeCountDown,
  placePicker,
  projectLogo,
];

const projectInfo = [
  {
    projectHeader: "Mariyan Restaurant (Website)",
    projectDescription:
      "Static website designed for specific region in the Pune for Maariyan restaurant.",
    projectLink: "https://github.com/KumarWayadande/mr3",
    projectLogo: logos[0],
  },
  {
    projectHeader: "Blog Platform - Gatsby",
    projectDescription:
      "Blog platform built using Gatsby framework with ReactJS.",
    projectLink: "https://github.com/KumarWayadande/code_blog_gatsby",
    projectLogo: logos[1],
  },
  {
    projectHeader: "Airbnb clone (Devkraft Hackathon)",
    projectDescription:
      "Airbnb clone made using Prisma, NextJS. It is hosted on Vercel.",
    projectLink: "https://github.com/KumarWayadande/devcraft-hackathon",
    projectLogo: logos[2],
  },
  {
    projectHeader: "OrderKaro",
    projectDescription:
      "Grocery Ordering System built using MERN stack. Dynamic location and cart repos supported.",
    projectLink: "https://github.com/KumarWayadande/orderkaro",
    projectLogo: logos[3],
  },
  {
    projectHeader: "Time Countdown Game",
    projectDescription:
      "You are given time card which has to be stopped before it expires. The perfect you play, more you score.",
    projectLink: "https://github.com/KumarWayadande/time-countdown-game",
    projectLogo: logos[4],
  },
  {
    projectHeader: "Place Picker",
    projectDescription:
      "Place picker is used for fun. It locates nearby view points based on your location.",
    projectLink: "https://github.com/KumarWayadande/place-picker",
    projectLogo: logos[5],
  },
  {
    projectHeader: "Project Management Platform",
    projectDescription:
      "Built using ReactJS that allows users to manage their projects, list down pending task and more.",
    projectLink: "https://github.com/KumarWayadande/project-management-app",
    projectLogo: logos[6],
  },
];

export default projectInfo;

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Web Development(Angular)",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Web Development(React)",
    projects: 5,
    icon: HiOutlineDesktopComputer,
    bg: "#EEC048",
  },
  {
    name: "Automation Testing",
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },

];

export const WhatDoIHelp = [
  "In the era of digitalization, where online presence is a must. I can help you in building a unique website based solution on the nature of your product business.",
  "And besides that I capture moments, to make you go with your memories back in time:)",
];

export const workExp = [
  {
    place: "System Engineer, Infosys",
    tenure: "April 2021 - Present",
    role: "Web Development in Angular",
    detail:
      "Worked on a web based application to meet the required daily testing needs using Angular and Spring Micro services",
  },
  {
    place: "System Engineer, Infosys",
    tenure: "April 2021 - 2022",
    role: "Automation Testing",
    detail:
      "Implemented Automation for the test cases based on project requirement. This opportunity gave me a chance to work on automating AWS services with Java, writing test cases with selenium and testNg framework. Implemented a Jenkins pipeline to automate the execution of these cases as well. ",
  },
  {
    place: "System Engineer, Infosys",
    tenure: "April 2022 - Present",
    role: "Web Developer using React",
    detail:
      "Developed an application using React and Node.js to retrieve incidents from Jira. Leveraging the Jira Query Language, I implemented a feature that allowed users to fetch incidents based on specific criteria and aggregate them based on the project workflow components.",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

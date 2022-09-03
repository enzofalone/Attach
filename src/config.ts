/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Link } from "./app/links";
import { Experience } from "./app/experinces";
import { ExtendedProfile, Images } from "./app/profile";
/* Type Imports - DO NOT TOUCH */

/*
Profile and banner are optional! Just replace the file in the public folder if you want it, or delete them from the folder!

 - Profile:
   - Aspect Ratio: 1/1
   - Dimensions: 120 x 120 (it is resized automatically!)
 - Banner:
   - Aspect Ratio: 7/2
   - Dimensions: 455 x 130 (it is resized automatically!)
*/
export const images = {
    profilePng: "/profile.jpg",
    bannerPng: "/banner.png",
} as Images;

import { getRandomTheme } from "./color_themes";
export const colors = getRandomTheme();
export const random_theme_button = true;

export const base_profile = {
    first_name: "Enzo",
    last_name: "Falone",
    subtitle: "Aspiring Software Developer",
    bio: ["Miami, FL", "Miami Dade College"],
    name() {
        return this.first_name + " " + this.last_name;
    },
};

export const extended_profile = {
    gender: "Male", // You can input any gender
    username: "enzofalone", // You can opt out my commenting either of these
} as ExtendedProfile;

export const skillsList = [
    "Full Stack Developer",
    "Frontend",
    "Backend",
    "Databases",
    "Deployment",
    "Git",
    "React.js",
    "Express.js",
    "Node.js",
    "Angular",
    "Communication",
    "Adaptability",
    "Problem-solving",
    "Teamwork",
    "Creativity",
    "Leadership",
    "Work ethic",
    "Attention to detail",
    "Stress management",
    // "Organization",
    // "Prioritizing",
    // "Planning",
    // "Goal setting",
    // "Presentation",
    // "Constructive feedback",
    // "Active listening",
    // "Self-management",
    // "Optimism",
    // "Calmness",
    // "Analysis",
    // "Self-motivation",
];

/**
There are no required links, but each link must have:
 - url: string;
 - title: string;

 They can optionally have:
 - icon: string;
 - content: string;

 If no icon is supplied, it will use a chain icon by default
 If no content is supplied, it will use the url by default
 */
const projects_linksList = [
    {
        url: "https://github.com/trillion-dollar-baby/autolog",
        title: "Autolog",
        content: "Inventory Management System designed for traditional automotive businesses that use pen and paper and need to transition into an efficient and easy digital solution!",
    },
    {
        url: "https://github.com/enzofalone/EnzoGram",
        title: "Android Instagram Clone",
        content: "Instagram clone created in Android with main features of the original app!",
    },
    {
        url: "https://github.com/enzofalone/student-store",
        title: "Student Store Application",
        content: "Mock-up student store application featuring purchases and display items of store stored in server!"
    },
] as Link[];

const experiences = [
    {
        company: "",
        meta: [
            "Full Stack Developer Intern",
            "Jun 2022 - Aug 2022",
            // "Space, Space",
        ],
        desc: [
            "Selected into a cohort of 35 interns out of 1800 applicants into CodePath’s SITE program, an intense 10-week internship focused on full stack web development trained by industry professionals",
            "Led, planned, and developed within a team of 3 a 5-week MVP in a SCRUM setting using PostgreSQL, Express.js, ReactJS, and NodeJS technologies taught in program for project",
            "Finished program with a score of 5 out of 5 reviewed by industry professionals. Achieved a topmost calculated overall performance of 206% throughout SITE program for collaboration and accomplishments of all four projects’ features",
            "Learned how to successfully design, implement, and deliver code up to industry standards in a focus for features to be: Scalable, maintainable and readable thanks to constant feedback by industry mentors"
        ],
    },
    // {
    //     company: "Company Y",
    //     meta: [
    //         "Software Engineer Intern",
    //         "Jun 2021 - Aug 2021",
    //         "Space, Space",
    //     ],
    //     desc: [
    //         "Did many things to improve the company",
    //         "Hired a private inspector",
    //         "Became superman!",
    //     ],
    // },
] as Experience[];

// const games_linksList = [
//     {
//         url: "https://google.com",
//         title: "Game 1",
//     },
//     {
//         url: "https://google.com",
//         title: "Game 2",
//         content: "But I have more!",
//     },
// ] as Link[];

const contactMe_linksList = [
    {
        url: "https://www.linkedin.com/in/enzofalone",
        icon: "/icons/linkedin.svg",
        title: "LinkedIn",
    },
    {
        url: "https://github.com/enzofalone",
        icon: "/icons/github.svg",
        title: "GitHub",
    },
    {
        url: "mailto: enzofalone123@gmail.com",
        title: "Email",
        icon: "/icons/email.svg",
        content: "enzofalone123@gmail.com",
    },
] as Link[];

/**
 You can customize the order here (if you only want one section, the dropdown will go away and format nicely)
 */
export const sections = {
    // An example of a button. This button is a resume download
    Resume: {
        url: "/Resume.pdf",
        download_name: `${base_profile.name()}_Resume.pdf`,
    },
    // An example of a list of projects, that is opened on load
    Projects: {
        links: projects_linksList,
        default_opened: true,
    },
    // An example of an experience section
    "Work Experience": {
        experiences: experiences,
    },
    // Games: {
    //     links: games_linksList,
    // },
    "Contact Me": {
        links: contactMe_linksList,
    },
} as Sections;

export const webpage_config = {
    title: `${base_profile.name()}'s |attach|`,
    desc: `An |attach| for ${base_profile.name()}`,
    keywords: `New Grad, Portfolio, Projects, Developer, Coder, Programmer, Programming, Languages, Software, ${base_profile.name()}`,
};

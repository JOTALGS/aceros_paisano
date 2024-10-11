import uroImage from './assets/images/imageUro.png';
import tribuImage from './assets/images/tribu.png';
import cs109File from './assets/static/CS109x.pdf';
import cs50File from './assets/static/CS50.pdf';
import hbtnFile from './assets/static/001_rotated.pdf';


const logotext = "J|S";
const meta = {
    title: "Jota Software",
    description: "I’m Jose Gil _ Full stack devloper.",
};

const introdata = {
    title: "I am Jose Gil",
    animated: {
        first: "Software solutions",
        second: "Mobile apps development",
        third: "Web apps development",
    },
    description: "Digital Art. Brand Recognition. Identity. Software. Cloud. Mobile. Design. Dream.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am passionate software developmer I posess a strong eagerness to learn emerging technologies. I have a more affinity for back-end development though I always value a satisfactory user experience.",
};
const worktimeline = [
    {
        jobtitle: "Python programming",
        where: "HarvardX",
        date: "2022",
        file: cs50File,
        href: "https://courses.edx.org/certificates/66edc718dce142c28db2444a391b8fef",
    },
    {
        jobtitle: "Python for data science",
        where: "HarvardX",
        date: "2023",
        file: cs109File,
        href: "https://courses.edx.org/certificates/a4cd1498320c4586b3da2c2b639d0fd3",
    },
    {
        jobtitle: "Foundations of Computer Science",
        where: "Holberton School",
        date: "2024",
        file: hbtnFile,
        href: null,
    },
];

const skills = [
    {
        name: "Django",
        value: 5,
    },
    {
        name: "React",
        value: 4.5,
    },
    {
        name: "React Native",
        value: 4,
    },
    {
        name: "Vue JS",
        value: 3.8,
    },
    {
        name: "Three JS",
        value: 3,
    },
    {
        name: "Express",
        value: 2,
    },
];

const services = [
    {
        title: "Web Development",
        description: "I can develop websites and web applications for all kinds of needs. Or mantain your running website.",
    },
    {
        title: "Mobile Apps",
        description: "I can develop multi-platform applications for mobile devices.",
    },
    {
        title: "UI & UX Design",
        description: "With my team of designers we can create personalized atracctive and intuitive user interfaces. For ensuring easy walkthrough and user experience.",
    },
    {
        title: "Branding & Identity",
        description: "With my team team of designers we can foucs on distinguishing your brand and give it a true identity.",
    },
];

const dataportfolio = [
    {
        img: uroImage,
        description: "Uro-BioM is a multiplataform app that display the biomolecular markers information for Urologists.",
        link: "https://play.google.com/store/apps/details?id=com.jotalgs.urobiom&pcampaignid=web_share",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The future of your brand is the same as ours. Contact us!",
        link: "/contact",
    },
    {
        img: tribuImage,
        description: "Tribu is a proyect focalized on foster growing musicians colaborations.",
        link: "https://jotalgs.github.io/tribu.land/",
    },

];

const contactConfig = {
    YOUR_EMAIL: "jotalsoftdevs@gmail.com",
    YOUR_FONE: "(+598) 99-291-159",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_lzdx8mk",
    YOUR_TEMPLATE_ID: "template_hkgrtcu",
    YOUR_USER_ID: "LSsVMkGBfBQzbA1qv",
};

const socialprofils = {
    github: "https://github.com/JOTALGS",
    //github2: "https://github.com/JOTALG",
    linkedin: "https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a",
    //linkedin2: "https://linkedin.com",
    //linkedin3: "https://linkedin.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
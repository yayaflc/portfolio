import React, { useState, useEffect } from "react";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";
import { FaBriefcase, FaGithubAlt, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import './App.css'
import ProjectCard from "./assets/components/ProjectCard";
import Badge from "./assets/components/Badge";
import ExperienceInfo from "./assets/components/ExperienceInfo";
import ProfilePicture from "./assets/images/meLight.png"
import ProfilePictureDark from "./assets/images/meDark.png";
import Divider from "./assets/images/divider.svg?react"
import Figure from "./assets/images/figure.svg?react";
import ThemeToggle from "./assets/components/ThemeToggle";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localStorage.getItem('theme'));
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <header className="h-11 w-full fixed top-0 left-0 z-10">
        <div className="flex justify-end items-center gap-4 mr-6 mt-2">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center min-h-screen w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-blackPrimary font-rubik font-bold text-[96px] dark:text-whiteSecondary">hi!</h1>
            <h2 className="text-blackPrimary font-rubik font-bold text-[64px] dark:text-whiteSecondary">i'm yaya</h2>
            <h3 className="text-blackSecondary font-inter font-bold text-[22px] flex items-center dark:text-greySecondary">
              <RiArrowDropRightLine /> software developer
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center ml-28">
            <img
              src={darkMode ? ProfilePictureDark : ProfilePicture}
              alt="portrait"
              className="w-[320px] h-[320px]"
            />
            <span className="flex items-center text-blackSecondary font-inter font-semibold text-[18px] mt-4 gap-2 dark:text-greySecondary">
              <FaLocationDot className="text-pinkPrimary dark:text-redPrimary" />
              São José dos Campos, Brazil
            </span>
            <div className="flex flex-row items-center justify-center gap-4 mt-4">
              <a href="https://github.com/yayaflc" target="_blank">
                <FaGithubAlt className="text-pinkPrimary text-[42px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
              </a>
              <a href="https://www.linkedin.com/in/yasminccfe/" target="_blank">
                <FaLinkedin className="text-pinkPrimary text-[40px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
              </a>
              <a href="mailto:yasminccfe@gmail.com" target="_blank">
                <TbMailFilled className="text-pinkPrimary text-[46px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
              </a>
            </div>
          </div>
        </div>
       <p className="absolute top-32 left-4 whitespace-pre  text-blackPrimary dark:text-whiteSecondary text-center mt-8">
        {`∧＿∧
            （𓂂︲⩊︲𓂂)つ━♡・*。
                ⊂　　 　ノ 　　　・゜+.
                　しーＪ　　　°。+ *´¨)
        　　　　　　　　     　.· ´¸.·*´¨) ¸.·*¨)
        　　　　　　　　　　                 (¸.·´ (¸.·'* ♡`}
        </p>
        <div className="mt-20 mb-32">
          <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
            about me
          </h2>
          <div className="relative w-full max-w-5xl mx-auto">
          <Figure className="w-full max-w-4xl mx-auto object-contain text-pinkSecondary dark:text-redPrimary" />
            <div className="absolute inset-0 flex flex-col justify-center p-12 space-y-8 text-blackSecondary font-inter font-medium text-left">
              <p className="max-w-2xl ml-12 dark:text-whiteSecondary">
                I’ve always been passionate about technology. My first contact with “programming” was through my girly Tumblr blog, where I played around with HTML and CSS. I took a technical computing course in high school, but it wasn’t until 2022 that I decided to pursue tech professionally.
              </p>
              <p className="max-w-2xl ml-28 dark:text-whiteSecondary">
                I’m an enthusiast of the tech community, especially those initiatives focused on supporting girls in tech — they were a huge source of motivation when I started.
              </p>
              <p className="max-w-2xl ml-36 dark:text-whiteSecondary">
                Outside of tech, I enjoy photography, video games, and anime (yep, kinda nerdy — I know!). I’m also miserably trying to live a healthy life by going to the gym. Oh, and I’m the proud cat mom of two beautiful fur babies.
              </p>
            </div>
          </div>
        </div>
        <Divider className="w-full max-w-5xl mx-auto mb-16 text-pinkPrimary dark:text-redPrimary" />
        <div className="grid grid-cols-2 gap-36">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
              experiences
            </h2>
            <ExperienceInfo
              icon={<FaBriefcase />}
              title="FullStack Software Developer"
              text="Grupo Boticário"
              date="Jun 2023 - Present"
            />
            <ExperienceInfo
              icon={<FaBriefcase />}
              title="Tech Community Manager"
              text="He4rt Developers"
              date="Nov 2022 - May 2024"
            />
            <ExperienceInfo
              icon={<FaGraduationCap />}
              title="Computing Technical Course"
              text="ETEC"
              date="Jan 2017 - Dez 2019"
            />
          </div>

          <div className="flex flex-col items-start gap-16">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
                technologies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Badge icon={<SiJavascript />} name="JavaScript" />
                <Badge icon={<SiReact />} name="ReactJS" />
                <Badge icon={<SiTypescript />} name="TypeScript" />
                <Badge icon={<SiNodedotjs />} name="NodeJS" />
              </div>
            </div>
            <div className="col-start-2 self-start flex flex-col items-start gap-2">
              <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
                skills & interests
              </h2>
              <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                <RiArrowDropRightLine /> intermediate English
              </p>
              <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                <RiArrowDropRightLine /> basic Japanese
              </p>
              <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                <RiArrowDropRightLine /> Figma
              </p>
              <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                <RiArrowDropRightLine /> learning about IA :)
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-20">
          <h2 className="text-blackPrimary font-rubik font-bold text-[26px] mt-16 dark:text-whiteSecondary">
            my projects
          </h2>
            <p className="absolute right-80 dark:text-whiteSecondary">꜀(^. .^꜀ )꜆੭</p>
          <div className="grid grid-cols-2 gap-x-36 gap-y-12 mt-4">
            <ProjectCard
              title="microfrontends"
              description="Descrição do projeto."
              technologies={["ReactJS"]}
              githubUrl="https://github.com/yayaflc/microfrontends"
              externalUrl="https://to-do-list-yayaflc.vercel.app/"
            />
            <ProjectCard
              title="to-do list"
              description="Descrição do projeto."
              technologies={["HTML", "CSS", "JavaScript"]}
              githubUrl="https://github.com/yayaflc/to-do-list"
              externalUrl="https://to-do-list-yayaflc.vercel.app/"
            />
            <ProjectCard
              title="to-do list"
              description="Descrição do projeto."
              technologies={["HTML", "CSS", "JavaScript"]}
              githubUrl="https://github.com/yayaflc/to-do-list"
              externalUrl="https://to-do-list-yayaflc.vercel.app/"
            />
            <ProjectCard
              title="conversor de texto"
              description="Descrição do projeto."
              technologies={["HTML", "CSS", "JavaScript"]}
              githubUrl="https://github.com/yayaflc/conversor-texto"
              externalUrl="https://conversor-texto.vercel.app/"
            />
          </div>
        </div>
        <p className="flex items-start justify-start dark:text-whiteSecondary">☆ﾐ(o*･ω･)ﾉ</p>
      </main>
      <footer className="bg-pinkPrimary h-32 w-full mt-16 flex items-center justify-center relative dark:bg-redPrimary">
        <p className="text-blackPrimary text-sm italic dark:text-whiteSecondary flex items-center">
          designed & built with
          <span className="mx-1">
            <FaHeart />
          </span>
          by me
        </p>
        <div className="flex flex-row items-center gap-4 absolute right-8">
          <FaGithubAlt className="text-pinkSecondary text-[32px] dark:text-pinkPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
          <FaLinkedin className="text-pinkSecondary text-[30px] dark:text-pinkPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
          <TbMailFilled className="text-pinkSecondary text-[36px] dark:text-pinkPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
        </div>
      </footer>
    </>
  )
}

export default App

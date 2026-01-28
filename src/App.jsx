import { useState, useEffect, useMemo } from "react";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";
import { FaBriefcase, FaGithubAlt, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { RotatingText } from "./assets/components/ui/rotating-text";
import { Section } from "./assets/components/ui/section";
import "./App.css";
import ProjectCard from "./assets/components/ProjectCard";
import Badge from "./assets/components/Badge";
import ExperienceInfo from "./assets/components/ExperienceInfo";
import ProfilePicture from "./assets/images/meLight.png";
import ProfilePictureDark from "./assets/images/meDark.png";
import ThemeToggle from "./assets/components/ThemeToggle";
import CursorEffect from "./assets/components/CursorEffect";
import AnimatedCatArt from "./assets/components/AnimatedCatArt";
import AnimatedKaomoji from "./assets/components/AnimatedKaomoji";
import AnimatedBunnyArt from "./assets/components/AnimatedBunnyArt";
import BubbleMenu from "./assets/components/BubbleMenu"
import ScrollToTop from "./assets/components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
    );
  });

  const items = useMemo(() => [
    {
      label: 'home',
      href: '#home',
      ariaLabel: 'home',
      rotation: -3,
      hoverStyles: { bgColor: darkMode ? '#78223F' : '#F48FB1', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '#about',
      ariaLabel: 'about',
      rotation: 2,
      hoverStyles: { bgColor: darkMode ? '#78223F' : '#F48FB1', textColor: '#ffffff' }
    },
    {
      label: 'experiences',
      href: '#experiences',
      ariaLabel: 'experiences',
      rotation: -2,
      hoverStyles: { bgColor: darkMode ? '#78223F' : '#F48FB1', textColor: '#ffffff' }
    },
    {
      label: 'projects',
      href: '#projects',
      ariaLabel: 'projects',
      rotation: 3,
      hoverStyles: { bgColor: darkMode ? '#78223F' : '#F48FB1', textColor: '#ffffff' }
    }
  ], [darkMode]);

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <CursorEffect />
      <ScrollToTop />
      <header className="h-14 w-full fixed top-0 right-0 z-50">
        <div className="flex justify-end items-center gap-3 px-6 py-3">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <BubbleMenu
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg={darkMode ? "#555555" : "#ffffff"}
            menuContentColor={darkMode ? "#F5F5F5" : "#2E2E2E"}
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </div>
      </header>
      <main className="flex flex-col">
        <Section id="home">
          <div className="relative flex flex-row items-center justify-center min-h-screen w-full px-8">
            <div className="flex flex-col items-start justify-center w-[380px] -mt-24">
              <h1 className="text-blackPrimary font-rubik font-bold text-[96px] leading-[1.3] dark:text-whiteSecondary overflow-visible">
                <RotatingText texts={["hi!", "hello!", "hey!", "howdy!"]} />
              </h1>

              <h2 className="text-blackPrimary font-rubik font-bold text-[64px] leading-tight dark:text-whiteSecondary">
                i'm yaya
              </h2>

              <h3 className="text-blackSecondary font-inter font-bold text-[22px] flex items-center dark:text-greySecondary">
                <RiArrowDropRightLine /> software developer
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center ml-28">
              <img
                src={darkMode ? ProfilePictureDark : ProfilePicture}
                alt="portrait"
                className="w-[320px] h-[320px] transition-opacity duration-300"
                loading="eager"
              />

              <span className="flex items-center text-blackSecondary font-inter font-semibold text-[18px] mt-4 gap-2 dark:text-greySecondary">
                <FaLocationDot className="text-pinkPrimary dark:text-redPrimary" />
                São José dos Campos, Brazil
              </span>

              <div className="flex flex-row items-center justify-center gap-4 mt-4">
                <a href="https://github.com/yayaflc" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <FaGithubAlt className="text-pinkPrimary text-[42px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yasminccfe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="text-pinkPrimary text-[40px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
                </a>
                <a href="mailto:yasminccfe@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send email">
                  <TbMailFilled className="text-pinkPrimary text-[46px] dark:text-redPrimary hover:text-pinkHover hover:scale-110 transition-all duration-300 dark:hover:text-redSecondary" />
                </a>
              </div>
            </div>

            <div className="absolute top-32 left-4">
              <AnimatedCatArt />
            </div>
          </div>
        </Section>
        <Section id="about">
          <div className="min-h-screen flex flex-col items-center justify-center py-20 px-8">
            <div className="flex items-start justify-center gap-16 w-full max-w-5xl">
              <div className="flex-1 space-y-6">
                <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary mb-8">
                  about me
                </h2>

                <div className="flex items-start gap-3">
                  <span className="text-pinkPrimary dark:text-redPrimary text-[20px] mt-1">●</span>
                  <p className="text-blackSecondary dark:text-whiteSecondary font-inter text-[17px] leading-[1.8] flex-1">
                    I've always been passionate about technology. My first contact with "programming" 
                    was through my girly Tumblr blog, where I played around with HTML and CSS.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-pinkPrimary dark:text-redPrimary text-[20px] mt-1">●</span>
                  <p className="text-blackSecondary dark:text-whiteSecondary font-inter text-[17px] leading-[1.8] flex-1">
                    I'm an enthusiast of the tech community, especially those initiatives focused 
                    on supporting girls in tech.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-pinkPrimary dark:text-redPrimary text-[20px] mt-1">●</span>
                  <p className="text-blackSecondary dark:text-whiteSecondary font-inter text-[17px] leading-[1.8] flex-1">
                    Outside of tech, I enjoy photography, video games, and anime. I'm also the 
                    proud cat mom of two fur babies.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center ml-8">
                <AnimatedKaomoji />
              </div>
            </div>
          </div>
        </Section>
        <Section id="experiences">
          <div className="min-h-screen flex flex-col items-center justify-center py-20 px-8">
            <div className="w-full max-w-5xl mx-auto mb-16 overflow-hidden">
              <p className="text-center kaomoji-glow text-[16px] opacity-85 tracking-wide select-none">
                ₊˚ ‿︵‿︵‿︵୨୧ · · ✧ · · ୨୧‿︵‿︵‿︵ ˚₊   ₊˚ ‿︵‿︵‿︵୨୧ · · ✧ · · ୨୧‿︵‿︵‿︵ ˚₊
              </p>
            </div>

            <div className="grid grid-cols-2 gap-36 w-full max-w-5xl">
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
                  experiences
                </h2>

                <ExperienceInfo
                  icon={<FaBriefcase size={28} />}
                  title="FullStack Software Developer"
                  text="Grupo Boticário"
                  date="Jun 2023 - Present"
                />

                <ExperienceInfo
                  icon={<FaBriefcase size={28} />}
                  title="Tech Community Manager"
                  text="He4rt Developers"
                  date="Nov 2022 - May 2024"
                />

                <ExperienceInfo
                  icon={<FaGraduationCap size={30} />}
                  title="Computer Science Degree"
                  text="Anhembi Morumbi University"
                  date="Ago 2025 - Present"
                />

                <ExperienceInfo
                  icon={<FaGraduationCap size={30} />}
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

                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary">
                    skills & interests
                  </h2>

                  <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                    <RiArrowDropRightLine /> intermediate English
                  </p>
                  <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                    <RiArrowDropRightLine /> basic Japanese and Spanish
                  </p>
                  <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                    <RiArrowDropRightLine /> Figma
                  </p>
                  <p className="flex items-center text-blackSecondary font-medium dark:text-whiteSecondary">
                    <RiArrowDropRightLine /> learning about IA and security :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="projects">
          <div className="min-h-screen flex flex-col items-center justify-between pt-20 pb-0 relative">
            <div className="w-full max-w-5xl px-8 flex-1 flex flex-col items-start justify-center">
              <h2 className="text-blackPrimary font-rubik font-bold text-[26px] dark:text-whiteSecondary mb-8">
                my projects
              </h2>

              <div className="grid grid-cols-2 gap-x-36 gap-y-12 w-full">
                <ProjectCard
                  title="microfrontends"
                  description="Project created to explore microfrontends using Module Federation."
                  technologies={["ReactJS"]}
                  githubUrl="https://github.com/yayaflc/microfrontends"
                  externalUrl="https://github.com/yayaflc/microfrontends"
                />

                <ProjectCard
                  title="to-do list"
                  description="Task list with features for adding, removing, and filtering items."
                  technologies={["HTML", "CSS", "JavaScript"]}
                  githubUrl="https://github.com/yayaflc/to-do-list"
                  externalUrl="https://to-do-list-yayaflc.vercel.app/"
                />

                <ProjectCard
                  title="animal quiz"
                  description="Animal-themed quiz with scoring and feedback."
                  technologies={["HTML", "CSS", "JavaScript"]}
                  githubUrl="https://github.com/yayaflc/quiz-v2"
                  externalUrl="https://quiz-v2-seven.vercel.app/"
                />

                <ProjectCard
                  title="text converter"
                  description="Tool to convert text formats."
                  technologies={["HTML", "CSS", "JavaScript"]}
                  githubUrl="https://github.com/yayaflc/conversor-texto"
                  externalUrl="https://conversor-texto.vercel.app/"
                />
              </div>

              <div className="absolute bottom-80 left-32">
                <AnimatedBunnyArt />
              </div>
            </div>

            <div className="bg-pinkPrimary h-32 w-full flex items-center justify-center dark:bg-redPrimary relative z-0">
              <p className="text-blackPrimary text-sm italic dark:text-whiteSecondary flex items-center">
                designed & built with <FaHeart className="mx-1" /> by me
              </p>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;

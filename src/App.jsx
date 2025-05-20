import { SiJavascript, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";
import { FaBriefcase, FaGithubAlt, FaLinkedin,  } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot  } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { MdLightMode, MdDarkMode  } from "react-icons/md";
import './App.css'
import ProjectCard from "./assets/components/ProjectCard";
import Badge from "./assets/components/Badge";
import ExperienceInfo from "./assets/components/ExperienceInfo";
import ProfilePicture from "./assets/images/me.png"
import Divider from "./assets/images/divider.svg"



function App() {

  return (
    <>
    <header className="bg-pinkPrimary/40 h-11 w-full fixed top-0 left-0 z-10">
      <div className="flex justify-end items-center gap-4 mr-6 mt-2">
        <MdLightMode className="text-blackPrimary text-[28px] hover:text-white transition-colors duration-300" />
        <MdDarkMode className="text-blackPrimary text-[28px] hover:text-white transition-colors duration-300" />
      </div>
    </header>
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center min-h-screen w-full">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-blackPrimary font-rubik font-bold text-[96px]">hi!</h1>
          <h2 className="text-blackPrimary font-rubik font-bold text-[64px]">i'm yaya</h2>
          <h3 className="text-blackSecondary font-inter font-bold text-[22px] flex items-center">
            <RiArrowDropRightLine /> software developer
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center ml-28">
          <img src={ProfilePicture} alt="portrait" className="w-[320px] h-[320px]" />
          <span className="flex items-center text-blackSecondary font-inter font-semibold text-[18px] mt-4 gap-2">
            <FaLocationDot className="text-pinkPrimary" />
            São José dos Campos, Brazil
          </span>
          <div className="flex flex-row items-center justify-center gap-4 mt-4">
            <FaGithubAlt className="text-pinkPrimary text-[42px]" />
            <FaLinkedin className="text-pinkPrimary text-[40px]" />
            <TbMailFilled className="text-pinkPrimary text-[46px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mb-24">
        <img src={Divider} alt="line" className="w-[90%]" />
      </div>
      <div className="grid grid-cols-2 gap-36">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-blackPrimary font-rubik font-bold text-[26px]">
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
          <h2 className="text-blackPrimary font-rubik font-bold text-[26px]">
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
          <h2 className="text-blackPrimary font-rubik font-bold text-[26px]">
            skills & interests
          </h2>
          <p className="flex items-center text-blackSecondary font-medium">
            <RiArrowDropRightLine /> intermediate English
          </p>
          <p className="flex items-center text-blackSecondary font-medium">
            <RiArrowDropRightLine /> basic Japanese
          </p>
          <p className="flex items-center text-blackSecondary font-medium">
            <RiArrowDropRightLine /> Figma
          </p>
          <p className="flex items-center text-blackSecondary font-medium">
            <RiArrowDropRightLine /> learning about IA :)
          </p>
        </div>
        </div>
        <p>♡⸜(&gt; ᵕ &lt; ｡)⸝</p>
      </div>
      <div>
        <h2 className="text-blackPrimary font-rubik font-bold text-[26px] mt-16">
          projects
        </h2>
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
       <p className="flex items-start justify-start">☆ﾐ(o*･ω･)ﾉ</p>
    </main>
    <footer className="bg-pinkPrimary h-32 w-full mt-16 flex items-center justify-center relative">
      <p className="text-blackPrimary text-sm italic">
        designed & built with &lt;3 by me
      </p>
      <div className="flex flex-row items-center gap-4 absolute right-8">
        <FaGithubAlt className="text-pinkSecondary text-[32px] hover:text-white transition-colors duration-300" />
        <FaLinkedin className="text-pinkSecondary text-[30px] hover:text-white transition-colors duration-300" />
        <TbMailFilled className="text-pinkSecondary text-[36px] hover:text-white transition-colors duration-300" />
      </div>
    </footer>
  </>
  )
}

export default App

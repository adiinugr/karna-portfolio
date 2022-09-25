import { useContext } from "react"
import Image from "next/image"
import { FiDownload } from "react-icons/fi"

import Button from "../components/Button"
import ProgressCircle from "../components/ProgressCircle"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import ServiceCard from "../components/ServiceCard"
import ExperienceAndEducationCard from "../components/ExperienceAndEducationCard"
import MenuButton from "../components/MenuButton"
import MenuList from "../components/MenuList"

import skillsData from "../data/skills"
import servicesData from "../data/services"
import educationData from "../data/education"
import experiencesData from "../data/experiences"
import CustomHead from "../components/CustomHead"

import { MenuContext } from "../context/menuContext"

function About() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="bg-dark px-8 py-28 lg:px-32 lg:py-20 text-white">
      <CustomHead />

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuList isMenuOpen={isMenuOpen} />

      <Title leftText="about" rightText="me" />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center mb-24">
        <div className="w-full lg:w-2/3">
          <Subtitle>details</Subtitle>
          <table className="table-auto mb-6">
            <tbody>
              <tr>
                <td>
                  First Name: <span className="font-semibold">Nehan</span>
                </td>
                <td>
                  Experience: <span className="font-semibold">6 Years</span>
                </td>
              </tr>
              <tr>
                <td>
                  Last Name: <span className="font-semibold">Alimar</span>
                </td>
                <td>
                  Address: <span className="font-semibold">Surabaya</span>
                </td>
              </tr>
              <tr>
                <td>
                  Age: <span className="font-semibold">26 Years</span>
                </td>
                <td>
                  Languages:{" "}
                  <span className="font-semibold">Indonesian, English</span>
                </td>
              </tr>
              <tr>
                <td>
                  Nationality: <span className="font-semibold">Indonesian</span>
                </td>
                <td>
                  Skype: <span className="font-semibold">nehan.alimar</span>
                </td>
              </tr>
            </tbody>
          </table>
          <Button text="download cv">
            <FiDownload size={24} />
          </Button>
        </div>
        <div className="w-full lg:1/3">
          <div className="relative w-60 h-60 flip-card m-auto">
            <div className="absolute -top-2 -left-2 h-52 w-40 border-4 border-primary" />
            <Image
              src="/images/men-2.jpg"
              layout="fill"
              className="absolute rounded-full flip-card-inner"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <Subtitle className="text-center">skills</Subtitle>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 ">
          {skillsData.map((skill) => (
            <ProgressCircle
              key={skill.id}
              percent={skill.percent}
              title={skill.title}
              strokeColor="#2ec4b6"
              trailColor="#5a5a5a"
            />
          ))}
        </div>
      </div>
      <div className="mb-24">
        <Subtitle className="text-center">my services</Subtitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div>
        <Subtitle className="text-center">EXPERIENCE AND EDUCATION</Subtitle>
        <div className="flex flex-col lg:flex-row items-start ">
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-10 mb-14 lg:mb-0">
            {experiencesData.map((experience) => (
              <ExperienceAndEducationCard
                key={experience.id}
                icon={experience.icon}
                year={experience.year}
                title={experience.title}
                description={experience.description}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-10">
            {educationData.map((education) => (
              <ExperienceAndEducationCard
                key={education.id}
                icon={education.icon}
                year={education.year}
                title={education.title}
                description={education.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { useContext } from "react"
import Image from "next/image"
import { FiDownload } from "react-icons/fi"

// React Context
import { MenuContext } from "/context/MenuContext"

// Costom Component
import Button from "/components/button/Button"
import ProgressCircle from "/components/visual/ProgressCircle"
import Subtitle from "/components/element/Subtitle"
import Title from "/components/element/Title"
import ServiceCard from "/components/card/ServiceCard"
import ExperienceAndEducationCard from "/components/card/ExperienceAndEducationCard"
import MenuButton from "/components/menu/MenuButton"
import MenuList from "/components/menu/MenuList"
import CustomHead from "/components/meta/CustomHead"

// Dummy Data
import skillsData from "/data/skills"
import servicesData from "/data/services"
import educationData from "/data/education"
import experiencesData from "/data/experiences"
import { personalDarkMenuData } from "/data/menu"

function About() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="bg-skin-base px-8 py-28 lg:px-32 lg:py-20 text-skin-base">
      {/* Start Next.js Head -> meta information */}
      <CustomHead />
      {/* End Next.js Head */}

      {/* Start Menu Button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* End Menu Button */}

      {/* Start Menu List */}
      <MenuList isMenuOpen={isMenuOpen} menuData={personalDarkMenuData} />
      {/* End Menu List */}

      <Title leftText="about" rightText="me" />

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center mb-24">
        {/* Start Details Area */}
        <div className="w-full md:2/3">
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
            <div className="absolute -top-2 -left-2 h-52 w-40 border-4 border-skin-base" />
            <Image
              src="/images/men-2.jpg"
              layout="fill"
              alt="karna - next js personal portfolio"
              className="absolute rounded-full flip-card-inner"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* End Details Area */}

      {/* Start Skills Area */}
      <div className="mb-24">
        <Subtitle className="text-center">skills</Subtitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {skillsData.map((skill) => (
            <ProgressCircle
              key={skill.id}
              percent={skill.percent}
              title={skill.title}
              strokeColor={"#2ec4b6"}
              trailColor="#5a5a5a"
            />
          ))}
        </div>
      </div>
      {/* Start Skills Area */}

      {/* Start Services Area */}
      <div className="mb-24">
        <Subtitle className="text-center">my services</Subtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
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
      {/* End Services Area */}

      {/* Start Experience and Education Area */}
      <div>
        <Subtitle className="text-center">EXPERIENCE AND EDUCATION</Subtitle>
        <div className="flex flex-col md:flex-row items-start ">
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-10 mb-14 lg:mb-0">
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
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-10">
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
      {/* Start Experience and Education Area */}
    </section>
  )
}

export default About

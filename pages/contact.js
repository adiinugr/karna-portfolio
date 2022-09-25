import React, { useContext } from "react"
import { FiFacebook, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "../components/Button"
import Title from "../components/Title"
import MenuButton from "../components/MenuButton"
import MenuList from "../components/MenuList"
import CustomHead from "../components/CustomHead"

import { MenuContext } from "../context/menuContext"

const schema = yup
  .object({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required")
  })
  .required()

function Contact() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => console.log(data)

  return (
    <section className="bg-dark min-h-screen px-8 py-28 lg:px-32 lg:py-20 text-white">
      <CustomHead />

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuList isMenuOpen={isMenuOpen} />

      <Title leftText="contact" rightText="me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/5">
          <p className="font-bold text-2xl mb-6">Nahan Alimar</p>
          <p className="mb-6">
            I am available for freelance work. Feel free to get in touch with
            me.
          </p>
          <div className="mb-8">
            <p>
              Phone: <span className="font-semibold">+6298272817212</span>
            </p>
            <p>
              Email: <span className="font-semibold">mail@mail.com</span>
            </p>
          </div>
          <div className="text-white flex">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2 mr-2 rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
            >
              <FiTwitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2 mr-2 rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
            >
              <FiFacebook size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-2  rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
            >
              <FiLinkedin size={16} />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full rounded-md bg-gray py-2 px-6 text-white outline-none focus:border-primary focus:border"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full rounded-md bg-gray py-2 px-6 text-white outline-none focus:border-primary focus:border"
                    {...register("lastName")}
                  />{" "}
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full appearance-none rounded-md bg-gray py-2 px-6 text-white outline-none focus:border-primary focus:border"
                {...register("subject")}
              />{" "}
              {errors.subject && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows={5}
                className="w-full appearance-none rounded-md bg-gray py-2 px-6 text-white outline-none focus:border-primary focus:border"
                {...register("message")}
              />{" "}
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="text-right">
              <Button text="send message" type="submit">
                <FiSend size={24} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

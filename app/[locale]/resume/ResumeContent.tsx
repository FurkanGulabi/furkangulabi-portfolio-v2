"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaUser,
  FaUserCog,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobepremierepro, SiGit, SiMongodb, SiPrisma } from "react-icons/si";
import { TbBrandNextjs, TbStarFilled, TbStarsFilled } from "react-icons/tb";

// Define the constants needed for the component
const aboutMe = {
  icon: <FaUser className="w-12 h-12" />,
};

const education = {
  icon: <FaUserGraduate className="w-12 h-12" />,
  items: [
    {
      institution:
        "Nahit Menteşe Vocational and Technical Anatolian High School",
      degree: "High School - IT Department",
      period: "September 2019 - June 2023",
    },
    {
      institution: "Istanbul Aydın University",
      degree: "Associate Degree - Internet and Network Technologies",
      period: "September 2024 - Ongoing",
    },
  ],
};

const experience = {
  icon: <FaUserTie className="w-12 h-12" />,
  items: [
    {
      company: "Yalçın Mobilya",
      position: "Apprentice - Journeyman",
      duration: "2016 - Present",
    },
    {
      company: "Arkun Production",
      position: "Cameraman",
      duration: "2023 - Present",
    },
    {
      company: "Freelance",
      position: "Web Designer",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  icon: <FaUserCog className="w-12 h-12" />,
  items: [
    {
      name: "HTML",
      icon: (
        <FaHtml5 className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 5,
    },
    {
      name: "CSS",
      icon: (
        <FaCss3Alt className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "JavaScript",
      icon: (
        <FaJs className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "Next.js",
      icon: (
        <TbBrandNextjs className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "TailwindCSS",
      icon: (
        <RiTailwindCssFill className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "Node.js",
      icon: (
        <FaNodeJs className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 5,
    },
    {
      name: "Prisma",
      icon: (
        <SiPrisma className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "Git",
      icon: (
        <SiGit className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "Adobe Premiere Pro",
      icon: (
        <SiAdobepremierepro className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 4,
    },
    {
      name: "Photography",
      icon: (
        <MdOutlinePhotoCamera className="w-16 h-16 cursor-pointer text-primary/60 hover:text-primary/100 transition-all hover:drop-shadow-[0_0_2px] shadow-primary" />
      ),
      level: 3,
    },
  ],
};

const ResumeContent = () => {
  const t = useTranslations("ResumePage");

  return (
    <section aria-label={t("PageTitle")}>
      <div className="container mx-auto mt-20">
        <Tabs
          defaultValue="aboutMe"
          className="flex flex-col xl:flex-row gap-5 items-center"
          orientation="vertical"
        >
          <TabsList
            className="flex flex-col w-full max-w-2xl mx-auto xl:mx-0 gap-6"
            aria-label={t("ResumeCategories")}
          >
            <TabsTrigger
              className="cursor-pointer"
              value="aboutMe"
              aria-controls="aboutMe-tab"
            >
              {t("AboutMe")}
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="education"
              aria-controls="education-tab"
            >
              {t("Education")}
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="experience"
              aria-controls="experience-tab"
            >
              {t("Experience")}
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer"
              value="skills"
              aria-controls="skills-tab"
            >
              {t("Skills")}
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[62vh] w-full">
            {/* About Me */}
            <TabsContent
              className="w-full"
              value="aboutMe"
              id="aboutMe-tab"
              role="tabpanel"
              aria-labelledby="aboutMe"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span aria-hidden="true">{aboutMe.icon}</span>
                    <h2 id="aboutMe-heading" className="text-xl font-semibold">
                      {t("aboutMe.title")}
                    </h2>
                  </div>
                  <p className="opacity-60 italic mt-8 text-center">
                    <span aria-hidden="true">&quot;</span>
                    {t("aboutMe.description")}
                    <span aria-hidden="true">&quot;</span>
                  </p>
                </div>
              </motion.div>
            </TabsContent>
            {/* Education */}
            <TabsContent
              className="w-full"
              value="education"
              id="education-tab"
              role="tabpanel"
              aria-labelledby="education"
            >
              <motion.div
                key={"education"}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span aria-hidden="true">{education.icon}</span>
                    <h2
                      id="education-heading"
                      className="text-xl font-semibold"
                    >
                      {t("education.title")}
                    </h2>
                  </div>
                  <p className="opacity-60 italic">
                    <span aria-hidden="true">&quot;</span>
                    {t(`education.description`)}
                    <span aria-hidden="true">&quot;</span>
                  </p>
                  <ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 text-center font-semibold"
                    aria-label={t("education.title")}
                  >
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-lg relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-primary before:left-5"
                      >
                        <ul className="flex flex-col gap-2 font-normal text-sm">
                          <li>
                            <p>{t(`education.items.${index}.period`)}</p>
                          </li>
                          <li>
                            <h4 className="text-lg font-semibold">
                              {t(`education.items.${index}.institution`)}
                            </h4>
                          </li>
                          <li>
                            <p className="font-semibold italic text-primary/60">
                              {t(`education.items.${index}.degree`)}
                            </p>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
            {/* Experience */}
            <TabsContent
              className="w-full"
              value="experience"
              id="experience-tab"
              role="tabpanel"
              aria-labelledby="experience"
            >
              <motion.div
                key={"experience"}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span aria-hidden="true">{experience.icon}</span>
                    <h2
                      id="experience-heading"
                      className="text-xl font-semibold"
                    >
                      {t(`experience.title`)}
                    </h2>
                  </div>
                  <p className="opacity-60 italic text-center">
                    <span aria-hidden="true">&quot;</span>
                    {t(`experience.description`)}
                    <span aria-hidden="true">&quot;</span>
                  </p>
                  <ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 text-center font-semibold"
                    aria-label={t("experience.title")}
                  >
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white/10 backdrop-blur-md w-auto p-6 px-20 rounded-lg relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-primary before:left-5"
                      >
                        <ul className="flex flex-col gap-2 font-normal text-sm">
                          <li>
                            <p>{t(`experience.items.${index}.duration`)}</p>
                          </li>
                          <li>
                            <h4 className="text-lg font-semibold">
                              {t(`experience.items.${index}.company`)}
                            </h4>
                          </li>
                          <li>
                            <p className="font-semibold italic text-center w-full text-primary/60">
                              {t(`experience.items.${index}.position`)}
                            </p>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
            {/* Skills */}
            <TabsContent
              className="w-full"
              value="skills"
              id="skills-tab"
              role="tabpanel"
              aria-labelledby="skills"
            >
              <motion.div
                key={"skills"}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <span aria-hidden="true">{skills.icon}</span>
                    <h2 id="skills-heading" className="text-xl font-semibold">
                      {t(`skills.title`)}
                    </h2>
                  </div>
                  <p className="opacity-60 italic">
                    <span aria-hidden="true">&quot;</span>
                    {t(`skills.description`)}
                    <span aria-hidden="true">&quot;</span>
                  </p>
                  <ul
                    className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-2 text-center font-semibold"
                    aria-label={t("skills.title")}
                  >
                    {skills.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-lg flex justify-center items-center p-6"
                      >
                        <Popover>
                          <PopoverTrigger aria-label={item.name}>
                            <span aria-hidden="true">{item.icon}</span>
                          </PopoverTrigger>
                          <PopoverContent className="!border-none !bg-white/5 backdrop-blur-md">
                            <p className="text-lg text-center">{item.name}</p>
                            <div className="flex justify-center gap-2 items-center">
                              <span aria-hidden="true">
                                <TbStarFilled />
                              </span>
                              <Progress
                                value={((item.level - 1) / 4) * 100}
                                className="w-[60%]"
                                aria-label={`${item.name} skill level: ${item.level} out of 5`}
                              />
                              <span aria-hidden="true">
                                <TbStarsFilled size={20} />
                              </span>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeContent;

import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLinkAlt} from "react-icons/bi";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview...</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       "I'm a Computer Science Engineering student skilled in JavaScript, React.js, and various programming languages like JAVA, Python, and C++. With hands-on experience in web development and learning Andoird development and leadership as the chapter lead of my university’s coding community, I’m passionate about creating user-centric, scalable solutions and eager to contribute to impactful projects."
      </motion.p>
      <br className='sm-block '/>
          <div className=" flex space-x-4 text-4xl">        
        <a
          href="https://github.com/ankur-kaushik11" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ankur-kaushik-b09a0524b/" target="_blank">
          <ImLinkedin />
        </a>
        <a
          href="https://www.instagram.com/_ankur_kaushik11/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://linktr.ee/Ankur_Kaushik11" target="_blank">
          <BiLinkAlt />
        </a>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
 

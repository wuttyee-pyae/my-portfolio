import React, { useState } from 'react';


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Avatar from '../../components/Avatar';
import Circle from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circle />

      <motion.div className='hidden lg:flex absolute bottom-0 -left-[180px]'
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 className='h2'
          variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden">
            Captivating <span className='text-accent'>stories</span> birth magnificient designs.
          </motion.h2>
          <motion.p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden">

            With nearly seven years of experience in mobile application development, web development and both frontend I bring strong technical expertise to the table. I excel in software
            system debugging and troubleshooting, ensuring smooth and efficient performance. Passionate about continuous
            learning, I stay updated with industry trends to deliver innovative solutions. I am confident that my skills,
            knowledge, and hands-on experience will contribute significantly to your company's ongoing success.Let's create something extraordinary together!
          </motion.p>
        </div>
        {/* Info */}
        <motion.div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden">
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1
                  after:left-0 `}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((info, infoIndex) => {
              return (
                <div key={infoIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                items-center text-white/60' >
                  <div className='font-light mb-2 md:mb-0'>{info.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{info.stage}</div>
                  <div className='flex gap-x-4'>
                    { info.icons && info.icons.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className='text-2xl text-white'>
                          {icon}
                        </div>
                      )
                    })
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
             </div>
        {/* counter  */}
        <motion.div className='container mx-auto mt-12 xl:mt-6'
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden">
         {/* hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
        mb-8  */}
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experice */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={7} duration={5} /> +
              </div>
              <div className='text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Years of experice
              </div>
            </div>
            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className='text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Satisfied clients
              </div>
            </div>
            {/* project */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
            after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={650} duration={5} /> +
              </div>
              <div className='text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Finished projects
              </div>
            </div>
            {/* awards */}
            <div className='relative flex-1 '>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className='text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Winning awards
              </div>
            </div>

          </div>
        </motion.div>c
     
    </div>
  );
};

export default About;

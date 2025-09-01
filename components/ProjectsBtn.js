"use client";
import Image from "next/image";

import { HiArrowRight } from 'react-icons/hi2';


const ProjectsBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Wutt-Yee-Win-Resume.pdf"; // can also be from API
    link.download = "Wutt-Yee-Win-Resume.pdf"; // rename file if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mx-auto xl:mx-0">
      <a
        onClick={handleDownload}
        className="relative w-[185px] h-[185px] flex justify-center items-center
                   bg-circleStar bg-cover bg-center bg-no-repeat group z-[999]"
      >
        <Image src={'/download_cv.png'} alt="rounded text" width={130} height={143}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </a>
    </div>
  );
};

export default ProjectsBtn;

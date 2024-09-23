import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";

import dynamic from "next/dynamic";

const Cat = dynamic(() => import("@/components/models/Cat"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-55"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      {/* First Cat Model (right) */}
      <div className="flex items-center justify-center fixed top-[10%] lg:top-[15%]  sm:top-[5%] md:top-[5%] right-[5%] sm:right-[1%] md:right-[1%] transform z-10 xs:-z-10 sm:-z-10 md:-z-10 h-[25vh] sm:h-[30vh] lg:h-[40vh]">
        <RenderModel>
          <Cat />
        </RenderModel>
      </div>

      {/* Second Cat Model (left) */}
      <div className="flex items-center justify-center fixed top-[10%] lg:top-[15%] sm:top-[5%] md:top-[5%] left-[5%] sm:left-[1%] md:left-[1%]  transform z-10 xs:-z-10 sm:-z-10 md:-z-10 h-[25vh] sm:h-[30vh] lg:h-[40vh]">
        <RenderModel>
          <Cat />
        </RenderModel>
      </div>
    </>
  );
}

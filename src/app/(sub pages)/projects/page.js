import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";

import dynamic from "next/dynamic";
// import Cat from "@/components/models/Cat";

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

      <div className="flex items-center justify-center fixed top-15 lg:top-17 right-5 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen">
        <RenderModel>
          <Cat />
        </RenderModel>
      </div>

      <div className="flex items-center justify-center fixed top-15 lg:top-17 left-40 -translate-x-1/2 -z-10 h-screen">
        <RenderModel>
          <Cat />
        </RenderModel>
      </div>
    </>
  );
}

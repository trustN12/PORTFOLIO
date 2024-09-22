import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          style={{
            background: "linear-gradient(to right, rgba(128, 0, 128, 0.9), rgba(255, 165, 0, 0.9))",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
           <h2 className="text-xl  md:text-2xl text-left w-full capitalize">
            🎃 <span className="bg-gradient-to-r from-orange-500 to-yellow-200 bg-clip-text text-transparent">Welcome to My Digital Domain!</span> 🎃
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base text-orange-500">
            Hello there! I’m Nabarun Biswas, an enthusiastic web developer on an exciting journey through the tech landscape. My passion for web development drives me to work with a vibrant mix of tools and languages, with JavaScript as the foundation of my projects. I’ve mastered React.js and am diving into Next.js, building websites that are not only functional but also captivating for users. On top of that, I’ve honed my skills with Bubble.io, a powerful no-code platform, allowing me to rapidly create web applications without writing a single line of code. As an entry-level developer, I approach every challenge as an opportunity to grow and improve. My work combines functionality with visual appeal, delivering memorable user experiences. Join me as I explore cutting-edge technologies and ideas, shaping the future of the web one project at a time. Together, we’ll unlock the full potential of the digital world and create something extraordinary!
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-xs">years of experience in traditional coding</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-xs">months of experience in Bubble.io</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full p-6 bg-transparent rounded-lg shadow-lg">
  <div className="flex flex-col space-y-6">
    {/* Languages Section */}
    <div className=" p-4 rounded-lg shadow-md border border-orange-300 bg-red-500 bg-opacity-10">
      <h1 className="text-xl font-semibold mb-2 text-white">Languages</h1>
      <img
        className="w-full h-auto rounded-md"
        src={`https://skillicons.dev/icons?i=java,html,js,css`}
        alt="Languages"
        loading="lazy"
      />
    </div>

    {/* Frameworks/Libraries Section */}
    <div className=" p-4 rounded-lg shadow-md border  border-orange-300 bg-red-500 bg-opacity-10">
      <h1 className="text-xl font-semibold mb-2 text-white">Frameworks/Libraries</h1>
      <img
        className="w-full h-auto rounded-md"
        src={`https://skillicons.dev/icons?i=nextjs,react,tailwind,threejs`}
        alt="Frameworks/Libraries"
        loading="lazy"
      />
    </div>

    {/* Tools/Platforms Section */}
    <div className=" p-4 rounded-lg shadow-md border border-orange-300 bg-red-500 bg-opacity-10">
      <h1 className="text-xl font-semibold mb-2 text-white">Tools/Platforms</h1>
      <img
        className="w-full h-auto rounded-md"
        src={`https://skillicons.dev/icons?i=git,github,netlify,nodejs,redux,vercel,vite,vscode,expressjs`}
        alt="Tools/Platforms"
        loading="lazy"
      />
    </div>

    {/* Database Section */}
    <div className=" p-4 rounded-lg shadow-md border border-orange-300 bg-red-500 bg-opacity-10">
      <h1 className="text-xl font-semibold mb-2 text-white">Database</h1>
      <img
        className="w-full h-auto rounded-md"
        src={`https://skillicons.dev/icons?i=firebase,supabase,mongodb`}
        alt="Database"
        loading="lazy"
      />
    </div>

    <div className=" p-4 rounded-lg shadow-md border border-orange-300  bg-red-500 bg-opacity-10">
  <h1 className="text-xl font-semibold mb-2 text-white">No-Code</h1>
  <img
    className="w-auto h-20 rounded-2xl shadow-md"
    src="/bubble/bubble.png"
    alt="Bubble.io"
  />
</div>

  </div>
</ItemLayout>



        <ItemLayout className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {/* Skill Bars */}
            {[
              { name: "ReactJS", width: "80%", color: "bg-orange-500" },
              { name: "NextJS", width: "30%", color: "bg-yellow-500" },
              { name: "Bubble", width: "70%", color: "bg-orange-500" },
              { name: "Tailwind ", width: "80%", color: "bg-orange-500" },
              { name: "Redux", width: "40%", color: "bg-orange-500" },
              { name: "CSS", width: "70%", color: "bg-orange-500" },
              { name: "Firebase", width: "30%", color: "bg-yellow-500" },
              { name: "Git", width: "30%", color: "bg-yellow-500" },
              { name: "Github", width: "40%", color: "bg-yellow-500" },
              { name: "HTML", width: "80%", color: "bg-orange-500" },
              { name: "JavaScript", width: "70%", color: "bg-orange-500" },
              { name: "Netlify", width: "30%", color: "bg-yellow-500" },
              { name: "NodeJS", width: "20%", color: "bg-yellow-500" },
              { name: "Supabase", width: "30%", color: "bg-yellow-500" },
              { name: "ThreeJS", width: "30%", color: "bg-yellow-500" },
              { name: "Vercel", width: "40%", color: "bg-yellow-500" },
              { name: "Vite", width: "40%", color: "bg-yellow-500" }, 
              { name: "VScode", width: "40%", color: "bg-yellow-500" },
              { name: "ExpressJS", width: "20%", color: "bg-yellow-500" },
              { name: "MongoDB", width: "20%", color: "bg-yellow-500" },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col space-y-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <div className="relative w-full bg-gray-300 rounded-full h-2">
                  <div className={`absolute h-2 ${skill.color} rounded-full`} style={{ width: skill.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-4 mt-5">
        <p className="text-5xl font-bold">Ardian Pradana</p>
        <p className="text-2xl my-2">Front End Web Developer</p>
        <p className="text-1lg my-3">
          I create inclusive, accessible front-end solutions for the web,
          ensuring equal access to all users.
        </p>
        <div>
          <ul className="flex gap-2 text-1lg">
            <li className="hover:underline hover:cursor-pointer">Twitter</li>
            <li className="hover:underline hover:cursor-pointer">Github</li>
            <li className="hover:underline hover:cursor-pointer">Linkedin</li>
            <li className="hover:underline hover:cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div className="my-20">
          <p className="my-4 text-xl font-bold">About</p>
          <article className="flex flex-col gap-3 text-2sm">
            <p>
              In 2019, I embraced web development, creating custom WordPress
              themes and diving into coding. Since then, I've honed my skills on
              front-end projects for agencies, start-ups, and companies.
            </p>
            <p>
              In my current role, I lead front-end projects, collaborating
              closely with clients to craft exceptional digital experiences.
              Additionally, I share my expertise through YouTube tutorials,
              focusing on a wide range of front-end development topics and
              techniques.
            </p>
            <p>
              Beyond coding, I cherish time swimming, running, and with my
              family. Engaging in social initiatives, I contribute to
              open-source projects and volunteer, aligning my passion for
              technology with making a positive impact on the community.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 my-10">
        <p className="uppercase text-lg font-bold my-4">Experience</p>
        <p className="text-1sm">2019 — Present</p>
        <p className="text-xl font-bold">Freelence Front End Web Developer</p>
        <p className="my-3">
          Front-end web dev job: Seeking experienced developer proficient in
          React, Redux, and Tailwind CSS. Create dynamic user interfaces,
          implement responsive designs, and optimize user experiences.
        </p>
        <ul className="flex flex-wrap gap-2 text-red-800">
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              React
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              Redux
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              Tailwind
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              Bootstrap
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              Typscript
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              HTML5
            </div>
          </li>
          <li>
            <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
              CSS3
            </div>
          </li>
        </ul>
      </section>
      <section className="px-4 my-10">
        <p className="uppercase text-lg font-bold my-4">Project</p>
        <div>
          <p className="text-xl font-bold">Build a Calculator</p>
          <div className="flex gap-2 my-2">
            <p className="hover:underline hover:cursor-pointer">Github</p>
            <p className="hover:underline hover:cursor-pointer ">Demo</p>
          </div>
          <p className="my-3">
            Build a calculator using React, Redux, and Tailwind CSS. Utilize
            React components for a dynamic UI, manage state with Redux, and
            apply the flexible utility classes of Tailwind CSS to style the
            calculator with ease and efficiency.
          </p>
          <ul className="flex flex-wrap gap-2 text-red-800">
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                React
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                Redux
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                Tailwind
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                HTML5
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                CSS3
              </div>
            </li>
          </ul>
        </div>
        <div className="my-9">
          <p className="text-xl font-bold">Build a fullstack To Do App</p>
          <div className="flex gap-2 my-2">
            <p className="hover:underline hover:cursor-pointer">Github</p>
            <p className="hover:underline hover:cursor-pointer ">Demo</p>
          </div>
          <p className="my-3">
            Create a full-stack to-do app integrated with MongoDB. Develop the
            front-end using React, Redux, and Tailwind CSS to build a dynamic
            user interface. Implement the back-end using MongoDB to store and
            retrieve tasks. Ensure seamless data management and styling through
            the combination of React, Redux, Tailwind CSS, and MongoDB for a
            robust and visually appealing to-do application.
          </p>
          <ul className="flex flex-wrap gap-2 text-red-800">
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                React
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                Redux
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                Tailwind
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                HTML5
              </div>
            </li>
            <li>
              <div className="flex items-center rounded-full  px-3 py-1 text-xs font-medium leading-5 bg-blue-400 ">
                CSS3
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;

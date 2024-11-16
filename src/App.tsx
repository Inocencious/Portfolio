import profile from "./assets/profile.jpg";
import Marquee from "react-fast-marquee";
import {Javascript, Java, Python, TypeScript, TailwindCss, HTML, CSS, React, NodeJs, ExpressJs, MongoDB} from "./components/Icons";
import Experience from "./components/Experience";
import Certification from "./components/Certification";

function App() {
  const icons = [<Javascript/>, <Java/>, <Python/>, <TypeScript/>, <TailwindCss/> ,<HTML/>, <CSS/>, <React/>,
    <NodeJs/>, <ExpressJs/>, <MongoDB/>]

  return (
    <>
      <div className="">
        <div className="px-48 pt-16 grid grid-cols-2 gap-16 bg-zinc-800 text-white">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-xl">👋 Hello, I'm</h1>
              <h1 className="text-4xl font-bold"> Ken Inocencio</h1>
              <span className="flex">
                💼
                <p className="pl-1 text-white/70 mb-5">
                  {" "}
                  Full-Stack Web Developer
                </p>
              </span>
              <span className="flex">
                📌
                <p className="pl-1 text-white/70">
                  {" "}
                  Dubai, United Arab Emirates
                </p>
              </span>
              <span className="flex">
                📞<p className="pl-1 text-white/70"> +971 52 562 7817</p>
              </span>
              <span className="flex">
                📧
                <p className="pl-1 text-white/70 mb-5">
                  {" "}
                  contact.kinocencio@gmail.com
                </p>
              </span>
            </div>
            <div className="w-full">
              <img
                className="w-28 h-28 ml-auto rounded-full bg-white object-cover object-top zoom"
                src={profile}
              ></img>
            </div>
          </div>

          <div>

            {/* About Me */}
            <div className="mb-16">
              <h1 className="text-lg mb-16 font-medium">👨 About Me:</h1>
              <p className="text-md text-white/70 leading-5 mb-5">
                I'm a web developer with a passion for creating intuitive and
                engaging digital experiences. I bring a fresh perspective to my
                work, combined with practical experience gained through
                freelance projects. I specialize in MERN Stack and constantly
                expanding my toolkit to include the latest technologies in web
                development
              </p>

              <p className="text-md text-white/70 leading-5">
                My goal is to deepen my expertise in building custom web apps
                and softwares, while continuously honing my skills to build
                efficient, scalable, and visual appealing applications. I
                approach every project with a commitment to learning and
                improvement.
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h1 className="text-lg mb-16 font-medium">🤖 Technologies:</h1>
              <Marquee speed={30}>
              {icons.map((icon, index) => (
                <div key={index} className="mx-2">
                  {icon}
                </div>
              ))}
              </Marquee>
            </div>
            

            {/* Experiences */}
            <div className="mb-16">
              <h1 className="text-lg mb-16 font-medium">💼 Experiences:</h1>

              <Experience
                company="Unified Microsystems"
                role="Software Engineer / Web Developer"
                duration="2024-Present"
              />

              <Experience
                company="IPhitech IT and Digital Solutions"
                role="Web Developer Internship"
                duration="2023-2023"
                bulletPoints={[
                  {
                    text: "Designed and developed multiple responsive websites using WordPress, Shopify, and Bootstrap, ensuring optimal performance across all devices and browsers.",
                  },
                  {
                    text: "Collaborated with team members to gather requirements and deliver tailored solutions, contributing to a more efficient workflow and project success.",
                  },
                ]}
              />

              <Experience
                company="BluLemons Gaming Studio"
                role="Internship"
                duration="2020-2020"
                bulletPoints={[
                  {
                    text: "Participated in game testing by providing detailed feedback on mobile games, contributing to the iterative development process and improving overall gameplay quality.",
                  },
                  {
                    text: "Conceptualized and designed innovative mobile game concepts, collaborating with team members to brainstorm features and mechanics that enhance user engagement.",
                  },
                ]}
              />
              
            </div>

            {/*Certifications */}
            <div className="mb-16">
              <h1 className="text-lg mb-16 font-medium">📄 Certifications:</h1>


              <Certification
                title="Google Analytics Certification"
                organization="Google Digital Academy (Skillshop)"
                duration="2024-2025"
                credentialId="188757099"
              />
              <Certification
                title="NDG Linux Essentials"
                organization="Cisco Networking Academy"
                duration="2024"
                credentialId="- - - - - - -"
              />
              <Certification
                title="Cisco Cybersecurity Essentials"
                organization="Cisco Networking Academy"
                duration="2023"
                credentialId="- - - - - - -"
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import profile from "./assets/profile.jpg";
import Marquee from "react-fast-marquee";
import {Javascript, Java, Python, TypeScript, TailwindCss, HTML, CSS, React, NodeJs, ExpressJs, MongoDB} from "./components/Icons";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import Resume from "./assets/docs/InocencioResume.pdf";

function App() {
  const icons = [<Javascript/>, <Java/>, <Python/>, <TypeScript/>, <TailwindCss/> ,<HTML/>, <CSS/>, <React/>,
    <NodeJs/>, <ExpressJs/>, <MongoDB/>]

  return (
    <>
      <div className="">
        <div className="px-2 md:px-32 lg:px-24 xl:px-48 pt-16 lg:grid lg:grid-cols-2 gap-16 bg-zinc-800 text-white">
          <div className="w-full">
          <div className=" lg:sticky lg:top-16 lg:justify-between grid grid-cols-3 grid-flow-col">
            <div className="col-span-2">
              <h1 className="text-xl">👋 Hello, I'm</h1>
              <h1 className="text-4xl font-bold"> Ken Inocencio</h1>
              <span className="flex">
                💼
                <p className="pl-1 text-white/70 mb-8">
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
                <p className="pl-1 text-white/70">
                  {" "}
                  contact.kinocencio@gmail.com
                </p>
              </span>

              <div className="flex my-8 mb-16 items-center align-middle text-center">
                <a href={Resume} download="Inocencio_Resume"><h1 className="border px-2 py-1 pr-3">📑Resume</h1></a>
                <a href="www.linkedin.com/in/ken-inocencio" className="ml-8">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,255.98958,255.98958">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path></g></g>
                  </svg>
                </a>
                <a href="https://github.com/Inocencious" className="ml-8">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,255.98958,255.98958">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-span-1 ml-auto">
              <img
                className="w-28 h-28 ml-auto rounded-full bg-white object-cover object-top zoom"
                src={profile}
              ></img>
            </div>
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

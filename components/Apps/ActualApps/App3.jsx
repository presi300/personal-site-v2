import React, { use } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SiLemmy } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import Modal from "../AppComponents/Blog/Modal";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodeberg } from "react-icons/si";

export default function TestApp3({}) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [modal, setModal] = useState(false);
  const email = "eruditezenith@protonmail.com";
  const [state, stateHandler] = useState(false);

  async function Copied() {
    await stateHandler(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await stateHandler(false);
  }
  const copy = async (cmd) => {
    await navigator.clipboard.writeText(cmd);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 pt-8 transition-colors bg-sleepless-50 dark:bg-sleepless-400">
      <div className="h-full w-full max-w-[700px] flex justify-start flex-col ">
        <div className="w-full pb-4  h-[170px] bg-sleepless-50 dark:bg-sleepless-400 border-b dark:border-sleepless-50 border-black">
          <p className="text-3xl font-bold text-start ">Preslav Valchev</p>
          <p className="text-xl">
            Web developer/designer and linux enthusiast{" "}
          </p>
          <div className="flex gap-4 mt-2">
            <a target="_blank" href="https://t.me/LinuxChats">
              <FaTelegramPlane size={25}></FaTelegramPlane>
            </a>
            <a href="#">
              {/* TBD */}
              <FaLinkedin size={25}></FaLinkedin>
            </a>
            <button onClick={() => setModal(true)}>
              <IoMdMail size={25} />
            </button>
            <a target="_blank" href="https://lemmy.world/u/Presi300">
              <SiLemmy size={25}></SiLemmy>
            </a>
            <a target="_blank" href="https://github.com/presi300">
              <FaGithub size={25} />
            </a>
            <a target="_blank" href="https://codeberg.org/presi300">
              <SiCodeberg size={25} />
            </a>
          </div>
        </div>
        {modal && (
          <Modal state={true} closefunc={() => setModal(false)}>
            <div className="flex items-center justify-center w-full h-full ">
              <button
                onClick={() => copy(email) && Copied()}
                className="flex items-center gap-6 py-4 pl-12 m-6 text-center transition-all rounded-md hover:scale-105 hover:shadow-xl pr-7 bg-sleepless-100 bg-opacity-20"
              >
                <p>{email}</p> {state ? <FaCheck /> : <FaRegCopy />}
              </button>
            </div>
          </Modal>
        )}
        <div className="pb-6 overflow-y-scroll noScroll scroll-smooth">
          <h1 id="About">About me</h1>
          <p className="">
            Hi, I’m Preslav Valchev, {year - 2005} years old. I'm really bad at
            writing "about me"s... I dunno, it always ends up sounding too
            formal or too informal, so I'm gonna keep it short... <br></br>
            <br></br>
            Life long linux user and metal head, self taught web dev and just an
            all-around nerd. <br></br> I have way too many hours in{" "}
            <b>Warframe</b> {""}
            <b>{"(1999 Hype!)"}</b> and am a huge Doom fan... <br></br> Yes,
            even Doom 3.
          </p>
          <h1 id="Music">Music stuff, idk</h1>
          <p>
            I'm a bit of an audiophile... Or at least wanna be, all the
            audiophile stuff is hella expensive. Anyway, here are some of my
            favorite tracks/groups to listen to. <br></br> <br></br>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCAOiVaJJlH0Oduv48NN0mMA"
              className="underline"
            >
              <b>Ghost</b>
            </a>
            ... Everything they make, I don't think they have a bad song{" "}
            <br></br>
            <br></br>
            <a
              target="_blank"
              href="https://youtube.com/playlist?list=OLAK5uy_myCu4xFBpD2PPa4UUuZuLAnhnFRoaiWLQ&si=S4WKQrAlnF3-epbw"
              className="underline"
            >
              <b>Lacuna Coil - Comalies</b>
            </a>
            ... Most of Lacuna Coil's albums aren't my cup of tea, but Comalies
            is good stuff <br></br>
            <br></br>
            <a
              target="_blank"
              href="https://linktr.ee/VioletOrlandi"
              className="underline"
            >
              <b>Violet Orlandi</b>
            </a>
            ... Banger covers of classic songs
            <br></br>
            <br></br>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=8FJ_gT2P27Y&t=1280s"
              className="underline"
            >
              <b>James Paddock - Sigil 1 & 2 Midi OST</b>
            </a>
            ... You wouldn't expect midi music to be genuinely good, but god{" "}
            damn {"(Please put these on spotify)"}
            <br></br> <br></br>
            <a
              target="_blank"
              href="https://www.youtube.com/@SoenOfficial"
              className="underline"
            >
              <b>Soen</b>
            </a>
            ... Weird metal makes brain happy
          </p>

          <h1 id="OtherProjects">Things I’ve worked on/made</h1>
          <p>
            <a href="https://gentoo.guide">
              <b>Gentoo.guide</b>
            </a>{" "}
            (built with: NextJS/TailwindCSS) An all-encompassing, fully open
            source guide for the Gentoo GNU/Linux operating system.{" "}
            {"(I swear, I'll finish it one day)"}
            <br></br>
            <br></br> Contributor to:{" "}
            <a href="https://writedown.app">
              <b>writedown.app</b>
            </a>
            , redesigning the main front page of the project.
            <br></br>
            <br></br>https://presi300.com (built with: NextJS/TailwindCSS) This
            site. Aiming to mimic a MasOS-ish layout and experience on desktop
            and an android-ish one on mobile. With much more to come!
          </p>
        </div>
      </div>
    </div>
  );
}

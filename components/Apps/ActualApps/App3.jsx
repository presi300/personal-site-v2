import React, { use } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SiLemmy } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import Modal from "../AppComponents/Blog/Modal";

export default function TestApp3({}) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full h-full  flex-col flex items-center justify-center transition-colors  bg-sleepless-50 dark:bg-sleepless-400 px-8 pt-8">
      <div className="h-full w-full max-w-[700px] flex justify-start flex-col ">
        <div className="w-full pb-4  h-[170px] bg-sleepless-50 dark:bg-sleepless-400 border-b dark:border-sleepless-50 border-black">
          <p className="text-start text-3xl font-bold ">Preslav Valchev</p>
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
            <SiLemmy size={25}></SiLemmy>
          </div>
        </div>
        {modal && (
          <Modal state={true} closefunc={() => setModal(false)}></Modal>
        )}
        <div className=" overflow-y-scroll noScroll scroll-smooth">
          <h1 id="About">About me</h1>
          <p className="">
            Hi, I’m Preslav Valchev, {year - 2005} years old. Mostly self-taught
            with (I believe) a lot to show for it. I’m affluent in{" "}
            <b>Bulgarian</b> and <b>English</b> with a fully open mind for
            learning other languages in the future.
            <br></br> <br></br>
            My main programming language is <b>JavaScript</b>, using{" "}
            <b>react</b> and <b>JSX</b> to be more precise, with a particular
            passion in front-end development and UI design.
            <br></br>
            <br></br>
            I’m a life long <b>Linux/GNU+Linux</b> user (Alpine Linux FYI) with
            a very good understanding of the entire linux ecosystem and most of
            the backend stack, including things like <b>docker</b>, <b>nginx</b>
            , <b>qemu/kvm</b> as well as storage solutions like <b>RAID</b> ,
            <b>zRAID (ZFS)</b> and network file system solutions like <b>NFS</b>{" "}
            and <b>SMB</b>.
          </p>
          <h1 id="OtherProjects">Things I’ve worked on/made</h1>
          <p>
            My “projects I’ve worked on before” list isn’t particularly
            impressive, due to my very recent graduation, but here it is:{" "}
            <br></br> <br></br>
            <a href="https://gentoo.guide">
              <b>Gentoo.guide</b>
            </a>{" "}
            (built with: NextJS/TailwindCSS) An all-encompassing, fully open
            source guide for the Gentoo GNU/Linux operating system.
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
            <h1 id="Hobbies">My hobbies and interests</h1>
            <p>
              My main hobby is and for a while has been UI design... Yeah... I
              do have other interests, all of which also revolve around
              computers.<br></br>
              <br></br> Using linux started as a hobby for me and it still is.
              Building an entire operating system out of a simple command line
              and configuring it to be precisely what I want has never stopped
              being interesting to me, I even made a whole website about it!
              (See https://gentoo.guide). <br></br>
              <br></br> Self hosting is another, more recent hobby of mine. Not
              having to pay monthly for cloud storage or see ads sure is an
              incentive to get into something
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

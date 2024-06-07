import React, { useState } from "react";
import Image from "next/image";
import { IoIosResize } from "react-icons/io";
import { useTheme } from "next-themes";

import { useEffect } from "react";

// This entire element has been shamelessly cloned from upscayl.org
const ThemeSwitcher = ({
  IMG1 = "/Images/lightmode.png",
  IMG2 = "/Images/darkmode.png",
  IMGWidth = 90,
  IMGHeight = 30,
  IMGResX = 1920,
  IMGResY = 1080,
}) => {
  const { theme, setTheme } = useTheme();

  const [sliderValue, setSliderValue] = useState(50); // Initial value (In %)
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);

    if (event.target.value > 50) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "light") {
      setSliderValue(20);
    } else if (theme === "dark") {
      setSliderValue(80);
    }
  }, []);

  return (
    <div style={{ maxHeight: "400px", height: `270px` }}>
      <div
        style={{
          maxHeight: "600px",
          maxWidth: "350px",
          minWidth: "300px",
          width: `${IMGWidth}vw`,
          height: `${IMGHeight}vh`,
        }}
      >
        <div className="rounded-xl relative top-0 left-0">
          <Image
            style={{
              objectFit: "cover",

              width: "100%",
              height: "100%",
            }}
            alt="Yeah, you're not supposed to see me"
            src={IMG1}
            width={IMGResX}
            height={IMGResY}
            className="relative left-0 top-0 rounded-xl"
          ></Image>
          <Image
            alt="Yeah, you're not supposed to see me"
            style={{
              objectFit: "cover",

              width: `${(100 * sliderValue) / 100}%`,
              height: "100%",
              objectPosition: "bottom left",
            }}
            src={IMG2}
            width={IMGResX}
            height={IMGResY}
            className="absolute top-0 left-0 w-full bottom-0 rounded-l-xl"
          ></Image>
          <input
            type="range"
            min="1"
            max="100"
            id="slider"
            value={sliderValue}
            onChange={handleSliderChange}
            className=" left-0 top-0 h-full z-50 inset-0 w-full cursor-pointer opacity-0 absolute  bg-red-300 color-white "
          ></input>
          <div
            className="absolute left-0  top-0 h-full "
            style={{ width: `${(100 * sliderValue) / 100}%` }}
          >
            <div className="bg-white absolute right-0 bottom-0 top-0 w-[5px] bg-opacity-55 ">
              <div className="relative h-full ">
                <div
                  className="absolute top-[50%] rounded-full bg-opacity-35 backdrop-blur-md bg-white p-2 left-[-20px]"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <IoIosResize size={30} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

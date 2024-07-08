import ThemeSwitcher from "../AppComponents/ThemeSwitcher";
import AccentPicker from "../AppComponents/AccentPicker";

export default function TestApp1({}) {
  return (
    <div className="w-full h-full flex-col flex transition-colors items-center justify-center bg-sleepless-50 dark:bg-sleepless-400">
      <p>Mode</p>
      <ThemeSwitcher IMGHeight={30} IMGWidth={70}></ThemeSwitcher>
      <AccentPicker></AccentPicker>
    </div>
  );
}

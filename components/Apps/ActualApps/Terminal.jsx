import React, { use } from "react";
import { useState } from "react";

export default function TerminalApp({ accent }) {
  // Will finish later, regex is my cryptonite, who the fuck invented it
  const [command, setCommand] = useState("");
  const [returnCMD, setReturnCMD] = useState([""]);
  const [commandMem, addCommandMem] = useState([""]);

  //   Command output
  function ReturnCMD({ id }) {
    return <p className="text-white">{returnCMD[id + 1]}</p>;
  }
  //   Shell
  function Shell({ id }) {
    const handleCmd = (event) => {
      setCommand(event.target.value);
    };

    const onEnter = (event) => {
      if (event.key === "Enter") {
        addCommandMem([...commandMem, command]);
        console.log(event.target.value);
        switch (command) {
          case "neofetch":
            setReturnCMD([...returnCMD, "lmfao"]);
            break;
          case "":
            setReturnCMD([...returnCMD, ""]);
            break;
          case command.includes("echo"):
            const regex = /echo\s+"([^']*)"/;
            const match = command.match(regex);
            (match && match[1] && setReturnCMD([...returnCMD, ""])) ||
              setReturnCMD([...returnCMD, "Syntax error"]);
            break;
          default:
            setReturnCMD([...returnCMD, "Error: Command not found"]);
            break;
        }

        setCommand("");
      }
    };
    return (
      <div className="flex">
        <p className="text-white">{"TEST>"}</p>
        {(id + 1 !== commandMem.length && (
          <input
            type="text"
            className="w-full focus:outline-none bg-[#00000000] text-white"
            readOnly={true}
            value={commandMem[id + 1]}
          ></input>
        )) || (
          <input
            autoFocus={true}
            type="text"
            rows={1}
            className="w-full focus:outline-none bg-[#00000000] text-white"
            value={command}
            onKeyPress={onEnter}
            onChange={handleCmd}
          ></input>
        )}
      </div>
    );
  }
  return (
    <div className="bg-sleepless-400 w-full h-full">
      <div>
        {commandMem.map((p, key, id) => (
          <div key={key}>
            <Shell id={key} key={key + 1}></Shell>
            <ReturnCMD id={key} key={key + 2}></ReturnCMD>
          </div>
        ))}
      </div>
    </div>
  );
}

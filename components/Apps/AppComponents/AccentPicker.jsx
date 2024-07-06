// "use client";
// import React from "react";
// import { useColor } from "react-color-palette";

// export default function AccentPicker({ spawn }) {
//   const accents = [
//     { id: 1, color: "#F24336" },
//     { id: 2, color: "#F48019" },
//     { id: 3, color: "#FDEC58" },
//     { id: 4, color: "#4DAE51" },
//     { id: 5, color: "#B76BFF" },
//     { id: 6, color: "#1C90FF" },
//   ];
//   const [color, setColor] = useColor("#F24336");

//   if (spawn) {
//     return (
//       <div className="flex gap-3">
//         {accents.map(({ id, color, key }) => (
//           <button
//             onClick={() => setColor(color)}
//             key={key}
//             className="rounded-full w-[20px] h-[20px] border border-sleepless-100"
//             style={{ background: color }}
//           ></button>
//         ))}
//       </div>
//     );
//   } else {
//     return color;
//   }
// }

// To be finished

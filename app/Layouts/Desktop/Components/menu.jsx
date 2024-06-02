import React from "react";

export default function Menu({ items }) {
  if (items) {
    return items.map((item, key) => {
      <ul key={key}>
        <li key={key} onClick={item.clickfunc}>
          {item.name}
        </li>
      </ul>;
    });
  }
}

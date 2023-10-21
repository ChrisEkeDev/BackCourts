import { format, getHours, startOfDay, getDay, isWithinInterval } from "date-fns";
import { useState } from "react";
import { getValue } from "../../mockData";

export default function Bar({ data, time }) {
  const [ count, setCount ] = useState(getValue(data, time))

  return (
    <li className="player_activity__bar">
      <div className="player_activity__count">{count} players</div>
      <div className="player_activity__label">
        <div className="player_activity__line"/>
        <span className="player_activity__time">{format(time, "h")} {format(time, "a")}</span>
        <div className="player_activity__line"/>
      </div>
    </li>
  );
}

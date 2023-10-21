import { isSameDay } from "date-fns";
import { useState } from "react";
import { getMinMax } from "../../mockData";
import { useGlobalContext } from "../../context/globalContext";

export default function Plot({ item }) {
    const [values, setValues] = useState(getMinMax(item));
    const{ day } = useGlobalContext();
    const sameDay = isSameDay(day, item.startTime)

    if (sameDay) {
        return (
            <li style={{ left: `${values.min}%`, right: `${values.max}%` }}
                className="player_activity__plot"
            ></li>
        );
    }


}

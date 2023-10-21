import "./styles.scss";
import { useEffect, useState } from "react";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb"
import { format, getDay, subDays } from "date-fns";
import { createTimeLine, createData } from "../../mockData";
import Bar from "./bar";
import Plot from "./plot";
import { useGlobalContext } from "../../context/globalContext";

function PlayerActivity() {
    const { data, day, handleDay } = useGlobalContext();
    const [timeline, setTimeLine] = useState(createTimeLine(day));

    useEffect(() => {
        setTimeLine(createTimeLine(day))
    }, [day])

    return (
        <section className="player_activity__wrapper">
            <header className="player_activity__header">
                <div className="player_activity__title">
                    <h2>Player activity </h2>
                    <h3>Total Players {20}</h3>
                </div>
                <div className="player_activity__day_select">
                <button
                    className="player_activity__button"
                    onClick={() => handleDay(0)}
                >
                    <TbChevronLeft/>
                </button>
                <span>{format(day, "EEEE" )}</span>
                <button
                    className="player_activity__button"
                    onClick={() => handleDay(1)}
                    >
                    <TbChevronRight/>
                </button>
                </div>
            </header>
            <div className="player_activity__contents">
                <ul className="player_activity__bars">
                    {timeline.map((time) => (
                        <Bar data={data} time={time} />
                    ))}
                </ul>
                <ul className="player_activity__plots">
                    {data.map((item) => (
                        <Plot item={item} />
                    ))}
                </ul>
            </div>
        </section>
        )
    }

export default PlayerActivity

import "./styles.scss";
import { useEffect, useState } from "react";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb"
import { format, getDay, subDays } from "date-fns";
import { createTimeLine, createData } from "../../mockData";
import Bar from "./bar";
import Plot from "./plot";
import Carousel from "../carousel/carousel"
import { useGlobalContext } from "../../context/globalContext";
import TopComments from "../topComments";

const Day = ({data}) => {
    return (
        <div className="day__wrapper">
            <span>{format(data.value, "EEEE" )}</span>
        </div>
    )
}

function PlayerActivity() {
    const { data, day, handleDay, days } = useGlobalContext();
    const [timeline, setTimeLine] = useState(createTimeLine(day));
    const current = getDay(day) + 1

    useEffect(() => {
        setTimeLine(createTimeLine(day))
        console.log(current)
    }, [day])

    return (
        <section className="player_activity__wrapper">
            <header className="player_activity__header">
                <div className="player_activity__title">
                    <h2>Heat Map </h2>
                    <p>Player activity from last week</p>
                </div>
                <div className="player_activity__day_select">
                    <div className="player_activity__day_select__overlay"/>
                    <Carousel
                        data={days}
                        startingIndex={current}
                        uniqueIdentifier="id"
                        component={Day}
                        displayedItems={1}
                        padding={0}
                        rightButtonStyles="player_activity__button right_button"
                        leftButtonStyles="player_activity__button left_button"
                        rightButtonIcon={<TbChevronRight className="player_activity__button_icon"/>}
                        leftButtonIcon={<TbChevronLeft className="player_activity__button_icon"/>}
                        rightButtonAction={() => handleDay(1) }
                        leftButtonAction={() => handleDay(0) }
                    />
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

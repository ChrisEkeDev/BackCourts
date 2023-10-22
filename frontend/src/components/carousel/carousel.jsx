import React, { useState, useEffect, useRef } from 'react'
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

import "./carouselStyles.scss";

function Carousel(props) {
    const {
        data,
        startingIndex,
        uniqueIdentifier,
        component: CarouselItem,
        displayedItems,
        padding,
        rightButtonStyles,
        leftButtonStyles,
        rightButtonIcon,
        leftButtonIcon,
        rightButtonAction,
        leftButtonAction
    } = props;

    const display = displayedItems || 4;
    const space = padding || 30;
    const rightButton = rightButtonStyles || "carousel__arrow right_arrow"
    const leftButton = leftButtonStyles || "carousel__arrow left_arrow"
    const rightIcon = rightButtonIcon ||  <TbChevronRight/>;
    const leftIcon = leftButtonIcon || <TbChevronLeft/>;

    const list = useRef(null);
    const container = useRef(null)

    const [containerWidth, setContainerWidth] = useState(1110);
    const [scrollVariable, setScrollVariable] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [count, setCount] = useState(startingIndex);
    const itemWidth = ((containerWidth - ((display - 1) * space)) / display);
    console.log(itemWidth)

    const handleScroll = (direction) => {
        if (list.current) {
            direction === 'right' ?
            setCount(count + 1) :
            setCount(count - 1)
            list?.current?.scrollTo({
                left: direction === 'right' ?
                scrollPosition + scrollVariable :
                scrollPosition - scrollVariable,
                behavior: 'smooth'
            })
            direction === 'right' ?
            setScrollPosition(scrollPosition + scrollVariable) :
            setScrollPosition(scrollPosition - scrollVariable)
        }
    }

    const handeRightButton = () => {
        rightButtonAction()
        handleScroll("right")
    }

    const handeLeftButton = () => {
        rightButtonAction()
        handleScroll("left")
    }

    useEffect(() => {
        if (list.current) {
            setContainerWidth(list?.current?.clientWidth)
            setScrollVariable(itemWidth + space);
        }
    }, [containerWidth, padding, displayedItems])

    const handleStartIndex = () => {
        if (list.current && startingIndex > 0) {
            console.log("the ref to list has changed---", count)
            list.current.scrollTo({
                left: scrollPosition + ( scrollVariable * startingIndex ),
                behavior: 'smooth'
            })
            setScrollPosition(scrollPosition + (scrollVariable * startingIndex))
        }
    }

    useEffect(() => {
       handleStartIndex()
    }, [list.current])



    return (
        <div className='carousel__wrapper'>
            <div
                ref={container}
                className='carousel__container'>
                {
                    count === 1 ? null :
                    <button
                        className={`${leftButton}`}
                        onClick={() => handeLeftButton()}>
                        {leftIcon}
                    </button>
                }
                <ul
                    ref={list}
                    className='carousel__list'
                    style={{gap: `${space}px`}}>
                    {
                        data.map(item => (
                            <li
                                key={item[`${uniqueIdentifier}`]}
                                className='carousel__item'
                                style={{width: `${itemWidth}px`}}>
                                <CarouselItem data={item}/>
                            </li>
                        ))
                    }
                </ul>
                {
                    count - 1 === data.length - display ? null :
                    <button
                        className={`${rightButton}`}
                        onClick={() => handeRightButton()}>
                        {rightIcon}
                    </button>
                }
            </div>
        </div>
  )
}

export default Carousel

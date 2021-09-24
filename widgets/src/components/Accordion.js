import React, { useState } from 'react';


const Accordion = ({ items }) => {
    /*
    setState
    Function that lets you use state in a function component
    Array destructuring:
    const colors = ['red', 'green'];
    const [firstElement, secondElement] = colors
    result: firstElement = 'red' secondElement = 'green'

    useState(defaultValueOfState) returns [stateToKeepTrack, functionToUpdateState]
    */
    const [activeIndex, setActiveIndex] = useState(null); // after calling the setter function once, default value will be gone

    const onTitleClick = (index) => {
        /*
        every time a setter function is called, the whole component(Accordion)
        will be rerendered.
        */
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;
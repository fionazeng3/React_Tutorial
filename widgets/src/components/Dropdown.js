import React, { useState, useEffect, useRef } from "react";
/*
useRef
Help to make use of direct reference to a DOM element
*/
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    useEffect(() => {
        /*
        Event Bubbling:
        When click happen, react send the click event to all the onClick
        listeners to the all the parent component's event handlers.

        document.body is the component of the highest hiearchy(most parent)

        Mannually added event handlers(what we did in here) is the first event handler to invoke
        */
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)) { // see if object we click on is inside of our component
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick, {capture: true});
        // clean up function
        // called when the dropdown component is removed from the dom
        return () => {
            document.body.removeEventListener('click', onBodyClick,{capture: true});
        };
    }, []); // run at initial render only

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;
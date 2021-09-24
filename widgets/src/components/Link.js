import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrKey) {
            return;
        }
        event.preventDefault();
        // changing the window url without refreshing the page
        window.history.pushState({}, '', href);
        // tell dropdown components that the url is changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;
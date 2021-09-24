import { useEffect, useState } from 'react';

const Rout = ({ path, children }) => {
   const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocalChange = () => {
            setCurrentPath(window.location.pathname); // get our rout to update
        };
        window.addEventListener('popstate', onLocalChange);
        return () => {
            window.removeEventListener('popstate', onLocalChange);
        };
    }, []);
    return currentPath === path ? children : null;
};

export default Rout;
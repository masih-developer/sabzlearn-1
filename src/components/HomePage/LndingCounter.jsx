import { useEffect, useState } from "react";

const LndingCounter = ({ limit }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalCounter = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1);

        if (counter === limit) {
            clearInterval(intervalCounter);
        }

        return () => {
            clearInterval(intervalCounter);
        };
    }, [counter]);

    return <span className="block text-xl font-IRANSans-Medium mt-3">{counter}</span>;
};

export default LndingCounter;

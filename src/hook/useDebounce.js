import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [delay, value]);

    return debouncedValue;
}

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};

export default useDebounce;

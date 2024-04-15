import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const VideoContext = createContext();

function VideoProvider({ children }) {
    const [volume, setVolume] = useState(1);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [isMuted, setIsMuted] = useState(true);

    const handleAdjustVolume = (e) => {
        const volume = e.target.value;
        if (volume === '0') {
            setVolume(0);
            setIsMuted(true);
        } else {
            setVolume(volume);
            setIsMuted(false);
        }
    };

    const toggleMuted = () => {
        if (isMuted) {
            setVolume(prevVolume);
            setIsMuted(false);
        } else {
            setVolume(0);
            setPrevVolume(volume);
            setIsMuted(true);
        }
    };

    const value = { volume, isMuted, handleAdjustVolume, toggleMuted };

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

VideoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VideoProvider;

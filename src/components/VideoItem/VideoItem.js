import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './VideoItem.module.scss';
import {
    FavoriteVideoIcon,
    HeartVideoActiveIcon,
    HeartVideoIcon,
    MutedIcon,
    OpenCommentIcon,
    PLayIcon,
    PauseIcon,
    ShareIcon,
    VolumeIcon,
} from '../Icons';
import { VideoContext } from '~/components/VideoProvider';

const cx = classNames.bind(styles);

function VideoItem() {
    const videoRef = useRef();
    const autoVideoRef = useRef();

    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [minutesLoad, setMinuteLoad] = useState(0);
    const [secondsLoad, setSecondsLoad] = useState(0);
    const [minutesTotal, setMinutesTotal] = useState(0);
    const [secondsTotal, setSecondsTotal] = useState(0);
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const contextVideo = useContext(VideoContext);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting);
        });
        observer.observe(autoVideoRef.current);

        if (myElementIsVisible && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        } else if (!myElementIsVisible && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }, [myElementIsVisible]);

    useEffect(() => {
        if (contextVideo.isMuted) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = contextVideo.volume;
        }
    }, [contextVideo.isMuted, contextVideo.volume]);

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLoad = videoRef.current.currentTime;
            const minutesLoad = Math.floor(timeLoad / 60);
            setMinuteLoad(minutesLoad);
            const secondsLoad = Math.floor(timeLoad % 60);
            setSecondsLoad(secondsLoad);
            const totalTime = videoRef.current.duration;
            const minutesTotal = Math.floor(totalTime / 60);
            setMinutesTotal(minutesTotal);
            const secondsTotal = Math.floor(totalTime % 60);
            setSecondsTotal(secondsTotal);
        }, 1000); // Cập nhật thời gian mỗi giây

        return () => clearInterval(interval);
    }, []);

    const handleVideoEnded = () => {
        videoRef.current.play();
    };

    const handleTimeUpdate = (e) => {
        const video = e.target;
        const percent = (video.currentTime / video.duration) * 100;
        setCurrentTime(percent);
        setProgress(video.currentTime / video.duration);
    };

    const handleSetTimeVideo = (e) => {
        const percent = parseFloat(e.target.value);
        const time = (videoRef.current.duration / 100) * percent;
        videoRef.current.currentTime = time;
        setCurrentTime(percent);
        setProgress(videoRef.current.currentTime / videoRef.current.duration);
    };

    const handleVolumeChange = (e) => {
        videoRef.current.volume = e.target.value;
    };

    const handlePlayVideo = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    const handlePauseVideo = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

    const toggleVideo = () => {
        if (isPlaying) {
            handlePauseVideo();
        } else {
            handlePlayVideo();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-card')}>
                <video
                    ref={videoRef}
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/107-6310c43fe0a6f.mp4"
                    onEnded={handleVideoEnded}
                    onTimeUpdate={handleTimeUpdate}
                ></video>
                <div className={cx('controls')}>
                    <div className={cx('play-pause')} onClick={toggleVideo}>
                        {isPlaying ? <PLayIcon /> : <PauseIcon />}
                    </div>
                    <div className={cx('controls-volume')}>
                        <div className={cx('sound-mute')} onClick={contextVideo.toggleMuted}>
                            {contextVideo.isMuted ? <MutedIcon /> : <VolumeIcon />}
                        </div>
                        <div className={cx('change-volume')}>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={contextVideo.volume}
                                onChange={(e) => {
                                    contextVideo.handleAdjustVolume(e);
                                    handleVolumeChange(e);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('progress-time')}>
                    <div className={cx('control-time')}>
                        <input
                            id={styles.progress}
                            type="range"
                            value={currentTime}
                            step="0.1"
                            min="0"
                            max="100"
                            onInput={handleSetTimeVideo}
                        />
                        <div
                            className={cx('range-progess')}
                            htmlFor={styles.progress}
                            style={{ transform: `scaleX(${progress}) translateY(-50%)` }}
                        ></div>
                    </div>
                    <div className={cx('timeon')}>{`${minutesLoad}:${
                        secondsLoad < 10 ? '0' : ''
                    }${secondsLoad}/${minutesTotal}:${secondsTotal < 10 ? '0' : ''}${secondsTotal}`}</div>
                </div>
            </div>
            <div className={cx('icons')}>
                <div ref={autoVideoRef} className={cx('autoplay-video')}></div>
                <div className={cx('icon-item')}>
                    {!isLiked ? <HeartVideoIcon /> : <HeartVideoActiveIcon />}
                    <strong>100K</strong>
                </div>
                <div className={cx('icon-item')}>
                    <OpenCommentIcon />
                    <strong>100K</strong>
                </div>
                <div className={cx('icon-item')}>
                    <FavoriteVideoIcon />
                    <strong>100K</strong>
                </div>
                <div className={cx('icon-item')}>
                    <ShareIcon />
                    <strong>100K</strong>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;

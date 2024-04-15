import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import VideoInfoOverlay from '~/components/VideoInfoOverlay';
import VideoItem from '~/components/VideoItem';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-item')}>
                <VideoInfoOverlay />
                <VideoItem />
            </div>
        </div>
    );
}

export default Content;

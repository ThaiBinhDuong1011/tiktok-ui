import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './VideoInfoOverlay.module.scss';
import Image from '~/components/Images';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import { Popper as PopperWrapper } from '~/components/Popper';
import AccoutPreviewOverlay from './AccoutPreviewOverlay';

const cx = classNames.bind(styles);

function VideoInfoOverlay() {
    const [isFollow, setIsFollow] = useState(false);

    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper className={cx('menu-popper')}>
                <AccoutPreviewOverlay />
            </PopperWrapper>
        </div>
    );

    return (
        <div className={cx('warpper')}>
            <div>
                <Tippy delay={[800, 0]} offset={[0, -20]} interactive placement="bottom-start" render={renderPreview}>
                    <div className={cx('header')}>
                        <Image
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fa8e7c4f639c1bbe532bd6d5c3704e27~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1712304000&x-signature=FwTRbTdoY3cHhxrhbjhhgPVV5kw%3D"
                            alt=""
                        />
                        <div className={cx('info')}>
                            <Link className={cx('user-info')}>
                                <h3 className={cx('nickname')}>thaibinhduong</h3>
                                <h4 className={cx('fullname')}>Thai Binh Duong</h4>
                            </Link>
                            <p className={cx('description')}>Chúng ta của tương lai</p>
                            <Link className={cx('music')} to="/music">
                                <MusicIcon />
                                <span className={cx('music-name')}>Sound in video!</span>
                            </Link>
                        </div>
                    </div>
                </Tippy>
            </div>
            {!isFollow ? (
                <Button outline onClick={() => setIsFollow(true)}>
                    Follow
                </Button>
            ) : (
                <Button className={cx('btn-following')} outline onClick={() => setIsFollow(false)}>
                    Following
                </Button>
            )}
        </div>
    );
}

export default VideoInfoOverlay;

import classNames from 'classnames/bind';

import styles from './AccoutPreviewOverlay.module.scss';
import Image from '~/components/Images';
import Button from '~/components/Button';
import { BlueTickIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccoutPreviewOverlay() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fa8e7c4f639c1bbe532bd6d5c3704e27~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1712304000&x-signature=FwTRbTdoY3cHhxrhbjhhgPVV5kw%3D"
                    alt=""
                />
                <Button outline className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('name-header')}>
                    <p className={cx('nickname')}>
                        <strong>thaibinhduong</strong>
                        <BlueTickIcon className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Thai Binh Duong</p>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>1011</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>58K</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
            <div className={cx('bio')}>20k fl_🏃‍♂️________10k fl Chỉ ghim 3 video có số lượt tim cao nhất thui</div>
        </div>
    );
}

export default AccoutPreviewOverlay;

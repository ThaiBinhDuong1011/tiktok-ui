import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/eb4905e57edde74ec0a76e60e71cc540.jpeg?lk3s=a5d48078&x-expires=1710421200&x-signature=St6fr3JivFMyf1Rq0fYAeWssrY0%3D"
                alt="Duong"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thai Binh Duong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>thaibinhduong</p>
            </div>
        </div>
    );
}

export default AccountItem;

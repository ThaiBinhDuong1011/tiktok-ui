import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7332113831956578325.jpeg?lk3s=a5d48078&x-expires=1712149200&x-signature=sN1lYGgqu3EWctPjFirHjMwCbpI%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>shai96q222a4</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>බෙබා මීම්ස්</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('warpper')}>
            <div className={cx('label')}>{label}</div>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

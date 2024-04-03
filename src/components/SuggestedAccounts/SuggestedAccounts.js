import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as getSuggestUserService from '~/services/getSuggestUserService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [suggestUsers, setSuggestUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getSuggestUserService.getSuggestUser();
            setSuggestUsers(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('warpper')}>
            <div className={cx('label')}>{label}</div>
            {suggestUsers.map((suggestUser) => (
                <AccountItem key={suggestUser.id} data={suggestUser} />
            ))}
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

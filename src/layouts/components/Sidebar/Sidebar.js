import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('warpper')}>
            <Menu className={cx('menu')}>
                <MenuItem
                    title={'For You'}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                    to={config.routes.home}
                />
                <MenuItem
                    title={'Following'}
                    icon={<FollowingIcon />}
                    iconActive={<FollowingActiveIcon />}
                    to={config.routes.following}
                />
                <MenuItem title={'LIVE'} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
            <SuggestedAccounts label="Suggested Accounts" />
        </aside>
    );
}

export default Sidebar;

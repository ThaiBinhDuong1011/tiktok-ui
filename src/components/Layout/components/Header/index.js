import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    EnglishIcon,
    FeedbackAndHelpIcon,
    GetCoinsIcon,
    InboxIcon,
    KeyboardShortcutsIcon,
    LogOutIcon,
    MessagesIcon,
    SettingsIcon,
    UploadIcon,
    ViewProfileIcon,
} from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <EnglishIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackAndHelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardShortcutsIcon />,
        title: 'Keybroad shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <ViewProfileIcon />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <GetCoinsIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outline leftIcon={<UploadIcon />} className={cx('upload-btn')}>
                                Update
                            </Button>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon className={cx('icon-messages')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('icon-inbox')} />
                                    <sup className={cx('sup-badge-inbox')}>29</sup>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline leftIcon={<UploadIcon />} className={cx('upload-btn')}>
                                Update
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eb4905e57edde74ec0a76e60e71cc540.jpeg?lk3s=a5d48078&x-expires=1710925200&x-signature=LioRiN2QAdG7xgWfXLFG1e1K0Jw%3D"
                                alt="Thái Bình Dương"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

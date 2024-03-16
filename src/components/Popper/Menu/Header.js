import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
      </button>
      <h3 className={cx('header-title')}>{title}</h3>
    </header>
  );
}

export default Header;

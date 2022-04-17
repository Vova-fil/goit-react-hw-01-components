import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.online : s.ofline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

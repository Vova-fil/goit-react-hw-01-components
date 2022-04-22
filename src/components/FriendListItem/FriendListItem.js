import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.friend} key={id}>
      <span className={isOnline ? s.online : s.ofline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
//  <li className={s.friend} key={id}>
//    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
//  </li>;

import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
//import s from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

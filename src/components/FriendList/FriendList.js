// Модули
import React from 'react';
import PropTypes from 'prop-types';
// Компоненты
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friendList">
    {friends.map(({ id, ...friend }) => (
      <FriendListItem key={id} friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

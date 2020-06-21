// Модули
import React from 'react';
import PropTypes from 'prop-types';
// Дефолтная картинка для defaultProps
import defaultImage from './defaultImg.jpg';
// Стили
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;

  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = { avatar: defaultImage };

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
export default FriendListItem;

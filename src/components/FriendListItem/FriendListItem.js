// Модули
import React from 'react';
import PropTypes from 'prop-types';
// Дефолтная картинка для defaultProps
import defaultImage from './defaultImg.jpg';
// Стили
import styles from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li className={styles.item} key={id}>
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

FriendListItem.defaultProps = { avatar: defaultImage };
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;

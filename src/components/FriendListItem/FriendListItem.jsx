import css from "./FriendListItem.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <>
<div className={css.friendWrapper}>
  <img className={css.friendImg} src={avatar} alt="Avatar" />
  <p className={css.friendName}>{name}</p>
    <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
 
</div>
    </>
    )
};


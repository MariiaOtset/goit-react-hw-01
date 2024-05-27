import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsWrapper}>
        <li className={css.stats}>
          <span>Followers</span>
          <span className={css.span}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span className={css.span}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span className={css.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

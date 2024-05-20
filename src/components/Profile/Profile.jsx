import css from "./Profile.module.css";


export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profileCard}>
<div>
 <img className={css.profileImg}
   src={image}
            alt="User avatar"
 />
 <p className={css.username}>{name}</p>
 <p className={css.text}>@{tag}</p>
 <p>{location}</p>
 </div>

 <ul>
 <li>
 <span>Followers</span>
 <span>{stats.followers}</span>
 </li>
 <li>
 <span>Views</span>
 <span>{stats.views}</span>
 </li>
 <li>
 <span>Likes</span>
 <span>{stats.likes}</span>
 </li>
 </ul>
</div>

    )
}

export default Profile
import css from "./Profile.module.css"
const Profile = (props) => {
    const {image, name, tag, location,stats} = props;
    return (
    <div className={css.profile}>
        <div className={css.profileContainer}>
            <img className={css.profileImg} src={image} alt="Avatar" />
        <h3 className={css.profileName}>{name}</h3>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
        </div>
        <ul className={css.profileList}>
    <li className={css.profileItem}>
    <span>Followers</span>
    <span className={css.spanItem}>{stats.followers}</span>
    </li>
    <li className={css.profileItem}>
    <span>Views</span>
    <span className={css.spanItem}>{stats.views}</span>
    </li>
    <li className={css.profileItem}>
    <span>Likes</span>
    <span className={css.spanItem}>{stats.likes}</span>
    </li>
</ul>
    </div>
)
}

export default Profile
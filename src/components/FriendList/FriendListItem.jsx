import css from "./FriendList.module.css"
const FriendListItem = ({ avatar, name, status }) => {
    return (
    <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.itemName}>{name}</p>
        {status ? (
        <p style={{ color: "green" }}>Online</p>) : (
        <p style={{ color: "red" }}>Offline</p>)}
        </div>
    )
}

export default FriendListItem

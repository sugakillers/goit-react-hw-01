import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"
const FriendList = ({friends}) => {
    return (
        <div>

            <ul className={css.list}>
            {friends.map((item) => {
    return (
        <li className={css.item} key={item.id}>
            <FriendListItem
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
    />
        </li>
    )
})}
            </ul>

        </div>
    )
}

export default FriendList




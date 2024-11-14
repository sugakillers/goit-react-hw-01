
import './App.css'
import Profile from './components/Profile/Profile'
import userData from '../src/userData.json'
import FriendList from './components/FriendList/FriendList'
import friends from '../src/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/transactions.json'

function App() {

  return (
      <div>
        <Profile 
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        />
        

        
        <FriendList friends={friends} />
        <TransactionHistory items={transactions}/>
      </div>

      
  )

}




export default App


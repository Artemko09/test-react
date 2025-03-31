import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props){
    
    const {isLoggedIn = false, username = 'Guest'} = props

    const welcomeMessage = <h2 className= {styles.isLoggedIn}>Welcome {username}</h2> 
    const errorMessage = <h2 className={styles.NotisLoggedIn}>Please log in to continue</h2>
    return (isLoggedIn ? welcomeMessage : errorMessage)
}
UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
export default UserGreeting
import styles from './Student.module.css'
import PropTypes from 'prop-types'

function Student(props){
    const {name = 'Guest', age = 0, isStudent = false} = props;
    return(
        <div className={styles.infoDiv}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}
Student.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student
import styles from './ProfilePicture.module.css'

function ProfilePicture() {

    const imageUrl = './src/assets/завантаження.jpg';
    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} className={styles.profPic}></img>
    )
}

export default ProfilePicture
import styles from './Avatar.module.css'

const Avatar = ({ hasBorder = true, avatar }) => {
  return (
    <img 
      src={avatar} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}

export default Avatar;
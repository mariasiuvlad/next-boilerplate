import AvatarDropzone from '@components/AvatarDropzone/AvatarDropzone'
import styles from './User.module.css'

const User = ({user}) => (
  <div className={styles.container}>
    <AvatarDropzone>
      <img
        className={styles.avatar}
        src={`${user.avatar_url}?${user.updated_at}`}
        alt={'Avatar of ' + user.display_name}
      />
    </AvatarDropzone>
    <p className={styles.name}>{user.display_name}</p>
  </div>
)

export default User

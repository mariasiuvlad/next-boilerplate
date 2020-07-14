import AvatarDropzone from '@components/AvatarDropzone/AvatarDropzone'
import {Users} from '__generated__/graphql'
import {FC} from 'react'
import styles from './User.module.css'

interface UserProps {
  user: Users
}

const User: FC<UserProps> = ({user}) => (
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

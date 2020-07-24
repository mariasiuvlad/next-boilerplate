import AvatarDropzone from '@atom/AvatarDropzone/AvatarDropzone'
import style from './User.module.css'
import {Users} from '__generated__/graphql'

interface UserProps {
  user: Partial<Users>
}

const User = ({user}: UserProps) => (
  <div className={style.container}>
    <AvatarDropzone className="w-16 h-16 mr-8">
      <img
        className={style.avatar}
        src={`${user.avatar_url}?${user.updated_at}`}
        alt={'Avatar of ' + user.display_name}
      />
    </AvatarDropzone>
    <p className={style.name}>{user.display_name}</p>
  </div>
)

export default User

import AvatarDropzone from '@atom/AvatarDropzone/AvatarDropzone'
import Skeleton from '@atom/Skeleton'
import style from './User.module.css'
import {UserInfoFragment} from '__generated__/graphql'

interface UserProps {
  user: UserInfoFragment
  loading: boolean
}

const Fallback = () => (
  <div className={style.container}>
    <Skeleton type="avatar" />
    <Skeleton type="text" />
  </div>
)

const User = ({user, loading}: UserProps) =>
  loading ? (
    <Fallback />
  ) : (
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

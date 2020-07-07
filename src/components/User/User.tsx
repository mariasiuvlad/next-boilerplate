import AvatarDropzone from '@components/AvatarDropzone/AvatarDropzone'
import {Users} from '__generated__/graphql'
import {FC} from 'react'

interface UserProps {
  user: Users
}

const User: FC<UserProps> = ({user}) => (
  <div className="text-sm p-8 bg-white border border-gray-300 rounded-lg">
    <AvatarDropzone>
      <img
        className="w-10 h-10 rounded-full mb-4"
        src={`${user.avatar_url}?${user.updated_at}`}
        alt={'Avatar of ' + user.display_name}
      />
    </AvatarDropzone>
    <p className="text-gray-900 leading-none">{user.display_name}</p>
  </div>
)

export default User

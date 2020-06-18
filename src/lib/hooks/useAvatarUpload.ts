import {useMutation, useQuery} from '@apollo/react-hooks'
import {useState, useEffect, useCallback} from 'react'
import * as FileAPI from '@lib/api/storage'
import {AxiosError} from 'axios'
import {ApolloError} from 'apollo-client'
import {UPDATE_AVATAR, GET_USER} from '@lib/graphql/queries'

type AvatarUploadError = AxiosError | ApolloError

export function useAvatarUpload() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AvatarUploadError>(null)
  const [updateUserAvatar, {error: apolloError}] = useMutation(UPDATE_AVATAR)
  useEffect(() => {
    setError(apolloError)
  }, [apolloError])
  const {data} = useQuery(GET_USER)
  const userId = data?.users[0]?.id

  const onUploadProgress = ({loaded, total}) =>
    setProgress(Math.round((loaded * 100) / total))

  const upload = useCallback(
    async (file: Blob) => {
      setLoading(true)
      await FileAPI.uploadAvatar(file, userId, onUploadProgress)
        .then(({request: {responseURL: avatar_url}}) => {
          updateUserAvatar({
            refetchQueries: [{query: GET_USER}],
            variables: {avatar_url},
          })
        })
        .catch((e) => setError(e))
      setLoading(false)
    },
    [userId]
  )

  return {
    upload,
    error,
    progress,
    loading,
  }
}

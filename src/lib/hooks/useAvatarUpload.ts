import {useState, useEffect, useCallback} from 'react'
import * as FileAPI from '@lib/api/storage'
import {AxiosError} from 'axios'
import {ApolloError} from 'apollo-client'
import {
  useUpdateAvatarMutation,
  useGetUserQuery,
  GetUserDocument,
} from '__generated__/graphql'

type AvatarUploadError = AxiosError | ApolloError

export function useAvatarUpload() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AvatarUploadError>(null)
  const [updateUserAvatar, {error: apolloError}] = useUpdateAvatarMutation()

  useEffect(() => {
    setError(apolloError)
  }, [apolloError])

  const {data} = useGetUserQuery()
  const userId = data?.users[0]?.id

  const onUploadProgress = ({loaded, total}) =>
    setProgress(Math.round((loaded * 100) / total))

  const upload = useCallback(
    async (file: Blob) => {
      setLoading(true)
      await FileAPI.uploadAvatar(file, userId, onUploadProgress)
        .then(({request: {responseURL: avatar_url}}) => {
          updateUserAvatar({
            refetchQueries: [{query: GetUserDocument}],
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

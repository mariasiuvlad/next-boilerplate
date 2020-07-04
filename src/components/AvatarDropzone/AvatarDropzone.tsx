import {useAvatarUpload} from '@lib/hooks'
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Loading from '@components/common/Loading'

export default function AvatarDropzone({children = null}) {
  const {upload, loading} = useAvatarUpload()
  const onDrop = useCallback((acceptedFiles) => {
    upload(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  if (loading) return <Loading />

  return (
    <div {...getRootProps()}>
      <input data-testid="AvatarUpload-dropzone" {...getInputProps()} />
      <div>{children}</div>
    </div>
  )
}

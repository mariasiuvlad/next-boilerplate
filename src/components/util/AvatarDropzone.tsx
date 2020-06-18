import {useAvatarUpload} from '@lib/hooks'
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Loading from '@components/common/Loading'

export default function AvatarDropzone({children}) {
  const {upload, loading} = useAvatarUpload()
  const onDrop = useCallback((acceptedFiles) => {
    upload(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  if (loading) return <Loading />

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>{children}</div>
    </div>
  )
}

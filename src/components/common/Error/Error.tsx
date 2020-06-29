export default function Error({error}) {
  return (
    <div>
      error: <pre>{JSON.stringify(error)}</pre>
    </div>
  )
}

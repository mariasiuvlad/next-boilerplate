export default function ErrorMessage({error}) {
  return (
    <div>
      error: <pre>{JSON.stringify(error)}</pre>
    </div>
  )
}

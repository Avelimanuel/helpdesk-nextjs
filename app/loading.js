import {Spinner} from "@nextui-org/spinner";

const Loading = () => {
  return (
    <main className='text-center'>
        <h2 className='text-primary'>Loading...</h2>
        <Spinner  />
        <p>Please wait...</p>
    </main>
  )
}

export default Loading

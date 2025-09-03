export default async function page({ params }) {

  const allfi = await params

  return (
    <div>
      <ol>
        <li>catch route
          <p> when ever we wanna to match one or more Url with one segment this is call catch route.</p>
        </li>
        <li>
          optional catch route
          <p>when ever we need to match one ore more Url without any segment we use optional cat routes.</p>
        </li>
        <li>
          try to do something in the Url <b>files/jeeten/hello/</b> anythink u can write here u always got the correct usl inside the <b>files page.</b> 
        </li>
      </ol>
      <h1>this is all files {allfi.catchall?.join("/")}</h1>
    </div>
  )
}
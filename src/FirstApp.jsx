
const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = () => {

  return (
    <>
      <h1>{ getResult(10, 2) }</h1>
        {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
        <p>Soy un parrafo</p>
    </>
  )
}

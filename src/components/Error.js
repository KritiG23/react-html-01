import React from 'react'
import { useRouteError } from 'react-router-dom'


 const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <>
    <div>error</div>
    <div>{err.status}</div>
    </>
  )
}

export default ErrorPage
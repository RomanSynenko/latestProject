import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch()
  }, [dispatch])

  return (
    <>

    </>
  )
}

export default App;

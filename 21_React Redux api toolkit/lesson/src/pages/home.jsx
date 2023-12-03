import { useDispatch, useSelector } from "react-redux";
import { setTaskId } from "../store/slices/breadcrumbs";
import { useEffect } from "react";

export default function Home() {
  const { setTaskId } = useContext(SomeContext)
  const { taskId } = useSelector(state => state.breadcrumbs)
  const dispatch = useDispatch();


  function setTaskIdHandler() {
    dispatch(setTaskId('Кредит'))
  }

  useEffect(() => {
    setTaskIdHandler();
  }, [])

  return <h1 setTaskIdHandler={setTaskIdHandler}>Home page, taskId: {taskId}</h1>;
}

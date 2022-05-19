import React from "react";
import { useSelector, useDispatch } from "react-redux";
import addCourseAction from "../../store/actions";

export default function CourseList() {
  const courses = useSelector(state=> state.data);
  const dispatch = useDispatch();

  function addCourse(){
    dispatch(addCourseAction('Redux'))
  }

  return(
    <div>
      <ul>
        {
          courses.map(course=>(
            <li key={course}>{course}</li>
          ))
        }
      </ul>
      <button type="button" onClick={addCourse}>Adicionar Curso</button>
    </div>
  );
}
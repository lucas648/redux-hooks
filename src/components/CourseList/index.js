import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addCourseAction from "../../store/actions";

export default function CourseList() {
  const courses = useSelector(state=> state.data);
  const dispatch = useDispatch();
  const [newCourse, setNewCourse] = useState('');

  function addCourse(){
    dispatch(addCourseAction(newCourse))
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
      <input
        onChange={course=>(
          setNewCourse(course.target.value)
        )}
      />
      <button type="button" onClick={addCourse}>Adicionar Curso</button>
    </div>
  );
}
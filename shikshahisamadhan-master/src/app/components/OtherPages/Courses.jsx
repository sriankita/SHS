import  { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: left;
    padding: 20px;
`;

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('https://shs-j1hc.onrender.com/courses')
        .then(response => {
            setCourses(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the courses!", error);
        });
}, []);


  return (
    <Container>
    {courses.map(course => (
        <CourseCard key={course._id} course={course} />
    ))}
</Container>
  )
}

export default Courses
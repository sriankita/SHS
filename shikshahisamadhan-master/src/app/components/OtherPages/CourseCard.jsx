import React from 'react';
import styled from 'styled-components';

// Styled components for the Course Card
const Card = styled.div`
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Details = styled.div`
    padding: 15px;
`;

const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
    color: #555;
`;

const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const Category = styled.p`
    font-size: 14px;
    color: #777;
`;

const Instructor = styled.p`
    font-size: 14px;
    color: #777;
`;



// CourseCard component
const CourseCard = ({ course }) => {
    return (
        <Card>
            <Image src={course.image} alt={course.title} />
            <Details>
                <Title>{course.title}</Title>
                <Description>{course.description}</Description>
                <Price>${course.price}</Price>
                <Category>Category: {course.category}</Category>
                <Instructor>Instructor: {course.instructor}</Instructor>
            </Details>
        </Card>
    );
};

export default CourseCard;
import React, { useState } from 'react'
import Card from './Card'
const Cards = ({courses,category}) => {
    let allCourses = [];
    const [likedCourses,setLikedCourses] = useState([]);

    const getCourses = () => {
        if(category === "All") {
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                })
            })
            return allCourses; 
        }else{
            console.log(courses);
            console.log(category);
            return courses[category];
        }
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => {
                    return <Card course = {course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}   

export default Cards;
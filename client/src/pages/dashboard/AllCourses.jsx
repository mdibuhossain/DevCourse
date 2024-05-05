import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/courses`)
                .then((response) => {
                    setCourses(response.data);
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleDelete = (id) => {
        try {
            axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/courses/${id}`, { withCredentials: true })
                .then((response) => {
                    console.log(response.data);
                    const newCourses = courses.filter((course) => course.id !== id);
                    setCourses(newCourses);
                    alert("Course deleted successfully")
                }
                ).catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <>
            <h3 className='text-center font-weight-bold'>All Courses</h3>
            <table class="table table-striped table-info">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Coupon available</th>
                        <th scope="col">Visibility</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={course.id}>
                                <th scope="row">{course.id}</th>
                                <td>{course.title}</td>
                                <td>{course.isCouponAvailable ? "Yes" : "No"}</td>
                                <td>{course.isVisible ? "Yes" : "No"}</td>
                                <td>{course.price}</td>
                                <td>
                                    <button type="button" class="btn btn-primary">Edit</button>
                                    <button onClick={() => handleDelete(course.id)} type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AllCourses
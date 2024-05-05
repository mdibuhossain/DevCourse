import axios from 'axios';
import React from 'react'

function AddNewCourse() {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        const payload = {
            img: e.target["img"].files[0].name,
            title: e.target["title"].value,
            price: parseInt(e.target["price"].value),
            discount: e.target["discount"].value,
            description: e.target["description"].value,
            isVisible: e.target["isVisible"].checked,
            isCouponAvailable: e.target["isCouponAvailable"].checked,
        }
        // formData.append('payload', JSON.stringify(payload));
        // formData.append("imgage", e.target["img"].files[0]);
        console.log(payload)
        try {
            setIsLoading(true)
            axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/courses`, payload,
                {
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log(response.data);
                    alert("Successfully added new course")
                    e.target.reset();
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false)
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h3 className='text-center font-weight-bold'>Add New Course</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Course banner</label>
                    <input className="form-control" name="img" type="file" id="formFile" />
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="FormInput1">Course title</label>
                            <input type="text" name="title" id="FormInput1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="FormInput2">Price</label>
                            <input type="number" name="price" id="FormInput2" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div data-mdb-input-init className="form-outline">
                            <label className="form-label" htmlFor="FormInput2">Discount</label>
                            <input type="text" name="discount" id="FormInput2" className="form-control" />
                        </div>
                    </div>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label me-2" htmlFor="FormInput5">Visiblity: </label>
                    <input type="checkbox" name="isVisible" id='FormInput5' />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label me-2" htmlFor="FormInput6">Coupon: </label>
                    <input type="checkbox" name="isCouponAvailable" id='FormInput6' />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="FormInput7">Description</label>
                    <textarea className="form-control" name="description" id="FormInput7" rows="4"></textarea>
                </div>

                <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">ADD</button>
            </form>
        </>
    )
}

export default AddNewCourse
import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <h1 className="text-center mb-5">Contact Us</h1>
                <form className="row g-3">
                    <div className="col-12">
                        <div class="row g-3">
                            <div class="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a messages here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Contact;
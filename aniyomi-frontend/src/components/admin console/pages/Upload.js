import React, { useState, useEffect } from "react";
import { videoupload } from "../../../auth/videohelper";
import { getAllCategories, isAuthenticate } from "../../../auth/auth";
import '../console.css'

export const Upload = () => {
    const [values, setValues] = useState({
        name: "",
        category: "",
        categories: [],
        description: "",
        link: "",
        photo: "",
        success: false,
        error: "",
        formdata: ""
    });

    const { token, user } = isAuthenticate();

    const { name, category, categories, description, link, photo, success, error, formdata } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formdata.set(name, value);
        setValues({ ...values, [name]: value });
    };


    const preload = () => {
        getAllCategories().then(data => {
            if (data && data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, categories: data, formdata: new FormData() });
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])




    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        videoupload(user._id, token, formdata)
            .then(data => {
                if (data && data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        category: "",
                        categories: [],
                        description: "",
                        link: "",
                        photo: "",
                        success: true,
                        error: ""
                    });
                }
            })
            .catch(console.log("Error in Upload"));
        console.log(videoupload);
    };



    const uploadForm = () => {
        return (
            <div className="row">
                <div className="d-flex justify-content-center">
                    <form>
                        <h3>Upload Video</h3>
                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={handleChange("name")} type="text" className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="form-group">
                            <label>Categories</label>
                            <select
                                onChange={handleChange("category")}
                                className="form-control"
                                placeholder="Category"
                            >
                                <option>Select</option>
                                {categories &&
                                    categories.map((cate, index) => (
                                        <option key={index} value={cate._id}>{cate.name}</option>
                                    ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <input onChange={handleChange("description")} type="text" className="form-control" placeholder="Enter Description" />
                        </div>

                        <div className="form-group">
                            <label>Enter Link</label>
                            <input onChange={handleChange("link")} type="link" className="form-control" placeholder="Enter link" />
                        </div>

                        <div className="form-group">

                            <label>Photo</label>
                            <br></br>
                            <input type="file" onChange={handleChange("photo")} name="photo" accept="image/png, image/jpeg" />
                        </div>

                        <br></br>

                        <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    };


    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                    Video Uploaded
                    </div>
                </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    return (

        <div className="container">
            {errorMessage()}
            {successMessage()}
            {uploadForm()}
        </div>

    );
}

export default Upload;

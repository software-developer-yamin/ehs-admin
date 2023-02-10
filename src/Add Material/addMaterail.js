import React, { useState } from 'react'
import "../AddProduct/AddProduct.css"
import { API } from '../backend';

// Pvc(polyvinail)
function AddMaterail() {
    const [data, setdata] = useState({
        material_title: "",
        material_imgUrl: "",
        dimension_title: "",
        dimension_imgUrl: "",
        price: "",
        description: "",
        new: true,
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setdata((preVal) => {
            console.log(data)
            return { ...preVal, [name]: value };
        });
    };

    const submit = async () => {
        if (data.material_title === "" ||
            data.material_imgUrl === "" ||
            data.dimension_title === "" ||
            data.dimension_imgUrl === "" ||
            data.price === "") {
            window.alert("All fields are required ")
        }
        else {
            console.log(data)
            const response = await fetch(`${API}/material/createMaterial`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"

                },
            });
            const dat = await response.json();
            //   console.log(dat, "updwishhhhhh");

            if (dat.success === 1) {
                window.alert("Successfully uploaded")
                setdata(
                    {
                        material_title: "",
                        material_imgUrl: "",
                        dimension_title: "",
                        dimension_imgUrl: "",
                        price: "",
                        description: "",
                        new: true,
                    }
                )
            }else{
                window.alert("something went wrong !! or may be price should contain only number")
            }
        }
    }
    return (
        <div>
            <form >
                <div className="add__product__main__body">
                    <div className="add__product__body__left">
                        <div style={{marginLeft:"350px"}} className="product__info__form">
                            <div className="product__info__form__body">
                                <p className="product__info__form__title">
                                    Create Material
                                </p>
                                <label for="name">Material title</label>
                                <br />
                                <input
                                    className="product__form__input"
                                    value={data.material_title}
                                    name="material_title"
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                />
                                <br />
                                <label for="name">Material imgUrl</label>
                                <br />
                                <input
                                    className="product__form__input"

                                    name="material_imgUrl"
                                    value={data.material_imgUrl}
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                />
                                <br />
                                <label for="name">Dimension title</label>
                                <br />
                                <input
                                    className="product__form__input"

                                    name="dimension_title"
                                    value={data.dimension_title}
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                />
                                <br />
                                <label for="name">Dimension imgUrl</label>
                                <br />
                                <input
                                    className="product__form__input"

                                    name="dimension_imgUrl"
                                    value={data.dimension_imgUrl}
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                />
                                <br />
                                <label for="name">Price</label>
                                <br />
                                <input
                                    className="product__form__input"

                                    name="price"
                                    value={data.price}
                                    type="text"
                                    required
                                    onChange={changeHandler}
                                />
                                <br />
                                <label for="name">Description</label>
                                <br />
                                <input
                                    className="product__form__input"

                                    name="description"
                                    value={data.description}
                                    type="text"
                                    placeholder='OPTIONAL'
                                    onChange={changeHandler}
                                />
                                <br />
                                <div
                                    className="b"
                                    onClick={submit}
                                >
                                    Upload
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddMaterail
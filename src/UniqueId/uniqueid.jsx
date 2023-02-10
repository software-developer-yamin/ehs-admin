import React, { useState } from 'react'
import "../AddProduct/AddProduct.css"
import { API } from '../backend';
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Uniqueid() {
    const [id, setId] = useState("");

    const [productCreatedSnackbarOpen, setProductCreatedSnackbarOpen] =
    useState(false);
  
      const handleCopy = (text) => {
        navigator.clipboard.writeText(text); 
        setProductCreatedSnackbarOpen(true);

    }
    const closeProductCreatedSnackbar = () => {
        setProductCreatedSnackbarOpen(false);
      };
      const generateId = ()=>{
        var i = new Date().getTime().toString();
        setId(i)
      }
  return (
    <div>
           <Snackbar
        open={productCreatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeProductCreatedSnackbar}
      >
        <MuiAlert
          onClose={closeProductCreatedSnackbar}
          severity="success"
          variant="filled"
        >
          Copied
        </MuiAlert>
      </Snackbar>
            <form >
                <div className="add__product__main__body">
                    <div className="add__product__body__left">
                        <div style={{marginLeft:"410px",width:"710px"}} className="product__info__form">
                            <div className="product__info__form__body">
                                <p className="product__info__form__title">
                                GenerateId
                                </p>
                                {/* <input
                  type="text"
                  id="file"
                  className="file__upload"
                  onChange={(e) => uploadImg(e)}
                />
                <br />
                <label for="file" className="file__upload__label">
                  Add Image
                </label>

                <span className="image__preview">
                  {imgUrl?.map((img) => (
                    <div className="thumbnail">
                      <Avatar
                        variant="square"
                        alt=""
                        src={img}
                        style={{
                          height: "100px",
                          width: "100px",
                          marginRight: "10px",
                        }}
                      />
                      <span
                        className="remove__img"
                        name={img}
                        onClick={(e) => removeImg(e)}
                      >
                        x
                      </span>
                    </div>
                  ))}
                </span> */}
                <div > <input style={{width:"100%",fontSize:"larger",height:"50px"}}
                        id=""
                        type="text"
                        name="imgg"
                        value={id}/>
                      
                   <div style={{display: "flex",justifyContent:"space-around"}}>
                   <span className='b' onClick={()=>{
                        generateId()
                      }}>
                    generate
                    </span>
                    <span className='b' onClick={()=>{
                        handleCopy(id)
                      }}>
                    copy
                    </span>
                    <span className='b' onClick={()=>{
                        setId("")
                      }}>
                    reset
                    </span>
                   </div>
                            </div>
             


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Uniqueid
import React, { useState } from 'react'
import "../AddProduct/AddProduct.css"
import { API } from '../backend';
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Addimage() {
    const [imgUrl, setImgUrl] = useState([]);
    const [productCreatedSnackbarOpen, setProductCreatedSnackbarOpen] =
    useState(false);
    const uploadImg = async (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append("imgUrl", file);
        console.log(formData)
    
        await axios
          .post(`${API}/posters/uploadFile`, formData)
          .then((response) =>{
          console.log(response);
            setImgUrl([...imgUrl, response.data.data.fileSavedUrl])
      });
        console.log(imgUrl);
      };
    
      const removeImg = (e) => {
        const name = e.target.getAttribute("name");
        setImgUrl(imgUrl.filter((item) => item !== name));
      };
      const handleCopy = (text) => {
        navigator.clipboard.writeText(text); 
        setProductCreatedSnackbarOpen(true);

    }
    const closeProductCreatedSnackbar = () => {
        setProductCreatedSnackbarOpen(false);
      };
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
                        <div style={{marginLeft:"350px"}} className="product__info__form">
                            <div className="product__info__form__body">
                                <p className="product__info__form__title">
                                    Add Image
                                </p>
                                <input
                  type="file"
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
                </span>
                {
                    imgUrl.map((i)=>{
                        return <div key={i}> <input
                        id=""
                        type="text"
                        name="imgg"
                        value={i}/>
                      
                      <span className='b' onClick={()=>{
                        handleCopy(i)
                      }}>
                    copy
                    </span>
                            </div>
                    
                     })
                 }
           
                                {/* <div
                                    className="b"
                                    // onClick={submit}
                                >
                                    Upload
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Addimage
import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Header from "./AddProductHeader";
import Avatar from "@material-ui/core/Avatar";
import { Multiselect } from "multiselect-react-dropdown";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./AddProduct.css";
import axios from "axios";

function AddProduct() {
  //defining states
  const [catOptions, setCatOptions] = useState([]);
  const [subCatOptions, setSubCatOptions] = useState([]);
  const [authorsOptions, setAuthorsOptions] = useState([]);
  const [materialDimensionOptions, setMaterialDimensionOptions] =useState([]);
  const [name, setName] = useState();
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [author, setAuthor] = useState([]);
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [sku, setSku] = useState();
  const [originalOneDriveLink, setOriginalOneDriveLink] = useState();
  const [originalPrice,setOriginalPrice] = useState();
  const [stocks, setStocks] = useState();
  const [language, setLanguage] = useState(1);
  const [imgUrl, setImgUrl] = useState([]);
  const [bestSeller, setBestSeller] = useState(0);
  const [materialDimension, setMaterialDimension] = useState([]);
  //const [materialDimensionList, setMaterialDimensionList]=useState([]);
  // const [material_title, setMaterialTitle] = useState();
  // const [material_imgUrl, setMaterialImgUrl] = useState();
  // const [dimension_title, setDimensionTitle] = useState();
  // const [dimension_imgUrl, setDimensionImgUrl] = useState();
  // const [price, setPrice] = useState();
  const [discountType, setDiscountType] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [fields, setFields] = useState(1);
  const [materialCreatedSnackbarOpen, setMaterialCreatedSnackbarOpen] =
    useState(false);
  const [productCreatedSnackbarOpen, setProductCreatedSnackbarOpen] =
    useState(false);

  //set options for catgeory
  const setCategoryOptions = async () => {
    await axios
      .get(`${API}/category/getCategoryById`)
      .then((response) => {
        let categories = [];
        for (var i = 0; i < response.data.data.length; i++) {
          let item = {
            name: response.data.data[i].title,
            id: response.data.data[i]._id,
          };
          categories.push(item);
        }
        setCatOptions(categories);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  //set option for sub-category
  const setSubCategoryOptions = async () => {
    await axios
      .get(`${API}/subCategory/getSubCategory`)
      .then((response) => {
        let subCategories = [];
        for (var i = 0; i < response.data.data.length; i++) {
          let item = {
            name: response.data.data[i].title,
            id: response.data.data[i]._id,
          };
          subCategories.push(item);
        }
        setSubCatOptions(subCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setMaterialDimensions= async ()=>{
    await axios
      .get(`${API}/material/getMaterial`)
      .then((response) => {
        console.log(response.data.data);
        let authors = [];
        for (var i = 0; i < response.data.data.length; i++) {
          let item = {
            name:response.data.data[i].material_title+" - "+ response.data.data[i].dimension_title            ,
            id: response.data.data[i]._id,
          };
          authors.push(item);
        }
        setMaterialDimensionOptions(authors);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //set options fro authors
  const setAuthorOptions = async () => {
    await axios
      .get(`${API}/author/getAuthor`)
      .then((response) => {
        console.log("author respondr "+response.data)
        let authors = [];
        for (var i = 0; i < response.data.data.length; i++) {
          let item = {
            name: response.data.data[i].author_name,
            id: response.data.data[i]._id,
          };
          authors.push(item);
        }
        setAuthorsOptions(authors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //use effect calls
  useEffect( () => {
    setCategoryOptions();
    setSubCategoryOptions();
    setAuthorOptions();
    setMaterialDimensions();
  }, []);

  //setting category
  const pushCat = (cat) => {
    console.log(cat);
    let categories = [];
    for (var i = 0; i < cat.length; i++) {
      let catId = cat[i].id;
      categories.push(catId);
    }
    setCategory(categories);
  };

  //setting subcategory
  const pushSubCat = (subCat) => {
    console.log(subCat);
    let subCategories = [];
    for (var i = 0; i < subCat.length; i++) {
      let subCatId = subCat[i].id;
      subCategories.push(subCatId);
    }
    setSubCategory(subCategories);
  };

  //setting author
  const pushAuthor = (author) => {
    console.log(author);
    let authors = [];
    for (var i = 0; i < author.length; i++) {
      let authorId = author[i].id;
      authors.push(authorId);
    }
    setAuthor(authors);
  };
  const pushMaterialDimension =(materialSelected)=>{
    console.log(materialSelected);
    let material = [];
    for (var i = 0; i < materialSelected.length; i++) {
      let materialId = materialSelected[i].id;
      material.push(materialId);
    }
    setMaterialDimension(material);
  }

  //getting description
  const getDescription = (e) => {
    let detailsString=e.target.value;
    //console.log(detailsString);

    let temp = detailsString.split("\n");
    console.log(temp);
    
    let final = temp.join("|");

    setDescription(final);
  }

  // getting tags as strings
  const getTagsString = (e) => {
    let tagsString = e.target.value;
    
    if (tagsString.indexOf(',') > -1) { setTags(tagsString.split(',')) }
     
  };

  //uploading product images
  const uploadImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

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

  //adding material
  // const addMaterial = async (e,materialId) => {
  //   e.preventDefault();

  //   // let materialDetails = {
  //   //   material_title: material_title,
  //   //   material_imgUrl: material_imgUrl,
  //   //   dimension_title: dimension_title,
  //   //   dimension_imgUrl: dimension_imgUrl,
  //   //   price: price,
  //   // };
  //   // const materialData = await axios.post(
  //   //   `${API}/material/createMaterial`,
  //   //   materialDetails
  //   // );
  //   setMaterialDimension([...materialDimension,materialId]);
  //   console.log(materialDimension);
  //   setMaterialCreatedSnackbarOpen(true);
  // };

  //adding material fields
  const addMaterialFields = (e) => {
    e.preventDefault();
    setFields(fields + 1);
    console.log(category, subCategory);
  };

  //submitting form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    let productDetails = {
      name: name,
      category: category,
      subCategory: subCategory,
      language: language,
      description: description,
      tags: tags,
      sku: sku,
      imgUrl: imgUrl,
      originalPrice: originalPrice,
      stocks: stocks,
      bestSeller: bestSeller,
      materialDimension: materialDimension,
      orginal_one_drive_link: originalOneDriveLink,
      authors: author,
      discount_type: discountType,
      discountValue: discountValue,
    };
    console.log(productDetails);
    await axios
      .post(`${API}/posters/createPoster`, productDetails)
      .then((response) => console.log(response));

    setProductCreatedSnackbarOpen(true);
  };

  //snackbar functions
  const closeMaterialCreatedSnackbar = () => {
    setMaterialCreatedSnackbarOpen(false);
  };

  const closeProductCreatedSnackbar = () => {
    setProductCreatedSnackbarOpen(false);
  };

  return (
    <div className="add__product__body">
      <div className="add__product__header">
        <Header />
      </div>

      <Snackbar
        open={materialCreatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeMaterialCreatedSnackbar}
      >
        <MuiAlert
          onClose={closeMaterialCreatedSnackbar}
          severity="success"
          variant="filled"
        >
          Material & Dimensions Submitted
        </MuiAlert>
      </Snackbar>

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
          New Product Created
        </MuiAlert>
      </Snackbar>

      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="add__product__main__body">
          <div className="add__product__body__left">
            <div className="product__info__form">
              <div className="product__info__form__body">
                <p className="product__info__form__title">
                  Product Information
                </p>
                <label for="name">Name</label>
                <br />
                <input
                  className="product__form__input"
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label for="category">Category(Select one)</label>
                <br />
                <Multiselect
                  options={catOptions}
                  displayValue="name"
                  onSelect={pushCat}
                  onRemove={pushCat}
                />

                <label for="subCategory">Sub-category</label>
                <br />

                <Multiselect
                  options={subCatOptions}
                  displayValue="name"
                  onSelect={pushSubCat}
                  onRemove={pushSubCat}
                />

                <label for="author">Author</label>
                <br />

                <Multiselect
                  options={authorsOptions}
                  displayValue="name"
                  onSelect={pushAuthor}
                  onRemove={pushAuthor}
                />

                <div className="language__category">
                  <label for="language">Language</label>
                  <br />
                  <div className="language__category__inputs">
                    <span>
                      <input
                        id="language"
                        type="radio"
                        name="language"
                        onChange={() => {
                          setLanguage(2);
                        }}
                      />
                      Hindi
                    </span>
                    <span>
                      <input
                        id="language"
                        type="radio"
                        name="language"
                        onChange={() => {
                          setLanguage(1);
                        }}
                      />
                      English
                    </span>
                    <span>
                      <input
                        id="language"
                        type="radio"
                        name="language"
                        onChange={() => {
                          setLanguage(3);
                        }}
                      />
                      Bilingual
                    </span>
                  </div>
                </div>

                <label for="description">Product-details</label>
                <br />
                <textarea
                  className="product__form__input"
                  id="description"
                  name="description"
                  type="text"
                  onChange={(e) => getDescription(e)}
                />
                <br />

                <label for="tags">Tags</label>
                <br />
                <input
                  className="product__form__input"
                  id="tags"
                  type="text"
                  name="tag"
                  onChange={(e) => getTagsString(e)}
                />
                <br />

                <label for="sku">SKU</label>
                <br />
                <input
                  className="product__form__input"
                  id="sku"
                  type="text"
                  name="sku"
                  onChange={(e) => {
                    setSku(e.target.value);
                  }}
                />
                <br />

                <label for="one__drive__link">Onedrive-Link</label>
                <br />
                <input
                  className="product__form__input"
                  id="one__drive__link"
                  type="text"
                  name="one__drive__link"
                  onChange={(e) => {
                    setOriginalOneDriveLink(e.target.value);
                  }}
                />
                <br />

                <label for="start__from__price">Starts from Price</label>
                <br />
                <input
                  className="product__form__input"
                  id="start__from__price"
                  type="number"
                  name="start__from__price"
                  onChange={(e) => {
                    setOriginalPrice(e.target.value);
                  }}
                />
                <br />

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
              </div>
            </div>
          </div>

          <div className="add__product__body__right">
            <div className="stock__info__form">
              <div className="stock__info__form__body">
                <p className="stock__info__form__title">Stock</p>
                <div className="units">
                  <label for="units">No. of Units</label>
                  <input
                    id="units"
                    type="text"
                    onChange={(e) => setStocks(e.target.value)}
                  />
                  <br />
                </div>

                <div className="bestseller">
                  <div>
                    <label for="bestseller">Bestseller</label>
                  </div>
                  <div className="bestseller__inputs">
                    <span>
                      <input
                        id="bestseller"
                        type="radio"
                        value="true"
                        name="bestseller"
                        onChange={() => setBestSeller(1)}
                      />
                      True
                    </span>
                    <span>
                      <input
                        id="bestseller"
                        type="radio"
                        value="false"
                        name="bestseller"
                        onChange={() => setBestSeller(0)}
                      />
                      False
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="material__info__form">
              <div className="material__info__form__body">
                <p className="material__info__form__title">
                  Material and Pricing
                </p>

                {[...Array(fields)].map((field) => (
                  <div className="material__info__form__inputs">
                    <div className="material__info__form__category">
                      <div>{console.log(materialDimensionOptions)}
                        Select Material Dimensions
                        <Multiselect
                          options={materialDimensionOptions}
                          displayValue="name"
                          onSelect={pushMaterialDimension}
                          onRemove={pushMaterialDimension}
                        />
                      </div>
                    </div>

                    {/* <button
                      className="add__material__btn"
                      onClick={(e) => {let materialId=1191919;addMaterial(e,materialId)}}
                    >
                      Add Material
                    </button> */}
                  </div>
                ))}
                
              </div>
            </div>
            <div className="discount__info__form">
              <div className="discount__info__form__body">
                <p className="discount__info__form__title">Discounts</p>
                <div className="discount__type">
                  <label for="discount__type">Use Discount Type</label>
                  <span>
                    <input
                      id="discount__type"
                      type="radio"
                      name="discount__type"
                      onChange={() => {
                        setDiscountType(2);
                      }}
                    />
                    Percentage(%)
                  </span>
                  <span>
                    <input
                      id="discount__type"
                      type="radio"
                      name="discount__type"
                      onChange={() => {
                        setDiscountType(1);
                      }}
                    />
                    Amount(Rs.)
                  </span>
                  <br />
                </div>
                <div className="discount__value">
                  <label for="discount__value">Discount Value</label>
                  <input
                    type="number"
                    id="discount__value"
                    onChange={(e) => {
                      setDiscountValue(e.target.value);
                    }}
                  />
                  <br />
                </div>
              </div>
            </div>

            <div className="connected__posters__info__form">
              <div className="connected__posters__info__form__body">
                <p className="connected__posters__info__form__title">
                  Connected Posters By Language
                </p>
                <div className="connected__posters__info__form__inputs">
                  <div className="connected__posters__info__form__category">
                    <div>
                      <label for="poster">Poster:</label>
                      <br />
                      <input id="poster" type="text" />
                    </div>
                    <div>
                      <label for="language">Language:</label>
                      <br />
                      <select id="language" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload__button">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

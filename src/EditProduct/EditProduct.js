import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../backend";
import Header from "./EditProductHeader";
import "./EditProduct.css";
import Avatar from "@material-ui/core/Avatar";
import { Multiselect } from "multiselect-react-dropdown";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

function EditProduct() {
  //states
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [catsSelected, setCatsSelected] = useState([]);
  const [subCatsSelected, setSubCatsSelected] = useState([]);
  const [authorsSelected, setAuthorsSelected] = useState([]);
  const [catOptions, setCatOptions] = useState([]);
  const [subCatOptions, setSubCatOptions] = useState([]);
  const [authorsOptions, setAuthorsOptions] = useState([]);
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [author, setAuthor] = useState([]);
  const [description, setDescription] = useState();
  const [tagsEdit, setTagsEdit] = useState([]);
  const [sku, setSku] = useState();
  const [originalOneDriveLink, setOriginalOneDriveLink] = useState();
  const [originalPrice,setOriginalPrice] = useState();
  const [stocks, setStocks] = useState();
  const [languageEdit, setLanguageEdit] = useState();
  const [imgUrl, setImgUrl] = useState([]);
  const [bestSellerEdit, setBestSellerEdit] = useState();
  const [materialDimension, setMaterialDimension] = useState([]);
  const [materialDimensionEdit, setMaterialDimensionEdit] = useState([]);
  const [material_title, setMaterialTitle] = useState();
  const [material_imgUrl, setMaterialImgUrl] = useState();
  const [dimension_title, setDimensionTitle] = useState();
  const [dimension_imgUrl, setDimensionImgUrl] = useState();
  const [price, setPrice] = useState();
  const [discountTypeEdit, setDiscountTypeEdit] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [fields, setFields] = useState(0);
  const [editLanCon, seteditLanCon] = useState("");
  const [productUpdatedSnackbarOpen, setProductUpdatedSnackbarOpen] =
    useState(false);
  const [materialUpdatedSnackbarOpen, setMaterialUpdatedSnackbarOpen] =
    useState(false);  
  const [materialCreatedSnackbarOpen, setMaterialCreatedSnackbarOpen] =
    useState(false);  

  // getting product details
  const getProductDetails = async () => {
    await axios
      .get(`${API}/posters/getPosterById`, {
        params: { poster_obj_id: productId },
      })
      .then((response) => {
        setProductDetails(response.data.data.posterDetails[0]);
        setLanguageEdit(response.data.data.posterDetails[0].language);
        setBestSellerEdit(response.data.data.posterDetails[0].bestSeller);
        setDiscountTypeEdit(response.data.data.posterDetails[0].discount_type);
        setImgUrl(response.data.data.posterDetails[0].imgUrl);
        setTagsEdit(response.data.data.posterDetails[0].tags);
        setFields(0);
        setMaterialDimension(
          response.data.data.posterDetails[0].materialDimension
        );
        let materials = [];
        for (
          var i = 0;
          i < response.data.data.posterDetails[0].materialDimension.length;
          i++
        ) {
          let mId =
            response.data.data.posterDetails[0].materialDimension[i]._id;
          materials.push(mId);
        }
        setMaterialDimensionEdit(materials);

        let selectedCategories = [];
        for (
          var i = 0;
          i < response.data.data.posterDetails[0].category.length;
          i++
        ) {
          let item = {
            name: response.data.data.posterDetails[0].category[i].title,
            id: response.data.data.posterDetails[0].category[i]._id,
          };
          selectedCategories.push(item);
        }
        setCatsSelected(selectedCategories);

        let selectedSubCategories = [];
        for (
          var i = 0;
          i < response.data.data.posterDetails[0].subCategory.length;
          i++
        ) {
          let item = {
            name: response.data.data.posterDetails[0].subCategory[i].title,
            id: response.data.data.posterDetails[0].subCategory[i]._id,
          };
          selectedSubCategories.push(item);
        }
        setSubCatsSelected(selectedSubCategories);

        let selectedAuthors = [];
        for (
          var i = 0;
          i < response.data.data.posterDetails[0].authors.length;
          i++
        ) {
          let item = {
            name: response.data.data.posterDetails[0].authors[i].author_name,
            id: response.data.data.posterDetails[0].authors[i]._id,
          };
          selectedAuthors.push(item);
        }
        setAuthorsSelected(selectedAuthors);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(productDetails);
  };

  //getting category options
  const getCategoriesOptions = async () => {
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

  //getting sub category options
  const getSubcategoriesOptions = async () => {
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

  //getting authors options
  const getAuthorsOptions = async () => {
    await axios
      .get(`${API}/author/getAuthor`)
      .then((response) => {
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

  //use effect call
  useEffect(async () => {
    getProductDetails();

    getCategoriesOptions();

    getSubcategoriesOptions();

    getAuthorsOptions();
  }, []);

  //setting catgeory
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

  //getting the string of tags
  const getTagsString = (e) => {
    let tagsString = e.target.value;

    if (tagsString.indexOf(',') > -1) { setTagsEdit(tagsString.split(',')) }
     
  };

  // uploading the images
  const uploadImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) =>
        setImgUrl([...imgUrl, response.data.data.fileSavedUrl])
      );
    console.log(imgUrl);
  };

  // removing the images
  const removeImg = (e) => {
    const name = e.target.getAttribute("name");
    setImgUrl(imgUrl.filter((item) => item !== name));
  };

  // update material call
  const updateMaterial = async (e, mt) => {
    e.preventDefault();
    console.log(e.target.value, mt._id);

    let materialDetailsUpd = {
      material_obj_id: mt._id,
      material_title: material_title,
      material_imgUrl: material_imgUrl,
      dimension_title: dimension_title,
      dimension_imgUrl: dimension_imgUrl,
      price: price,
    };
    await axios.post(`${API}/material/updateMaterial`, materialDetailsUpd);
    setMaterialUpdatedSnackbarOpen(true)
    getProductDetails();
  };

  //delete material 
  const removeMaterial = async(e,mt) => {
    e.preventDefault();
    console.log(mt._id);

    var toRemove = mt._id;
    var index = materialDimensionEdit.indexOf(toRemove);
    setMaterialDimensionEdit(materialDimensionEdit.splice(index,1));

    let updproductDetails = {
      poster_obj_id: productId,
      name: name,
      category: category,
      subCategory: subCategory,
      language: languageEdit,
      description: description,
      tags: tagsEdit,
      sku: sku,
      imgUrl: imgUrl,
      stocks: stocks,
      bestSeller: bestSellerEdit,
      materialDimension: materialDimensionEdit,
      orginal_one_drive_link: originalOneDriveLink,
      authors: author,
      discount_type: discountTypeEdit,
      discountValue: discountValue,
      operationType: 3,
    }; 

    await axios
    .post(`${API}/posters/updatePoster`, updproductDetails)
    .then((response) => console.log(response));

  getProductDetails();
  }


  //add new material
  const addMaterial = async (e) => {
    e.preventDefault();
    let materialDetails = {
      material_title: material_title,
      material_imgUrl: material_imgUrl,
      dimension_title: dimension_title,
      dimension_imgUrl: dimension_imgUrl,
      price: price,
    };
    const materialData = await axios.post(
      `${API}/material/createMaterial`,
      materialDetails
    );
    setMaterialDimensionEdit([
      ...materialDimensionEdit,
      materialData.data.data._id,
    ]);
    console.log(materialDimensionEdit)
    setMaterialCreatedSnackbarOpen(true);

  };

  // adding new material field
  const addMaterialFields = (e) => {
    e.preventDefault();
    setFields(fields + 1);
    console.log(category, subCategory);
  };

  // submitting updated data
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(category, subCategory, author, imgUrl,tagsEdit);
    let updproductDetails ={}
      updproductDetails = {
      poster_obj_id: productId,
      name: name,
      category: category,
      subCategory: subCategory,
      language: languageEdit,
      description: description,
      tags: tagsEdit,
      sku: sku,
      imgUrl: imgUrl,
      stocks: stocks,
      bestSeller: bestSellerEdit,
      materialDimension: materialDimensionEdit,
      orginal_one_drive_link: originalOneDriveLink,
      originalPrice:originalPrice,
      authors: author,
      discount_type: discountTypeEdit,
      discountValue: discountValue,
      operationType: 3,
    
    };
    if(editLanCon != ""){
      console.log(editLanCon)
     updproductDetails.languageConnecter = editLanCon
    }

    console.log(updproductDetails, "yesssss");

    await axios
      .post(`${API}/posters/updatePoster`, updproductDetails)
      .then((response) => console.log(response));

    getProductDetails();

    setProductUpdatedSnackbarOpen(true);
  };

  // snackbar functions
  const closeProductUpdatedSnackbar = () => {
    setProductUpdatedSnackbarOpen(false);
  };

  const closeMaterialUpdatedSnackbar = () => {
    setMaterialUpdatedSnackbarOpen(false);
  };

  const closeMaterialCreatedSnackbar = () => {
    setMaterialCreatedSnackbarOpen(false);
  };

  useEffect(() => {
console.log(editLanCon)
  }, [editLanCon])
  
  return (
    <div className="add__product__body">
      <div className="add__product__header">
        <Header />
      </div>

      <Snackbar
        open={productUpdatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeProductUpdatedSnackbar}
      >
        <MuiAlert
          onClose={closeProductUpdatedSnackbar}
          severity="success"
          variant="filled"
        >
          Product Updated
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={materialUpdatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeMaterialUpdatedSnackbar}
      >
        <MuiAlert
          onClose={closeMaterialUpdatedSnackbar}
          severity="success"
          variant="filled"
        >
          Material Updated
        </MuiAlert>
      </Snackbar>

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
          New Material Added
        </MuiAlert>
      </Snackbar>


      <form  onSubmit={handleSubmit} enctype="multipart/form-data">
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
                  defaultValue={productDetails.name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label for="category">Category(Select one)</label>
                <br />
                <Multiselect
                  options={catOptions}
                  displayValue="name"
                  selectedValues={catsSelected}
                  onSelect={pushCat}
                  onRemove={pushCat}
                />

                <label for="subCategory">Sub-category</label>
                <br />

                <Multiselect
                  options={subCatOptions}
                  displayValue="name"
                  selectedValues={subCatsSelected}
                  onSelect={pushSubCat}
                  onRemove={pushSubCat}
                />

                <label for="author">Author</label>
                <br />

                <Multiselect
                  options={authorsOptions}
                  displayValue="name"
                  selectedValues={authorsSelected}
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
                        checked={languageEdit === 2}
                        onChange={() => {
                          setLanguageEdit(2);
                        }}
                      />
                      Hindi
                    </span>
                    <span>
                      <input
                        id="language"
                        type="radio"
                        name="language"
                        checked={languageEdit === 1}
                        onChange={() => {
                          setLanguageEdit(1);
                        }}
                      />
                      English
                    </span>
                    <span>
                      <input
                        id="language"
                        type="radio"
                        name="language"
                        checked={languageEdit === 3}
                        onChange={() => {
                          setLanguageEdit(3);
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
                  defaultValue={productDetails.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />

                <label for="tags">Tags</label>
                <br />
                <input
                  className="product__form__input"
                  id="tags"
                  type="text"
                  name="tags"
                  defaultValue={tagsEdit?.join(",")}
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
                  defaultValue={productDetails.sku}
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
                  defaultValue={productDetails.orginal_one_drive_link}
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
                  defaultValue={productDetails.originalPrice}
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
                    defaultValue={productDetails.stocks}
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
                        checked={bestSellerEdit === 1}
                        name="bestseller"
                        onChange={() => {
                          setBestSellerEdit(1);
                        }}
                      />
                      True
                    </span>
                    <span>
                      <input
                        id="bestseller"
                        type="radio"
                        value="false"
                        checked={bestSellerEdit === 0}
                        name="bestseller"
                        onChange={() => {
                          setBestSellerEdit(0);
                        }}
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

                {materialDimension?.map((mt, i) => (
                  <div className="material__info__form__inputs" key={i}>
                    <div className="material__info__form__category">
                      <div>
                        <label for="material">Material:</label>
                        <br />
                        <input
                          id="material"
                          type="text"
                          placeholder="Title"
                          defaultValue={mt.material_title}
                          onChange={(e) => setMaterialTitle(e.target.value)}
                        />
                        <br />
                        <input
                          id="material"
                          type="text"
                          placeholder="Image Link"
                          defaultValue={mt.material_imgUrl}
                          onChange={(e) => setMaterialImgUrl(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="material__info__form__category">
                      <div>
                        <label for="dimensions">Dimensions:</label>
                        <br />
                        <input
                          id="dimensions"
                          type="text"
                          placeholder="Title"
                          defaultValue={mt.dimension_title}
                          onChange={(e) => setDimensionTitle(e.target.value)}
                        />
                        <br />
                        <input
                          id="dimensions"
                          type="text"
                          placeholder="Image Link"
                          defaultValue={mt.dimension_imgUrl}
                          onChange={(e) => setDimensionImgUrl(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="material__info__form__category">
                      <div>
                        <label>Price:</label>
                        <br />
                        <input
                          type="text"
                          id="price"
                          defaultValue={mt.price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>

                   <div className="material__info__form__category">
                   <button
                      className="edit__material__btn"
                      value={i}
                      onClick={(e) => updateMaterial(e, mt)}
                    >
                      Update Material
                    </button>
                    <button
                      className="remove__material__btn"
                      value={i}
                      onClick={(e) => removeMaterial(e, mt)}
                    >
                      Remove Material
                    </button>
                   </div>  
                  </div>
                ))}

                {[...Array(fields)].map((field) => (
                  <div className="material__info__form__inputs">
                    <div className="material__info__form__category">
                      <div>
                        <label for="material">Material:</label>
                        <br />
                        <input
                          id="material"
                          type="text"
                          placeholder="Title"
                          onChange={(e) => setMaterialTitle(e.target.value)}
                        />
                        <br />
                        <input
                          id="material"
                          type="text"
                          placeholder="Image Link"
                          onChange={(e) => setMaterialImgUrl(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="material__info__form__category">
                      <div>
                        <label for="dimensions">Dimensions:</label>
                        <br />
                        <input
                          id="dimensions"
                          type="text"
                          placeholder="Title"
                          onChange={(e) => setDimensionTitle(e.target.value)}
                        />
                        <br />
                        <input
                          id="dimensions"
                          type="text"
                          placeholder="Image Link"
                          onChange={(e) => setDimensionImgUrl(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="material__info__form__category">
                      <div>
                        <label>Price:</label>
                        <br />
                        <input
                          type="text"
                          id="price"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      className="add__material__btn"
                      onClick={(e) => addMaterial(e)}
                    >
                      Add Material
                    </button>
                  </div>
                ))}
                <a
                  href="#"
                  className="add__more__link"
                  onClick={(e) => addMaterialFields(e)}
                >
                  Add more
                </a>
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
                      checked={discountTypeEdit === 2}
                      onChange={() => {
                        setDiscountTypeEdit(2);
                      }}
                    />
                    Percentage(%)
                  </span>
                  <span>
                    <input
                      id="discount__type"
                      type="radio"
                      name="discount__type"
                      checked={discountTypeEdit === 1}
                      onChange={() => {
                        setDiscountTypeEdit(1);
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
                    defaultValue={productDetails.discountValue}
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
                    <div>
                      <label for="poster">LanguageConnector:</label>
                      <br />
                      <input id="poster" type="text" value={editLanCon?editLanCon:""} onChange={(e)=>{
                        seteditLanCon(e.target.value)
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button
                className="update__btn"
                type="submit"
                onclick={(e) => handleSubmit(e)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;

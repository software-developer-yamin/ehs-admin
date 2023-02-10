import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { API } from "../backend";
import axios from "axios";
import "./CategoriesPage.css";

function CategoriesPage() {
  //defining states
  const [openAddCatPopup, setOpenAddCatPopup] = useState(false);
  const [openEditCatPopup, setOpenEditCatPopup] = useState(false);
  const [openAddSubCatPopup, setOpenAddSubCatPopup] = useState(false);
  const [openEditSubCatPopup, setOpenEditSubCatPopup] = useState(false);
  const [tableCatData, setTableCatData] = useState([]);
  const [particularCategory, setParticularCategory] = useState([]);
  const [particularSubCategory, setParticularSubCategory] = useState([]);
  const [catTitle, setCatTitle] = useState();
  const [catEditTitle, setCatEditTitle] = useState();
  const [catImg, setCatImg] = useState();
  const [catDescription, setCatDescription] = useState();
  const [showCatDescription, setShowCatDescription] = useState();
  const [showEditCatDescription, setShowEditCatDescription] = useState();
  const [useCatDiscount, setUseCatDiscount] = useState();
  const [useCatEditDiscount, setUseCatEditDiscount] = useState();
  const [catDiscountType, setCatDiscountType] = useState();
  const [catEditDiscountType, setCatEditDiscountType] = useState();
  const [catDiscountValue, setCatDiscountValue] = useState();
  const [catEditImg, setCatEditImg] = useState();
  const [catObjId, setCatObjId] = useState();
  const [subCatObjId, setSubCatObjId] = useState();
  const [subCatEditImg, setSubCatEditImg] = useState();
  const [subCatTitle, setSubCatTitle] = useState();
  const [subCatEditTitle, setSubCatEditTitle] = useState();
  const [subCatImg, setSubCatImg] = useState();
  const [subCatDescription, setSubCatDescription] = useState();
  const [showSubCatDescription, setShowSubCatDescription] = useState();
  const [showEditSubCatDescription, setShowEditSubCatDescription] = useState();
  const [useSubCatDiscount, setUseSubCatDiscount] = useState();
  const [useSubCatEditDiscount, setUseSubCatEditDiscount] = useState();
  const [subCatDiscountType, setSubCatDiscountType] = useState();
  const [subCatEditDiscountType, setSubCatEditDiscountType] = useState();
  const [subCatDiscountValue, setSubCatDiscountValue] = useState();
  const [categoryCreatedSnackbarOpen, setCategoryCreatedSnackbarOpen] =
    useState(false);
  const [categoryEditedSnackbarOpen, setCategoryEditedSnackbarOpen] =
    useState(false);
  const [subcategoryCreatedSnackbarOpen, setSubcategoryCreatedSnackbarOpen] =
    useState(false);
  const [subcategoryEditedSnackbarOpen, setSubcategoryEditedSnackbarOpen] =
    useState(false);
  const [categoryDeletedSnackbarOpen, setCategoryDeletedSnackbarOpen] =
    useState(false);
  const [subcategoryDeletedSnackbarOpen, setSubcategoryDeletedSnackbarOpen] =
    useState(false);

  // getting data for page
  const getTableData = async () => {
    await axios
      .get(`${API}/category/getCategoryById`)
      .then((response) => setTableCatData(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  };
  //use effect calls
  useEffect(() => {
    getTableData();
  }, []);

  //add category functions
  const openAddCategoryPopup = () => {
    setCatImg("");
    setOpenAddCatPopup(true);
  };

  const closeAddCategoryPopup = () => {
    setOpenAddCatPopup(false);
  };

  const uploadCatImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setCatImg(response.data.data.fileSavedUrl));
  };

  const removeCatImg = (e) => {
    setCatImg("");
    setCatEditImg("");
  };

  const addCategory = async (e) => {
    let catData = {
      title: catTitle,
      imgUrl: catImg,
      cat_description: catDescription,
      show_description: showCatDescription,
      use_discount: useCatDiscount,
      cat_discount_type: catDiscountType,
      discountValue: catDiscountValue,
    };
    await axios
      .post(`${API}/category/createCategory`, catData)
      .then((response) => console.log(response));
    getTableData();

    setCategoryCreatedSnackbarOpen(true);
  };

  //edit category functions
  const openEditCategoryPopup = async (tData) => {
    setCatEditTitle("");
    console.log(tData);
    setCatObjId(tData._id);
    setCatEditImg(tData.imgUrl);
    setShowEditCatDescription(tData.show_description);
    setUseCatEditDiscount(tData.use_discount);
    setCatEditDiscountType(tData.cat_discount_type);
    setParticularCategory(tData);
    setOpenEditCatPopup(true);
  };

  const closeEditCategoryPopup = () => {
    setOpenEditCatPopup(false);
  };

  const uploadEditedCatImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setCatEditImg(response.data.data.fileSavedUrl));
  };

  const editCategory = async (e) => {
    let updCatData={};
    if(catEditTitle !== undefined){
      updCatData = {
        cat_obj_id: catObjId,
        title:catEditTitle,
        imgUrl: catEditImg,
        cat_description: catDescription,
        show_description: showEditCatDescription,
        use_discount: useCatEditDiscount,
        cat_discount_type: catEditDiscountType,
        discountValue: catDiscountValue,
      };
    } else if(catEditTitle === undefined) {
      updCatData = {
        cat_obj_id: catObjId,
        imgUrl: catEditImg,
        cat_description: catDescription,
        show_description: showEditCatDescription,
        use_discount: useCatEditDiscount,
        cat_discount_type: catEditDiscountType,
        discountValue: catDiscountValue,
      };
    }
    

    await axios
      .post(`${API}/category/updateCategory`, updCatData)
      .then((response) => console.log(response));

    getTableData();

    setCategoryEditedSnackbarOpen(true);
  };

  //add subcategory functions
  const openAddSubCategoryPopup = (tData) => {
    setCatObjId(tData._id);
    setSubCatImg("");
    setOpenAddSubCatPopup(true);
  };

  const closeAddSubCategoryPopup = () => {
    setOpenAddSubCatPopup(false);
  };

  const uploadSubCatImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setSubCatImg(response.data.data.fileSavedUrl));
  };

  const removeSubCatImg = (e) => {
    setSubCatImg("");
    setSubCatEditImg("");
  };

  const addSubCategory = async (e) => {
    let subCatData = {
      categoryId: catObjId,
      title: subCatTitle,
      imgUrl: subCatImg,
      sub_cat_description: subCatDescription,
      show_description: showSubCatDescription,
      use_discount: useSubCatDiscount,
      sub_cat_discount_type: subCatDiscountType,
      discountValue: subCatDiscountValue,
    };

    await axios
      .post(`${API}/subCategory/createSubCategory`, subCatData)
      .then((response) => console.log(response));
    getTableData();

    setSubcategoryCreatedSnackbarOpen(true);
  };

  //edit sub category functions
  const openEditSubCategoryPopup = (subCategory) => {
    setSubCatEditTitle("");
    console.log(subCategory);
    setParticularSubCategory(subCategory);
    setSubCatObjId(subCategory._id);
    setSubCatEditImg(subCategory.imgUrl);
    setShowEditSubCatDescription(subCategory.show_description);
    setUseSubCatEditDiscount(subCategory.use_discount);
    setSubCatEditDiscountType(subCategory.sub_cat_discount_type);
    setOpenEditSubCatPopup(true);
  };

  const closeEditSubCategoryPopup = () => {
    setOpenEditSubCatPopup(false);
  };

  const uploadEditSubCatImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setSubCatEditImg(response.data.data.fileSavedUrl));
  };

  const editSubCategory = async () => {
    let updSubCatData ={};
    if(subCatEditTitle === undefined){
      updSubCatData = {
        sub_cat_obj_id: subCatObjId,
        imgUrl: subCatEditImg,
        sub_cat_description: subCatDescription,
        show_description: showEditSubCatDescription,
        use_discount: useSubCatEditDiscount,
        sub_cat_discount_type: subCatEditDiscountType,
        discountValue: subCatDiscountValue,
      };
    } else if (subCatEditTitle !== undefined) {
      updSubCatData = {
        sub_cat_obj_id: subCatObjId,
        title:subCatEditTitle,
        imgUrl: subCatEditImg,
        sub_cat_description: subCatDescription,
        show_description: showEditSubCatDescription,
        use_discount: useSubCatEditDiscount,
        sub_cat_discount_type: subCatEditDiscountType,
        discountValue: subCatDiscountValue,
      };
    }
    await axios
      .post(`${API}/subCategory/updateSubCategory`, updSubCatData)
      .then((response) => console.log(response));
    getTableData();

    setSubcategoryEditedSnackbarOpen(true);
  };

  //delete catgeory functions
  const deleteCategory = async (tData) => {
    console.log(tData);

    let catDelete = {
      cat_obj_id: catObjId,
      isActive: 0,
    };

    await axios
      .post(`${API}/category/updateCategory`, catDelete)
      .then((response) => console.log(response));

    getTableData();

    setCategoryDeletedSnackbarOpen(true);
  };

  //delete sub category functions
  const deleteSubCategory = async (subCategory) => {
    console.log(subCategory);

    let subCatDelete = {
      sub_cat_obj_id: subCatObjId,
      isActive: 0,
    };

    await axios
      .post(`${API}/subCategory/updateSubCategory`, subCatDelete)
      .then((response) => console.log(response));

    getTableData();

    setSubcategoryDeletedSnackbarOpen(true);
    setOpenEditSubCatPopup(false);
  };

  //snackbar functions

  const closeCategoryCreatedSnackbar = () => {
    setCategoryCreatedSnackbarOpen(false);
  };

  const closeCategoryEditedSnackbar = () => {
    setCategoryEditedSnackbarOpen(false);
  };

  const closeCategoryDeletedSnackbar = () => {
    setCategoryDeletedSnackbarOpen(false);
  };

  const closeSubcategoryCreatedSnackbar = () => {
    setSubcategoryCreatedSnackbarOpen(false);
  };

  const closeSubcategoryEditedSnackbar = () => {
    setSubcategoryEditedSnackbarOpen(false);
  };

  const closeSubcategoryDeletedSnackbar = () => {
    setSubcategoryDeletedSnackbarOpen(false);
  };

  const headingStyle = {
    "font-family": "Lato",
    "font-style": "normal",
    "font-weight": 600,
    "font-size": "16px",
    "line-height": "19px",
    color: "#333333",
  };

  return (
    <div className="categories__page__body">
      <div className="categories__page__header">
        <div className="categories__page__header__body">
          <div className="categories__page__header__text">
            <p>Categories & Sub-Categories</p>
          </div>
          <div>
            <button
              className="categories__page__header__button"
              onClick={openAddCategoryPopup}
            >
              ADD CATEGORY
            </button>
          </div>
        </div>
      </div>

          <Snackbar
            open={categoryCreatedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeCategoryCreatedSnackbar}
          >
            <MuiAlert
              onClose={closeCategoryCreatedSnackbar}
              severity="success"
              variant="filled"
            >
              New Category Created
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={categoryEditedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeCategoryEditedSnackbar}
          >
            <MuiAlert
              onClose={closeCategoryEditedSnackbar}
              severity="success"
              variant="filled"
            >
              Category Updated
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={categoryDeletedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeCategoryDeletedSnackbar}
          >
            <MuiAlert
              onClose={closeCategoryDeletedSnackbar}
              severity="error"
              variant="filled"
            >
              Category Deleted
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={subcategoryCreatedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeSubcategoryCreatedSnackbar}
          >
            <MuiAlert
              onClose={closeSubcategoryCreatedSnackbar}
              severity="success"
              variant="filled"
            >
              New Sub-Category Created
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={subcategoryEditedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeSubcategoryEditedSnackbar}
          >
            <MuiAlert
              onClose={closeSubcategoryEditedSnackbar}
              severity="success"
              variant="filled"
            >
              Sub-Category Updated
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={subcategoryDeletedSnackbarOpen}
            autoHideDuration={2000}
            onClose={closeSubcategoryDeletedSnackbar}
          >
            <MuiAlert
              onClose={closeSubcategoryDeletedSnackbar}
              severity="error"
              variant="filled"
            >
              Sub-Category Deleted
            </MuiAlert>
          </Snackbar>

          <Dialog
            open={openAddCatPopup}
            onClose={closeAddCategoryPopup}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
            <DialogContent>
              <div className="add__category__inputs">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => {
                    setCatTitle(e.target.value);
                  }}
                />
              </div>
              <div className="add__category__inputs">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  type="text"
                  onChange={(e) => {
                    setCatDescription(e.target.value);
                  }}
                />
              </div>
              <div className="add__category__inputs">
                <label for="descriptionKey">Use Description Key</label>
                <span>
                  <input
                    id="descriptionKey"
                    type="radio"
                    name="descriptionKey"
                    onChange={() => {
                      setShowCatDescription(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="descriptionKey"
                    type="radio"
                    name="descriptionKey"
                    onChange={() => {
                      setShowCatDescription(0);
                    }}
                  />
                  False
                </span>
              </div>

              <input
                type="file"
                id="file"
                className="category__img__upload"
                onChange={(e) => uploadCatImg(e)}
              />
              <label for="file" className="category__img__upload__label">
                Add Image
              </label>

              <span className="image__preview">
                <div className="thumbnail">
                  <Avatar
                    variant="square"
                    alt=""
                    src={catImg}
                    style={{
                      height: "100px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    className="remove__img"
                    onClick={(e) => removeCatImg(e)}
                  >
                    x
                  </span>
                </div>
              </span>
              <div className="add__category__inputs">
                <label for="discount__key">Use Discount Key</label>
                <span>
                  <input
                    id="discount__key"
                    type="radio"
                    name="discount__key"
                    onChange={() => {
                      setUseCatDiscount(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="discount__key"
                    type="radio"
                    name="discount__key"
                    onChange={() => {
                      setUseCatDiscount(0);
                    }}
                  />
                  False
                </span>
              </div>
              <div className="add__category__inputs">
                <label for="discount__type">Discount Type</label>
                <span>
                  <input
                    id="discount__type"
                    type="radio"
                    name="discount__type"
                    onChange={() => {
                      setCatDiscountType(2);
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
                      setCatDiscountType(1);
                    }}
                  />
                  Amount(Rs.)
                </span>
              </div>
              <div className="add__category__inputs">
                <label for="discount__value">Discount Value</label>
                <input
                  type="number"
                  id="discount__value"
                  onChange={(e) => {
                    setCatDiscountValue(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <button onClick={closeAddCategoryPopup} className="cancel__btn">
                Cancel
              </button>
              <button
                onClick={(e) => {
                  addCategory();
                  closeAddCategoryPopup();
                }}
                className="confirm__btn"
              >
                Add Category
              </button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openEditCatPopup}
            onClose={closeEditCategoryPopup}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title">Edit Category</DialogTitle>
            <DialogContent>
              <div className="edit__category__inputs">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={particularCategory.title}
                  onChange={(e) => {
                    setCatEditTitle(e.target.value);
                  }}
                />
              </div>
              <div className="edit__category__inputs">
                <label for="description">Description</label>

                <textarea
                  id="description"
                  name="description"
                  defaultValue={particularCategory.cat_description}
                  type="text"
                  onChange={(e) => {
                    setCatDescription(e.target.value);
                  }}
                />
              </div>
              <div className="edit__category__inputs">
                <label for="descriptionKey">Use Description Key</label>
                <span>
                  <input
                    id="descriptionKey"
                    type="radio"
                    name="descriptionKey"
                    checked={showEditCatDescription === 1}
                    onChange={() => {
                      setShowEditCatDescription(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="descriptionKey"
                    type="radio"
                    name="descriptionKey"
                    checked={showEditCatDescription === 0}
                    onChange={() => {
                      setShowEditCatDescription(0);
                    }}
                  />
                  False
                </span>
              </div>
              <input
                type="file"
                id="file"
                className="category__img__upload"
                onChange={(e) => uploadEditedCatImg(e)}
              />
              <label for="file" className="category__img__upload__label">
                Edit Image
              </label>

              <span className="image__preview">
                <div className="thumbnail">
                  <Avatar
                    variant="square"
                    alt=""
                    src={catEditImg}
                    style={{
                      height: "100px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    className="remove__img"
                    onClick={(e) => removeCatImg(e)}
                  >
                    x
                  </span>
                </div>
              </span>

              <div className="edit__category__inputs">
                <label for="discount__key">Use Discount Key</label>
                <span>
                  <input
                    id="discount__key"
                    type="radio"
                    name="discount__key"
                    checked = {useCatEditDiscount ===1}
                    onChange={() => {
                      setUseCatEditDiscount(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="discount__key"
                    type="radio"
                    name="discount__key"
                    checked = {useCatEditDiscount ===0}
                    onChange={() => {
                      setUseCatEditDiscount(0);
                    }}
                  />
                  False
                </span>
              </div>
              <div className="edit__category__inputs">
                <label for="discount__type">Discount Type</label>
                <span>
                  <input
                    id="discount__type"
                    type="radio"
                    name="discount__type"
                    checked ={catEditDiscountType ===2}
                    onChange={() => {
                      setCatEditDiscountType(2);
                    }}
                  />
                  Percentage(%)
                </span>
                <span>
                  <input
                    id="discount__type"
                    type="radio"
                    name="discount__type"
                    checked ={catEditDiscountType ===1}
                    onChange={() => {
                      setCatEditDiscountType(1);
                    }}
                  />
                  Amount(Rs.)
                </span>
              </div>
              <div className="edit__category__inputs">
                <label for="discount__value">Discount Value</label>
                <input
                  type="number"
                  id="discount__value"
                  defaultValue={particularCategory.discountValue}
                  onChange={(e) => {
                    setCatDiscountValue(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <button onClick={closeEditCategoryPopup} className="cancel__btn">
                Cancel
              </button>
              <button
                onClick={(e) => {
                  deleteCategory();
                  closeEditCategoryPopup();
                }}
                className="delete__btn"
              >
                Delete Category
              </button>

              <button
                onClick={(e) => {
                  editCategory();
                  closeEditCategoryPopup();
                }}
                className="confirm__btn"
              >
                Edit Category
              </button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openAddSubCatPopup}
            onClose={closeAddSubCategoryPopup}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title">Add Sub-Category</DialogTitle>
            <DialogContent>
              <div className="add__subcategory__inputs">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => {
                    setSubCatTitle(e.target.value);
                  }}
                />
              </div>
              <div className="add__subcategory__inputs">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  onChange={(e) => {
                    setSubCatDescription(e.target.value);
                  }}
                />
              </div>
              <div className="add__subcategory__inputs">
                <label for="scDescriptionKey">Use Description Key</label>
                <span>
                  <input
                    id="scDescriptionKey"
                    type="radio"
                    name="scDescriptionKey"
                    onChange={() => {
                      setShowSubCatDescription(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="scDescriptionKey"
                    type="radio"
                    name="scDescriptionKey"
                    onChange={() => {
                      setShowSubCatDescription(0);
                    }}
                  />
                  False
                </span>
              </div>
              <input
                type="file"
                id="file"
                className="category__img__upload"
                onChange={(e) => uploadSubCatImg(e)}
              />
              <label for="file" className="category__img__upload__label">
                Add Image
              </label>

              <span className="image__preview">
                <div className="thumbnail">
                  <Avatar
                    variant="square"
                    alt=""
                    src={subCatImg}
                    style={{
                      height: "100px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    className="remove__img"
                    onClick={(e) => removeSubCatImg(e)}
                  >
                    x
                  </span>
                </div>
              </span>

              <div className="add__subcategory__inputs">
                <label for="sc__discount__key">Use Discount Key</label>
                <span>
                  <input
                    id="sc__discount__key"
                    type="radio"
                    name="sc__discount__key"
                    onChange={() => {
                      setUseSubCatDiscount(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="sc__discount__key"
                    type="radio"
                    name="sc__discount__key"
                    onChange={() => {
                      setUseSubCatDiscount(0);
                    }}
                  />
                  False
                </span>
              </div>
              <div className="add__subcategory__inputs">
                <label for="sc__discount__type">Use Discount Type</label>
                <span>
                  <input
                    id="sc__discount__type"
                    type="radio"
                    name="sc__discount__type"
                    onChange={() => {
                      setSubCatDiscountType(2);
                    }}
                  />
                  Percentage(%)
                </span>
                <span>
                  <input
                    id="sc__discount__type"
                    type="radio"
                    name="sc__discount__type"
                    onChange={() => {
                      setSubCatDiscountType(1);
                    }}
                  />
                  Amount(Rs.)
                </span>
              </div>
              <div className="add__subcategory__inputs">
                <label for="discount__value">Discount Value</label>
                <input
                  type="number"
                  id="discount__value"
                  onChange={(e) => {
                    setSubCatDiscountValue(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <button
                onClick={closeAddSubCategoryPopup}
                className="cancel__btn"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  addSubCategory();
                  closeAddSubCategoryPopup();
                }}
                className="confirm__btn"
              >
                Add Sub-Category
              </button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openEditSubCatPopup}
            onClose={closeEditSubCategoryPopup}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title">Edit Sub-Category</DialogTitle>
            <DialogContent>
              <div className="edit__subcategory__inputs">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={particularSubCategory.title}
                  onChange={(e) => {
                    setSubCatEditTitle(e.target.value);
                  }}
                />
              </div>
              <div className="edit__subcategory__inputs">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  defaultValue={particularSubCategory.sub_cat_description}
                  onChange={(e) => {
                    setSubCatDescription(e.target.value);
                  }}
                />
              </div>
              <div className="edit__subcategory__inputs">
                <label for="scDescriptionKey">Use Description Key</label>
                <span>
                  <input
                    id="scDescriptionKey"
                    type="radio"
                    name="scDescriptionKey"
                    checked={showEditSubCatDescription === 1}
                    onChange={() => {
                      setShowEditSubCatDescription(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="scDescriptionKey"
                    type="radio"
                    name="scDescriptionKey"
                    checked={showEditSubCatDescription === 0}
                    onChange={() => {
                      setShowEditSubCatDescription(0);
                    }}
                  />
                  False
                </span>
              </div>
              <input
                type="file"
                id="file"
                className="category__img__upload"
                onChange={(e) => uploadEditSubCatImg(e)}
              />
              <label for="file" className="category__img__upload__label">
                Edit Image
              </label>

              <span className="image__preview">
                <div className="thumbnail">
                  <Avatar
                    variant="square"
                    alt=""
                    src={subCatEditImg}
                    style={{
                      height: "100px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    className="remove__img"
                    onClick={(e) => removeSubCatImg(e)}
                  >
                    x
                  </span>
                </div>
              </span>

              <div className="edit__subcategory__inputs">
                <label for="sc__discount__key">Use Discount Key</label>
                <span>
                  <input
                    id="sc__discount__key"
                    type="radio"
                    name="sc__discount__key"
                    checked={useSubCatEditDiscount===1}
                    onChange={() => {
                      setUseSubCatEditDiscount(1);
                    }}
                  />
                  True
                </span>
                <span>
                  <input
                    id="sc__discount__key"
                    type="radio"
                    name="sc__discount__key"
                    checked={useSubCatEditDiscount===0}
                    onChange={() => {
                      setUseSubCatEditDiscount(0);
                    }}
                  />
                  False
                </span>
              </div>
              <div className="edit__subcategory__inputs">
                <label for="sc__discount__type">Use Discount Type</label>
                <span>
                  <input
                    id="sc__discount__type"
                    type="radio"
                    name="sc__discount__type"
                    checked={subCatEditDiscountType ===2}
                    onChange={() => {
                      setSubCatEditDiscountType(2);
                    }}
                  />
                  Percentage(%)
                </span>
                <span>
                  <input
                    id="sc__discount__type"
                    type="radio"
                    name="sc__discount__type"
                    checked={subCatEditDiscountType ===1}
                    onChange={() => {
                      setSubCatEditDiscountType(1);
                    }}
                  />
                  Amount(Rs.)
                </span>
              </div>
              <div className="edit__subcategory__inputs">
                <label for="discount__value">Discount Value</label>
                <input
                  type="number"
                  id="discount__value"
                  defaultValue={particularSubCategory.discountValue}
                  onChange={(e) => {
                    setSubCatDiscountValue(e.target.value);
                  }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <button
                onClick={closeAddSubCategoryPopup}
                className="cancel__btn"
              >
                Cancel
              </button>
              <button
                className="delete__btn"
                onClick={() => deleteSubCategory()}
              >
                Delete Sub-Category
              </button>
              <button
                onClick={() => {
                  editSubCategory();
                  closeEditSubCategoryPopup();
                }}
                className="confirm__btn"
              >
                Edit Sub-Category
              </button>
            </DialogActions>
          </Dialog>
          
        
      <div className="categories__page__main__body">
        {tableCatData?.map((tData) => {
          return (
            <div className="categories__page__table">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="categories__page__table__header">
                    <p className="categories__page__table__header__text">
                      {tData.title}
                    </p>
                    <span calssNAme="categories__page__table__header__button">
                      <button
                        className="edit__category__btn"
                        onClick={() => openEditCategoryPopup(tData)}
                      >
                        Edit Category
                      </button>
                      <button
                        className="add__subcategory__btn"
                        onClick={() => openAddSubCategoryPopup(tData)}
                      >
                        Add Sub-Category
                      </button>
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={headingStyle}>#</TableCell>
                          <TableCell style={headingStyle}>
                            Sub Category
                          </TableCell>
                          <TableCell style={headingStyle}>Image </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tData.sub_category.map((subCategory, i) => (
                          <TableRow key={i + 1}>
                            <TableCell component="th" scope="row">
                              {i + 1}.
                            </TableCell>
                            <TableCell>{subCategory.title}</TableCell>
                            <TableCell>
                              <Avatar
                                variant="square"
                                alt=""
                                src={subCategory.imgUrl}
                                style={{
                                  height: "100px",
                                  width: "100px",
                                  marginRight: "10px",
                                }}
                              />
                            </TableCell>
                            <TableCell>
                                <button
                                className="edit__subcat__btn"
                                  onClick={() =>
                                    openEditSubCategoryPopup(subCategory)
                                  }
                                >
                                  Edit Sub-Category
                                </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CategoriesPage;

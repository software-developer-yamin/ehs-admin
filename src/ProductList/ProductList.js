import React, { useState, useEffect } from "react";
import Header from "./ProductsListHeader";
import axios from "axios";
import { API } from "../backend";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Pagination from "@material-ui/lab/Pagination";
import "./ProductList.css";

function ProductList() {
  const [productDetails, setProductDetails] = useState([]);
  const [catOptions, setCatOptions] = useState([]);
  const [subCatOptions, setSubCatOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [noOfPage, setNoOfPage] = useState(1);
  const [page, setPage] = useState(1);
  const [productCount,setProductCount] = useState(0);
  const [productDeletedSnackbarOpen, setProductDeletedSnackbarOpen] =
    useState(false);

  const getProductDetails = async () => {
    await axios
      .get(`${API}/posters/getPoster`, { params: { skip: skip, limit: limit } })
      .then((response) => {
        setProductCount(response.data.data.count );
        setNoOfPage(Math.ceil(response.data.data.count / limit));
        setProductDetails(response.data.data.postersExists);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(productDetails);
  };

  const getCategoryOptions = async () => {
    await axios
      .get(`${API}/category/getCategoryById`)
      .then((response) => {
        setCatOptions(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const getSubcategoryOptions = async () => {
    await axios
      .get(`${API}/subCategory/getSubCategory`)
      .then((response) => {
        setSubCatOptions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(async () => {
    getProductDetails();
    getCategoryOptions();
    getSubcategoryOptions();
  }, [skip]);

  const filterByCat = async (e) => {
    console.log(e.target.value);
    const catSlug = e.target.value;
    await axios
      .get(`${API}/posters/getPosterByCatSubCat`, {
        params: { category_slug: catSlug, skip: skip, limit: limit },
      })
      .then((response) => {
        setProductCount(response.data.data.count);
        setProductDetails(response.data.data.postersExists);
        setNoOfPage(Math.ceil(response.data.data.count / limit));
      });
  };

  const filterBySubCat = async (e) => {
    console.log(e.target.value);
    const subCatSlug = e.target.value;
    await axios
      .get(`${API}/posters/getPosterByCatSubCat`, {
        params: { subCategorySlug: subCatSlug, skip: skip, limit: limit },
      })
      .then((response) => {
        setProductCount(response.data.data.count);
        setProductDetails(response.data.data.postersExists);
        setNoOfPage(Math.ceil(response.data.data.count / limit));
      });
  };

  const deleteProduct = async (product) => {
    console.log(product._id);
    let productDelete = {
      poster_obj_id: product._id,
      isActive: 0,
    };

    await axios
      .post(`${API}/posters/updatePoster`, productDelete)
      .then((response) => console.log(response));

    getProductDetails();
    setProductDeletedSnackbarOpen(true);
  };

  const closeProductDeletedSnackbar = () => {
    setProductDeletedSnackbarOpen(false);
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
    <div className="products__page__body">
      <div className="products__page__header">
        <Header count={productCount} />
      </div>

      <Snackbar
        open={productDeletedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeProductDeletedSnackbar}
      >
        <MuiAlert
          onClose={closeProductDeletedSnackbar}
          severity="error"
          variant="filled"
        >
          Product Deleted
        </MuiAlert>
      </Snackbar>

      <div className="products__page__main__body">
        <div className="products__page__body__top">
          <form>
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              name="category"
              id="category"
              onChange={(e) => {
                filterByCat(e);
              }}
            >
              <option value="">Select a Category</option>
              {catOptions?.map((cat, i) => (
                <option key={i} value={cat.cat_slug}>
                  {cat.title}
                </option>
              ))}
            </select>

            <select
              name="sub-category"
              id="sub-category"
              onChange={(e) => {
                filterBySubCat(e);
              }}
            >
              <option value="">Select a Sub-Category</option>
              {subCatOptions?.map((subCat, i) => (
                <option key={i} value={subCat.sub_cat_slug}>
                  {subCat.title}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="products__page__body__bottom">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Product ID</TableCell>
                  <TableCell style={headingStyle}>Product Name</TableCell>
                  <TableCell style={headingStyle}>Category</TableCell>
                  <TableCell style={headingStyle}>Sub-category</TableCell>
                  <TableCell style={headingStyle}>Language</TableCell>
                  <TableCell style={headingStyle}>Stock</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productDetails
                  ?.filter((product) => {
                    if (searchTerm === "") {
                      return product;
                    } else if (
                      product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return product;
                    }
                  })
                  .map((product, i) => (
                    <TableRow key={i + 1}>
                      <TableCell component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell>{product._id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        {product.category?.map((cat) => (
                          <p>{cat.title}</p>
                        ))}
                      </TableCell>
                      <TableCell>
                        {product.subCategory?.map((subCat) => (
                          <p>{subCat.title}</p>
                        ))}
                      </TableCell>
                      <TableCell>{product.language}</TableCell>
                      <TableCell>{product.stocks}</TableCell>
                      <TableCell>
                        <a href={`/edit/${product._id}`}>Edit</a>
                        <p
                          className="delete__product__option"
                          onClick={() => {
                            deleteProduct(product);
                          }}
                        >
                          Delete
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {noOfPage > 1 ? (
            <Pagination
              count={noOfPage}
              page={page}
              onChange={(e, val) => {
                setPage(val);
                setSkip((val - 1) * limit);
              }}
              shape="rounded"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

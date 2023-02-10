import { useState } from "react";
import { API } from "../backend";
import ExcelRequestsImport from "./ExcelRequestsImport";

import "./styles.css";

const SpreadSheet = () => {
  const [data, setData] = useState([]);
  const [wrongUp, setWrongUp] = useState([]);
  const [f, setF] = useState(false);
  const [u, setU] = useState(false);
  const [l, setL] = useState(false);

  const createRequests = () => {
    console.log(data);
    // console.log(data[0][22]);
    // console.log(data[0][23]);
  };

  const processData = async () => {
    // console.log(data.length)
    let finalData = [];
    let wrong = [];
    setL(true);

    for (let i = 0; i < data.length && data[i].length > 1; i++) {
      console.log(data[i]);
      let insertObj = {};
      insertObj.name = data[i][1];
      let a = data[i][12];
      let b = a?.split(":");
      // ===============M====================
      // console.log(b)
      let material = [];
      for (let i = 0; i < b?.length; i++) {
        if (b[i].includes("_")) {
          // console.log(b[i])
          material.push(b[i].split(", ")[0]);
          // console.log(material)
        }
      }

      // console.log(material)
      let matId = [];
      // console.log(material)
      for (let m = 0; m < material.length; m++) {
        // get Materoal
        let response = await fetch(
          `${API}/material/getSingleMaterial?material_title=${
            material[m].split("_ ")[0]
          }&dimension_title=${material[m].split("_ ")[1]}`,
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        // console.log(response)

        if (response.status === 200) {
          if (response.data.length > 0) {
            if (!matId.includes(response.data[0]._id))
              matId.push(response.data[0]._id);
          }
        }
      }
      if (matId.length == 0) {
        wrong.push(data[i]);
      }
      insertObj.materialDimension = matId;
      // =====================M==============

      // ==================C=========================
      let category = data[i][2].split(", ");
      let catId = [];
      for (let c = 0; c < category.length; c++) {
        // get cat
        let response = await fetch(
          `${API}/category/getSingleCategory?title=${category[c]}`,
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        // console.log(response)
        if (response.status === 200) {
          if (response.data.length > 0) {
            catId.push(response.data[0]._id);
          }
        }
      }
      if (catId.length == 0) {
        wrong.push(data[i]);
      }
      insertObj.category = catId;

      // ==================C=========================

      // =================sbc=================================
      let subCategory = data[i][3].split(", ");
      // console.log(subCategory)
      let sbcatId = [];
      for (let sb = 0; sb < subCategory.length; sb++) {
        console.log(subCategory[sb]);

        // get Materoal
        let response = await fetch(
          `${API}/subCategory/getSingleSubCategory?title=${subCategory[sb]}`,
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        // console.log(response)
        if (response.status === 200) {
          if (response.data.length > 0) {
            sbcatId.push(response.data[0]._id);
          }
        }
      }
      if (sbcatId.length == 0) {
        wrong.push(data[i]);
      }
      insertObj.subCategory = sbcatId;

      // =================sbc=================================

      // =================lan=================================
      if (data[i][5] == "English") {
        insertObj.language = 1;
      }
      if (data[i][5] == "Hindi") {
        insertObj.language = 2;
      }
      if (data[i][5] == "Bilingual") {
        insertObj.language = 3;
      }
      if (data[i][5] == "Marathi") {
        insertObj.language = 4;
      }
      // =================lan=================================
      insertObj.description = data[i][6];
      insertObj.sku = data[i][8];
      insertObj.originalPrice = data[i][7];
      insertObj.stocks = data[i][9];
      insertObj.bestSeller = data[i][10] == "Yes" ? true : false;
      // insertObj.orginal_one_drive_link= data[i][9]
      insertObj.discount_type = data[i][13] == "Amount" ? 1 : 2;
      insertObj.discountValue = Number(data[i][14]);

      // =================tag=====================
      let tags = [];
      if (data[i][11] != undefined) {
        tags = data[i][11].split(", ");
      }
      insertObj.tags = tags;
      // =================tag=====================
      let img = [];
      if (data[i][15] != undefined) {
        img = data[i][15].split(", ");
      }

      insertObj.imgUrl = img;

      // +++++++++++++++++++++++++Author================
      let Author = data[i][4].split(", ");
      // console.log(subCategory)
      let authId = [];
      for (let au = 0; au < Author.length; au++) {
        // console.log(subCategory[sb])

        // get Materoal
        let response = await fetch(
          `${API}/author/getSingleAuthor?author_name=${Author[au]}`,
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        // console.log(response)
        // console.log(response)
        if (response.status === 200) {
          if (response.data.length > 0) {
            authId.push(response.data[0]._id);
          }
        }
      }
      if (authId.length == 0) {
        wrong.push(data[i]);
      }
      insertObj.authors = authId;
      // +++++++++++++++++++++++++Author================

      finalData.push(insertObj);
      let oneDrive = [];
      for (let o = 16; o <= 32; o++) {
        console.log(o);
        if (data[i][o] != undefined) {
          oneDrive.push(data[i][o]);
        } else {
          oneDrive.push("Link is not provided");
        }
      }
      // console.log(oneDrive)
      insertObj.orginal_one_drive_link = oneDrive;

      // color
      insertObj.color = data[i][33];

      // colorConnector
      insertObj.colorConnecter = data[i][34];

      // cnd
      insertObj.cnd = data[i][35];

      // cndConnector
      insertObj.cndConnecter = data[i][36];

      // langConnector
      insertObj.languageConnecter = data[i][37];
      // =================tag=====================
      let moq = [];
      if (data[i][38] !== undefined) {
        let arr = data[i][38].split(" | ");
        const res = [];
        for (let i = 0; i < arr.length; i++) {
          const chunk = arr[i].split(", ");
          res.push(chunk);
        }
        moq = res;
      }

      insertObj.MOQ = moq;

      console.log("insertObj.MOQ moq :>> ", moq, data[i]);

      insertObj.thumbnailUrl = data[i][39];

      // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      if (u) {
        const res = await fetch(`${API}/posters/createPoster`, {
          method: "POST",
          body: JSON.stringify(insertObj),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dat = await res.json();
        console.log(dat, "updwishhhhhh");
        // console.log("ivvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvnside")
      }
      // ===================================================================================
    }
    setWrongUp(wrong);
    setF(true);
    setL(false);
    console.log(finalData);
  };

  // let a = "Posters:Non Tearable (125-Micron)_ 20 inch X 30 inch, Posters:Premium Self-Adhesive Vinyl_ 36 inch X 48 inch, Posters:Premium Self-Adhesive Vinyl_ 36 inch X 48 inch"
  // let b = a.split(':')
  // let c=[]
  // for(let i = 0; i<b.length; i++){
  //     if(b[i].includes("_")){
  //         c.push(b[i])
  //     }
  //     }

  // console.log(c);

  return (
    <div>
      <ExcelRequestsImport uploadHandler={setData} />
      {/* <button onClick={createRequests}>Add Data</button> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "30px",
        }}
      >
        <button
          className="b"
          onClick={() => {
            setU(!u);
          }}
        >
          Upload flag - {u ? "On" : "Off"}
        </button>
        <button className="b" onClick={processData}>
          Upload and check
        </button>
      </div>
      <div>
        {l && <p>Loading...</p>}

        {wrongUp.length != 0 && (
          <p>
            These Posters have wrong inputs poster will not upload, Reason maybe
            mat-dim, cat, subcat or author is not present in database
          </p>
        )}
        {
          //  { wrongUp.length != 0 && <p>These Posters are not uploaded, Reason maybe mat-dim, cat, subcat or author is not present in database</p>}
          wrongUp.length != 0
            ? wrongUp.map((i) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    key={i}
                  >
                    <p>Poster Name - {i[1]}</p>
                    <p>Poster cat - {i[2]}</p>
                    <p>Poster subcat - {i[3]}</p>
                  </div>
                );
              })
            : f && "All Posters are uploaded correctly"
        }
      </div>
    </div>
  );
};

export default SpreadSheet;

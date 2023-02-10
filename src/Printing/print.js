import React, { useState, useEffect } from 'react'
import { API } from '../backend';
import axios from 'axios';
import "./print.css"

function Print() {
    const [click, setClick] = useState(false);
    const [hider, setHider] = useState(Number);
    const [ordersData, setOrdersData] = useState([]);
    const status = ["NOUSE",
        "INITIATED",
        "FAILED",
        "SUCCESSFUL"]
    // useEffect(() => {
    //   setClick(false);
    // }, [que]);
    const myAns = {
        "success": 1,
        "message": "Successful",
        "status": 200,
        "data": [
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab6187ed6000b608f3020",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab6187ed6000b608f3021",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666889238651",
                "parentOrderId": "order_KYrp2hlfl7A6ch",
                "created_at": "2022-10-27T16:47:20.496Z",
                "updated_at": "2022-10-27T16:47:45.779Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab6187ed6000b608f3022",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab6187ed6000b608f3023",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666889238975",
                "parentOrderId": "order_KYrp2hlfl7A6ch",
                "created_at": "2022-10-27T16:47:20.496Z",
                "updated_at": "2022-10-27T16:47:44.005Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab5a68ec93b17903d5827",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab5a68ec93b17903d5828",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666889123758",
                "parentOrderId": "order_KYrn30lttSp4CG",
                "created_at": "2022-10-27T16:45:26.670Z",
                "updated_at": "2022-10-27T16:45:50.901Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab5a68ec93b17903d5829",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab5a68ec93b17903d582a",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666889124941",
                "parentOrderId": "order_KYrn30lttSp4CG",
                "created_at": "2022-10-27T16:45:26.670Z",
                "updated_at": "2022-10-27T16:45:48.623Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab4cd0aa54808b4d750d4",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab4cd0aa54808b4d750d5",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666888908340",
                "parentOrderId": "order_KYrjEEuC1V1BEf",
                "created_at": "2022-10-27T16:41:49.697Z",
                "updated_at": "2022-10-27T16:42:23.622Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab4cd0aa54808b4d750d2",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab4cd0aa54808b4d750d3",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666888907955",
                "parentOrderId": "order_KYrjEEuC1V1BEf",
                "created_at": "2022-10-27T16:41:49.696Z",
                "updated_at": "2022-10-27T16:42:23.892Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab4506aec0722806c9ebd",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab4506aec0722806c9ebe",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666888782957",
                "parentOrderId": "order_KYrh1EENuVXNAl",
                "created_at": "2022-10-27T16:39:44.170Z",
                "updated_at": "2022-10-27T16:40:19.513Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab4506aec0722806c9ebb",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab4506aec0722806c9ebc",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666888782337",
                "parentOrderId": "order_KYrh1EENuVXNAl",
                "created_at": "2022-10-27T16:39:44.170Z",
                "updated_at": "2022-10-27T16:40:19.513Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab31ea50b7a11c05ab7ff",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab31ea50b7a11c05ab800",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666888476267",
                "parentOrderId": "order_KYrbcPJJJTxFM1",
                "created_at": "2022-10-27T16:34:38.134Z",
                "updated_at": "2022-10-27T16:35:26.330Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab31ea50b7a11c05ab7fd",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab31ea50b7a11c05ab7fe",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666888474857",
                "parentOrderId": "order_KYrbcPJJJTxFM1",
                "created_at": "2022-10-27T16:34:38.133Z",
                "updated_at": "2022-10-27T16:35:26.043Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab1db7ab7c416c08e11b1",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab1db7ab7c416c08e11b2",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666888153094",
                "parentOrderId": "order_KYrVxD2LnIdsp3",
                "created_at": "2022-10-27T16:29:15.807Z",
                "updated_at": "2022-10-27T16:29:55.370Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab1db7ab7c416c08e11b3",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab1db7ab7c416c08e11b4",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649775528484.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0943",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625593b99969ca51102bf5bf",
                            "name": "Posters | Fire Safety | P_P0943",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0943",
                            "sku": "posters-fire-safety-ppP0943",
                            "rating": [],
                            "created_at": "2022-04-12T14:59:05.704Z",
                            "updated_at": "2022-04-12T14:59:05.704Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 230,
                        "total": "230"
                    }
                ],
                "sumPriceToPay": "230",
                "orderId": "1666888153658",
                "parentOrderId": "order_KYrVxD2LnIdsp3",
                "created_at": "2022-10-27T16:29:15.807Z",
                "updated_at": "2022-10-27T16:29:55.514Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab022e2436c130469d222",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab022e2436c130469d223",
                        "poster_details": {
                            "category": [
                                "60cd7ba2c84496a8738f50c3"
                            ],
                            "subCategory": [
                                "60e03e5cf2af7cd4d00ad8a5"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1650388326251.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 2,
                            "orginal_one_drive_link": "P0001",
                            "authors": [],
                            "bought": 0,
                            "materialDimension": [
                                "625eec199969ca51102bf601",
                                "625eecdc9969ca51102bf602",
                                "625eed019969ca51102bf603"
                            ],
                            "tags": [
                                "covid",
                                "chemical"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625eed699969ca51102bf605",
                            "name": "Signages | Pictograms | S_P02001",
                            "description": "Pictograph component of DO IT YOURSELF Safety Sign.|Signal word for it can be any of the four: Danger, Warning, Caution & Notice.|Screen Printed on premium quality vinyl.|Can be used anywhere i.e. both Interior & exterior.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2,000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 25,
                            "poster_language_connector": [],
                            "slug": "signages-pictograms-spP02001",
                            "sku": "signages-pictograms-spP02001",
                            "rating": [
                                {
                                    "_id": "63638a42f3d67f138d15ba40",
                                    "rating": 2,
                                    "userId": "6360bfb2f3d67f138d15b9e4",
                                    "description": "good"
                                }
                            ],
                            "created_at": "2022-04-19T17:12:09.355Z",
                            "updated_at": "2022-11-03T09:30:42.292Z",
                            "__v": 0,
                            "updatedAt": "2022-11-03T09:30:42.298Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant Self-adhesive vinyl is premium quality.|3M film with Mat Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout",
                            "_id": "625eecdc9969ca51102bf602",
                            "material_title": "Premium Self Adhesive Vinyl",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame1.png",
                            "dimension_title": "3.5 inch X 3.5 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 25,
                            "created_at": "2022-04-19T17:09:48.439Z",
                            "updated_at": "2022-08-30T18:51:28.855Z",
                            "__v": 0
                        },
                        "quantity": 3,
                        "originalPriceBeforeDiscount": 75,
                        "total": "75"
                    }
                ],
                "sumPriceToPay": "75",
                "orderId": "1666887712612",
                "parentOrderId": "order_KYrOAa17GvdqI8",
                "created_at": "2022-10-27T16:21:54.144Z",
                "updated_at": "2022-10-27T16:22:22.346Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635ab022e2436c130469d220",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635ab022e2436c130469d221",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d159969ca51102bf593",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "16 inch X 24 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 219,
                            "created_at": "2022-04-12T14:30:45.830Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 219,
                        "total": "219"
                    }
                ],
                "sumPriceToPay": "219",
                "orderId": "1666887712252",
                "parentOrderId": "order_KYrOAa17GvdqI8",
                "created_at": "2022-10-27T16:21:54.143Z",
                "updated_at": "2022-10-27T16:22:22.295Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aad5f5484b60b78be35c8",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aad5f5484b60b78be35c9",
                        "poster_details": {
                            "category": [
                                "60cd7ba2c84496a8738f50c3"
                            ],
                            "subCategory": [
                                "60e03e5cf2af7cd4d00ad8a5"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1650388326251.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 2,
                            "orginal_one_drive_link": "P0001",
                            "authors": [],
                            "bought": 0,
                            "materialDimension": [
                                "625eec199969ca51102bf601",
                                "625eecdc9969ca51102bf602",
                                "625eed019969ca51102bf603"
                            ],
                            "tags": [
                                "covid",
                                "chemical"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625eed699969ca51102bf605",
                            "name": "Signages | Pictograms | S_P02001",
                            "description": "Pictograph component of DO IT YOURSELF Safety Sign.|Signal word for it can be any of the four: Danger, Warning, Caution & Notice.|Screen Printed on premium quality vinyl.|Can be used anywhere i.e. both Interior & exterior.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2,000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 25,
                            "poster_language_connector": [],
                            "slug": "signages-pictograms-spP02001",
                            "sku": "signages-pictograms-spP02001",
                            "rating": [
                                {
                                    "_id": "63638a42f3d67f138d15ba40",
                                    "rating": 2,
                                    "userId": "6360bfb2f3d67f138d15b9e4",
                                    "description": "good"
                                }
                            ],
                            "created_at": "2022-04-19T17:12:09.355Z",
                            "updated_at": "2022-11-03T09:30:42.292Z",
                            "__v": 0,
                            "updatedAt": "2022-11-03T09:30:42.298Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant Self-adhesive vinyl is premium quality.|3M film with Mat Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout",
                            "_id": "625eecdc9969ca51102bf602",
                            "material_title": "Premium Self Adhesive Vinyl",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame1.png",
                            "dimension_title": "3.5 inch X 3.5 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 25,
                            "created_at": "2022-04-19T17:09:48.439Z",
                            "updated_at": "2022-08-30T18:51:28.855Z",
                            "__v": 0
                        },
                        "quantity": 3,
                        "originalPriceBeforeDiscount": 75,
                        "total": "75"
                    }
                ],
                "sumPriceToPay": "75",
                "orderId": "1666887006704",
                "parentOrderId": "order_KYrBjws9x8kygg",
                "created_at": "2022-10-27T16:10:07.531Z",
                "updated_at": "2022-10-27T16:10:36.757Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aad5f5484b60b78be35c6",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aad5f5484b60b78be35c7",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d159969ca51102bf593",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "16 inch X 24 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 219,
                            "created_at": "2022-04-12T14:30:45.830Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 219,
                        "total": "219"
                    }
                ],
                "sumPriceToPay": "219",
                "orderId": "1666887006333",
                "parentOrderId": "order_KYrBjws9x8kygg",
                "created_at": "2022-10-27T16:10:07.530Z",
                "updated_at": "2022-10-27T16:10:36.684Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aac0acceb272e9c899e67",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aac0acceb272e9c899e68",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d159969ca51102bf593",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "16 inch X 24 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 219,
                            "created_at": "2022-04-12T14:30:45.830Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 1,
                        "originalPriceBeforeDiscount": 219,
                        "total": "219"
                    }
                ],
                "sumPriceToPay": "219",
                "orderId": "1666886664620",
                "parentOrderId": "order_KYr5j3pGCiGtHX",
                "created_at": "2022-10-27T16:04:26.419Z",
                "updated_at": "2022-10-27T16:04:58.585Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aac0acceb272e9c899e69",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aac0acceb272e9c899e6a",
                        "poster_details": {
                            "category": [
                                "60cd7ba2c84496a8738f50c3"
                            ],
                            "subCategory": [
                                "60e03e5cf2af7cd4d00ad8a5"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1650388326251.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 2,
                            "orginal_one_drive_link": "P0001",
                            "authors": [],
                            "bought": 0,
                            "materialDimension": [
                                "625eec199969ca51102bf601",
                                "625eecdc9969ca51102bf602",
                                "625eed019969ca51102bf603"
                            ],
                            "tags": [
                                "covid",
                                "chemical"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625eed699969ca51102bf605",
                            "name": "Signages | Pictograms | S_P02001",
                            "description": "Pictograph component of DO IT YOURSELF Safety Sign.|Signal word for it can be any of the four: Danger, Warning, Caution & Notice.|Screen Printed on premium quality vinyl.|Can be used anywhere i.e. both Interior & exterior.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2,000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 25,
                            "poster_language_connector": [],
                            "slug": "signages-pictograms-spP02001",
                            "sku": "signages-pictograms-spP02001",
                            "rating": [
                                {
                                    "_id": "63638a42f3d67f138d15ba40",
                                    "rating": 2,
                                    "userId": "6360bfb2f3d67f138d15b9e4",
                                    "description": "good"
                                }
                            ],
                            "created_at": "2022-04-19T17:12:09.355Z",
                            "updated_at": "2022-11-03T09:30:42.292Z",
                            "__v": 0,
                            "updatedAt": "2022-11-03T09:30:42.298Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant Self-adhesive vinyl is premium quality.|3M film with Mat Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout",
                            "_id": "625eecdc9969ca51102bf602",
                            "material_title": "Premium Self Adhesive Vinyl",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame1.png",
                            "dimension_title": "3.5 inch X 3.5 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 25,
                            "created_at": "2022-04-19T17:09:48.439Z",
                            "updated_at": "2022-08-30T18:51:28.855Z",
                            "__v": 0
                        },
                        "quantity": 3,
                        "originalPriceBeforeDiscount": 75,
                        "total": "75"
                    }
                ],
                "sumPriceToPay": "75",
                "orderId": "1666886664868",
                "parentOrderId": "order_KYr5j3pGCiGtHX",
                "created_at": "2022-10-27T16:04:26.419Z",
                "updated_at": "2022-10-27T16:04:58.474Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aaad5d5351e24f4a3367d",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aaad5d5351e24f4a3367e",
                        "poster_details": {
                            "category": [
                                "60cd7ba2c84496a8738f50c3"
                            ],
                            "subCategory": [
                                "6158da8938b23de5f1c87177"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1650388376497.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 0,
                            "orginal_one_drive_link": "P0001",
                            "authors": [],
                            "bought": 0,
                            "materialDimension": [
                                "625eec199969ca51102bf601",
                                "625eecdc9969ca51102bf602",
                                "625eed019969ca51102bf603"
                            ],
                            "tags": [
                                "covid",
                                "chemical"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625eed9b9969ca51102bf607",
                            "name": "Signages | Template | S_P02003",
                            "description": "Pictograph component of DO IT YOURSELF Safety Sign.|Signal word for it can be any of the four: Danger, Warning, Caution & Notice.|Screen Printed on premium quality vinyl.|Can be used anywhere i.e. both Interior & exterior.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2,000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 25,
                            "poster_language_connector": [],
                            "slug": "signages-template-spP02003",
                            "sku": "signages-template-spP02003",
                            "rating": [],
                            "created_at": "2022-04-19T17:12:59.333Z",
                            "updated_at": "2022-04-19T17:12:59.333Z",
                            "__v": 0
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant Self-adhesive vinyl is premium quality.|3M film with Mat Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout",
                            "_id": "625eecdc9969ca51102bf602",
                            "material_title": "Premium Self Adhesive Vinyl",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame1.png",
                            "dimension_title": "3.5 inch X 3.5 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D1.png",
                            "price": 25,
                            "created_at": "2022-04-19T17:09:48.439Z",
                            "updated_at": "2022-08-30T18:51:28.855Z",
                            "__v": 0
                        },
                        "quantity": 5,
                        "originalPriceBeforeDiscount": 125,
                        "total": "112.5"
                    }
                ],
                "sumPriceToPay": "112.5",
                "orderId": "1666886356912",
                "parentOrderId": "order_KYr0IsmqthS61V",
                "created_at": "2022-10-27T15:59:17.915Z",
                "updated_at": "2022-10-27T15:59:53.567Z",
                "__v": 0
            },
            {
                "couponDetails": {
                    "coupon_code": ""
                },
                "address": {
                    "houseDetails": "korba",
                    "pincode": 459454,
                    "state": "chattisgarh",
                    "country": "india"
                },
                "shippingDetails": {
                    "shippingOrder_id": null,
                    "shipment_id": null,
                    "awb_code": null
                },
                "is_coupon_applied": 0,
                "price_before_discount": 0,
                "TotalWeight": 3,
                "TotalHeight": 4,
                "paymentStatus": 3,
                "orderStatus": 1,
                "isActive": 1,
                "_id": "635aaad5d5351e24f4a33679",
                "userId": "634a447e78fa2d0e4c68a404",
                "user_type_order": 1,
                "itemDetails": [
                    {
                        "_id": "635aaad5d5351e24f4a3367a",
                        "poster_details": {
                            "category": [
                                "60cd7b94c84496a8738f50c2"
                            ],
                            "subCategory": [
                                "60cf0971c84496a8738f50cd"
                            ],
                            "language": 1,
                            "imgUrl": [
                                "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/imgUrl-1649774754248.jpg"
                            ],
                            "discount_type": 1,
                            "discountValue": "",
                            "average_rating": 4,
                            "orginal_one_drive_link": "P0922",
                            "authors": [
                                "60fc1020cb80d1c223211c6e"
                            ],
                            "bought": 0,
                            "materialDimension": [
                                "62558d159969ca51102bf593",
                                "62558d4b9969ca51102bf594",
                                "62558d789969ca51102bf595",
                                "62558d979969ca51102bf596",
                                "62558dc29969ca51102bf597",
                                "62558df09969ca51102bf598",
                                "62558e1b9969ca51102bf599",
                                "62558e369969ca51102bf59a"
                            ],
                            "tags": [
                                "fire",
                                "hazards",
                                "ice",
                                "water"
                            ],
                            "bestSeller": 1,
                            "isActive": 1,
                            "_id": "625590c79969ca51102bf5ab",
                            "name": "Posters | Fire Safety | P_P0922",
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate. |Posters include 3M double-sided mounting tape on top and bottom.|The Interior warranty is three years.|Printing material variant Self-adhesive vinyl is premium quality.|3M film with Matt Laminate.|Both Interior and Exterior warranty is of three years.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "stocks": 1000,
                            "originalPrice": 219,
                            "poster_language_connector": [],
                            "slug": "posters-fire-safety-ppP0922",
                            "sku": "posters-fire-safety-ppP0922",
                            "rating": [
                                {
                                    "_id": "6357ee640b7674217017ee42",
                                    "rating": 4,
                                    "userId": "63320255c61a75374ccdb799",
                                    "feedback": "hey what a product it is i can-t expr",
                                    "description": "descriiiiiiiiiiiiiiiiiiiiiiiiiptionnnnnnnnnnnn----"
                                }
                            ],
                            "created_at": "2022-04-12T14:46:31.392Z",
                            "updated_at": "2022-10-31T08:55:30.109Z",
                            "__v": 0,
                            "updatedAt": "2022-10-31T08:55:30.193Z"
                        },
                        "materialDimension": {
                            "isActive": 1,
                            "description": "Printing material variant 125-micron non-tear.|Posters paper is premium quality with PET Mat finish laminate.|Posters include 3M double-sided mounting tape on top and bottom.|Prices are inclusive of G.S.T|Shipping free for orders above two thousand (2000/=) Indian rupees.|Performa invoices can be generated at checkout.",
                            "_id": "62558d4b9969ca51102bf594",
                            "material_title": "125 Micron Non Tear Paper",
                            "material_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Materials/Frame2.png",
                            "dimension_title": "19 inch X 27 inch",
                            "dimension_imgUrl": "https://ehsprintsimages.s3.ap-south-1.amazonaws.com/Dimensions/D2.png",
                            "price": 230,
                            "created_at": "2022-04-12T14:31:39.845Z",
                            "updated_at": "2022-08-30T18:41:42.448Z",
                            "__v": 0
                        },
                        "quantity": 2,
                        "originalPriceBeforeDiscount": 460,
                        "total": "460"
                    }
                ],
                "sumPriceToPay": "460",
                "orderId": "1666886356154",
                "parentOrderId": "order_KYr0IsmqthS61V",
                "created_at": "2022-10-27T15:59:17.914Z",
                "updated_at": "2022-10-27T15:59:53.652Z",
                "__v": 0
            }
        ]
    }
    useEffect(() => {
        const getOrdersData = async () => {
            await axios
                .get(`${API}/orders/getOrdersAdmin`)
                .then((response) => setOrdersData(response.data.data))
                .catch((error) => {
                    console.log(error);
                });
        };
        getOrdersData();
        console.log(ordersData);
    }, []);
    console.log(ordersData)
    return (
        <>
            {ordersData.map((item, i) => {
                return <div key={i}>
                    <div className="order">
                        <p>OrderId- {item.orderId}</p>
                        <p className='ProductName'>ProductName- {item.itemDetails[0].poster_details.name}</p>
                        <p>Payment Status- {status[item.paymentStatus]}</p>
                        <p>Date - {item.created_at.split("T")[0]}</p>
                        <span style={{cursor:"pointer"}}
                            onClick={() => {
                                setClick(!click);
                                setHider(i)
                            }}
                        >
                            {hider == i ? (!click ? "view" : "close") : "view"}
                        </span>

                    </div>
                    {
                        hider == i && click && (
                            <div className="each-que-ans">

   <div><p>Material - {item.itemDetails[0].materialDimension!=null && item.itemDetails[0].materialDimension.material_title?item.itemDetails[0].materialDimension.material_title:"Not Avilaible"} </p>
                                     <p>Dimension - {item.itemDetails[0].materialDimension!=null && item.itemDetails[0].materialDimension.dimension_title?item.itemDetails[0].materialDimension.dimension_title:"Not Avilaible"} </p>
                                    <p>One Drive link - {item.oneDriveLink?item.oneDriveLink:"Not Provided"}</p>
                                    <p>Quantity - {item.itemDetails[0].quantity}</p>
                                    <p>Total Price - {item.sumPriceToPay}</p>
                                </div>
                                <img className='img' style={{width: "400px",height:"400px"}} alt="No Img"   src={item.itemDetails[0].poster_details.imgUrl}></img>
                            </div>
                        )
                    }
                </div>


            })}

        </>
    )
}

export default Print
import React from 'react';
import Header from './BannersHeader';
import BannersListTable from './BannersListTable'
import './BannersList.css';

function BannersList() {
    return (
           <div className="banners__body">
                <div className="header">
                    <Header />
                </div>
                
                    <div className="banners__main__body">
                         <div className="banners__body__top">
                            <form>
                                    <input type="text" placeholder="Search.." />
                                    <select name="page" id="page" />
                                    <select name="category" id="category" />
                                    <select name="sub-category" id="sub-category" />
                                    <button>Add Banner</button>
                            </form> 
                        </div> 

                        <div className="banners__body__bottom">
                            <BannersListTable />
                        </div>
                    </div>
                
           </div>       

    )
}

export default BannersList;
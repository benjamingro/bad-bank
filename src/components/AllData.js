import React from 'react';

import AllDataTable from './AllDataTable.js'


function AllData({ accountList }) {

    return (
        <>
            {/* <h2>All Data</h2> */}
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h2>All Data</h2>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <AllDataTable accountList={accountList} />
                    {/* {accountList.length} */}
                </div>
                <div className="col-lg-3"></div>
            </div>
        </>
    )
}

export default AllData


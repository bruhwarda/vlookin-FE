import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
const AddReceiptsForm = (showDrawer) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.SuperAdmin.addReceipt}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Add Receipts"}
            route={routePaths.SuperAdmin.addReceipt}
          />
        )}
      </div>
      <div className="container ">
        <div className="d-flex justify-content-between top-bar col-md-12">
          <div className="col-md-4">
            <span className="d-flex flex-row">
              <p>Date : </p>16-09-2023
            </span>
            <span className="d-flex flex-row">
              <p>Voucher No : </p>2023000715
            </span>
          </div>
          <div className="d-flex flex-column col-md-4">
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="col-md-4">
                Building Code
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="col-md-4">
                Building Name
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="col-md-4 ">
                Flat #
              </label>
              <input className="form-control" type="text" id="buidlingCode" />
            </div>
          </div>
        </div>
        <div className="border-top pt-1">
          <div className="col-md-3">
            {/* left */}
            <div>
              <h5>Tenent Details</h5>
              <div>
                <p className="mb-1">Tenant Account</p>
                <div className="d-flex flex-row">
                  <input
                    style={{
                      maxWidth: "80px",
                      minWidth: "80px",
                      marginRight: "15px",
                    }}
                    className="form-control"
                    disabled={true}
                    value={"1AA001"}
                  />
                  <input
                    className="form-control"
                    disabled={true}
                    value={"ABRAR"}
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <h5>Conract Details</h5>
            </div>
            <div>
              <h5>Additional Information</h5>
            </div>
          </div>
          <div>{/* right */}</div>
        </div>
      </div>
    </>
  );
};

export default AddReceiptsForm;

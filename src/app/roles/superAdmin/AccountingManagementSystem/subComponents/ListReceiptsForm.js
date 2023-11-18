import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
const ListReceiptsForm = (showDrawer) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.SuperAdmin.listReceipt}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"List Receipts"}
            route={routePaths.SuperAdmin.listReceipt}
          />
        )}
      </div>
    </>
  );
};

export default ListReceiptsForm;

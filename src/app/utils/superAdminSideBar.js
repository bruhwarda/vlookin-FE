import { FaThList, FaWarehouse, FaBuilding, FaEye } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { CgPlayListAdd } from "react-icons/cg";
import { RiFileList2Line } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { getItem } from "./functions";

export const superAdminSidebar = [
  getItem("Super Admin", "1", <FaWarehouse />, [
    getItem("Add User", "addSuperAdminUser", <HiUserAdd />),
    getItem("List User", "listSuperAdminUser", <FaThList />),
  ]),
  getItem("Maintenance", "2", <FaWarehouse />, [
    getItem("List Comaplaints", "complaints", <FaThList />),
  ]),
  getItem("Visitor", "3", <FaWarehouse />, [
    getItem("List Visitor", "visitor", <FaThList />),
  ]),
  getItem("Tenants", "4", <FaWarehouse />, [
    getItem("List Tenants", "tenantlist", <FaThList />),
  ]),
  getItem("Building", "5", <FaWarehouse />, [
    getItem("List Buildings", "building", <FaThList />),
    getItem("List Apartments", "listApartment", <FaThList />),
  ]),
  getItem("Bank Receipts", "6", <MdOutlineReceiptLong />, [
    getItem("Add Receipts", "addReceipt", <CgPlayListAdd />),
    getItem("List Receipts", "listReceipt", <RiFileList2Line />),
  ]),
];

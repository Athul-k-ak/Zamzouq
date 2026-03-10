import { Routes, Route } from "react-router-dom"
import Login from "@/pages/Login/index.tsx"
import ProtectedLayout from "./ProtectedLayout.tsx"
import Layout from "@/layout/index"
import DashboardPage from "@/pages/Dashboard/index"

import WholesalersPage from "@/pages/User-Management/Wholesalers/index.tsx"
import RetailersPage from "@/pages/User-Management/Retailers/index.tsx"
import PurchasersPage from "@/pages/User-Management/Purchasers/index.tsx"
import ViewWholesaler from "@/pages/User-Management/Wholesalers/ViewWholesaler.tsx"
import ViewRetailer from "@/pages/User-Management/Retailers/ViewRetailers.tsx"
import ViewPurchaser from "@/pages/User-Management/Purchasers/ViewPurchaser.tsx"
import WholesaleOrdersPage from "@/pages/Orders/WholesaleOrders/index.tsx"
import ViewOrder from "@/pages/Orders/WholesaleOrders/ViewOrder.tsx"
import RetailersReturnsPage from "@/pages/Returns/RetailersReturns/index.tsx"
import ViewReturn from "@/pages/Returns/RetailersReturns/ViewReturn.tsx"
import SupportsPage from "@/pages/Supports/index.tsx"
import PromotionsPage from "@/pages/Promotions/index.tsx"
import AddPromotionPage from "@/pages/Promotions/AddPromotion.tsx"
import AuditLogPage from "@/pages/Audit-Log/index.tsx"
import WholesalerApprovalsPage from "@/pages/Approvals/Wholesalers/index.tsx"
import RetailerApprovalsPage from "@/pages/Approvals/Retailers/index.tsx"
import PurchaserApprovalsPage from "@/pages/Approvals/Purchasers/index.tsx"
import ParentCategoryPage from "@/pages/Product-Management/Category/ParentCategory.tsx"
import SubCategoryPage from "@/pages/Product-Management/Category/SubCategory.tsx"
import UnitsManagementPage from "@/pages/Product-Management/Units/UnitsManagement.tsx"
import BrandManagementPage from "@/pages/Product-Management/Brand/index.tsx"
import VariantManagementPage from "@/pages/Product-Management/Variant/index.tsx"
import ProductManagementPage from "@/pages/Product-Management/Products/index.tsx";
import ViewProduct from "@/pages/Product-Management/Products/ViewProduct.tsx";
import AddProduct from "@/pages/Product-Management/Products/AddProduct.tsx";
import WholesalersPaymentsPage from "@/pages/Billing/Wholesalers-Payments/index.tsx";
import RetailerPaymentsPage from "@/pages/Billing/Retailers-Payments/index.tsx";

function AppRouter() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-management/wholesalers" element={<WholesalersPage />} />
          <Route path="/user-management/retailers" element={<RetailersPage />} />
          <Route path="/user-management/purchasers" element={<PurchasersPage />} />
          <Route path="/user-management/wholesalers/:id" element={<ViewWholesaler />} />
          <Route path="/user-management/retailers/:id" element={<ViewRetailer />} />
          <Route path="/user-management/purchasers/:id" element={<ViewPurchaser />} />
          <Route path="/orders/wholesale-orders" element={<WholesaleOrdersPage />} />
          <Route path="/orders/wholesale-orders/:id" element={<ViewOrder />} />
          <Route path="/returns/retailers-returns" element={<RetailersReturnsPage />} />
          <Route path="/returns/retailers-returns/:id" element={<ViewReturn />} />
          <Route path="/supports" element={<SupportsPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/promotions/add" element={<AddPromotionPage />} />
          <Route path="/promotions/edit/:id" element={<AddPromotionPage />} />
          <Route path="/audit-log" element={<AuditLogPage />} />
          <Route path="/approvals/wholesalers" element={<WholesalerApprovalsPage />} />
          <Route path="/approvals/retailers" element={<RetailerApprovalsPage />} />
          <Route path="/approvals/purchasers" element={<PurchaserApprovalsPage />} />
          <Route path="/product-management/categories" element={<ParentCategoryPage />} />
          <Route path="/product-management/categories/:id" element={<SubCategoryPage />} />
          <Route path="/product-management/units" element={<UnitsManagementPage />} />
          <Route path="/product-management/brands" element={<BrandManagementPage />} />
          <Route path="/product-management/variants" element={<VariantManagementPage />} />
          <Route path="/product-management/products" element={<ProductManagementPage />} />
          <Route path="/product-management/products/add" element={<AddProduct />} />
          <Route path="/product-management/products/edit/:id" element={<AddProduct />} />
          <Route path="/product-management/products/:id" element={<ViewProduct />} />
          <Route path="/billing/wholesalers-payments" element={<WholesalersPaymentsPage />} />
          <Route path="/billing/retailers-payments" element={<RetailerPaymentsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter

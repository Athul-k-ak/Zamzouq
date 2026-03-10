export const wholesalersColumns = [
    { header: "Wholesaler ID", key: "id", sortable: true },
    { header: "Business Name", key: "businessName", sortable: true },
    { header: "Category", key: "category", sortable: true },
    { header: "Inventory Size", key: "inventorySize", sortable: true },
    { header: "Orders Fulfilled", key: "ordersFulfilled", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];

export const paymentRecordsColumns = [
    { header: "Invoice ID", key: "id", sortable: true },
    { header: "Order ID", key: "orderId", sortable: true },
    { header: "Retailer Name", key: "retailer", sortable: true },
    { header: "Net Sale Amount", key: "amount", sortable: true },
    { header: "Payment Type", key: "type", sortable: true },
    { header: "Settlement Date", key: "date", sortable: true },
    { header: "Actions", key: "actions" },
];

export const promotionsColumns = [
    { header: "Promotion ID", key: "id", sortable: true },
    { header: "Banner", key: "banner", sortable: false },
    { header: "Promotion Name", key: "name", sortable: true },
    { header: "Status", key: "status", sortable: true },
    { header: "Start Date", key: "startDate", sortable: true },
    { header: "End Date", key: "endDate", sortable: true },
    { header: "Actions", key: "actions" },
];

export const subscriptionPlanColumns = [
    { header: "Subscription ID", key: "id", sortable: true },
    { header: "Wholesaler", key: "wholesaler", sortable: true },
    { header: "Plan Name", key: "planName", sortable: true },
    { header: "Start Date", key: "startDate", sortable: true },
    { header: "Next Billing Date", key: "nextBillingDate", sortable: true },
    { header: "Amount Paid", key: "amountPaid", sortable: true },
    { header: "Status", key: "status", sortable: true },
    { header: "Actions", key: "actions" },
];

export const retailersColumns = [
    { header: "Retailers ID", key: "id", sortable: false },
    { header: "Business Name", key: "businessName", sortable: true },
    { header: "Location", key: "location", sortable: true },
    { header: "Orders Count", key: "ordersCount", sortable: true },
    { header: "Assigned Purchaser", key: "purchasers", sortable: false },
    { header: "Status", key: "status", sortable: false },
    { header: "Actions", key: "actions" },
];

export const retailerPaymentRecordsColumns = [
    { header: "Invoice ID", key: "id", sortable: true },
    { header: "Order ID", key: "orderId", sortable: true, showArrows: true },
    { header: "Retailer", key: "retailer", sortable: true, showArrows: true },
    { header: "Wholesaler", key: "wholesaler", sortable: true },
    { header: "Order Amount", key: "amount", sortable: true },
    { header: "Payment Type", key: "type", sortable: true },
    { header: "Status", key: "status", sortable: true },
    { header: "Settlement Date", key: "date", sortable: true },
    { header: "Actions", key: "actions" },
];

export const purchasersColumns = [
    { header: "Purchaser ID", key: "id", sortable: false },
    { header: "Name", key: "name", sortable: true },
    { header: "Type", key: "type", sortable: true },
    { header: "Region", key: "region", sortable: true },
    { header: "Active Orders", key: "activeOrders", sortable: false },
    { header: "Earnings (Today)", key: "earnings", sortable: false },
    { header: "Status", key: "status", sortable: false },
    { header: "Actions", key: "actions" },
];
export const wholesaleOrdersColumns = [
    { header: "Order ID", key: "id", sortable: true },
    { header: "Retailer", key: "retailer", sortable: true },
    { header: "Wholesaler", key: "wholesaler", sortable: true },
    { header: "Purchaser", key: "purchaser", sortable: true },
    { header: "Value", key: "value", sortable: true },
    { header: "Created Time", key: "createdTime", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];
export const retailersReturnsColumns = [
    { header: "Return ID", key: "id", sortable: true },
    { header: "Order ID", key: "orderId", sortable: true },
    { header: "Retailer", key: "retailer", sortable: true },
    { header: "Wholesaler", key: "wholesaler", sortable: true },
    { header: "Status", key: "status", sortable: true },
    { header: "Amount Impact", key: "amountImpact", sortable: false },
    { header: "Actions", key: "actions" },
];

export const categoriesColumns = [
    { header: "Category ID", key: "id", sortable: true },
    { header: "Name", key: "name", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];

export const unitsColumns = [
    { header: "Unit ID", key: "id", sortable: true },
    { header: "Unit Name", key: "name", sortable: true, showArrows: true },
    { header: "Short Code", key: "shortCode", sortable: true, showArrows: true },
    { header: "Status", key: "status" },
    { header: "Last Updated", key: "lastUpdated" },
    { header: "Actions", key: "actions" },
];

export const brandsColumns = [
    { header: "Brand ID", key: "id", sortable: true },
    { header: "Brand Name", key: "name", sortable: true, showArrows: true },
    { header: "Brand Logo", key: "logo", sortable: true, showArrows: true },
    { header: "Products", key: "products", sortable: true },
    { header: "Status", key: "status" },
    { header: "Last Updated", key: "lastUpdated" },
    { header: "Actions", key: "actions" },
];

export const productsColumns = [
    { header: "Product ID", key: "id", sortable: true },
    { header: "Product Name", key: "name", sortable: true, showArrows: true },
    { header: "Product Image", key: "image", sortable: false },
    { header: "Category", key: "category", sortable: true },
    { header: "Subcategory", key: "subcategory", sortable: true },
    { header: "Unit", key: "unit", sortable: true },
    { header: "Brand", key: "brand", sortable: true },
    { header: "Barcode", key: "barcode", sortable: true },
    { header: "Pro-Name", key: "proName", sortable: true },
    { header: "Variant", key: "variant", sortable: true },
    { header: "Variant Value", key: "variantValue", sortable: true },
    { header: "Cartoon Size", key: "cartoonSize", sortable: true },
    { header: "Status", key: "status" },
    { header: "Last Updated", key: "lastUpdated" },
    { header: "Actions", key: "actions" },
];

export const purchasersEarningsColumns = [
    { header: "Purchaser Name", key: "name", sortable: true },
    { header: "Total Earnings", key: "earnings", sortable: true },
    { header: "Orders Completed", key: "orders", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];

export const platformCommissionColumns = [
    { header: "Transaction ID", key: "id", sortable: true },
    { header: "Order ID", key: "orderId", sortable: true },
    { header: "Total Amount", key: "amount", sortable: true },
    { header: "Commission Fees", key: "commission", sortable: true },
    { header: "Date", key: "date", sortable: true },
];

export const auditLogColumns = [
    { header: "Name", key: "name", sortable: true },
    { header: "Phone number", key: "phone", sortable: true },
    { header: "User Role", key: "role", sortable: true },
    { header: "Module", key: "module", sortable: true },
    { header: "Action", key: "action", sortable: true },
    { header: "IP Address", key: "ipAddress", sortable: true },
    { header: "Login Time", key: "loginTime", sortable: true },
    { header: "Actions", key: "actions", sortable: false },
];

export const approvalColumns = [
    { header: "User ID", key: "userId", sortable: true },
    { header: "Business Type", key: "businessType", sortable: true },
    { header: "Business Name", key: "businessName", sortable: true },
    { header: "Owner Name", key: "ownerName", sortable: true },
    { header: "Trade License", key: "tradeLicense", sortable: true },
    { header: "Created Time", key: "createdTime", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];

export const purchaserApprovalColumns = [
    { header: "User ID", key: "userId", sortable: true },
    { header: "Name", key: "name", sortable: true },
    { header: "Purchaser Type", key: "purchaserType", sortable: true },
    { header: "Vehicle Type", key: "vehicleType", sortable: true },
    { header: "License number", key: "tradeLicense", sortable: true },
    { header: "Created Time", key: "createdTime", sortable: true },
    { header: "Status", key: "status" },
    { header: "Actions", key: "actions" },
];

export const parentCategoriesColumns = [
    { header: "Category ID", key: "id", sortable: true },
    { header: "Category Name", key: "name", sortable: true, showArrows: true },
    { header: "Wholesalers", key: "wholesalers", sortable: true, showArrows: true },
    { header: "Image", key: "image", sortable: false },
    { header: "Status", key: "status", sortable: false },
    { header: "Total Sub- Category", key: "totalSubCategory", sortable: false },
    { header: "Last Updated", key: "lastUpdated", sortable: false },
    { header: "Actions", key: "actions", sortable: false },
];
export const subCategoriesColumns = [
    { header: "Sub Category ID", key: "id", sortable: true },
    { header: "SubCategory Name", key: "name", sortable: true, showArrows: true },
    { header: "Image", key: "image", sortable: false },
    { header: "Status", key: "status", sortable: false },
    { header: "Last Updated", key: "lastUpdated", sortable: false },
    { header: "Actions", key: "actions", sortable: false },
];
export const variantColumns = [
    { header: "Variant Name", key: "name", sortable: true, showArrows: true },
    { header: "Status", key: "status" },
    { header: "Last Updated", key: "lastUpdated" },
    { header: "Actions", key: "actions" },
];

export const variantValueColumns = [
    { header: "Variant Value", key: "value", sortable: true, showArrows: true },
    { header: "Status", key: "status" },
    { header: "Last Updated", key: "lastUpdated" },
    { header: "Actions", key: "actions" },
];

export const wholesalerPaymentRecordsColumns = [
    { header: "Invoice ID", key: "id", sortable: true },
    { header: "Order ID", key: "orderId", sortable: true, showArrows: true },
    { header: "Wholesaler Name", key: "retailer", sortable: true },
    { header: "Net Payable", key: "amount", sortable: true },
    { header: "Payment Type", key: "type", sortable: true },
    { header: "Status", key: "status" },
    { header: "Settlement Date", key: "date", sortable: true },
    { header: "Actions", key: "actions" },
];

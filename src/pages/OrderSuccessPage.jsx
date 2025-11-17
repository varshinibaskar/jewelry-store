import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./orderSuccess.css";

const OrderSuccessPage = () => {
  const { state } = useLocation();
  const orderDetails = state?.orderDetails;

  if (!orderDetails) {
    return <h2>No order details found!</h2>;
  }

  const downloadInvoice = () => {
    const invoiceText = `
      LUMYN JEWELLERY - ORDER INVOICE
      
      Order ID: ${orderDetails.orderId}
      Customer Name: ${orderDetails.customer}
      Date: ${orderDetails.date}

      ------------------------------
      Items Purchased
      ------------------------------
      ${orderDetails.items
        .map(
          (item) =>
            `${item.name} - Qty: ${item.qty} - ₹${item.price * item.qty}`
        )
        .join("\n")}

      ------------------------------
      Total Amount: ₹${orderDetails.totalAmount}
      ------------------------------

      Thank you for shopping with LUMYN 💎
    `;

    const blob = new Blob([invoiceText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${orderDetails.orderId}-invoice.txt`;
    a.click();
  };

  return (
    <div className="order-success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your jewellery will be delivered soon 💎</p>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
        <p><strong>Name:</strong> {orderDetails.customer}</p>
        <p><strong>Date:</strong> {orderDetails.date}</p>

        <h3>Items Purchased</h3>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              {item.name} — Qty: {item.qty} — ₹{item.price * item.qty}
            </li>
          ))}
        </ul>

        <h3>Total: ₹{orderDetails.totalAmount}</h3>
      </div>

      <div className="button-group">
        <button className="invoice-btn" onClick={downloadInvoice}>
          Download Invoice
        </button>

        <Link to="/shop" className="back-to-shop-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;



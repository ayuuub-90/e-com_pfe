import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },

    order_items: {
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      items_price: { type: Number, required: true, default: 0.0 },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },

    payment_method: {
      name: { type: String, required: true },
    },

    status: {
      is_livred: { type: Boolean, required: true, default: false },
      livred_at: { type: Date },
      is_paid: { type: Boolean, required: true, default: false },
      paid_at: { type: Date },
    },

    total_price: { type: Number, required: true, default: 0.0 },
    shipping_price: { type: Number, required: true, default: 0.0 },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;

import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: { type: Number, required: true },
    barcode: { type: Number, required: true },
    numberInPack: { type: Number, required: true },
    coloring: { type: Number, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    seasion: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
  });

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product


import express from 'express';
import { getProducts, getProductById,addProduct,updateProduct,deleteProduct,addToCart,toggleLike} from "../Controller/productController.js";

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.patch('/:id/like', toggleLike);
router.patch('/:id/cart', addToCart);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;

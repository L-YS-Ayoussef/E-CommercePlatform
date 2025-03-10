const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../controllers/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);
router.post('/cart', isAuth, shopController.postCart);
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.get('/orders', isAuth, shopController.getOrders);
router.get('/orders/:orderId', isAuth, shopController.getInvoice);

router.post('/order', isAuth, shopController.createOrder);

// router.post('/checkout', isAuth, shopController.getCheckout);
// router.get('/checkout/success', shopController.getCheckoutSuccess);
// router.get('/checkout/cancel', shopController.getCheckoutCancel);

module.exports = router;

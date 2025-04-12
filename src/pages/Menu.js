////import React, { useState } from 'react';
////import MenuCard from '../components/MenuCard';
////import '../App.css';
////
////const Menu = () => {
////  const [activeCategory, setActiveCategory] = useState('All');
////  const [cart, setCart] = useState([]);
////  const [showCart, setShowCart] = useState(false);
////
////  const menuItems = [
////    {
////      id: 1,
////      name: 'Margherita Pizza',
////      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
////      price: 12.99,
////      category: 'Pizza',
////      image: 'https://via.placeholder.com/300x200?text=Margherita+Pizza'
////    },
////    {
////      id: 2,
////      name: 'Spaghetti Carbonara',
////      description: 'Pasta with eggs, cheese, pancetta, and black pepper',
////      price: 14.99,
////      category: 'Pasta',
////      image: 'https://via.placeholder.com/300x200?text=Spaghetti+Carbonara'
////    },
////    {
////      id: 3,
////      name: 'Caesar Salad',
////      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
////      price: 9.99,
////      category: 'Salads',
////      image: 'https://via.placeholder.com/300x200?text=Caesar+Salad'
////    },
////    {
////      id: 4,
////      name: 'Pepperoni Pizza',
////      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
////      price: 14.99,
////      category: 'Pizza',
////      image: 'https://via.placeholder.com/300x200?text=Pepperoni+Pizza'
////    },
////    {
////      id: 5,
////      name: 'Tiramisu',
////      description: 'Coffee-flavored Italian dessert with ladyfingers and mascarpone',
////      price: 7.99,
////      category: 'Desserts',
////      image: 'https://via.placeholder.com/300x200?text=Tiramisu'
////    },
////    {
////      id: 6,
////      name: 'Penne Arrabiata',
////      description: 'Penne pasta in a spicy tomato sauce',
////      price: 13.99,
////      category: 'Pasta',
////      image: 'https://via.placeholder.com/300x200?text=Penne+Arrabiata'
////    }
////  ];
////
////  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
////
////  const filteredItems = activeCategory === 'All'
////    ? menuItems
////    : menuItems.filter(item => item.category === activeCategory);
////
////  const addToCart = (item) => {
////    setCart(prevCart => {
////      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
////      if (existingItem) {
////        return prevCart.map(cartItem =>
////          cartItem.id === item.id
////            ? { ...cartItem, quantity: cartItem.quantity + 1 }
////            : cartItem
////        );
////      }
////      return [...prevCart, { ...item, quantity: 1 }];
////    });
////    setShowCart(true);
////  };
////
////  const removeFromCart = (id) => {
////    setCart(prevCart => {
////      const existingItem = prevCart.find(item => item.id === id);
////      if (existingItem.quantity > 1) {
////        return prevCart.map(item =>
////          item.id === id
////            ? { ...item, quantity: item.quantity - 1 }
////            : item
////        );
////      }
////      return prevCart.filter(item => item.id !== id);
////    });
////  };
////
////  const clearCart = () => {
////    setCart([]);
////  };
////
////  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
////  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
////  const deliveryFee = 2.99;
////  const grandTotal = cartTotal + deliveryFee;
////
////  return (
////    <div className="menu-page">
////      <div className="menu-header">
////        <div className="header-content">
////          <h1 className="menu-title">Our Menu</h1>
////          <p className="menu-subtitle">Delicious dishes made with love</p>
////        </div>
////        <button
////          className="cart-toggle"
////          onClick={() => setShowCart(!showCart)}
////          aria-label={showCart ? "Hide cart" : "View cart"}
////        >
////          <span className="cart-icon">🛒</span>
////          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
////        </button>
////      </div>
////
////      <div className={`cart-summary ${showCart ? 'visible' : ''}`}>
////        <div className="cart-header">
////          <h3>Your Order</h3>
////          <button className="close-cart" onClick={() => setShowCart(false)}>
////            &times;
////          </button>
////        </div>
////
////        {cart.length === 0 ? (
////          <div className="empty-cart">
////            <p>Your cart is empty</p>
////            <small>Add items from the menu to get started</small>
////          </div>
////        ) : (
////          <>
////            <ul className="cart-items">
////              {cart.map(item => (
////                <li key={item.id} className="cart-item">
////                  <div className="cart-item-info">
////                    <span className="item-name">{item.name}</span>
////                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
////                  </div>
////                  <div className="cart-item-actions">
////                    <button
////                      className="quantity-btn"
////                      onClick={() => removeFromCart(item.id)}
////                      aria-label="Decrease quantity"
////                    >
////                      −
////                    </button>
////                    <span className="item-quantity">{item.quantity}</span>
////                    <button
////                      className="quantity-btn"
////                      onClick={() => addToCart(item)}
////                      aria-label="Increase quantity"
////                    >
////                      +
////                    </button>
////                  </div>
////                </li>
////              ))}
////            </ul>
////
////            <div className="cart-totals">
////              <div className="cart-total-row">
////                <span>Subtotal:</span>
////                <span>${cartTotal.toFixed(2)}</span>
////              </div>
////              <div className="cart-total-row">
////                <span>Delivery Fee:</span>
////                <span>${deliveryFee.toFixed(2)}</span>
////              </div>
////              <div className="cart-total-row grand-total">
////                <span>Total:</span>
////                <span>${grandTotal.toFixed(2)}</span>
////              </div>
////            </div>
////
////            <div className="cart-buttons">
////              <button className="clear-cart-btn" onClick={clearCart}>
////                Clear Cart
////              </button>
////              <button className="checkout-btn">
////                Proceed to Checkout
////              </button>
////            </div>
////          </>
////        )}
////      </div>
////
////      <div className="menu-filters">
////        {categories.map(category => (
////          <button
////            key={category}
////            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
////            onClick={() => setActiveCategory(category)}
////          >
////            {category}
////          </button>
////        ))}
////      </div>
////
////      <div className="menu-grid">
////        {filteredItems.map(item => (
////          <MenuCard
////            key={item.id}
////            item={item}
////            onAddToCart={() => addToCart(item)}
////          />
////        ))}
////      </div>
////    </div>
////  );
////};
////
////export default Menu;
//import React, { useState } from 'react';
//import MenuCard from '../components/MenuCard';
//import '../App.css';
//
//const OrderOnline = () => {
//  const [activeCategory, setActiveCategory] = useState('All');
//  const [cart, setCart] = useState([]);
//  const [showCart, setShowCart] = useState(false);
//  const [checkoutStep, setCheckoutStep] = useState('menu'); // 'menu', 'details', 'confirmation'
//  const [orderDetails, setOrderDetails] = useState({
//    name: '',
//    phone: '',
//    address: '',
//    instructions: '',
//  });
//
//  const menuItems = [
//    {
//      id: 1,
//      name: 'Margherita Pizza',
//      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
//      price: 12.99,
//      category: 'Pizza',
//      image: 'https://via.placeholder.com/300x200?text=Margherita+Pizza'
//    },
//    {
//      id: 2,
//      name: 'Spaghetti Carbonara',
//      description: 'Pasta with eggs, cheese, pancetta, and black pepper',
//      price: 14.99,
//      category: 'Pasta',
//      image: 'https://via.placeholder.com/300x200?text=Spaghetti+Carbonara'
//    },
//    {
//      id: 3,
//      name: 'Caesar Salad',
//      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
//      price: 9.99,
//      category: 'Salads',
//      image: 'https://via.placeholder.com/300x200?text=Caesar+Salad'
//    },
//    {
//      id: 4,
//      name: 'Pepperoni Pizza',
//      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
//      price: 14.99,
//      category: 'Pizza',
//      image: 'https://via.placeholder.com/300x200?text=Pepperoni+Pizza'
//    },
//    {
//      id: 5,
//      name: 'Tiramisu',
//      description: 'Coffee-flavored Italian dessert with ladyfingers and mascarpone',
//      price: 7.99,
//      category: 'Desserts',
//      image: 'https://via.placeholder.com/300x200?text=Tiramisu'
//    },
//    {
//      id: 6,
//      name: 'Penne Arrabiata',
//      description: 'Penne pasta in a spicy tomato sauce',
//      price: 13.99,
//      category: 'Pasta',
//      image: 'https://via.placeholder.com/300x200?text=Penne+Arrabiata'
//    }
//  ];
//
//  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
//
//  const filteredItems = activeCategory === 'All'
//    ? menuItems
//    : menuItems.filter(item => item.category === activeCategory);
//
//  const addToCart = (item) => {
//    setCart(prevCart => {
//      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
//      if (existingItem) {
//        return prevCart.map(cartItem =>
//          cartItem.id === item.id
//            ? { ...cartItem, quantity: cartItem.quantity + 1 }
//            : cartItem
//        );
//      }
//      return [...prevCart, { ...item, quantity: 1 }];
//    });
//    setShowCart(true);
//  };
//
//  const removeFromCart = (id) => {
//    setCart(prevCart => {
//      const existingItem = prevCart.find(item => item.id === id);
//      if (existingItem.quantity > 1) {
//        return prevCart.map(item =>
//          item.id === id
//            ? { ...item, quantity: item.quantity - 1 }
//            : item
//        );
//      }
//      return prevCart.filter(item => item.id !== id);
//    });
//  };
//
//  const clearCart = () => {
//    setCart([]);
//  };
//
//  const handleInputChange = (e) => {
//    const { name, value } = e.target;
//    setOrderDetails(prev => ({ ...prev, [name]: value }));
//  };
//
//  const handleCheckout = () => {
//    if (cart.length === 0) return;
//    setCheckoutStep('details');
//  };
//
//  const handlePlaceOrder = () => {
//    // In a real app, you would send this data to your backend
//    console.log('Order placed:', { orderDetails, cart });
//    setCheckoutStep('confirmation');
//    setCart([]);
//  };
//
//  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
//  const deliveryFee = 2.99;
//  const grandTotal = cartTotal + deliveryFee;
//
//  return (
//    <div className="order-online-page">
//      {checkoutStep === 'menu' && (
//        <>
//          <div className="order-header">
//            <div className="header-content">
//              <h1 className="order-title">Order Online</h1>
//              <p className="order-subtitle">Delicious food delivered to your door</p>
//            </div>
//            <button
//              className="cart-toggle"
//              onClick={() => setShowCart(!showCart)}
//              aria-label={showCart ? "Hide cart" : "View cart"}
//            >
//              <span className="cart-icon">🛒</span>
//              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
//            </button>
//          </div>
//
//          <div className={`cart-summary ${showCart ? 'visible' : ''}`}>
//            <div className="cart-header">
//              <h3>Your Order</h3>
//              <button className="close-cart" onClick={() => setShowCart(false)}>
//                &times;
//              </button>
//            </div>
//
//            {cart.length === 0 ? (
//              <div className="empty-cart">
//                <p>Your cart is empty</p>
//                <small>Add items from the menu to get started</small>
//              </div>
//            ) : (
//              <>
//                <ul className="cart-items">
//                  {cart.map(item => (
//                    <li key={item.id} className="cart-item">
//                      <div className="cart-item-info">
//                        <span className="item-name">{item.name}</span>
//                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
//                      </div>
//                      <div className="cart-item-actions">
//                        <button
//                          className="quantity-btn"
//                          onClick={() => removeFromCart(item.id)}
//                          aria-label="Decrease quantity"
//                        >
//                          −
//                        </button>
//                        <span className="item-quantity">{item.quantity}</span>
//                        <button
//                          className="quantity-btn"
//                          onClick={() => addToCart(item)}
//                          aria-label="Increase quantity"
//                        >
//                          +
//                        </button>
//                      </div>
//                    </li>
//                  ))}
//                </ul>
//
//                <div className="cart-totals">
//                  <div className="cart-total-row">
//                    <span>Subtotal:</span>
//                    <span>${cartTotal.toFixed(2)}</span>
//                  </div>
//                  <div className="cart-total-row">
//                    <span>Delivery Fee:</span>
//                    <span>${deliveryFee.toFixed(2)}</span>
//                  </div>
//                  <div className="cart-total-row grand-total">
//                    <span>Total:</span>
//                    <span>${grandTotal.toFixed(2)}</span>
//                  </div>
//                </div>
//
//                <div className="cart-buttons">
//                  <button className="clear-cart-btn" onClick={clearCart}>
//                    Clear Cart
//                  </button>
//                  <button className="checkout-btn" onClick={handleCheckout}>
//                    Proceed to Checkout
//                  </button>
//                </div>
//              </>
//            )}
//          </div>
//
//          <div className="menu-filters">
//            {categories.map(category => (
//              <button
//                key={category}
//                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
//                onClick={() => setActiveCategory(category)}
//              >
//                {category}
//              </button>
//            ))}
//          </div>
//
//          <div className="menu-grid">
//            {filteredItems.map(item => (
//              <MenuCard
//                key={item.id}
//                item={item}
//                onAddToCart={() => addToCart(item)}
//              />
//            ))}
//          </div>
//        </>
//      )}
//
//      {checkoutStep === 'details' && (
//        <div className="checkout-form">
//          <h2>Delivery Information</h2>
//          <button className="back-button" onClick={() => setCheckoutStep('menu')}>
//            &larr; Back to Menu
//          </button>
//
//          <form onSubmit={(e) => {
//            e.preventDefault();
//            handlePlaceOrder();
//          }}>
//            <div className="form-group">
//              <label htmlFor="name">Full Name</label>
//              <input
//                type="text"
//                id="name"
//                name="name"
//                value={orderDetails.name}
//                onChange={handleInputChange}
//                required
//              />
//            </div>
//
//            <div className="form-group">
//              <label htmlFor="phone">Phone Number</label>
//              <input
//                type="tel"
//                id="phone"
//                name="phone"
//                value={orderDetails.phone}
//                onChange={handleInputChange}
//                required
//              />
//            </div>
//
//            <div className="form-group">
//              <label htmlFor="address">Delivery Address</label>
//              <textarea
//                id="address"
//                name="address"
//                value={orderDetails.address}
//                onChange={handleInputChange}
//                required
//              />
//            </div>
//
//            <div className="form-group">
//              <label htmlFor="instructions">Delivery Instructions (Optional)</label>
//              <textarea
//                id="instructions"
//                name="instructions"
//                value={orderDetails.instructions}
//                onChange={handleInputChange}
//                placeholder="Gate code, floor number, etc."
//              />
//            </div>
//
//            <div className="order-summary">
//              <h3>Your Order</h3>
//              <ul>
//                {cart.map(item => (
//                  <li key={item.id}>
//                    {item.name} × {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
//                  </li>
//                ))}
//              </ul>
//              <div className="order-total">
//                <p>Total: ${grandTotal.toFixed(2)}</p>
//              </div>
//            </div>
//
//            <button type="submit" className="place-order-btn">
//              Place Order
//            </button>
//          </form>
//        </div>
//      )}
//
//      {checkoutStep === 'confirmation' && (
//        <div className="order-confirmation">
//          <h2>Order Confirmed!</h2>
//          <div className="confirmation-icon">✓</div>
//          <p>Thank you for your order, {orderDetails.name}!</p>
//          <p>Your food will be delivered to:</p>
//          <p className="delivery-address">{orderDetails.address}</p>
//          <p>We'll call you at {orderDetails.phone} when we're on our way.</p>
//          <p>Estimated delivery time: 30-45 minutes</p>
//
//          <button
//            className="new-order-btn"
//            onClick={() => {
//              setCheckoutStep('menu');
//              setOrderDetails({
//                name: '',
//                phone: '',
//                address: '',
//                instructions: '',
//              });
//            }}
//          >
//            Start New Order
//          </button>
//        </div>
//      )}
//    </div>
//  );
//};
//
//export default OrderOnline;
import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import '../App.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('menu'); // 'menu', 'details', 'confirmation'
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: '',
  });

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      image: 'https://via.placeholder.com/300x200?text=Margherita+Pizza'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, cheese, pancetta, and black pepper',
      price: 14.99,
      category: 'Pasta',
      image: 'https://via.placeholder.com/300x200?text=Spaghetti+Carbonara'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
      price: 9.99,
      category: 'Salads',
      image: 'https://via.placeholder.com/300x200?text=Caesar+Salad'
    },
    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      category: 'Pizza',
      image: 'https://via.placeholder.com/300x200?text=Pepperoni+Pizza'
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert with ladyfingers and mascarpone',
      price: 7.99,
      category: 'Desserts',
      image: 'https://via.placeholder.com/300x200?text=Tiramisu'
    },
    {
      id: 6,
      name: 'Penne Arrabiata',
      description: 'Penne pasta in a spicy tomato sauce',
      price: 13.99,
      category: 'Pasta',
      image: 'https://via.placeholder.com/300x200?text=Penne+Arrabiata'
    }
  ];

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('details');
  };

  const handlePlaceOrder = () => {
    // In a real app, you would send this data to your backend
    console.log('Order placed:', { orderDetails, cart });
    setCheckoutStep('confirmation');
    setCart([]);
  };

  // Close cart when clicking on overlay
  const handleOverlayClick = () => {
    setShowCart(false);
  };

  // Close cart when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showCart) {
        setShowCart(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showCart]);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const deliveryFee = 2.99;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <div className="order-online-page">
      {/* Cart Overlay */}
      <div
        className={`cart-overlay ${showCart ? 'visible' : ''}`}
        onClick={handleOverlayClick}
      />

      {checkoutStep === 'menu' && (
        <>
          <div className="order-header">
            <div className="header-content">
              <h1 className="order-title">Order Online</h1>
              <p className="order-subtitle">Delicious food delivered to your door</p>
            </div>
            <button
              className="cart-toggle"
              onClick={() => setShowCart(!showCart)}
              aria-label={showCart ? "Hide cart" : "View cart"}
            >
              <span className="cart-icon">🛒</span>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </button>
          </div>

          <div className={`cart-summary ${showCart ? 'visible' : ''}`}>
            <div className="cart-header">
              <h3>MENU</h3>
              <button className="close-cart" onClick={() => setShowCart(false)}>
                &times;
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <small>Add items from the menu to get started</small>
              </div>
            ) : (
              <>
                <ul className="cart-items">
                  {cart.map(item => (
                    <li key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          className="quantity-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="item-quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => addToCart(item)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="cart-totals">
                  <div className="cart-total-row">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="cart-total-row">
                    <span>Delivery Fee:</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="cart-total-row grand-total">
                    <span>Total:</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-buttons">
                  <button className="clear-cart-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="menu-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </>
      )}

      {checkoutStep === 'details' && (
        <div className="checkout-form">
          <h2>Delivery Information</h2>
          <button className="back-button" onClick={() => setCheckoutStep('menu')}>
            &larr; Back to Menu
          </button>

          <form onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder();
          }}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="instructions">Delivery Instructions (Optional)</label>
              <textarea
                id="instructions"
                name="instructions"
                value={orderDetails.instructions}
                onChange={handleInputChange}
                placeholder="Gate code, floor number, etc."
              />
            </div>

            <div className="order-summary">
              <h3>Your Order</h3>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
              <div className="order-total">
                <p>Total: ${grandTotal.toFixed(2)}</p>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      )}

      {checkoutStep === 'confirmation' && (
        <div className="order-confirmation">
          <h2>Order Confirmed!</h2>
          <div className="confirmation-icon">✓</div>
          <p>Thank you for your order, {orderDetails.name}!</p>
          <p>Your food will be delivered to:</p>
          <p className="delivery-address">{orderDetails.address}</p>
          <p>We'll call you at {orderDetails.phone} when we're on our way.</p>
          <p>Estimated delivery time: 30-45 minutes</p>

          <button
            className="new-order-btn"
            onClick={() => {
              setCheckoutStep('menu');
              setOrderDetails({
                name: '',
                phone: '',
                address: '',
                instructions: '',
              });
            }}
          >
            Start New Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
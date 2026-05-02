// Utility to manage local storage for bookings and orders without a backend

const STORAGE_KEYS = {
  BOOKINGS: 'sc_local_bookings',
  ORDERS: 'sc_local_orders',
  ENQUIRIES: 'sc_local_enquiries',
  PROFILE: 'sc_user_profile'
};

export const storage = {
  // Bookings
  saveBooking: (booking) => {
    const bookings = storage.getBookings();
    const newBooking = {
      ...booking,
      id: `BK-${Date.now()}`,
      status: 'Confirmed',
      timestamp: new Date().toISOString()
    };
    bookings.unshift(newBooking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return newBooking;
  },

  getBookings: () => {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return data ? JSON.parse(data) : [];
  },

  // Orders/Shopping
  saveOrder: (order) => {
    const orders = storage.getOrders();
    const newOrder = {
      ...order,
      id: `ORD-${Date.now()}`,
      status: 'Delivered',
      timestamp: new Date().toISOString()
    };
    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    return newOrder;
  },

  getOrders: () => {
    const data = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return data ? JSON.parse(data) : [];
  },

  // Enquiries
  saveEnquiry: (enquiry) => {
    const enquiries = storage.getEnquiries();
    const newEnquiry = {
      ...enquiry,
      id: `ENQ-${Date.now()}`,
      status: 'Pending',
      timestamp: new Date().toISOString()
    };
    enquiries.unshift(newEnquiry);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
    return newEnquiry;
  },

  getEnquiries: () => {
    const data = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return data ? JSON.parse(data) : [];
  },

  // Clear all data (Reset)
  clearAll: () => {
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(STORAGE_KEYS.ORDERS);
    localStorage.removeItem(STORAGE_KEYS.ENQUIRIES);
  }
};

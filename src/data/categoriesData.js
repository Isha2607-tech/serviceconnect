export const CATEGORIES_DATA = {
  gym: [
    {
      id: 'v1',
      name: 'PowerHouse Fitness',
      rating: 4.8,
      reviewsCount: 1250,
      location: 'Andheri West, Mumbai',
      tags: ['Crossfit', 'Cardio', 'Personal Training'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      verified: true,
      highlight: 'Top rated in Andheri',
      gstin: '27AAAPU3195L1Z6',
      phone: '09845258527',
      address: 'Plot No 50, Sunder Compound, Andheri West, Mumbai-400053',
      yearsInBusiness: 12,
      images: [
        { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200', category: 'Interior' },
        { url: 'https://images.unsplash.com/photo-1571902953202-b5e1b2f7f917?auto=format&fit=crop&q=80&w=800', category: 'Exterior' },
        { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800', category: 'By User' },
      ],
      facilities: ['AC', 'Locker Room', 'Steam Bath', 'Showers', 'Changing Rooms'],
      amenities: ['Parking', 'Water Dispenser', 'WiFi', 'Music System'],
      services: ['Weight Gain', 'Weight Loss', 'Yoga', 'Zumba', 'Personal Training'],
      userReviews: [
        { name: 'John Doe', rating: 5, date: '12-04-2026', text: 'Best gym in the area! The equipment is top notch.' },
        { name: 'Sameer Khan', rating: 4, date: '10-04-2026', text: 'Great trainers and very hygienic place.' }
      ]
    }
  ],
  restaurants: [
    {
      id: 'v1',
      name: 'The Golden Spoon',
      rating: 4.7,
      reviewsCount: 3500,
      location: 'Colaba, Mumbai',
      tags: ['Fine Dining', 'Italian', 'Wine Cellar'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      verified: true,
      highlight: 'Michelin Star Experience',
      gstin: '27AABCT1234F1Z1',
      phone: '022-22851234',
      address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001',
      yearsInBusiness: 25,
      images: [
        { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200', category: 'Interior' },
        { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', category: 'Exterior' },
        { url: 'https://images.unsplash.com/photo-1550966841-3ee7adac1ad0?auto=format&fit=crop&q=80&w=800', category: 'By User' }
      ],
      facilities: ['Valet Parking', 'Wheelchair Accessible', 'Smoking Area', 'Elevator', 'WiFi'],
      amenities: ['Air Conditioned', 'Live Music', 'Bar', 'Private Dining'],
      services: ['Home Delivery', 'Takeaway', 'Dine-in', 'Buffet', 'Outdoor Seating'],
      userReviews: [
        { name: 'Alice', rating: 5, date: '15-04-2026', text: 'Amazing food!' },
        { name: 'Rohit Sharma', rating: 4, date: '18-04-2026', text: 'Great ambiance and the Italian food is authentic.' }
      ]
    },
    { id: 'v2', name: 'Bandra Blue', rating: 4.9, reviewsCount: 1200, location: 'Bandra, Mumbai', tags: ['Seafood', 'Coastal'], image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800', verified: true, highlight: 'Bestseller' },
    { id: 'v3', name: 'Spice Route', rating: 4.5, reviewsCount: 890, location: 'Juhu, Mumbai', tags: ['Indian', 'Spicy'], image: 'https://images.unsplash.com/photo-1550966841-3ee7adac1ad0?auto=format&fit=crop&q=80&w=800', verified: false, highlight: 'Locals Love It' },
    { id: 'v20', name: 'Rustic Kitchen', rating: 4.5, reviewsCount: 1100, location: 'Andheri, Mumbai', tags: ['Farm to Table'], image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800', verified: true, highlight: 'Healthy' }
  ],
  beauty: [
    {
      id: 'v1',
      name: 'Glow Up Salon',
      rating: 4.9,
      reviewsCount: 850,
      location: 'Juhu, Mumbai',
      tags: ['Luxury Spa', 'Bridal Makeup', 'Hair Care'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
      verified: true,
      highlight: 'Best Bridal Studio 2026',
      yearsInBusiness: 8,
      phone: '09845258527',
      images: [
        { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200', category: 'Interior' },
        { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', category: 'By User' }
      ],
      facilities: ['Private Rooms', 'Steam Cabin', 'Valet Parking', 'WiFi'],
      amenities: ['Coffee Bar', 'Music', 'Air Conditioned'],
      services: ['Bridal Package', 'Hair Spa', 'Facials', 'Nail Art', 'Massage'],
      userReviews: [
        { name: 'Priya Iyer', rating: 5, date: '20-04-2026', text: 'The bridal makeup was perfect! Highly recommended.' }
      ]
    }
  ],
  default: [
    { id: 'v1', name: 'Elite Service Provider', rating: 4.6, reviewsCount: 500, location: 'Mumbai Central', tags: ['Expert', 'Reliable'], image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800', verified: true, highlight: 'Verified Professional' }
  ]
};

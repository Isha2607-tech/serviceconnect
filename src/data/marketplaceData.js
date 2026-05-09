import { Scissors, Mic, Dumbbell, Sparkles, Sofa, Building2, Utensils, Activity, CarFront, Package, Heart, Dog, Bed, Store, GraduationCap, Zap, Wrench, Truck, UserCog } from 'lucide-react';
import hotelIcon from '../assets/icons/hotel.png';
import beautyIcon from '../assets/icons/beauty.png';

export const CATEGORIES = [
  { id: 1, name: 'Manufacturers', icon: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=150', count: '340K+', color: 'bg-primary-50/50' },
  { id: 2, name: 'Industrial Goods', icon: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=150', count: '220K+', color: 'bg-primary-50/50' },
  { id: 3, name: 'Retail & Shops', icon: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=150', count: '450K+', color: 'bg-primary-50/50' },
  { id: 4, name: 'Agriculture', icon: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=150', count: '78K+', color: 'bg-primary-50/50' },
  { id: 5, name: 'Home & Decor', icon: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150', count: '92K+', color: 'bg-primary-50/50' },
  { id: 6, name: 'Food & Beverages', icon: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=150', count: '280K+', color: 'bg-primary-50/50' },
  { id: 7, name: 'Automotive Parts', icon: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=150', count: '110K+', color: 'bg-primary-50/50' },
  { id: 8, name: 'Electronics', icon: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=150', count: '190K+', color: 'bg-primary-50/50' },
  { id: 9, name: 'Textiles & Apparel', icon: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=150', count: '260K+', color: 'bg-primary-50/50' },
  { id: 10, name: 'Beauty', icon: beautyIcon, count: '120K+', color: 'bg-primary-50/50' },
  { id: 11, name: 'Hotels', icon: hotelIcon, count: '50K+', color: 'bg-primary-50/50' },
  { id: 12, name: 'Chemicals', icon: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=150', count: '65K+', color: 'bg-primary-50/50' },
];

export const SERVICES_CATEGORIES = [
  { id: 1, name: 'Logistics', icon: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=150', count: '85K+', color: 'bg-primary-50/50' },
  { id: 2, name: 'Repair Services', icon: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=150', count: '120K+', color: 'bg-primary-50/50' },
  { id: 3, name: 'IT & Software', icon: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150', count: '95K+', color: 'bg-primary-50/50' },
  { id: 4, name: 'Real Estate', icon: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=150', count: '210K+', color: 'bg-primary-50/50' },
  { id: 5, name: 'Healthcare', icon: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=150', count: '165K+', color: 'bg-primary-50/50' },
  { id: 6, name: 'Education', icon: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=150', count: '130K+', color: 'bg-primary-50/50' },
  { id: 7, name: 'Food & Dining', icon: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=150', count: '180K+', color: 'bg-primary-50/50' },
  { id: 8, name: 'Consulting', icon: 'https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=150', count: '72K+', color: 'bg-primary-50/50' },
  { id: 9, name: 'Marketing', icon: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=150', count: '58K+', color: 'bg-primary-50/50' },
  { id: 10, name: 'Legal Services', icon: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=150', count: '44K+', color: 'bg-primary-50/50' },
  { id: 11, name: 'Financial Services', icon: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=150', count: '96K+', color: 'bg-primary-50/50' },
  { id: 12, name: 'Travel & Tourism', icon: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=150', count: '115K+', color: 'bg-primary-50/50' },
];

export const FEATURED_VENDORS = [
  { id: 1, name: 'AquaSmooth Plumbing', rating: 4.9, reviews: 1240, type: 'Premium', verified: true, image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Apex Car Care', rating: 4.8, reviews: 3100, type: 'Featured', verified: true, image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Zenith Home Spa', rating: 4.7, reviews: 890, type: 'Promoted', verified: false, image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'Glow Dental Clinic', rating: 5.0, reviews: 450, type: 'Top Rated', verified: true, image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const HOME_SERVICES = [
  { id: 1, name: 'AC REPAIR & SERVICE', image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#1A2B4B]' },
  { id: 2, name: 'PAINTERS', image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#9D446E]' },
  { id: 3, name: 'PEST CONTROL', image: 'https://images.pexels.com/photos/4064560/pexels-photo-4064560.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#C59D3F]' },
  { id: 4, name: 'PLUMBERS', image: 'https://images.pexels.com/photos/5691653/pexels-photo-5691653.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#E68D40]' },
  { id: 5, name: 'ELECTRICIANS', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400', color: 'from-[#2D5A27]' },
  { id: 6, name: 'CLEANING', image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#2B5278]' },
  { id: 7, name: 'CARPENTERS', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#5D4037]' },
  { id: 8, name: 'SECURITY', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400', color: 'from-[#37474F]' },
  { id: 9, name: 'APPLIANCE REPAIR', image: 'https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#4A3B52]' },
  { id: 10, name: 'HOME DECOR', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#1B4B5A]' },
];

export const PREVIEW_CARDS = [
  {
    id: 0,
    user: 'Luxe Interior Studio',
    title: 'Minimalist Transformation',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    likes: '2k',
    comments: '45',
    text: 'Just finished this beautiful minimalist living room transformation in Goregaon. Every corner tells a story! ✨'
  },
  {
    id: 1,
    user: 'Zenith Home Spa',
    title: 'Morning Wellness',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '1.2k',
    comments: '28',
    text: 'Relaxing home spa session today. Peace begins with a healthy mind and body. 🧘‍♀️'
  },
  {
    id: 2,
    user: 'Apex Car Care',
    title: 'Extreme Detailing',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '800',
    comments: '15',
    text: 'Brought this vintage beauty back to life with our premium detailing package! 🚗✨'
  }
];

export const PRODUCT_CATEGORIES_SIDEBAR = [
  { id: 1, name: 'Apparel & Accessories', icon: Scissors },
  { id: 2, name: 'Consumer Electronics', icon: Mic },
  { id: 3, name: 'Sports & Entertainment', icon: Dumbbell },
  { id: 4, name: 'Beauty', icon: Sparkles },
  { id: 5, name: 'Home & Decor', icon: Sofa },
  { id: 6, name: 'Industrial Goods', icon: Building2 },
  { id: 7, name: 'Agriculture & Food', icon: Utensils },
  { id: 8, name: 'Health & Medical', icon: Activity },
  { id: 9, name: 'Auto & Transportation', icon: CarFront },
  { id: 10, name: 'Bags & Shoes', icon: Package },
  { id: 11, name: 'Gifts & Crafts', icon: Heart },
  { id: 12, name: 'Toys & Hobbies', icon: Dog },
  { id: 13, name: 'Electrical Equip.', icon: Zap },
  { id: 14, name: 'Construction', icon: Wrench },
  { id: 15, name: 'Tools & Hardware', icon: Wrench },
  { id: 16, name: 'Machinery', icon: UserCog },
  { id: 17, name: 'Packaging & Printing', icon: Truck },
  { id: 18, name: 'Office & School', icon: GraduationCap },
  { id: 19, name: 'Furniture', icon: Bed },
  { id: 20, name: 'Lights & Lighting', icon: Sparkles },
  { id: 21, name: 'Textiles', icon: Scissors },
];

export const FREQUENTLY_SEARCHED = [
  { id: 1, name: 'Smart TVs', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Wedding Dresses', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 3, name: 'Wireless Audio', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 4, name: 'New Energy Vehicles', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, name: 'Home Theater', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, name: 'Laptops', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
  { id: 7, name: 'Gaming Consoles', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 8, name: 'Cameras', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 9, name: 'Smart Watches', sub: 'Frequently searched', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const TOP_DEALS = [
  { id: 'td1', name: 'Cat Ear Headphones', price: '₹187.91', old: '₹226.99', moq: '1', image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'td2', name: 'Floral Dresses', price: '₹240.90', old: '₹299.00', moq: '50', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'td3', name: 'Smart Scooters', price: '₹21,777.23', old: '₹25,000', moq: '1', image: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'td4', name: 'Tableau License', price: '₹770.88', old: '₹999.00', moq: '1', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

export const PRODUCT_BANNERS = [
  { id: 1, title: 'Hot Picks', sub: 'Must-have gadgets', color: 'bg-blue-100', btnColor: 'bg-blue-900', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, title: 'Super May exclusives', sub: 'Limited time offers', color: 'bg-orange-100', btnColor: 'bg-orange-700', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, title: 'Smart Home', sub: 'Automate your life', color: 'bg-slate-100', btnColor: 'bg-slate-900', image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const TOP_RANKED_CATEGORIES = [
  { id: 'tr1', name: 'Portable Toilet', image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'tr2', name: 'Tree House', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'tr3', name: 'Factory Roofing Shed', image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'tr4', name: 'Puff Cabins', image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'tr5', name: 'Tennis Courts', image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'tr6', name: 'Portable Pantry', image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

export const PRODUCT_LIST_TABS = [
  'All', 'Metals & Alloys', 'Renewable Energy', 'Consumer Electronics', 'Home Appliances', 'Food & Beverage', 'Sports & Entertainment', 'School & Office Supplies'
];

export const FULL_PRODUCT_LIST = [
  { id: 'fp1', name: 'Lowest Price Matson Sea Cargo Service Door to Door China to USA', price: '₹120.45', moq: '1', badge: 'Lower priced than similar', image: 'https://images.pexels.com/photos/2144903/pexels-photo-2144903.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp2', name: 'Coolstyle Jewelry Wholesale 8mm Gunmetal Tungsten Ring Men', price: '₹1,011.78', moq: '2', sold: '390+ sold', image: 'https://images.pexels.com/photos/94843/pexels-photo-94843.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp3', name: '100g 300m Wholesale Fancy 5ply 100% Cotton Yarn 3mm+6mm', price: '₹259.21', moq: '10', rating: '5.0', image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp4', name: 'High Quality Engraved Gold Brand logo Custom Clothes Metal Dome', price: '₹53.00', moq: '100', delivery: 'Delivery by 04 Jun', image: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp5', name: 'Custom Logo Mini 10000mAh Magnetic Wireless Solar Energy', price: '₹1,108.14', moq: '50', badge: 'Lower priced than similar', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp6', name: 'Fashion Smart Battery Case for iPhone 15 14 Plus 13 12 Mini 12 Pro', price: '₹1,146.68', moq: '1', rating: '5.0', image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp7', name: 'Custom Journal High-End Flower PET Tape With Shell Holographic', price: '₹64.57', moq: '50', sold: '180+ sold', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp8', name: 'Compatible Drum Cleaning Blade for Konica Minolta Bizhub C224 C284', price: '₹221.63', moq: '1', sold: '10+ sold', image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp9', name: 'Tokol Inked Nylon Ribbon 12.7mmx920M Black/Purple Ink', price: '₹1,985.01', moq: '10', sold: '520+ sold', image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { id: 'fp10', name: 'Indian Trendy Fashion for Women Long Heavy Net Anarkali', price: '₹3,432.33', moq: '1', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const RECOMMENDATIONS = [
  { id: 'rec1', name: 'Custom Die Cut Waterproof PVC Vinyl Logo', price: '₹8.68', moq: '1 piece', delivery: '12 Jun', image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'rec2', name: 'Custom Decorative Transparent Logo Metal', price: '₹8.68', moq: '1 piece', delivery: '12 Jun', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'rec3', name: 'High Quality Skateboard Double Sided Sticker', price: '₹8.68', moq: '1 piece', delivery: '12 Jun', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'rec4', name: 'Weatherproof Custom Brand Logo Design UV', price: '₹8.68', moq: '1 piece', delivery: '12 Jun', image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const KEY_ATTRIBUTES = [
  { label: 'Application', value: 'Promotional Gifts', label2: 'Material', value2: 'adhesive vinyl' },
  { label: 'Product Type', value: 'paper sticker', label2: 'Pattern', value2: 'custom logo' },
  { label: 'Feature', value: 'Waterproof', label2: 'product type', value2: 'metal sticker' },
  { label: 'Style', value: 'Decorative Sticker', label2: 'Shape', value2: 'Customized' },
  { label: 'Surface finishing', value: 'UV Varnishing', label2: 'Printing', value2: 'CMYK' },
  { label: 'Place of Origin', value: 'Guangdong, China', label2: 'Brand Name', value2: 'Phcase' },
  { label: 'Model Number', value: 'PHC-Stickers', label2: '', value2: '' },
];

export const DUMMY_REVIEWS = [
  { id: 1, user: 'Rahul S.', rating: 5, date: '12 Apr 2024', comment: 'Excellent quality! The stickers are waterproof as mentioned and the colors are very vibrant. Will order again.', avatar: 'RS' },
  { id: 2, user: 'Anita M.', rating: 4, date: '05 Apr 2024', comment: 'Great product for the price. Delivery was a bit slow but the quality compensated for it.', avatar: 'AM' },
  { id: 3, user: 'Vikram K.', rating: 5, date: '28 Mar 2024', comment: 'Highly recommended for small businesses. The bulk pricing is very competitive.', avatar: 'VK' },
];

export const RECENT_SEARCHES = [
  'Gynaecologist & Obstetrician',
  'Real Estate Agents'
];

export const TRENDING_SEARCHES = [
  'Hostels For Women',
  'Car Rental',
  'Interior Designers',
  'Electricians'
];

export const TRENDING_AREAS = [
  'Vijay Nagar, Indore',
  'Vijay Nagar Road Vijay Nagar, Indore',
  'Bhawar Kuan, Indore',
  'Khajrana, Indore',
  'Sudama Nagar, Indore',
  'Mhow, Indore',
  'MG Road Indore, Indore',
  'New Palasia, Indore',
  'Kanadia, Indore',
  'Rau, Indore'
];



export const ALL_PRODUCTS = [...TOP_DEALS, ...FULL_PRODUCT_LIST, ...RECOMMENDATIONS];


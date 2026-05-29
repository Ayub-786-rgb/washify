import { Service, PricingPlan } from '../types';

export const SERVICES: Service[] = [
{
id: 'wash-fold',
name: 'Wash & Fold',
description: 'Regular laundry washed, dried and neatly folded',
icon: '🧺',
pricePerKg: 49,
},
{
id: 'wash-iron',
name: 'Wash & Iron',
description: 'Washed and professionally pressed clothes',
icon: '🧼',
pricePerKg: 79,
},
{
id: 'dry-clean',
name: 'Dry Cleaning',
description: 'Premium dry cleaning for delicate fabrics',
icon: '🧥',
pricePerItem: 149,
},
{
id: 'steam-iron',
name: 'Steam Iron',
description: 'Professional steam ironing service',
icon: '💨',
pricePerItem: 29,
},
{
id: 'shoe-cleaning',
name: 'Shoe Cleaning',
description: 'Deep cleaning and restoration of shoes',
icon: '👟',
pricePerItem: 249,
},
{
id: 'curtain-cleaning',
name: 'Curtain & Carpet',
description: 'Heavy fabric cleaning for home textiles',
icon: '🏠',
pricePerItem: 499,
}
];

export const PRICING_PLANS: PricingPlan[] = [
{
id: 'basic',
name: 'Basic',
price: 499,
unit: '/month',
features: [
'10 kg wash & fold',
'Free pickup & delivery',
'48-hour turnaround',
'WhatsApp updates'
]
},
{
id: 'standard',
name: 'Standard',
price: 999,
unit: '/month',
features: [
'25 kg wash & fold',
'5 dry cleaning items',
'Free pickup & delivery',
'24-hour turnaround',
'Priority support'
],
popular: true,
},
{
id: 'premium',
name: 'Premium',
price: 1999,
unit: '/month',
features: [
'Unlimited wash & fold',
'15 dry cleaning items',
'Same-day delivery',
'Dedicated handler',
'Premium packaging',
'24/7 support'
]
}
];

export const WHATSAPP_NUMBER = '7609851051'; // Replace with actual number
export const RAZORPAY_KEY = 'rzp_test_XXXXXXXXX'; // Replace with actual key

// Mock orders for MyOrders page
export const mockOrders = [
  {
    id: "ORD001",
    service: "Wash & Fold",
    status: "Completed",
  },
  {
    id: "ORD002",
    service: "Dry Cleaning",
    status: "In Progress",
  },
  {
    id: "ORD003",
    service: "Shoe Cleaning",
    status: "Pending",
  },
];

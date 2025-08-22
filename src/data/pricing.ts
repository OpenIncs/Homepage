import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 850,
        features: [
            'Limited white glove services',
            'Acess to 1 seat',
            'Limited exports',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: 999,
        features: [
            'Access to Institutional Investors',
            'Up to 3 team members',
            '1,000 monthly exports',
            'Priority email & phone support',
            'Advanced analytics & dashboards',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Full database access',
            'Unlimited team members',
            'Unlimited exports',
            '24/7 dedicated support',
            'Custom solutions',
            'On-site training',
        ],
    },
]

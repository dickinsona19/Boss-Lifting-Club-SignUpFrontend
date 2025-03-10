import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const TermsAndConditions = () => {
    return (
        <div style={{ padding: '2em' }}>
            <Title level={1}>Terms and Conditions</Title>
            <Paragraph strong>Last Updated: March 9, 2025</Paragraph>
            <Title level={2}>1. Membership Overview</Title>
            <Paragraph>Your membership with Boss Lifting Club provides access...</Paragraph>
            <Title level={3}>Terms and Conditions for Boss Lifting Club</Title>
            <Paragraph strong>Last Updated: March 9, 2025</Paragraph>
            <Paragraph>Welcome to Boss Lifting Club. By signing up for a membership or using our services, including purchasing products such as drinks or gym merchandise, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully before proceeding with your membership sign-up.</Paragraph>
            <Title level={4}>1. Membership Overview</Title>
            <Paragraph>Membership: Your membership with Boss Lifting Club provides access to our gym facilities, services, and the ability to purchase additional products (e.g., drinks, merchandise) via your account.</Paragraph>
            <Paragraph>Stripe Integration: We use Stripe, a third-party payment processor, to manage your membership subscriptions and payments for products. By signing up, you agree to link a valid payment card to your Stripe customer profile, which will be used for recurring membership fees and one-time purchases.</Paragraph>
            <Title level={4}>2. Payment Terms</Title>
            <Paragraph>Membership Fees: Membership fees are charged monthly via Stripe on the date of your initial sign-up (e.g., if you sign up on the 9th, billing occurs on the 9th of each subsequent month). Fees are non-refundable except as outlined in Section 5 (Cancellation and Refunds).</Paragraph>
            <Paragraph>Product Purchases: You may purchase drinks or other gym-provided products using the card linked to your Stripe account. Prices are displayed at the point of sale (e.g., in the gym or via our app) and are charged immediately upon purchase.</Paragraph>
            <Paragraph>Payment Authorization: By linking your card, you authorize us to charge it for membership fees and product purchases. You are responsible for ensuring sufficient funds are available. Failed payments may result in suspension of your membership until resolved.</Paragraph>
            <Paragraph>Stripe Terms: Payments are processed via Stripe, and you agree to abide by Stripe’s Services Agreement.</Paragraph>
            <Title level={4}>3. Account and Card Management</Title>
            <Paragraph>Stripe Customer Data: Upon sign-up, we create a Stripe customer profile for you, linked to your phone number and payment card. You are responsible for keeping your payment information up-to-date via our app or by contacting us.</Paragraph>
            <Paragraph>Security: Do not share your account credentials. We are not liable for unauthorized use due to your failure to secure your account.</Paragraph>
            <Title level={4}>4. Use of Services</Title>
            <Paragraph>Gym Access: Membership grants you access to our facilities during operating hours, subject to our rules (e.g., dress code, equipment use).</Paragraph>
            <Paragraph>Product Purchases: Drinks and products are available for purchase at the gym. All sales are final unless the product is defective or as required by law.</Paragraph>
            <Paragraph>Conduct: You agree to behave respectfully and follow gym policies. We reserve the right to suspend or terminate your membership for violations (e.g., harassment, damage to property).</Paragraph>
            <Title level={4}>5. Cancellation and Refunds</Title>
            <Paragraph>Membership Cancellation: You may cancel your membership at any time via our app or by emailing support@bossliftingclub.com with 30 days’ notice. Cancellation takes effect at the end of your current billing cycle; no prorated refunds are provided.</Paragraph>
            <Paragraph>Refunds: Membership fees are non-refundable except in cases of our failure to provide services (e.g., gym closure exceeding 30 days). Product refunds are available only for defective items, reported within 24 hours of purchase.</Paragraph>
            <Paragraph>Stripe Disputes: If you dispute a charge with Stripe, you agree to notify us first to resolve the issue.</Paragraph>
            <Title level={4}>6. Billing Errors</Title>
            <Paragraph>If you believe a charge is incorrect, contact us at support@bossliftingclub.com within 30 days of the charge. We’ll investigate and correct errors promptly.</Paragraph>
            <Title level={4}>7. Privacy</Title>
            <Paragraph>We collect personal data (e.g., name, phone number, payment info) to manage your membership and purchases. This data is stored securely and shared with Stripe for payment processing. See our Privacy Policy for details.</Paragraph>
            <Title level={4}>8. Liability</Title>
            <Paragraph>Risk: Gym use and product consumption are at your own risk. We are not liable for injuries or damages unless caused by our gross negligence.</Paragraph>
            <Paragraph>Equipment: You agree to use gym equipment properly and report issues immediately.</Paragraph>
            <Paragraph>Limitation: Our liability is limited to the amount paid for your membership or products in the past 12 months.</Paragraph>
            <Title level={4}>9. Termination</Title>
            <Paragraph>We may terminate your membership immediately for: Non-payment after 15 days of a failed charge. Violation of these Terms or gym rules. Fraudulent activity. Upon termination, you remain liable for outstanding charges.</Paragraph>
            <Title level={4}>10. Changes to Terms</Title>
            <Paragraph>We may update these Terms at any time. Changes will be posted on our website or app, and continued use of our services constitutes acceptance. Significant changes (e.g., fee increases) will be notified via phone number or in-app message 30 days in advance.</Paragraph>
            <Title level={4}>11. Governing Law</Title>
            <Paragraph>These Terms are governed by the laws of North Caronlia/ USA. Disputes will be resolved in Mecklenburg County Courts.</Paragraph>
            <Title level={4}>12. Contact Us</Title>
            <Paragraph>Questions? Reach us at support@bossliftingclub.com or 7044209412.</Paragraph>
        </div>
    );
};

export default TermsAndConditions;
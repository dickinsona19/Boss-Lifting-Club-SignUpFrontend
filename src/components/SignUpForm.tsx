import React, { useState } from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import PhonenumberModal from './PhonenumberModal';

const stripePromise = loadStripe("pk_test_51Qv2gKRs8b43cBltmGoGXiyIb39FyJohM4XxpsEN1upUvj0JxfWOW7WoHMVogi83n25OHsXHL0vPNbioChwt7xlJ00iWu6MCcR");



export const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validatedOtp, setValidatedOtp] = useState(false);
  const sendOTP = async (phone?: string) => {
    setLoading(true);
    try {
      const response = await fetch('https://boss-lifting-club-api.onrender.com/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: `${phone || phoneNumber}` }),
      });
      const data = await response.json();
      if (response.ok) {
        message.success('OTP sent to your phone!');
        setOtpSent(true);
      } else {
        message.error(data.error || 'Failed to send OTP');
      }
    } catch (error) {
      message.error('Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    sendOTP(`+1${phoneNumber}`);
  };

  const handleCancel = () => {
    setOtpSent(false)
    setIsModalVisible(false);

  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!otpSent) {
        showModal();
        return;
      }
      if (!validatedOtp) {
      

      const verifyResponse = await fetch('https://boss-lifting-club-api.onrender.com/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: `+1 ${phoneNumber}`, otp: otpValue }),
      });
      const verifyData = await verifyResponse.json();
      if (!verifyData.isValid) {
        message.error('Invalid OTP');
        setValidatedOtp(false)
        return;
      }
    }

      const signupResponse = await fetch('https://boss-lifting-club-api.onrender.com/signupWithCard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          password,
        }),
      });
      const signupData = await signupResponse.json();

      if (!signupResponse.ok) {
        message.error(signupData.error || 'Failed to sign up');
        return;
      }

      const { sessionId } = signupData;
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });
      if (error) {
        message.error(`Card setup failed: ${error.message}`);
      }
    } catch (error) {
      message.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={handleSubmit} className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
            <Input size="large" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="rounded-lg" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter your last name' }]}>
            <Input size="large" value={lastName} onChange={(e) => setLastName(e.target.value)} className="rounded-lg" />
          </Form.Item>
        </div>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }, { min: 8, message: 'Password must be at least 8 characters' }]}>
          <Input.Password size="large" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-lg" />
        </Form.Item>
        <Form.Item 
          label="Confirm Password" 
          name="confirmPassword" 
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password size="large" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded-lg" />
        </Form.Item>
        <Form.Item name="termsAndConditions" valuePropName="checked" rules={[{ required: true, message: 'Please accept the terms and conditions' }]}>
          <Checkbox>
            I agree to the <a href="/terms-and-conditions" target="_blank" style={{ color: 'blue', textDecoration: 'underline'}}>Terms and Conditions</a>.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large" 
            loading={loading} 
            block 
            className="h-12 text-lg font-semibold rounded-lg"
          >
            Join Now
          </Button>
        </Form.Item>
      </Form>
      <PhonenumberModal 
        isVisible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        phoneNumber={phoneNumber}
        onPhoneNumberChange={handlePhoneNumberChange}
        verifyResponse={handleSubmit}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        setPhoneNumber={setPhoneNumber}
      />
    </>
  );
};
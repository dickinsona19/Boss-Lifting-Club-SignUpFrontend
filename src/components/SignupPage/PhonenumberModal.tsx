import React, { ChangeEvent, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import 'react-phone-number-input/style.css'

interface PhonenumberModalProps {
  isVisible: boolean;
  phoneNumber: string;
  otpValue: string;
  onPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOk: () => void;
  onCancel: () => void;
  verifyResponse: () => void;
  setOtpValue: (value: string) => void;
  setPhoneNumber: (value: string) => void;
}

const PhonenumberModal: React.FC<PhonenumberModalProps> = ({
  isVisible,
  phoneNumber,
  otpValue,
  onOk,
  onCancel,
  verifyResponse,
  setOtpValue,
  setPhoneNumber
}) => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState(true);

  return (
    <Modal
      title="Phone Number Verification"
      open={isVisible}
      footer={null}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        {inputPhoneNumber ? (
          <>
            <p  style={{ marginTop: '1em' }}>Phone Number</p>
            <div style={{ textAlign: 'center' }}>
              <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                <Input
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ width: '100%', marginTop: '.25em' }}
                />
              </Form.Item>
            </div>
            <Button type="primary" onClick={() => { setInputPhoneNumber(false); onOk(); console.log(phoneNumber) }}>
              Submit
            </Button>
          </>
        ) : (
          <>
            <Input value={otpValue} onChange={(e) => setOtpValue(e.target.value)} placeholder="Verification Code" style={{ marginBottom: '10px' }} />
            <Button onClick={verifyResponse}>Verify</Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default PhonenumberModal;
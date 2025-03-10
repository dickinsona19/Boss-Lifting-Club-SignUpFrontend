import { useEffect, useState } from 'react';
import { ConfigProvider, Layout, Typography} from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpForm } from './components/SignUpForm';
import SuccesPage from '../src/components/SuccessPage'
import TermsAndConditions from '../src/components/TermsAndConditions'

const { Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [isDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1d4ed8',
        },
      }}
    >
      <Router>
        <Layout className="min-h-screen bg-gray-50">
          <Content>
            <Routes>
              <Route path="/success" element={<SuccesPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/" element={
                <div className="flex flex-col md:flex-row min-h-screen">
                  {/* Left Side - Sign Up Form */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                      <Title level={1} className="text-4xl font-bold mb-2 text-blue-900">
                        Boss Lifting Club
                      </Title>
                      <Text className="text-gray-600 mb-8 block">
                        Join our community of dedicated fitness enthusiasts
                      </Text>
                      <SignUpForm />
                    </div>
                  </div>

                  {/* Right Side - Image and Promotional Text */}
                  <div className="w-full md:w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center relative md:order-1">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                        opacity: '0.7'
                      }}
                    ></div>
                    <div className="relative z-10 max-w-md mx-auto">

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                        <Text className="text-2xl font-bold text-white block mb-2">
                          $89/Month
                        </Text>
                        <Text className="text-white/90 block mb-4">
                          Sign up now for our exclusive Founders Month-to-Month membership
                        </Text>
                      </div>
                      <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4">
                        <Text className="text-white block">
                          ⭐️ Special Pre-Opening Offer: We will not charge you until the gym opens!
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
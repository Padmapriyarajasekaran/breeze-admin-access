
// This is a mock authentication service
// In a real app, this would connect to your backend API

// Mock admin credentials - in a real app, this would be handled securely on the server
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

// Session storage key
const AUTH_TOKEN_KEY = "admin_auth_token";

export const authenticateAdmin = async (email: string, password: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simple validation - in a real app, this would be a server request
  const isValid = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
  
  if (isValid) {
    // Store a simple auth token - in a real app, this would be a JWT or similar
    sessionStorage.setItem(AUTH_TOKEN_KEY, "mock_admin_token_" + Date.now());
  }
  
  return isValid;
};

export const isAuthenticated = (): boolean => {
  return !!sessionStorage.getItem(AUTH_TOKEN_KEY);
};

export const logoutAdmin = (): void => {
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
};

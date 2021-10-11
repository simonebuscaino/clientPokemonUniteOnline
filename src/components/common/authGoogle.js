import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
 
const GoogleAuthContext = React.createContext() // Not necessary, but recommended.
 
export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: "440837109818-j1blm29hcorg605h8ji88iacdpphscts.apps.googleusercontent.com", // Your clientID from Google.
  })
 
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  )
}
 
export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
// import React from 'react';
// import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
// import { useUser } from './containers/UserContext';

// function PrivateRoute({ element, ...rest }) {
//   console.log('fdfd');
//   const user = useUser();

//   // Assuming isAuth is obtained from user authentication context
//   const isAuthenticated = user.isAuthenticated;

//   return (
//    <>
//    <Routes>
//       <Route
//         {...rest}
//         element={
//           isAuthenticated ? (
        
//             // Render the component if authenticated
//             element
//           ) : (
//             // Redirect to the login page if not authenticated
//             <Navigate to="/login" replace />
//           )
//         }
//       />
//     </Routes>
//       <Outlet />
//    </>
//   );
// }

// export default PrivateRoute;

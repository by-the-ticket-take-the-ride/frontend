// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const Breadcrumbs = ({currentPage}) => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Главная</Link>
//         </li>
//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//           const isLast = index === pathnames.length - 1;
//           return isLast ? (
//             <li key={name}>{currentPage}</li>
//           ) : (
//             <li key={name}>
//               <Link to={routeTo}>{name}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;

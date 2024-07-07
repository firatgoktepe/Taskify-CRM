"use client";

import { UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
  return (
    <div>
      <UserButton />
    </div>
  );
};

export default ProtectedPage;

// For client components using with useAuth and useUser
// "use client";

// import { useAuth, useUser } from "@clerk/nextjs";

// const ProtectedPage = () => {
//   const { user } = useUser();
//   const { userId } = useAuth();

//   return (
//     <div>
//       <h1>User: {user?.firstName}</h1>
//       <h1>Email: {user?.fullName}</h1>
//       <h2>User ID: {userId}</h2>
//     </div>
//   );
// };

// export default ProtectedPage;

// For server components using with auth and currentUser

// import { auth, currentUser } from "@clerk/nextjs/server";

// const ProtectedPage = async () => {
//   const user = await currentUser();
//   const { userId } = auth();

//   return (
//     <div>
//       <h1>User: {user?.firstName}</h1>
//       <h1>Email: {user?.fullName}</h1>
//       <h2>User ID: {userId}</h2>
//     </div>
//   );
// };

// export default ProtectedPage;

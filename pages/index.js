import { useRouter, withRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => router.push("/profile")}>
        go to profile (path)
      </button>
      <button onClick={() => router.replace("/profile")}>
        go to profile (replace)
      </button>
      <button onClick={() => router.reload("/profile")}>page (reload)</button>
    </div>
  );
};

export default Home;

// const Home = ({router}) => {
// console.log(router);
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={() => router.push("/profile")}>
//         go to profile (path)
//       </button>
//       <button onClick={() => router.replace("/profile")}>
//         go to profile (replace)
//       </button>
//       <button onClick={() => router.reload("/profile")}>page (reload)</button>
//     </div>
//   );
// };

// export default withRouter(Home);

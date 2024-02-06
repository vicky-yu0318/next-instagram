import React, { ReactNode } from "react";

interface IGContainerProps {
  children: ReactNode;
}

export default function IGContainer({ children }: IGContainerProps) {
  return <div className="max-w-[1024px] mx-auto px-2 lg:px-0">{children}</div>;
}

// const IGContainer: React.FC<IGContainerProps> = ({ children }) => {
//   return (
//     <div className="bg-blue-300 max-w-[1024px] mx-auto px-2 lg:px-0">
//       {children}
//     </div>
//   );
// };

// export default IGContainer;

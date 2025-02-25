import React, { ReactElement } from "react";

export interface RoomCardHeadingProps {
  icon?: ReactElement;
  text: string;
}

export const RoomCardHeading: React.FC<RoomCardHeadingProps> = ({ icon, text }) => {
  return (
    <div className="text-primary-100 font-bold leading-5">
      {icon ? <span className="mr-2 align-middle">{icon}</span> : null }
      <span>{text}</span>
    </div>
  );
};

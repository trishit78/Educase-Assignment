import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import camera from "../assets/camera.png";
import Avatar from '@mui/material/Avatar';
import { Badge } from "@mui/material";
import { styled } from '@mui/material/styles';



const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  animation: "pulse 1.5s infinite",
  '&:hover': {
    transform: "scale(1.2)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const Profile = () => {
  const location = useLocation();
  const { name, email } = location.state || { name: '......', email: '' };

  const [profileImage, setProfileImage] = useState("");
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-screen border-2 border-gray-200">
      <div className="bg-white h-[68px] drop-shadow shadow-[0px_3px_6px_#00000007] text-lg leading-[21px] text-[#1D2226] flex items-center pl-4">
        Account Settings
      </div>
      <div className="px-5 mt-5 space-y-[30px]">
        <div className="flex items-start gap-5 text-[#1D2226]">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <SmallAvatar
                alt="Upload Icon"
                src={camera}
                onClick={handleAvatarClick}
              />
            }
          >
            <Avatar
              alt={name}
              src={profileImage}
              sx={{ width: 62, height: 62 }}
            />
          </Badge>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <div className="space-y-1">
            <p className="text-[15px] font-medium capitalize">{name}</p>
            <p className="text-sm leading-[19px]">{email}</p>
          </div>
        </div>
        <p className="text-sm leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <p className="mt-5 border border-dashed border-[#CBCBCB] space-x-4"></p>
    </div>
  );
};

export default Profile;








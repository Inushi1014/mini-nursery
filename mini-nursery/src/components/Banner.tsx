import React from "react";

interface BannerProps {
    children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <div className="container my-3">
            <div className="p-4 bg-light rounded shadow-sm text-center">
                {children}
            </div>
        </div>
    );
};

export default Banner;

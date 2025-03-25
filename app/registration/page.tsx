import React from 'react';

const Registration: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeYtKmrnfEkz_EPpZkp93ca47i6ub7RZkdWpHyq5vkxfT1uDw/viewform"
                    width="100%"
                    height="1500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Registration Form"
                    className="border-none"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default Registration;



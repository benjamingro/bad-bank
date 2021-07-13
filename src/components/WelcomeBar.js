import React from 'react';

function WelcomeBar({ userAccount }) {
    return (
        <>
            {userAccount &&
                <div className="row w-100 bg-light">
                    <div className="col text-secondary">
                        Welcome {userAccount.name}
                    </div>
                </div>
            }

        </>
    )
}

export default WelcomeBar

import React from 'react';

function BadBankApp(){
    const accountList = React.useState(getInitialAccounts());
    function getInitialAccounts()
    {
        return(
            [{account:{name:"Jane Doe",email:"jane@me.com",password:"Access123"}},
            {account:{name:"Peter Parker",email:"peter@mit.edu",password:"Passcode321"}},
            {account:{name:"John Smith",email:"john@msn.com",password:"Letmein33"}},

        ]
        );
    }
    return(
        <>

        </>
    )
}

export default BadBankApp


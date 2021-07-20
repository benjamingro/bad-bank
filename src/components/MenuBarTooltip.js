
import React from 'react';
import { Overlay } from 'react-bootstrap';

function MenuBarTooltip({targetId,show}) {
    const myTarget = document.getElementById(targetId); 

    return (
        <>
            <Overlay target={myTarget} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        Simple tooltip
                    </div>
                )}
            </Overlay>
        </>
    )
}

export default MenuBarTooltip

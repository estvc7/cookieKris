import React from 'react'
import clsx from 'clsx';

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div className={clsx("px-5 w-full max-w-7xl mx-auto", className)}>{children}</div>
    )
}

export default Container
import { ReactNode } from "react";

type BoxProps = {
    children: ReactNode,
    width?: string;
    height?: string;
    bgColor?: string;
}

const Box: React.FC<BoxProps> = ({children,width, height, bgColor}) => {
    return (
        <div className='box' style={{width: width || "100%", height: height || "100%", backgroundColor: bgColor}}>
            {children}
        </div>
    )
}
    
export default Box;
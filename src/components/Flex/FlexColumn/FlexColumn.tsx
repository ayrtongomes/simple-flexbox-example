
import { ReactNode } from 'react';
import '../flex.css'


type FlexColumnProps = {
    children: ReactNode;
    width?: string | undefined,
    height?: string | undefined
};

const FlexColumn: React.FC<FlexColumnProps> = ({children, width, height}) => {
  return (
    <div className='column' style={{width: width || "100%", height: height || "100%"}}>
      {children}
    </div>
  )
}
  
export default FlexColumn;
  
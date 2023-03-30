
import { ReactNode } from 'react';
import '../flex.css'


type FlexRowProps = {
    children: ReactNode;
    height?: string | undefined
    width?: string | undefined
};

const FlexRow: React.FC<FlexRowProps> = ({children, height, width}) => {

    return (
      <div className='row' style={{height: height || "100%", width: width || "100%"}}>
        {children}
      </div>
    )
  }
  
  export default FlexRow;
  
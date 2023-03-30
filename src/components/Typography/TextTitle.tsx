
import './typography.css'

type TextTitleProps = {
    title: string;
  };

const TextTitle: React.FC<TextTitleProps> = ({ title }) => {
    return (
        <h1 className='title'>{title}</h1>
    )
  }
  
export default TextTitle;
  
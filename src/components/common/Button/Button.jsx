import { Children } from 'react';
import Style from './Button.module.css';
import Loading from '../Loading/Loading';
function Button({disabled,children,isLoading})
{
return (
<button 
  className={Style.button} 
  disabled={disabled || isLoading} 
  style={{ position: 'relative' }}
>
  {isLoading && (
    <Loading 
      style={{ 
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%, -50%)'
      }} 
    />
  )}

  {isLoading ? (
    <div style={{ opacity: 0 }}>{children}</div>
  ) : (
    <div>{children}</div>
  )}
</button>

)
}
export default Button
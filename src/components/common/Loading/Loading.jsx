import Style from './Loading.module.css'
function Loading({style}){
    console.log(style)
    return (
        
<div className={Style.loading} style={style}>
<div className={Style.spinner}>
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>
</div>
    )
}
export default Loading;
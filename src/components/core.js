export const MyLabel = ({ children, error, top, strong, btn }) => {
    let color='gray'
    let isTop='1rem'
    let bold = 'normal'
    let cursor='context-menu'
    if(error){color='red'}
    if(top){isTop='0.3rem'}
    if(strong){bold='bold'}
    if(btn){cursor='pointer'}
  return <div style={{marginTop:isTop,cursor:cursor, letterSpacing:'0.6px', fontWeight: bold, fontSize:'0.9rem', marginBottom:'0.2rem', color:color}}>{children}</div>
};

export const MyBtn = ({children, fluid, className})=>{
  let full=''
  if(fluid){full='fluid'}
  return <button className={`ui button ${full} ${className}`}>{children}</button>
}
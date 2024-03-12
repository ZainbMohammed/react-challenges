export default function TagButton({title,children}){
    // if(title != null){
    //     return (
    //         <button className= 'tagButton'>
    //             {title}
    //             {children}
    //         </button>
    //     )
    // }else{
    //     return null;
    // }
    return title == null || title == ''? <div></div> : (<button className= 'tagButton'>
    {title}
    {children}
</button>);
    
}
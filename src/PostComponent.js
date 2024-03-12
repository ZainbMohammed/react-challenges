export default function PostComponent({postName ='No Post Name' , postBody ='No Post Bpdy'}){
    const postStyle = {
        padding : '10px',
        border: 'solid teal 3px',
        margin: '25px'
    }
    return (
        <div style={postStyle}>
            <h4>{postName}</h4>
            <hr style={{marginRight: '10px',marginLeft: '10px'}}></hr>
            <p>{postBody}</p>
        </div>
    );
}
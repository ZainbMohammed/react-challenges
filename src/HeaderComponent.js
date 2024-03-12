export default function HeaderCompponent(){
    const headerStyle = {
        backgroundColor : 'teal',
        width : "100%",
        height : '100px',
        color : 'white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        boxShadow : '0px 5px 13px rgba(0,0,0,0.4)',
    }
    return (
        <div style={headerStyle}>
            <h1>Tarmeez Academiy</h1>
        </div>
    );
}
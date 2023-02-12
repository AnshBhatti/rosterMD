const Button = ({changing, symbol}) =>{
    return(

        <button onClick={changing} style={{padding: "20px"}}>{symbol}</button>

    );
}
export default Button;
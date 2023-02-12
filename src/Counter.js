const Counter = ({value}) => {

    const textStyle ={
        color: "steelblue",
        padding: "50px"
    }

    return (
        <div className="Counter"><h1 style = {textStyle}>{value}</h1></div>
    );
}
export default Counter
const multiply = (a: number, b: number) => a*b;
function ImpliedReturn(){
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
     <>
     <h2>Implied Return</h2>
     fourTimesFive = {multiply(4, 5)} <br />
     multiply(4, 5) = {multiply(4, 5)} <br />
     </>   
    );
}
export default ImpliedReturn;
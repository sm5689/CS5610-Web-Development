function ArrayAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const Length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <>
        <h2>Array index and length</h2>
        length1 = {Length1} <br />
        index1 = {index1} <br />
        </>
    );
}
export default ArrayAndLength;
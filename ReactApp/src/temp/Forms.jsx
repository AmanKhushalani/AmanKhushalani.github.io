
function myform(){
    return(
        <>
        <form>
            <input required placeholder="Number 1" id="num1" type={"number"} />
            <br />
            <input required placeholder="Number 2" id="num2" type={"number"} />
            <br />
            <button id="submit" type="button">Submit Values</button>
        </form>
        <div>
            <h5 id="answer1"></h5>
            <h5 id="answer2"></h5>
            <h5 id="answer3"></h5>
            <h5 id="answer4"></h5>
        </div>
        </>
        
    );
}


function setAnswers(a = "",b = "")
{
    if(a!="" || b != "")
    {
        document.getElementById('answer1').innerHTML = `Addition of two numbers is = ${a+b}`;
        document.getElementById('answer2').innerHTML = `Subtraction of two numbers is = ${a-b}`;
        document.getElementById('answer3').innerHTML = `Multiplication of two numbers is = ${a*b}`;
        if(b == 0)
        {
            document.getElementById('answer4').innerHTML = `Division of two numbers is not possible !`;
        }
        else
        {
            
            document.getElementById('answer4').innerHTML = `Division of two numbers is = ${(a/b).toFixed(2)}`;
        }
    }
}


export default myform;

export {setAnswers};
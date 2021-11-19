window.onload = function ()
{
    const btn = document.getElementById("submit");
    btn.onclick = function ()
    {
        let mytext = document.getElementById("Fname").value;
        let mytext1 = document.getElementById("Lname").value;
        if (mytext==mytext1)
        {
            document.getElementById("myMessage").innerHTML = "your name is same";
        }
        else
        {
            document.getElementById("myMessage").innerHTML = "your name is not same";
            document.getElementById("name").value=mytext+" "+mytext1
         }
    }
}
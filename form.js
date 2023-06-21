const detail = document.getElementById("detail")






document.addEventListener('submit',(e)=>{
    // prevent default behaviour of submit method
    e.preventDefault();

    // get the element or node by its id
    const firstName = document.getElementById('fname')  
    console.log(firstName.value)
    
    const LastName = document.getElementById('lname')
    console.log(LastName.value)

    const Gender = displayRadioValue()
    console.log(Gender)

    const DOB = document.getElementById('date')
    console.log(DOB.value)

    const formData={
        fname: firstName,
        lname: LastName,
        gen: Gender,
        date: DOB,
    }

    

    createDetail(formData)
    
})




function createDetail(data)
{
    const ttb = document.createElement("tr");
    ttb.setAttribute("id","detail");
    ttb.innerHTML = `<td>${data?.fname?.value}</td>
                    <td>${data?.lname?.value}</td>
                    <td>${data?.gen}</td>
                    <td>${data?.date?.value}</td>
                    <td><button id="delete" type="button" onclick="remove(this)">Delete</button></td>
                    <td><button id="edit-button" onclick="edit(this)" >Edit</button></td>
                    <td><button id="end-editing">Done</button></td>`
    
    detail.appendChild(ttb);

    //conditional statement OR

    const getCandidateDataFromLS = JSON.parse(localStorage.getItem("candidateData")) || []
    getCandidateDataFromLS.push({
        id: new Date().getTime(),
        fname: data?.fname?.value,
        lname: data?.lname?.value,
        gen : data?.gen,
        date: data?.date?.value
    })

    localStorage.setItem("candidateData", JSON.stringify(getCandidateDataFromLS) )
}

//console.log(JSON.parse(localStorage.getItem("candidateData")))

function displayRadioValue() {
    var ele = document.getElementsByName('gen');

    let value = ''
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            value = ele[i].value;
    }

    return value;
}

function remove(dat)
{
    console.log(dat.parentNode.parentNode);
    //console.log("deleted");
    //console.log(detail);

    var element = dat.parentNode.parentNode;
    element.remove()

}

function edit(dat)
{   

    console.log(dat)
    

}




//localStorage.clear()


//const paragraph = document.getElementById("tr");
//for (let i = 0; i < true.length; i++) 
//{
  //  text += cars[i] + "<br>";
//}



 
       

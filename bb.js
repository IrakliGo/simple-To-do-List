//onclick function
function todo() {

   //connecting to dom
    const myInput = document.getElementById('inp')
    const myUl = document.getElementById('ul3')
  

    /*if we enter something*/
    if(myInput.value) {

        //creating list
        const myLi = document.createElement('li')

        //which is gonna be what we enter in input
        myLi.textContent = myInput.value
        
        //creating delete button
        const myButton = document.createElement('button')
        myButton.textContent = 'delete'
        
        /*making list also a delete button (so we have 2 lits, in row, 1 is what we enter, second is deleteButton*/
        myLi.append(myButton)
         
       
          /*listener*/
        myButton.addEventListener('click', () => {
            myUl.removeChild(myLi)
            myUl.removeChild(myButton)
        })
      
        //appending everything here so it will show up in dom
        myUl.append(myLi)
     
    //after clicking the input value becomes empty again
        myInput.value = ''
    } 


    //if we click on the button and there is nothing in input
    
    else {
        alert('enter something')
    }
}
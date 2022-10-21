/*
File Name - app.js
Student Name - Deep R. patel
Student ID - 301239480
Date - 17-10-2022
*/
(function()
{
    function Start()
        {
            console.log("app started...");
            let deleteButtons = document.querySelectorAll('.btn-danger');
        
            for(button of deleteButtons)
            {
                button.addEventListener('click', (event)=>{
                    if(!confirm("Are you sure?")) 
                    {
                        event.preventDefault();
                        window.location.assign('/contactslist');
                    }
                });
            }
        }
    window.addEventListener("load",Start);
}
)();
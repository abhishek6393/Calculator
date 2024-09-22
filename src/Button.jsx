import './button.css'

export default function Button({newval,data}){


    const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "C","="];

    function Hit(event){

      
     
       let newdata=data+event.target.value;

     

       if(event.target.value==="C"){


        newval("");


       }

       else if(event.target.value==="="){


        let result=eval(data)
       
        

        newval(result)

       


       }

       else{

      

        newval(newdata)




       }


       
       
        


        
        
    }

    return (
      <div className="containers">
        {arr.map((item, index) => (
          <button key={index} className="but" onClick={Hit} value={item}>
            {item}
          </button>
        ))}
      </div>
    );
  }
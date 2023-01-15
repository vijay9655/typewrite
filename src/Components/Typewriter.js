import React from 'react'
import '../App.css'
function Typewriter() {
    const sentense='A computer is a machine that can store and process information';
    var resentense=sentense.split('')
    console.log(resentense);
    var count=0;
    var styleindex=[]
    var mistakes=0
    const d=new Date()
    var timer=d.getMinutes()
    var timeout=0
    const writehandle=(e)=>{
        var writeval=e.target.value.split('');
        count=e.target.value.length;
        if(writeval[count-1]==resentense[count-1]){
           
            styleindex.push(true)
        }
        else{
            mistakes+=1
            styleindex.push(false)
        }
        if(writeval.length != styleindex){
            styleindex.length=writeval.length;
           }
    console.log(styleindex);
    for(var i=0;i<writeval.length;i++){
        if(styleindex[i]==true){
            document.getElementById(`read${i}`).style.backgroundColor = "green";
        }
        else{
            document.getElementById(`read${i}`).style.backgroundColor = "red";
        }
    }
    for(var i=writeval.length;i<resentense.length;i++){
       
            document.getElementById(`read${i}`).style.backgroundColor = "white";       
    }
if(resentense.length==writeval.length){
   var timeTaken = (60 - timer) / 100;

    alert(`Accuracy : ${Math.round(
        ((resentense.length-mistakes) / resentense.length) * 100
      )}% ; Time taken : ${Math.round(((resentense.length-mistakes)  / 5) / ((timer+1) - timer) * 60)}wpm`)
      mistakes=0;
}

}
    
    
  return (
    <div>
        
        {resentense.map((e,index)=>{
            {console.log(e);}
            return <span id={`read${index}`}>{e}</span>
        })}
<br/><br/><br/><label>Enter above character :</label>
<input type='text'  onChange={writehandle}/>

    </div>
  )
}

export default Typewriter
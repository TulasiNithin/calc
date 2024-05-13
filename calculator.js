function display(num){
    inp.value+=num
}
function clearall(){
    inp.value=''
}
function back()
{
    inp.value=inp.value.slice(0,-1)
}
function equal(){
    try{
    inp.value=eval(inp.value)
    }
    catch(error){
        inp.value="error"
        setTimeout(()=>{
            inp.value=''

        },1000)

    }
}
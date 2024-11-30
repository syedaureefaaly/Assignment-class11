import Child from "./Child"

function Parent(){
    let fullname = "Ureefa aly"
    let favcountry = "Turkey"
    let favdish = "Biryani"
    
    return(
        <div>
            <Child fullname = {fullname} favcountry = {favcountry} favdish = {favdish}/>
        </div>
    )
}


export default Parent;
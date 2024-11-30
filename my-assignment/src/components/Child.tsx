function Child(props: any){
    console.log(props)

    return(
        <div className="flex flex-col justify-center items-center bg-red-100 outline-dashed rounded-lg p-2 m-4">
            <h1>Full Name: {props.fullname}</h1>
            <h1>Fav Countory: {props.favcountry}</h1>
            <h1>Fav Dish: {props.favdish}</h1>
        </div>
    )
}

export default Child;
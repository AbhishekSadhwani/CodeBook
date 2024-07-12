
// created this component for showing ratings on product card
export const Rating = ({rating}) => {
    
    // creating an array of size 5 and having false as value at all index
    let ratings = Array(5).fill(false);
    
    /*
    Based on the number provided we will change the value to true in cart by running a loop and loop will be ran based on 
    the value of rating passed in the function
    */
    for(let i=0;i<rating;i++){
        ratings[i] = true;
    };

    return (
        <>          
            {ratings.map((value,index) => (
                value ? (
                    // if value is true in array will have a star which is filled
                    <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                ) : (
                    // if value is false then will have a unfilled star
                    <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                )
            ))}
        </>

    )
}

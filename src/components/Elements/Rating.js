export const Rating = ({rating}) => {
    let ratings = Array(5).fill(false);
    for(let i=0;i<rating;i++){
        ratings[i] = true;
    };
    return (
        <>        
            {ratings.map((value,index) => (
                value ? (
                    <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                ) : (
                    <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                )
            ))}
        </>

    )
}

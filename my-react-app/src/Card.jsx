import profilePic from "./assets/завантаження.jpg"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile pic" className="profPic"></img>
            <h2>Lucyna Kushinada</h2>
            <p>Lucy is a young woman of slender build with light skin. 
               She has naturally white hair and red-purple eyes. 
               She wears light red eye and lip makeup. 
               Her hair is cut in a split bob - with her left side left longer - and dyed with a colorful pastel rainbow gradient. 
               Her eyes appear to reflect with the colors of her hair. 
               Her style generally follows Kitsch mixed with Neomilitarism as Lucy wears a cropped white jacket with a black netrunner leotard with red accents over a pair of white shorts and high gray stockings, and black knee-high boots. 
               She has a deep dive port installed on the back of her scalp, that she covers with her hair.
            </p>
        </div>
    )
}

export default Card
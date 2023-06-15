import React from 'react'
import { useNavigate } from 'react-router';

const HomePage = () => {
  const meal = {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
  };


  const nav = useNavigate();
  return (
    <div>



      <div onClick={() => nav(`/detail/${meal.id}`, { state: meal })} className='shadow-brown-100 shadow-lg h-[300px] w-[300px] cursor-pointer'>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="" />
      </div>



      <h1>Welcome Home</h1>




      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde velit accusamus illo est dolore aut possimus ut aspernatur, excepturi rem dolorum enim ipsa assumenda eos suscipit eaque autem quidem magnam harum, neque sed ex molestias soluta! Perferendis, alias veniam, sunt vitae voluptatem ipsam culpa magni quasi magnam a, nemo exercitationem asperiores corrupti. Reiciendis quaerat optio modi molestiae temporibus iure sit dolorem nostrum praesentium commodi. Porro, quibusdam est accusantium quidem iure atque non molestiae iste hic praesentium sed ratione, velit beatae soluta delectus tempore eligendi! Magnam dolor quidem ullam, adipisci esse non minus placeat iste voluptate cupiditate fugiat facilis doloremque?</p>
    </div>
  )
}
export default HomePage
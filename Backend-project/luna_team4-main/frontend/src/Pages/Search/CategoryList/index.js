import {CategoryLi, CategoryUL} from "./CategoryList.styles";

const CategoryList = ({categoryFunction}) =>{
    const handleCategoryClick = (e) =>{
        categoryFunction(e.target.id)
    }


    return (
        <CategoryUL >
            <CategoryLi onClick={handleCategoryClick} id={"ALL"}>All Categories</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"CH"}>Switzerland</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"US"}>USA</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"IT"}>Italy</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"SP"}>Spain</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"KR"}>Korea</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"TH"}>Thailand</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"SRB"}>Serbia</CategoryLi>
        </CategoryUL >
    )
}

export default CategoryList
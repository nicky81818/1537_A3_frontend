
const searchNameBTNClick = async () => {
    console.log('searchNameBTNClick')
    const query = {
        type: "nameSearch", 
        name: $("#searchName").val(),
        projectionFilters: {
            name: true,
            weight: false
        }
    }

    const res = await axios.post('https://kind-pike-hospital-gown.cyclic.app//search', query)
    $("#searchResults").empty()
    $("#searchResults").html(JSON.stringify(res.data))


}

const searchWeightBTNClick = () => {
    console.log('searchWeightBTNClick')
}

const searchFoodBTNClick = () => {
    console.log('searchFoodBTNClick')
}

const filtersProjection = () => {
    console.log('filtersProjection clicked')
}

const setup = () => {
    console.log("Setup")

    $("#searchNameBTN").click(searchNameBTNClick)
    $("#searchWeightBTN").click(searchWeightBTNClick)
    $("#searchFoodBTN").click(searchFoodBTNClick)
    $("#filtersProjection").click(filtersProjection)
}

$("document").ready(setup)
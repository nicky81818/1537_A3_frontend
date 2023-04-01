
const searchNameBTNClick = async () => {
    console.log('searchNameBTNClick')
    var nameFilter = $("#nameFilter").prop("checked")
    var weightFilter = $("#weightFilter").prop("checked")
    const query = {
        type: "nameSearch", 
        name: $("#searchName").val(),
        projectionFilters: {
            name: nameFilter,
            weight: weightFilter
        }
    }

    const res = await axios.post('https://kind-pike-hospital-gown.cyclic.app/search', query)
    // const res = await axios.post('http://localhost:3000/search', query)
    $("#searchResults").empty()
    $("#searchResults").html(JSON.stringify(res.data))


}

const searchWeightBTNClick = async () => {
    console.log('searchWeightBTNClick')
    var nameFilter = $("#nameFilter").prop("checked")
    var weightFilter = $("#weightFilter").prop("checked")
    var upper_bound = parseInt($("#maxweight").val())
    var lower_bound = parseInt($("#minweight").val())
    const query = {
        type: "weightSearch", 
        weight_upper: upper_bound,
        weight_lower: lower_bound,
        projectionFilters: {
            name: nameFilter,
            weight: weightFilter
        }
    }

    const res = await axios.post('https://kind-pike-hospital-gown.cyclic.app/search', query)
    // const res = await axios.post('http://localhost:3000/search', query)
    $("#searchResults").empty()
    $("#searchResults").html(JSON.stringify(res.data))


}


const searchFoodBTNClick = async () => {
    console.log('searchFoodBTNClick')
    var nameFilter = $("#nameFilter").prop("checked")
    var weightFilter = $("#weightFilter").prop("checked")
    var apple = $("#foodInput1").prop("checked")
    var carrot = $("#foodInput2").prop("checked")
    var loves_list = []
    console.log(apple)
    console.log(carrot)
    if (apple) {
        loves_list.push("apple")
    }
    if (carrot) {
        loves_list.push("carrot")
    }
    const query = {
        type: "foodSearch", 
        loves: loves_list,
        projectionFilters: {
            name: nameFilter,
            weight: weightFilter
        }
    }

    const res = await axios.post('https://kind-pike-hospital-gown.cyclic.app/search', query)
    // const res = await axios.post('http://localhost:3000/search', query)
    $("#searchResults").empty()
    $("#searchResults").html(JSON.stringify(res.data))


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
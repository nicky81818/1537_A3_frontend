
const searchNameBTNClick = async () => {
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
    $("#searchResults").empty()
    $("#searchResults").append(
        `
        <pre>${JSON.stringify(res.data, null, 4)}</pre>
        `
        )


}

const searchWeightBTNClick = async () => {
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
    $("#searchResults").append(
        `
        <pre>${JSON.stringify(res.data, null, 4)}</pre>
        `
        )


}


const searchFoodBTNClick = async () => {
    $("#foods").empty()
    var nameFilter = $("#nameFilter").prop("checked")
    var weightFilter = $("#weightFilter").prop("checked")
    var apple = $("#foodInput1").prop("checked")
    var carrot = $("#foodInput2").prop("checked")
    var loves_list = []
    if (apple) {
        loves_list.push("apple")
        $("#foods").append(`
        <a href="https://drawception.com/game/Rpm4wSMLXm/pinky-pie-eating-an-apple/">
        <img src="https://cdn.drawception.com/images/panels/2012/7-1/Rpm4wSMLXm-6.png">
        </a>
        `)
    }
    if (carrot) {
        loves_list.push("carrot")
        $("#foods").append(`
        <a href="https://drawception.com/game/3KRgtjHpG1/unicorn-and-carrot/">
        <img src="https://cdn.drawception.com/images/panels/2014/9-8/3KRgtjHpG1-12.png">
        </a>
        `)
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
    $("#searchResults").append(
        `
        <pre>${JSON.stringify(res.data, null, 4)}</pre>
        `
        )

}

const setup = () => {
    $("#searchNameBTN").click(searchNameBTNClick)
    $("#searchWeightBTN").click(searchWeightBTNClick)
    $("#searchFoodBTN").click(searchFoodBTNClick)
}

$("document").ready(setup)
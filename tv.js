const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
const container=document.querySelector('#container');
input.addEventListener('keyup', function (e) {
    e.preventDefault();
    const searchVal = form.elements.query.value;
    getData(searchVal);
})

const getData = async (searchVal) => {
    const config = { params: { q: searchVal } }

    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config);

    makeImg(res.data);
    searchVal = " ";
};

const makeImg = (shows) => {
    container.innerHTML=" ";
    for (let result of shows) {
        if (result.show.image) {
            const area =document.createElement('div');
            const img = document.createElement('IMG');
            // const lable= document.createElement('span');
            img.src = result.show.image.medium;
            // lable.innerText=result.show.name;
            // area.style.textAlign='center';
            // lable.style.textAlign='center';
            area.append(img);
            // area.append(lable);
            container.append(area);

        }
        // else if(!result.show)
        // container.innerHTML="No matching search result";
    }
}
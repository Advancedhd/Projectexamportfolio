
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function getData() {
    const response = await fetch(`https://12u.ad6.myftpupload.com//wp-json/wp/v2/posts/${id}`, {
        method:"GET",
    })
    const data = await response.json()
    return data
}

async function getImage(link) {

    const response = await fetch(link, {
        method:"GET",
    })
    const data = await response.json()
    return data
}

let aboutmain = document.querySelector(".aboutmain")

getData().then(data => {
        let dest = data
        console.log(dest)
        const imageLinkLocation = dest._links["wp:attachment"][0].href
        const content = dest.content.rendered
        getImage(imageLinkLocation).then(data => {
            let image = data[0].source_url
            let title = dest.title.rendered
            titleCondensed = title.replace("Destination ", "")

            let format = `
            <h1>${title}</h1>
            ${content}
            `
            aboutmain.innerHTML += format
        })
     
});
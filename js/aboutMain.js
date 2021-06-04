id = 1;
getData(
    "https://12u.ad6.myftpupload.com//wp-json/wp/v2/posts?categories=30"
).then((data) => {
    for (let i = 0; i < data.length; i++) {
    let dest = data[i];
    const imageLinkLocation = dest._links["wp:attachment"][0].href;
    const idofpage = dest.id;
    getImage(imageLinkLocation).then((data) => {
        let image = data[0].source_url;
        let title = dest.title.rendered;
        title = title.replace("Destination ", "");

        let format = `
                    <div class="travelcard${id}">
                        <a href=blogpage.html?id=${idofpage}>
                            <img src="${image}" alt="Picture of ${title}12313">
                        </a>
                        <h3>${title}</h3>
                    </div>`;

        container = document.querySelector(".tdcontainer");

        container.innerHTML += format;
        id++;
    });
    }
});
let id = 1;
getData(
    "https://12u.ad6.myftpupload.com//wp-json/wp/v2/posts?per_page=12"
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
                        <img src="${image}" alt="Picture of ${title}">
                    </a>
                    <h3>${title}</h3>
                </div>`;

        if (id <= 4) {
        container = document.querySelector(".tdcontainer");
        } else if (id < 9){
        container = document.querySelector(".pjcontainer");
        } else {
            return
        }

        container.innerHTML += format;
        id++;
    });
    }
});

var button = document.getElementById("getmore")

function loadmore() {
    let moreid = 9;
    getData(
        "https://12u.ad6.myftpupload.com//wp-json/wp/v2/posts?per_page=12"
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
                    <div class="travelcard${moreid}">
                        <a href=blogpage.html?id=${idofpage}>
                            <img src="${image}" alt="Picture of ${title}">
                        </a>
                        <h3>${title}</h3>
                    </div>`;
            if(moreid <= 16) {
            container = document.querySelector(".pjcontainer");
            } else {
                return
            }

            document.getElementById("getmore").style.display = "none";

            container.innerHTML += format;
            moreid++;
        });
        }
    });
}

button.addEventListener("click", loadmore, false);
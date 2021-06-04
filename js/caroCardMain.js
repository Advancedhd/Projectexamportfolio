caroid = 1;
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
            <div class="carocard${caroid}">
                <a href=blogpage.html?id=${idofpage} style="">
                    <img src="${image}" alt="Picture of ${title}">
                </a>
                <h3>${title}</h3>
            </div>`;


        container = document.querySelector(".container");

        var span = document.getElementsByTagName(`span`);
        var div = document.getElementsByClassName(`carocard${caroid}`);
        console.log(div)
        var l = 0;
        
        window.onload = function () {
          w =
            document.documentElement.clientWidth ||
            document.body.clientWidth ||
            window.innerWidth;
          console.log(w);
          var targetWidth = 1099;
          if (w >= targetWidth) {
            span[1].onclick = () => {
              l++;
              for (var i of div) {
                if (l == 0) {
                  i.style.left = "0px";
                }
                if (l == 1) {
                  i.style.left = "-1580px";
                }
                if (l == 2) {
                  i.style.left = "-3160px";
                }
                if (l == 3) {
                  i.style.left = "-4740px";
                }
                if (l == 4) {
                  i.style.left = "-6320px";
                }
                if (l == 5) {
                  i.style.left = "-7900px";
                }
                if (l > 5) {
                  l = 0;
                }
              }
            };
            span[0].onclick = () => {
              l--;
              for (var i of div) {
                if (l == 0) {
                  i.style.left = "0px";
                }
                if (l == 1) {
                  i.style.left = "-1580px";
                }
                if (l == 2) {
                  i.style.left = "-3160px";
                }
                if (l == 3) {
                  i.style.left = "-4740px";
                }
                if (l == 4) {
                  i.style.left = "-6320px";
                }
                if (l == 5) {
                  i.style.left = "-7900px";
                }
                if (l < 0) {
                  l = 0;
                }
              }
            };
          } else {
            span[1].onclick = () => {
              l++;
              for (var i of div) {
                if (l == 0) {
                  i.style.left = "0px";
                }
                if (l == 1) {
                  i.style.left = "-410px";
                }
                if (l == 2) {
                  i.style.left = "-820px";
                }
                if (l == 3) {
                  i.style.left = "-1230px";
                }
                if (l == 4) {
                  i.style.left = "-1640px";
                }
                if (l == 5) {
                  i.style.left = "-2050px";
                }
                if (l > 5) {
                  l = 0;
                }
              }
            };
            span[0].onclick = () => {
              l--;
              for (var i of div) {
                if (l == 0) {
                  i.style.left = "0px";
                }
                if (l == 1) {
                  i.style.left = "-410px";
                }
                if (l == 2) {
                  i.style.left = "-820px";
                }
                if (l == 3) {
                  i.style.left = "-1230px";
                }
                if (l == 4) {
                  i.style.left = "-1640px";
                }
                if (l == 5) {
                  i.style.left = "-2050px";
                }
                if (l < 0) {
                  l = 0;
                }
              }
            };
          }
        };

      container.innerHTML += format;
      caroid++;
    });
  }
});



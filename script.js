let openfilm = 'https://api.themoviedb.org/3/movie/76341?api_key=bf26301d9698c1061427652e6ea2f518&language=fr&'

let logo_path = 'https://image.tmdb.org/t/p/w500/oLy2V6AWSEfdPgKOtrSGnwB3Q2R.jpg'

let getImages = async () => {

    let response = await fetch(`${logo_path}`);

    if (response.ok) {
        response = response.json();
        console.log(response);

        return Promise.resolve(response);
    } else {

        return Promise.reject("La requete n'a pas aboutie")
    }
}
getImages().then((response) => {
            var images = response;
            images.forEach(image => {
                let _poster = new _poster(image.url, image._name, image.url, image.imgWidth, image.imgHeight)
                _poster.createCard();
                let poster_path = poster_path.resizeImage(_poster.imageUrl, _poster.imageWidth, _poster.imageHeight);
                _poster.fillCard(Url, _poster.imageAuthor, _poster.imageUnsplashUrl);
                _poster.appendCard();
            });

            class OpenFilm {
                constructor(name, genre, imgHeight, imgWidth, overview, url) {
                    this.name = name,
                        this.genre = genre,
                        this.imgHeight = imgHeight,
                        this.imgWidth = imgWidth
                        this.overview = overview,
                        this.url = url

                }
                resizeImage(url, imgWidth, imgHeight) {
                    console.log(imgWidth + " " + imgHeight)
                    url = url.replace(imgWidth, "600").replace(imgHeight, "600");
                    console.log(url)
                    return url;
                }

                createposter() {
                    section = document.createElement("selection du moment ");
                    overview = document.createElement("");
                    name = document.createElement("");
                    button = document.createElement("aller voir");
                }

                fillmouvie(_url, _name, _poster) {
                    img.setAttribute("src", url);
                    p.textContent = _name;
                    p.textContent = _poster;
                    a.setAttribute("href", );
                    button.textContent = "aller voir";

                }

                appendCard() {
                    sectionSelector.append(section);
                    article.append(img);
                    article.append(div);
                    a.append(button);
                }



            };

            fetch('https://api.themoviedb.org/3/movie/76341?api_key=bf26301d9698c1061427652e6ea2f518&language=fr')
                .then(function (response) {
                    return response.json()
                })
                .then(function (array) {
                    let image = array.poster_path;
                    let overview = array.overview;

                })
            });


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        var results = JSON.parse(xhttp.responseText);
        // console.log(results)
        data = results.photos.map(function (item) {
            return item;
        });

        var container = document.querySelector('#photo-divs');
        // container.innerHTML = '';
        data.forEach(function (photo) {
            console.log(photo);
            var photoDiv = document.createElement('div')
            photoDiv.classList.add('photoDiv');
            photoDiv.innerHTML = `
            <img src=${photo.src.tiny}>
            <h4>${photo.alt}</h4>
            <h6>${photo.photographer}</h6>
            `;

            container.appendChild(photoDiv)
        });
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=bombay", true);
xhttp.setRequestHeader('Authorization', "563492ad6f9170000100000171aa3227db8f4ee6b979e8b134ce0e54");
xhttp.send();
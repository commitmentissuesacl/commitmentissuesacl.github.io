export default function makeHtmlTemplate(route) {
    const html = /* html */`
        <section class="run-container">

                <a href="route.html?routeid=${route.id}">
                    <section class="image-container">
                            <img src="${route.imageMapPage}" alt="${route.name}" class="display-photo">
                    </section>
                </a>

                <section class="run-info-container">
                    <a href="route-detail.html?routeid=${route.id}">
                        <h3>${route.name}</h3>
                    </a>
                    <h4>${route.distance} miles</h4>
                    <h4>${route.elevation} feet</h4>
                    <img src="assets/fav-unselected.svg" title="favorite" id="favorite-icon">
                    <p>${route.description}</p>
                </section>

                <section class="run-icon-container">
                    <img class="thumbnail-map" src="${route.thumbnailMap}">
                </section>
            </section>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}
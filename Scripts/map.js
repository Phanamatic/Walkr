
function initMap() {
    const mapCenter = { lat: 0, lng: 0 };
    const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 2,
        center: mapCenter
    });

    // Define three locations with their coordinates and names
    const locations = [
        {
            position: { lat: -16.5000, lng: -151.7500 }, // Bora Bora, French Polynesia
            title: 'Bora Bora',
            content: 'Known for its overwater bungalows, crystal-clear turquoise waters, and vibrant marine life.'
        },
        {
            position: { lat: 44.128611, lng: 9.712500 }, // Cinque Terre, Italy
            title: 'Cinque Terre',
            content: 'A picturesque coastal area comprising five colorful villages clinging to cliffs along the Ligurian Sea.'
        },
        {
            position: { lat: -18.2871, lng: 147.6992 }, // The Great Barrier Reef, Australia
            title: 'The Great Barrier Reef',
            content: 'The world\'s largest coral reef system, renowned for its biodiversity and stunning underwater landscapes.'
        },
        {
            position: { lat: 20.9101, lng: 107.1839 }, // Ha Long Bay, Vietnam
            title: 'Ha Long Bay',
            content: 'A UNESCO World Heritage site known for its emerald waters and thousands of towering limestone islands topped with rainforests.'
        },
        {
            position: { lat: 47.5576, lng: 10.7498 }, // Neuschwanstein Castle, Germany
            title: 'Neuschwanstein Castle',
            content: 'A fairy-tale castle nestled in the Bavarian Alps, known for its stunning architecture and scenic surroundings.'
        },
        {
            position: { lat: 29.2920, lng: 110.5377 }, // Zhangjiajie National Forest Park, China
            title: 'Zhangjiajie National Forest Park',
            content: 'Famous for its towering sandstone pillars, lush valleys, and breathtaking views, which inspired the scenery in the movie "Avatar."'
        },
        {
            position: { lat: -2.6091, lng: -42.4433 }, // Lencois Maranhenses National Park, Brazil
            title: 'Lencois Maranhenses National Park',
            content: 'A unique landscape of vast sand dunes dotted with crystal-clear lagoons during the rainy season.'
        },
        {
            position: { lat: 51.4968, lng: -115.9281 }, // Banff National Park, Canada
            title: 'Banff National Park',
            content: 'Known for its stunning turquoise lakes, rugged mountains, and abundant wildlife in the heart of the Canadian Rockies.'
        },
        {
            position: { lat: 44.8654, lng: 15.5820 }, // Plitvice Lakes National Park, Croatia
            title: 'Plitvice Lakes National Park',
            content: 'Famous for its cascading lakes and waterfalls surrounded by lush forests, offering stunning natural beauty.'
        },
        {
            position: { lat: -20.2778, lng: 149.0081 }, // Whitehaven Beach, Australia
            title: 'Whitehaven Beach',
            content: 'Known for its pure white silica sand and crystal-clear turquoise waters, consistently ranked among the world\'s top beaches.'
        }
    ];
    

    // Loop through locations and add markers
    locations.forEach((place) => {
        const marker = new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.title
        });

        // Optionally, add an info window to each marker
        const infowindow = new google.maps.InfoWindow({
            content: `<h3>${place.title}</h3><p>${place.content}</p>`
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    });
}

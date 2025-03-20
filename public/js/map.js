
    mapboxgl.accessToken = mapToken; // Use the variable, not a string
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    const marker1 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)  // ✅ Correct: Pass coordinates directly
    .setPopup(               // ✅ Corrected: Pass a new Popup instance
        new mapboxgl.Popup({ offset: 25 }).setHTML(`<h4>${listing.title}</h4><p>Exact Loactionwill be Provided after booking</p>`)
    )
    .addTo(map);

    
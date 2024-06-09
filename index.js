// script.js

const linkData = {
    group1: [
        { name: "Link 1-1", url: "#link1-1" },
        { name: "Link 1-2", url: "#link1-2" },
        { name: "Link 1-3", url: "#link1-3" },
        { name: "Link 1-4", url: "#link1-4" },
        { name: "Link 1-5", url: "#link1-5" },
        { name: "Link 1-6", url: "#link1-6" },
        { name: "Link 1-7", url: "#link1-7" },
        { name: "Link 1-8", url: "#link1-8" },
        { name: "Link 1-9", url: "#link1-9" },
        { name: "Link 1-10", url: "#link1-10" }
    ],
    group2: [
        { name: "Link 2-1", url: "#link2-1" },
        { name: "Link 2-2", url: "#link2-2" },
        { name: "Link 2-3", url: "#link2-3" },
        { name: "Link 2-4", url: "#link2-4" },
        { name: "Link 2-5", url: "#link2-5" },
        { name: "Link 2-6", url: "#link2-6" },
        { name: "Link 2-7", url: "#link2-7" },
        { name: "Link 2-8", url: "#link2-8" },
        { name: "Link 2-9", url: "#link2-9" },
        { name: "Link 2-10", url: "#link2-10" }
    ],
    group3: [
        { name: "Link 3-1", url: "#link3-1" },
        { name: "Link 3-2", url: "#link3-2" },
        { name: "Link 3-3", url: "#link3-3" },
        { name: "Link 3-4", url: "#link3-4" },
        { name: "Link 3-5", url: "#link3-5" },
        { name: "Link 3-6", url: "#link3-6" },
        { name: "Link 3-7", url: "#link3-7" },
        { name: "Link 3-8", url: "#link3-8" },
        { name: "Link 3-9", url: "#link3-9" },
        { name: "Link 3-10", url: "#link3-10" }
    ],
    group4: [
        { name: "Link 4-1", url: "#link4-1" },
        { name: "Link 4-2", url: "#link4-2" },
        { name: "Link 4-3", url: "#link4-3" },
        { name: "Link 4-4", url: "#link4-4" },
        { name: "Link 4-5", url: "#link4-5" },
        { name: "Link 4-6", url: "#link4-6" },
        { name: "Link 4-7", url: "#link4-7" },
        { name: "Link 4-8", url: "#link4-8" },
        { name: "Link 4-9", url: "#link4-9" },
        { name: "Link 4-10", url: "#link4-10" }
    ],
    group5: [
        { name: "Link 4-1", url: "#link4-1" },
        { name: "Link 4-2", url: "#link4-2" },
        { name: "Link 4-3", url: "#link4-3" },
        { name: "Link 4-4", url: "#link4-4" },
        { name: "Link 4-5", url: "#link4-5" },
        { name: "Link 4-6", url: "#link4-6" },
        { name: "Link 4-7", url: "#link4-7" },
        { name: "Link 4-8", url: "#link4-8" },
        { name: "Link 4-9", url: "#link4-9" },
        { name: "Link 4-10", url: "#link4-10" }
    ]
};

function showLinks(group) {
    console.log(`Showing links for ${group}`);
    const linksDiv = document.getElementById('links');
    linksDiv.innerHTML = ''; // Clear any existing links

    if (linkData[group]) {
        linkData[group].forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.name;
            anchor.target = '_blank'; // Open link in a new tab
            linksDiv.appendChild(anchor);
        });
        linksDiv.style.display = 'block'; // Show the links section
        console.log(`${linkData[group].length} links loaded for ${group}`);
    } else {
        console.error(`No data found for group: ${group}`);
    }
}

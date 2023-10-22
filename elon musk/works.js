function expand(elem) {
    let sections = document.querySelectorAll(".workSection");
    sections = Array.from(sections);
    sections.forEach(el => {
        if (el != elem) el.classList.remove("showing");
    });
    elem.classList.toggle("showing");
    let coverImg = "wrkjs.jpg";

    if (elem.classList.contains("showing")) {
        switch (elem.id) {
            case "SpaceX":
                coverImg = "wrkjs.jpg";
                break;
            case "Tesla":
                coverImg = "wrkjs.webp";
                break;
            case "BoringCompany":
                coverImg = "theboring.jpg";
                break;
            case "OpenAI":
                coverImg = "openai.jpeg";
                break;
            case "x":
                coverImg = "x.png";
                break;
            default:
                break;
        }
    }
    document.querySelector("#cover").style.setProperty("background-image", `url(${coverImg})`)
}
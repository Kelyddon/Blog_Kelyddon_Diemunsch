
document.addEventListener("DOMContentLoaded", () =>{
    const largeImage = document.getElementById("largeImage")
    const caption = document.getElementById("caption")
    const gallery = document.querySelectorAll(".gallery")
    const prevButton = document.querySelector(".prev")
    const nextButton = document.querySelector(".next")
    const legend = document.getElementById("legend")
    
    legend.style.fontSize="35px"
    legend.style.color="white"
    
    caption.style.display="block"
    
    function changePrincipalImage(index) {
        const selectedPicture = gallery[index]
        largeImage.src = selectedPicture.src
        caption.textContent = selectedPicture.getAttribute("data-caption")
        
        switch (index){
            case 0:
                legend.textContent = "Autre version d'une fresque"
                break
            case 1:
                legend.textContent ="Rendu de fin de la première fresque"
                break
            case 2:
                legend.textContent ="2e fresque"
                break
            case 3:
                legend.textContent = "Travail en groupe"
                break
        } 
    }
    
    let startIndex = 0
    
    function prevImage() {
        startIndex = (startIndex - 1 + gallery.length) % gallery.length
        changePrincipalImage(startIndex);
    }

    function nextImage() {
        startIndex = (startIndex + 1) % gallery.length
        changePrincipalImage(startIndex)
    }

    gallery.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            startIndex = index
            changePrincipalImage(startIndex)

        });
    });
    
    prevButton.addEventListener("click", prevImage)
    
    nextButton.addEventListener("click", nextImage)

    changePrincipalImage(startIndex);
    
    
})
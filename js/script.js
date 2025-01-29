
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
                legend.textContent = "Lieu pour imprimer les badges"
                break
            case 1:
                legend.textContent ="Entrée du Tech Show"
                break
            case 2:
                legend.textContent ="Stands à l'accueil du Tech Show"
                break
            case 3:
                legend.textContent = "Au coeur du Tech Show"
                break
            case 4:
                legend.textContent ="Stand Abbanaree"
                break
            case 5:
                legend.textContent ="Conférence de CyberSécurité: Théatre scénarios concrets en cyber "
                break
            case 6:
                legend.textContent ="D'autres stands"
                break
            case 7:
                legend.textContent ="L'un des robots de Data Centre World traversant le Tech Show et exprimant des émotions"
                break
            case 8:
                legend.textContent ="2 membres de la société Splunk ayant remporté un prix sur la cybersécurité"
                break
            case 9:
                legend.textContent ="Photo d'une conférence avec Ange Kouadio, David Ofer, Franck Cormary"
                break
          case 10:
                legend.textContent ="Membre de l'entreprise Fujifilm"
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
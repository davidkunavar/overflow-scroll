const besedila = [
    {
        id: "featured",
        text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\n" +
            "        Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in\n" +
            "        their exact original form, accompanied by English versions from the 1914 translation by H.\n" +
            "        Rackham."
    },
    {
        id: "website",
        text: "Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "
    }, {
        id: "installations",
        text: "necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum whic"
    }, {
        id: "apps",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a "
    }, {
        id: "expirement",
        text: "will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
    }
]
const paraghaph = document.querySelector(".besedilo");
const btns = document.querySelectorAll(".btn");




btns.forEach(function (button) {
    button.addEventListener("click", function (btn) {
        const besedilaItems = besedila.filter(function (besedilaItem) {

            if(btn.currentTarget.dataset.id === besedilaItem.id){
                console.log(besedilaItem)
                return besedilaItem;
            }


        })
        displayParagraph(besedilaItems);
        console.log(besedilaItems);


    })
})


function displayParagraph(Items){
    const spremenjenoBesedilo = Items.map(function (item) {
        return `<p>${item.text}</p>`;

    })
    paraghaph.innerHTML = spremenjenoBesedilo;
}

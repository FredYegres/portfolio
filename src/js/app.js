const links = document.querySelector('.links');
const nodes = links.childNodes;

links.addEventListener('mouseover', (e) => {
        // switch (e.target) {
        //         case nodes[1]:
        //                 nodes[1].textContent = "About";
        //                 break;

        //         case nodes[3]:
        //                 nodes[3].textContent = "Projects";
        //                 break;

        //         case nodes[5]:
        //                 nodes[5].textContent = "Contact";
        //                 break;
        //         default:
        //                 break;
        // }
        nodes[1].textContent = "About";
        nodes[3].textContent = "Projects";
        nodes[5].textContent = "Contact";
})

links.addEventListener('mouseout', (e) => {
        // switch (e.target) {
        //         case nodes[1]:
        //                 nodes[1].textContent = "Hello";
        //                 break;

        //         case nodes[3]:
        //                 nodes[3].textContent = "I'm";
        //                 break;

        //         case nodes[5]:
        //                 nodes[5].textContent = "Fred";
        //                 break;
        //         default:
        //                 break;
        // }
        nodes[1].textContent = "Hello.";
        nodes[3].textContent = "I'm";
        nodes[5].textContent = "Fred";
})
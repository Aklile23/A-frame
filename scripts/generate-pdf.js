document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('#finishAndDownload');

    downloadBtn.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Load the watermark image
        const imgURL = '../textures/PDF/Watermark.png'; // Replace with your image path

        const addWatermark = (doc) => {
            doc.addImage(imgURL, 'PNG', 10, 10, 190, 277, undefined, 'FAST'); // Adjust dimensions and position as needed
        };

        // Define the columns and the rows for the AutoTable
        const columns = ["Item", "Choice", "Price"];
        const rows = [];

        // Example items (ensure these match your actual IDs)
        const items = [
            ["Wall Color", "wallChoice", "wallPrice"],
            ["Floor Material", "floorChoice", "floorPrice"],
            ["Couch", "couchChoice", "couchPrice"],
            ["Cabinet", "cabinetChoice", "cabinetPrice"],
            ["Kitchen Light", "kitchenLightChoice", "kitchenLightPrice"]
        ];

        items.forEach(item => {
            const choice = document.getElementById(item[1]).getAttribute('value');
            const price = document.getElementById(item[2]).getAttribute('value');
            rows.push([item[0], choice, price]);
        });

        // Adding watermark before adding text to ensure it's in the background
        addWatermark(doc);

        doc.autoTable(columns, rows, { startY: 20 });

        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += parseFloat(document.getElementById(item[2]).getAttribute('value').replace(/[^0-9.-]+/g, ""));
        });

        doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

        // Save the PDF
        doc.save('Customization-Summary.pdf');
    });
});

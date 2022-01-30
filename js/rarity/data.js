$(document).ready(function () {
    "290.755188",
        $("#table").DataTable({
            scroller: true,
            dom: "Bfrtip",
            sScrollX: "100%",
            scrollY: "70vh",
            paging: true,
            bPaginate: false,
            bLengthChange: false,
            deferRender: true,
            sScrollXInner: "100%",
            data: [

            ],
            columns: [
                { title: "Rank" },
                { title: "Name" },
                { title: "Background" },
                { title: "Body" },
                { title: "Headwear" },
                { title: "Eyes" },
                { title: "Mouth" },
                { title: "Clothes" },
                { title: "Chains" },
                { title: "Piercings" },
                { title: "Threat Level" },
                { title: "View on ME" },
            ],
            buttons: ["csv", "json", "print"],
            iDisplayLength: -1,
        });
});
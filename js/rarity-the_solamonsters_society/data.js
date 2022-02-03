$(document).ready(function () {
    // $('#table tfoot').appendTo('#table thead');
    $('#table tfoot th').each(function () {
        var title = $(this).text();
        if (title != "View on ME") {
            $(this).html('<input type="text" style="text-align:center; font-familiy: "Courier New"" placeholder="Search ' + title + '" />');
        } else {
            $(this).html('<a target="_blank" style="color:black" href="https://magiceden.io/marketplace/solana_monkey_business">Shop on Magic Eden<a/>');
        }
    });
    "290.755188",
        $("#table").DataTable({
            initComplete: function () {
                // Apply the search
                this.api().columns().every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that
                                .search(this.value)
                                .draw();
                        }
                    });
                });
            },
            scroller: true,
            dom: "Bfrtip",
            sScrollX: "100%",
            scrollY: "65vh",
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
            iDisplayLength: -1
        });
});
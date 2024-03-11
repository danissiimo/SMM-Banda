$(document).ready(function() {
    const searchInput = $(".query-input");
    const searchResults = $("#search-results");

    searchInput.on("input", function() {
        const query = $(this).val().trim();
        if (query.length === 0) {
            searchResults.empty();
            return;
        }

        $.ajax({
            url: "search.php", /// Нужно заменить на серверный обработчик
            method: "GET",
            data: { q: query, json: 1 },
            dataType: "json",
            success: function(data) {
                renderSearchResults(data);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching search results:", error);
            }
        });
    });

    function renderSearchResults(results) {
        searchResults.show();
        
        searchResults.empty();
        if (results.length === 0) {
            searchResults.append("<li>Нет результатов</li>");
            return;
        }

        $.each(results, function(index, result) {
            searchResults.append("<li><a href='"+result.url+"'>" + result.name + "</a></li>");
        });
    }
    
    $('body').mousedown(function(e){
        console.log("Hm");
        
        if( $(e.target).parents(".header-search").length<1 ){
            searchResults.hide();
        }
    });
});
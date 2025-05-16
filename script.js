document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("li").forEach(function(li) {
        li.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelectorAll("li").forEach(el => el.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
    });
});

let buckets = document.querySelectorAll('.bucket button');
buckets.forEach(bucket => {
    bucket.addEventListener('click', () => {
        bucket.parentElement.classList.add('d-none');
        bucket.parentElement.parentElement.children[4].classList.remove('d-none');
    })
})
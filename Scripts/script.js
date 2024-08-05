document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const smallItems = document.querySelectorAll('.small-carousel-item');
    const totalItems = items.length;
    const smallTotalItems = smallItems.length;

    const showNextItem = () => {
        items[index].classList.remove('active');
        index = (index + 1) % totalItems;
        items[index].classList.add('active');
    };

    const showNextSmallItem = () => {
        const inner = document.querySelector('.small-carousel-inner');
        inner.style.transform = `translateX(-${(index + 1) % smallTotalItems * 20}%)`;
        index = (index + 1) % smallTotalItems;
    };

    setInterval(showNextItem, 3000); // Change slide every 3 seconds
    setInterval(showNextSmallItem, 3000); // Change small slide every 3 seconds

    document.querySelector('.carousel-inner').addEventListener('touchstart', handleTouchStart, false);
    document.querySelector('.carousel-inner').addEventListener('touchmove', handleTouchMove, false);

    let xStart = null;

    function handleTouchStart(evt) {
        xStart = evt.touches[0].clientX;
    }

    function handleTouchMove(evt) {
        if (!xStart) return;

        let xDiff = xStart - evt.touches[0].clientX;

        if (xDiff > 0) {
            showNextItem();
        } else {
            items[index].classList.remove('active');
            index = (index - 1 + totalItems) % totalItems;
            items[index].classList.add('active');
        }

        xStart = null;
    }
});

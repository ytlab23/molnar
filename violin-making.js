document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const violinItems = document.querySelectorAll('.violin-item');

    violinItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = this.querySelector('.violin-image');
            const overlay = this.querySelector('.violin-overlay h3');

            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = overlay.textContent;

            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
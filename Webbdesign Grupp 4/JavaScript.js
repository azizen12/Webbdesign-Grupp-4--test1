<script>
  // 1. Hitta listan i HTML
  const list = document.getElementById('plant-list');
  
  // 2. Gör om listobjekten till en array (lista i minnet)
  const items = Array.from(list.getElementsByTagName('li'));

  // 3. Sortera arrayen baserat på texten inuti länkarna
  items.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
  });

  // 4. Töm listan och lägg tillbaka de sorterade objekten
  list.innerHTML = "";
  items.forEach(item => list.appendChild(item));
</script>
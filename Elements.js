
/**
 * Generate a flexbox for every set of tiles
 */
}
function generateAllTiles(prefix, tilesJSON) {
  for (x in TILES) {
    generateTiles(prefix, tilesJSON[x], x);
}

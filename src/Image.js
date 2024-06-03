function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  // Include .webp in the regex pattern
  const images = importAll(require.context('./components/Images', false, /\.(png|jpe?g|svg|webp)$/));
  
  export default images;
  
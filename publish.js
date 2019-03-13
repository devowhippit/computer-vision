require('gh-pages').publish('dist', (err) => {
  if (err) 
    console.log(err)
  else
    console.log('Published to GitHub Pages!');
});
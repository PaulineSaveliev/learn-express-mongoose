let Author = require('../models/author');

get_author_list = async () => {
  let authors_list = Author.find({}, 'name lifespan')
    .populate('book')
    .exec();
  return authors_list.map(function(author) {
    return author.name + " : " + author.lifespan;
  });
};

exports.show_all_authors = async () => {
  try {
    let authors = await get_author_list().exec();
    return authors;
  }
  catch(err) {
    console.log('Could not get books ' + err);
  }
}

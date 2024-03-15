let BookInstance = require('../models/bookinstance');



get_instances = async () => {
  let instances = BookInstance.find({}, 'book')
    .populate('book')
    .exec();
  return instances.map(function(inst) {
    return inst.book.title + " : " + inst.status;
  });
};

exports.show_all_books_status = async () => {
  try {
    let available = await get_instances().exec();
    available = available.filter(book => book.includes('Available'));
  }
  catch(err) {
    console.log('Could not get books ' + err);
  }
}
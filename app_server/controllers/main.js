/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Lost and found' });
};

module.exports = {
    index
};

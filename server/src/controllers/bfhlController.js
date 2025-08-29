const { isNumber, reverseAlternatingCaps } = require("../utils/helpers");

exports.processData = (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let concatAlphabets = "";

    data.forEach(item => {
      if (isNumber(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatAlphabets += item;
      } else {
        special_characters.push(item);
      }
    });

    return res.status(200).json({
      is_success: true,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: reverseAlternatingCaps(concatAlphabets)
    });

  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: "Server error",
      error: error.message
    });
  }
};

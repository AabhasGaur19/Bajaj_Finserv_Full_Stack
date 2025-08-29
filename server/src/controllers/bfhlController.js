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

    const fullName = "aabhas_sahaj";  
    const dob = "15082002";           
    const user_id = `${fullName}_${dob}`;
    const email = "aabhas.gaur2022@vitstudent.ac.in";
    const roll_number = "22BCE2018";

    return res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
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

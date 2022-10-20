//ĐOÀN SĨ NGUYÊN CK21V7K024
const ApiError = require("../api-error");

exports.profile = (req, res, next) => {
  try {
    const contact = {
      status: "success",
      data: {
        id: "CK21V7K024",
        user: "Doan Si Nguyen",
      },
    };
    return res.send(contact);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};

exports.profilePost = (req, res, next) => {
  if (!req.body?.name) {
    const contact = {
      status: "failed",
      data: "Tác vụ không được hổ trợ",
    };
    return res.send(contact);
  }
  try {
    const contact = {
      status: "success",
      data: {
        id: "CK21V7K024",
        user: "Doan Si Nguyen",
      },
    };
    return res.send(contact);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};

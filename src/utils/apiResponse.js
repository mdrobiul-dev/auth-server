const apiResponse = (res, statusCode, status, message, data = null) => {
  const response = {
    status,
    message,
  };

  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

export const successResponse = (res, message, data, statusCode = 200) => {
  return apiResponse(res, statusCode, "success", message, data);
};

export const errorResponse = (res, message, statusCode = 500) => {
  return apiResponse(res, statusCode, "error", message);
};

export default apiResponse;

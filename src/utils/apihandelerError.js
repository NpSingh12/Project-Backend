class ApiError extends Error {
  constructor(
    statusCode,
    messsage = "Somting went wrong",
    errors = [],
    statck = ""
  ) {
    super(messsage);
    this.staustCode = statusCode;
    this.data = null;
    this.message = messsage;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };

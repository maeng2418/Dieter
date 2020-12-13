// throw new Error로 던진 에러는 전부 sentry에 등록되므로 커스텀한다.
class CustomError extends Error {
  constructor(status, message, stack) {
    super(message);
    this.status = status;
    this.message = message;
    this.stack = stack;
  }
}

export default CustomError;

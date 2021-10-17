class ApiError extends Error{
    constructor(status,massage) {
        super();
    this.status = status
        this.message = massage
    }
    static badRequest(message){
        return new ApiError(404,message)
    }
    static internal(message){
        return new ApiError(500,message)
    }
    static fordbidden(message){
        return new ApiError(403,message)
    }
}
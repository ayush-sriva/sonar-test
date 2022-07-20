package com.greencommute.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class SavedJobExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(SavedJobNotFound exception){
        ErrorResponse error = new ErrorResponse();
        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exception.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return  new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}

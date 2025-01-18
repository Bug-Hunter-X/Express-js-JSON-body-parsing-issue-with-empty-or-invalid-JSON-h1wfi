# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications. The problem arises when the request body is either empty or contains invalid JSON data.  This can lead to unexpected behavior, including errors or data loss.

## Bug Description

The provided Express.js application uses `express.json()` middleware to parse incoming JSON requests. However, it fails to handle cases where the request body is empty or contains malformed JSON. This results in the request body being undefined or causing an error.

## Solution

The solution involves adding error handling to gracefully handle cases where the request body is invalid or missing.  This can be done by checking the existence and validity of `req.body` before processing it.


export default function words(request, response) {
    // request status code 
    // all request method allowed
    
    const { API_KEY } = request.body;
    if ( request.method === 'POST' && API_KEY === process.env.API_KEY ) {
        response.status(200).json({s: 1});
    } else {
        response.status(200).json({
            code: 10010, 
            message: 'Bad Request'
        });
    }
    
}
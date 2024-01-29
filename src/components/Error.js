import React from 'react'

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-4 bg-white shadow-lg rounded-md">
                <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!</h2>
                <p className="text-gray-700 mb-4">
                    Something went wrong. The page you are looking for might be temporarily unavailable or it may not exist.
                </p>
                <p className="text-gray-700 mb-8">Please try again later.</p>
            </div>
        </div>
    )
}

export default Error

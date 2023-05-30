let demos = [
    {
        name: "Sharpe Ratio",
        type: "general",
        description: "Calculate the sharpe ratio of the portfolio",
        url:"https://www.youtube.com/embed/pqB4ZmXYtVs"
    },
    {
        name: "_transpose(<a>)",
        type: "function",
        description: "transpose a matrix",
        url: "https://www.youtube.com/embed/FZ0dUTdSyi4"
    },
    {
        name: "_mmult(<a>, <b>)",
        type: "function",
        description: "matrix multiply two matrix",
        url: "https://www.youtube.com/embed/LX3H7FX80pU"
    },
    {
        name: "_avg(<a>)",
        type: "function",
        description: "find the average of elements in a matrix",
        url: "https://www.youtube.com/embed/FZ0dUTdSyi4"
    },
    {
        name: "_mavg(<a>)",
        type: "function",
        description: "find the average of elements in a matrix but return a matrix of those values with same shape as the original matrix",
        url: "https://www.youtube.com/embed/jOhqLXi6KNI"
    },
]

demos = demos.map((demo, index) => {
    return {...demo, id: `${demo.name.replace(/[^a-zA-Z0-9]/g, "")}-${index}`}
})

export default demos;
let demos = [
    {
        name: "Calculating the Sharpe Ratio",
        type: "general",
        description: "Calculate the sharpe ratio of the portfolio",
        url: ""
    },
    {
        name: "_transpose(<matrix>)",
        type: "function",
        description: "transpose a matrix",
        url: ""
    },
    {
        name: "_mmult(<matrix>, <matrix>)",
        type: "function",
        description: "matrix multiply two matrix",
        url: ""
    },
    {
        name: "_avg(<matrix>)",
        type: "function",
        description: "find the average of elements in a matrix",
        url: ""
    },
    {
        name: "_mavg(<matrix>)",
        type: "function",
        description: "find the average of elements in a matrix but return a matrix of those values with same shape as the original matrix",
        url: ""
    },
]

demos = demos.map((demo, index) => {
    return {...demo, id: `${demo.name.replace(/[^a-zA-Z0-9]/g, "")}-${index}`}
})

export default demos;
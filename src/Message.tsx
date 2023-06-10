// .ts == plain TypeScript
// .tsx == react components

// PascalCasing: capitalizing every word
function Message() {
    const name = 'Harry';
    // JSX: JavaScript XML
    if (name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello, Anonymous!</h1>
}

export default Message;
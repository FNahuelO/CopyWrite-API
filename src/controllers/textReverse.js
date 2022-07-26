const textReverse = (req, res) => {
    const { text } = req.query

    if(!/[A-Za-z]/.test(text)){
        return res.status(400).json({
            text: null,
            success: false,
            error: "no text"
        })
    } else {
    const lowText = text.toLowerCase().replace(/[\W_]/g, '');
    const reverseText = lowText.split('').reverse().join('');
        if(lowText === reverseText){
            return res.json({
                text: reverseText,
                success: true,
                palindrome: true
            })
        }
        return res.json({
            text: reverseText,
            success: true,
            palindrome: false
        })
    }
}
module.exports = {
    textReverse
};
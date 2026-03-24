export default async function handler(req, res) {
    const ticker = req.query.ticker;

    try {
        const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=demo`;
        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "API failed" });
    }
}

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const places = {
    'grand canyon': {
        'state': 'Arizona',
        'city': 'Grand Canyon Village',
        'reason': 'My favorite trail is the South Kaibab Trail. It is best done in late afternoon, in the last few hours of daylight. You will be rewarded with a spectacular view that is lit from behind, creating a glow on everything you see. Browns turn red and orange. Greens seem lit from within. You can hike partway down to Ooh Aah Point, which is just far enough, but not so far that the older and younger members of your crew cannot make the trek. It may be quite windy on this trail. Be sure to carry lots of water, not only for you, but also for the occasional hapless tourist who did not realize they needed to drink so much water in Arizona.', 
        'time of year': 'Late Spring'
    },
    'cannon beach': {
        'state': 'Oregon', 
        'city': 'Cannon Beach', 
        'reason': 'There is just something about this town that makes me feel so dreamy. Maybe it is the sweet shingled cottages surrounded by hydrangeas of every possible color. Maybe it is the town itself, quiet and small, yet confidently upscale. Or perhaps it is the near constant cover of clouds, with a firm breeze that prompts one to bundle up a bit, even in summer. If you, like me, are up for just about anything, you will wake up extra early and be at the beach, by the big rock - you will know the one. You will brave the early morning winds, and wade out to the tide pools. It is truly a different world, with citizens of the sky and sea interacting as if you are not even there. I watched as a seagull captured a large and feisty crab, turning him over after quite a struggle, and ruthlessly stabbed his beak into the soft belly, taking the meat as his breakfast. I wandered past rocks jutting up from the soft sand, covered in bright green sea anemones and purple starfish. Birds fly overhead, protecting their nests in the large rock from other predator birds.',
        'time of year': 'Summer'
    }, 
    'unknown': {
        'state': 'I have not been here yet!',
        'city': 'I have not been here yet!', 
        'reason': 'unknown',
        'time of year': 'unknown'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const placeName = req.params.name.toLowerCase()
    if (places[placeName]) {
        res.json(places[placeName])
    } else {
        res.json(places['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
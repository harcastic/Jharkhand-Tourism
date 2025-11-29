import dotenv from 'dotenv';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);

app.set('layout', 'template'); 

app.use(express.static(path.join(__dirname, 'public')));
const port = 8080;

//home page
app.get('/', (req, res) => {
    res.render('homepage/home', { title: 'JharKhand',   });  
});

//About tourism
app.get('/about/our-story', (req, res) => {
    res.render('aboutTourism/ourStory', { title: 'Our Story' });
});
app.get('/about/mission-vision', (req, res) => {
    res.render('aboutTourism/missionVision', { title: 'Mission & Vision' });
});
app.get('/about/why-choose-us', (req, res) => {
    res.render('aboutTourism/whyChooseUs', { title: 'Why Choose Us' });
});
app.get('/about/credits', (req, res) => {
    res.render('aboutTourism/credits', { title: 'Credit' });
});
app.get('/about/testimonials', (req, res) => {
    res.render('aboutTourism/testimonials', { title: 'Testimonials' });
});


//plan Your Trip
app.get('/plantrip/trip-Planner', (req, res) => {
    res.render('plantrip/tripPlanner', { title: 'Trip Planner' });
});
app.get('/plantrip/itinerary', (req, res) => {
    res.render('plantrip/itinerary', { title: 'Your Itinerary' });
});
app.get('/plantrip/weather', (req, res) => {
    res.render('plantrip/weather', { title: 'Trip Planner' });
});

//Destinations
app.get('/destinations/mountains', (req, res) => {
    res.render('destinations/mountains', { title: 'Mountains travel' });
});
app.get('/destinations/wildlife-safaries', (req, res) => {
    res.render('destinations/wildlife', { title: 'Wildlife-Safaries' });
});
app.get('/destinations/popular-destinations', (req, res) => {
    res.render('destinations/popular', { title: 'popular-destinations' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});